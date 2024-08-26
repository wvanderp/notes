import fs from 'fs';
import Path from 'path';
import OpenAI from "openai";
import Handlebars from "handlebars";
import dotenv from 'dotenv';
import cleanString from '../utils/clearString';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const currentPath = Path.join(__dirname, '../../');

async function newTemplate() {

  const goals = fs.readFileSync(Path.join(currentPath, "Goals.md"), 'utf8');

  const todaysDate = new Date().toISOString().split('T')[0];
  const todaysPath = Path.join(currentPath, `Daily/${todaysDate}.md`);
  const yesterdaysDate = new Date(new Date(todaysDate).getTime() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const yesterdaysPath = Path.join(currentPath, `Daily/${yesterdaysDate}.md`);

  if (!fs.existsSync(yesterdaysPath)) {
    console.log(`No entry found for ${yesterdaysDate}.`);
    return;
  }
  const yesterdaysEntry = fs.readFileSync(yesterdaysPath, 'utf8');

  const summary = await generateSummary(yesterdaysEntry);
  const TherapistQuestions = await generateTherapistTemplate(summary, goals);
  const GeneralQuestions = await generateGeneralTemplate(yesterdaysEntry, goals);

  const newTemplate = fillOutTemplate(summary, TherapistQuestions, GeneralQuestions, todaysDate);
  fs.writeFileSync(todaysPath, newTemplate);
}

(async () => {
  await newTemplate();
})()
  .catch((error) => console.error(error));


async function generateSummary(yesterdaysEntry: string) {
  // we need to cut out yesterday's summary because the ai will confuse the two days
  const questions = yesterdaysEntry.split('## What happened today?')[1];

  const systemPrompt = `
You summarize yesterdays journal entries to one paragraph.
This summary should be short and to the point. 
But it should contain all the important information.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        "role": "system",
        "content": [
          {
            "type": "text",
            "text": systemPrompt
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": questions
          }
        ]
      },
    ],
    temperature: 1,
    max_tokens: 450,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const summary = response?.choices[0]?.message?.content ?? '';
  return summary;
}

async function generateTherapistTemplate(summary: string, goals: string) {
  const systemPrompt = `
You are a Journal template generator and a therapist.
You will generate journal template that helps me reflect back on the day.
The template will Be fill out at the end of the day.

The template should reference to the previous day's entry summary and use the goals as a guide.
The questions should be designed to help me reach my goals.
Don't include the date or a heading in the template. This will be added later.

The exercise will contain five questions.

Generate a daily journal template based on the summary of the previous day's journal entry and the provided goals.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        "role": "system",
        "content": [
          {
            "type": "text",
            "text": systemPrompt
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": `**Goals**\n${goals}`
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": `**Summary of yesterday's entry**\n${summary}`
          }
        ]
      }
    ],
    temperature: 1,
    max_tokens: 400,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const AITemplate = response?.choices[0]?.message?.content ?? '';

  return cleanString(AITemplate);
}


async function generateGeneralTemplate(yesterdaysEntry: string, goals: string) {
  // bot to extract as much additional information as possible from the summary
  const systemPrompt = `
  You are given yesterday's journal entry. Your goal is to generate three pointed questions to extract more information from the user.  
  You get three questions to clear up any confusion and to get more information.

  The questions should reference the summary and be designed to make the user write more in-depth about the topic.
`;

  // we need to cut out yesterday's summary because the ai will confuse the two days
  const questions = yesterdaysEntry.split('## What happened today?')[1];

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        "role": "system",
        "content": [
          {
            "type": "text",
            "text": systemPrompt
          }
        ]
      },
      {
        "role": "user",
        "content": [
          {
            "type": "text",
            "text": `**Yesterday's entry**\n${questions}`
          }
        ]
      }
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const AITemplate = response?.choices[0]?.message?.content ?? '';

  return cleanString(AITemplate);

}

// ----------------------------

function fillOutTemplate(summary: string, TherapistQuestions: string, GeneralQuestions: string, todaysDate: string){
    const templatePath = Path.join(currentPath, 'Template/Daily/DailyTemplate.md');
    const templateContent = fs.readFileSync(templatePath, 'utf8');
  
    const template = Handlebars.compile(templateContent);

    // the name of todays date
    const dayOfWeek = new Date(todaysDate).toLocaleDateString('en-US', { weekday: 'long' });
  
    const context = {
      TodaysDate: todaysDate,
      dayOfWeek: dayOfWeek,
      Summary: cleanString(summary),
      TherapistQuestions: cleanString(TherapistQuestions),
      GeneralQuestions: cleanString(GeneralQuestions),

      // I need to shower on Sundays, Tuesdays, and Thursdays
      isShowerDay: dayOfWeek === 'Sunday' || dayOfWeek === 'Tuesday' || dayOfWeek === 'Thursday',
      isWorkingDay: dayOfWeek !== 'Saturday' && dayOfWeek !== 'Sunday',
    };
  
  
    return cleanString(template(context));
}

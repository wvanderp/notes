import fs from 'fs';
import Path from 'path';
import OpenAI from "openai";
import Handlebars from "handlebars";
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const currentPath = Path.join(__dirname, '../');

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
  const GeneralQuestions = await generateGeneralTemplate(summary, goals);

  const newTemplate = fillOutTemplate(summary, TherapistQuestions, GeneralQuestions);
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

/**
 * cleans the string from '&#x27;'
 * @param input the string to clean
 * @returns the cleaned string
 */
function cleanString(input: string): string {
  return input.replace(/&#(\d+);|&#x([0-9A-Fa-f]+);|&(\w+);/g, (match, dec, hex, named) => {
    if (dec) {
        return String.fromCharCode(parseInt(dec, 10));
    } else if (hex) {
        return String.fromCharCode(parseInt(hex, 16));
    } else if (named) {
        const entities = {
            amp: '&',
            lt: '<',
            gt: '>',
            quot: '"',
            apos: '\'',
            // Add more named entities as needed
        };
        // @ts-expect-error
        return entities[named] || match;
    }
    return match;
});
}

async function generateTherapistTemplate(summary: string, goals: string) {
  const systemPrompt = `
You are a Journal template generator and a therapist.
I want a journal template that helps me reflect on the day.
I will be filling it out in the evening.

Generate a daily journal template based on some goals and the summary of the previous day's journal entry.
Don't include the date or a heading in the template. I will add that myself.

The template should reference to the previous day's entry summary and use the goals as a guide.
The questions should be designed to help me reach my goals.

The exercise will contain five questions.`;

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
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const AITemplate = response?.choices[0]?.message?.content ?? '';

  return cleanString(AITemplate);
}


async function generateGeneralTemplate(summary: string, goals: string) {
  // bot to extract as much additional information as possible from the summary
  const systemPrompt = `
  You are writing questions to extract more information from the summary.
  You get three questions to clear up any confusion and to get more information.

  the questions should reference the summary and be designed to make the user write more about the summary.
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
            "text": `**Summary of yesterday's entry**\n${summary}`
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

function fillOutTemplate(summary: string, TherapistQuestions: string, GeneralQuestions: string){
    const templatePath = Path.join(currentPath, 'Template/template.md');
    const templateContent = fs.readFileSync(templatePath, 'utf8');
  
    const template = Handlebars.compile(templateContent);
  
    const context = {
      TodaysDate: new Date().toISOString().split('T')[0],
      Summary: cleanString(summary),
      TherapistQuestions: cleanString(TherapistQuestions),
      GeneralQuestions: cleanString(GeneralQuestions),
    };
  
  
    return cleanString(template(context));
}

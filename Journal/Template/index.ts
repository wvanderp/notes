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
  const yesterdaysDate = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
  const yesterdaysPath = Path.join(currentPath, `Daily/${yesterdaysDate}.md`);

  if (!fs.existsSync(yesterdaysPath)) {
    console.log(`No entry found for ${yesterdaysDate}.`);
    return;
  }
  const yesterdaysEntry = fs.readFileSync(yesterdaysPath, 'utf8');

  const summary = await generateSummary(yesterdaysEntry);
  const newTemplate = await generateTemplate(summary, goals);
  fs.writeFileSync(todaysPath, newTemplate);
}

(async () => {
  await newTemplate();
})()
  .catch((error) => console.error(error));


async function generateSummary(yesterdaysEntry: string) {
  const systemPrompt = `
You summarize yesterdays journal entries to one paragraph.
This summary should be short and to the point. 
But it should contain all the important information.
It ends with action items for the next day.`;

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
            "text": yesterdaysEntry
          }
        ]
      },
    ],
    temperature: 1,
    max_tokens: 256,
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
  return input.replace(/&#x27;/g, "'");
}

async function generateTemplate(summary: string, goals: string) {
  const systemPrompt = `
You are a Journal template generator and a therapist.
I want a journal template that helps me reflect back on the day.
I will be filling it out in the evening.

Generate a daily journal template based on some goals and the summary of the previous day's journal entry.
Don't include the date or a heading in the template, I will add that myself.

The template should relate to the goals and the previous day's entry summary.
The questions should be designed to help me reach my goals.

The exercise should take at most 5 minutes.`;

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


  // read in the handlebars template
  const templatePath = Path.join(currentPath, 'Template/template.md');
  const templateContent = fs.readFileSync(templatePath, 'utf8');

  const template = Handlebars.compile(templateContent);

  const context = {
    TodaysDate: new Date().toISOString().split('T')[0],
    Summary: cleanString(summary),
    Template: cleanString(AITemplate),
  };


  return cleanString(template(context));
}

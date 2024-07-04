import fs from 'fs';
import Path from 'path';
import OpenAI from "openai";
import Handlebars from "handlebars";
import dotenv from 'dotenv';
import cleanString from '../utils/clearString';
import getWeekNumber from '../utils/getWeekNumber';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const currentPath = Path.join(__dirname, '../../');
const dailyPath = Path.join(currentPath, 'Daily');

/**
 * This function get the previous 7 days of journal entries
 * 
 * these entries dont have to be contiguous
 * 
 * all files are named with the date in the format YYYY-MM-DD.md
 */
function getPreviousEntries() {
  const entries = fs.readdirSync(dailyPath);
  const previousEntries = entries.map((entry) => {
    const entryDate = entry.split('.')[0];
    return new Date(entryDate);
  })
  .filter((entryDate) => {
    const currentDate = new Date();
    const diff = currentDate.getTime() - entryDate.getTime();
    return diff < 7 * 24 * 60 * 60 * 1000;
  })
  .slice(0, 7)
  .map((entryDate) => {
    const entryPath = Path.join(dailyPath, `${entryDate.toISOString().split('T')[0]}.md`);
    return fs.readFileSync(entryPath, 'utf8');
  });

  return previousEntries;
}

/**
 * this function aks chatgpt to generate a summary of the previous 7 days
 */
async function generateSummary(previousEntries: string[]) {
  const systemPrompt = `
You summarize the previous 7 days of journal entries.
Dont use bullet points or lists, write in full sentences.

Finnish off with a overarching theme or lesson you learned from the week.
`;

const apiPrevEntries = previousEntries.map((entry) => {
  return {
    "role": "user",
    "content": [
      {
        "type": "text",
        "text": entry
      }
    ]
  }
});


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
    ...apiPrevEntries
  ],
  temperature: 1,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const summary = response?.choices[0]?.message?.content ?? '';
return summary;
}

/**
 * this function generates a therapists opinion
 */
async function generateTherapistOpinion(previousEntries: string[]) {
  const systemPrompt = `
Your therapist gives you their opinion on the previous 7 days of journal entries.

The therapist should be empathetic and understanding.
This should not be a summary, but an opinion on the users mental state and well-being.
`;

const apiPrevEntries = previousEntries.map((entry) => {
  return {
    "role": "user",
    "content": [
      {
        "type": "text",
        "text": entry
      }
    ]
  }
});

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
    ...apiPrevEntries
  ],
  temperature: 1,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const opinion = response?.choices[0]?.message?.content ?? '';
return opinion;
}

/**
 * this function generates 10 pointed questions
 */
async function generateQuestions(summary: string, therapistOpinion: string) {
  const systemPrompt = `
You are given a summary of the previous 7 days of journal entries and a therapists opinion

Your goal is to generate ten pointed questions to extract more information from the user.
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
          "text": summary
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": therapistOpinion
        }
      ]
    }
  ],
  temperature: 1,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const Questions = response?.choices[0]?.message?.content ?? '';

return cleanString(Questions);
}

/**
 * this function generates a template for the week
 */
async function generateTemplate(summary: string, therapistOpinion: string, questions: string) {
  const templatePath = Path.join(currentPath, 'Template/Weekly/WeeklyTemplate.md');
  const templateContent = fs.readFileSync(templatePath, 'utf8');

  const template = Handlebars.compile(templateContent);

  const weekNumber = getWeekNumber(new Date());
  const year = new Date().getFullYear();
  
  const context = {
    WeekNumber: weekNumber,
    Year: year,
    Summary: cleanString(summary),
    TherapistsOpinion: cleanString(therapistOpinion),
    Questions: cleanString(questions),
  };


  return cleanString(template(context));
}

(async () => {
  const previousEntries = getPreviousEntries();
  
  // create a summary of the previous 7 days
  const summary = await generateSummary(previousEntries);

  // generate a therapists opinion
  const therapistOpinion = await generateTherapistOpinion(previousEntries);


  // generate 10 pointed questions
  const questions = await generateQuestions(summary, therapistOpinion);


  // generate a template for the week
  const template = await generateTemplate(summary, therapistOpinion, questions);

  const weekNumber = getWeekNumber(new Date());
  const year = new Date().getFullYear();

  const weekPath = Path.join(currentPath, `Weekly/${year}-${weekNumber}.md`);
  fs.writeFileSync(weekPath, template);
})()
  .catch((error) => console.error(error));

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

const theNotePath = Path.join(currentPath, "TheNote.md");

const todaysDate = new Date().toISOString().split('T')[0];
const today = Path.join(currentPath, `Daily/${todaysDate}.md`);
const yesterday = Path.join(currentPath, `Daily/2024-08-25.md`);


async function newEntry(notePath: string) {
  const systemPrompt = `
    You are creating a dossier from notes written by a client.
    Keep rewriting the dossier to include the new information from the notes.
    Keep memorable quotes and important information.
    Build up a detailed picture of the client.
    Discard irrelevant information.
    The notes can be as long as you need them to be.`;

    const theNote = fs.readFileSync(theNotePath, 'utf8');
    const todaysEntry = fs.readFileSync(notePath, 'utf8');
  
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
          "role": "assistant",
          "content": [
            {
              "type": "text",
              "text": `The Dossier: ${theNote}`
            }
          ]
        },
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": `Todays Notes: ${todaysEntry}`	
            }
          ]
        }
      ],
      temperature: 1,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  
    const summary = response?.choices[0]?.message?.content ?? '';

    fs.writeFileSync(theNotePath, summary);
}

(async () => {
  await newEntry(yesterday);
  // make a copy of the note for the next day
  fs.copyFileSync(theNotePath, theNotePath.replace('.md', '-copy.md'));
  await newEntry(today);
})()
  .catch((error) => console.error(error));


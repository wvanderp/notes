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


async function newEntry(notePath: string) {
  const systemPrompt = `
    You are creating a dossier from notes written by a client.
    The goal is to create a document that thoroughly describes the client.
    Keep rewriting the dossier to include the new information from the notes.
    Keep memorable quotes and important information.
    Dont copy or summarize the notes, but rewrite the information already preset in the note to include the new information.
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
              "text": `dossier aka The Note:\n${theNote}`
            }
          ]
        },
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": `Todays Notes:\n${todaysEntry}`	
            }
          ]
        }
      ],
      temperature: 1,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
  
    const summary = response?.choices[0]?.message?.content ?? '';

    fs.writeFileSync(theNotePath, summary);
}

(async () => {
  await newEntry(today);
})()
  .catch((error) => console.error(error));


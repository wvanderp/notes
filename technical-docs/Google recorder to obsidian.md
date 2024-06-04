I like to record larger pieces of text with google recorder. but this text needs to be transcribed in to real text.

Google recorder already does this but its a bit shit so in this article I will use Google Collab and OpenAI Whisper to fix this.

first download the `m4a` file from google recorder

[Open this Google Collab](https://colab.research.google.com/drive/1WLYoBvA3YNKQ0X2lC9udUOmjK7rZgAwr?usp=sharing) 
follow the steps in the Collab to install whisper

you can change some setting in the Collab command. I would recommend changing `--model medium` with `--model large`

After the Whisper cell has ran and you have refreshed the side bar, all the files are available in the side bar this includes subtitle files and raw text files.

these files do need post-processing in the form of grammar check and the addition of paragraphs.

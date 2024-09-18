---
tags:
  - Guide
---


I like to record larger pieces of text with Google Recorder. But this text needs to be transcribed into actual text.

Google Recorder already does this, but it's a bit shit, so in this article, I will use Google Collab and OpenAI Whisper to fix this.

First, download the `m4a` file from Google Recorder.

[Open this Google Collab](https://colab.research.google.com/drive/1WLYoBvA3YNKQ0X2lC9udUOmjK7rZgAwr?usp=sharing)
Follow the steps in the Google Collab to install OpenAI Whisper.

You can change some settings in the Collab command. I would recommend changing `--model medium` with `--model large`

After the Whisper cell has run and you have refreshed the sidebar, all the files, including subtitle and raw text files, are available on the sidebar.

These files do need post-processing in the form of grammar checks and the addition of paragraphs.

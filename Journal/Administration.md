In this document, I will work out my ideas for my new daily journaling system. I will leverage the power of AI to conveniently generate a template for my daily journal, empowering me to focus on my thoughts and reflections. 

In this document, we will write steps, templates, and system prompts.

## steps

1. find and read the previous day's entry
2. write a summary of the previous day's entry
3. generate a new template for the current day based on the goals and the summary of the previous day
4. create a new file for the current day

## workout steps

### Find and read the previous day's entry

Just some node.js code to read the previous day's entry.

If there was no entry for the previous day, we should go back until we find an entry.
I should also insert a snarky note into the AI systems that remind me to write an entry.

### Write a summary of the previous day's entry

When we have the previous day's entry, we should have ChatGPT generate a summary of the entry.

System prompt:

```ChatGPT
You summarize journal entries. 

This summary should be short and to the point. 
But it should contain all the important information.
It ends with a small list of action items for the next day.
```

```ChatGPT
{{previous_day_entry}}

{{snarky comment about not writing an entry yesterday}}
```

### generate a new template for the current day based on the goals and the summary of the previous day

Then, we should generate a new template for the current day. This template will be based on the goals I've set and the summary of the previous day's entry. The AI system will use these inputs to create a personalized template that aligns with my objectives.

System prompt:

```ChatGPT
You are a Journal template generator and a therapist.
I want a journal template that helps me reflect back on the day.
I will be filling it out in the evening.

Generate a daily journal template based on some goals and the summary of the previous day's journal entry.

The template should relate to the goals and the previous day's entry summary.
The questions should be designed to help me reach my goals.

The exercise should take at most 5 minutes.
```

First message:

```ChatGPT
**Goals**
{{goals}}

**Summary of yesterday's entry**
{{summary}}
```

```Template
{{summary}}

{{template}}
```

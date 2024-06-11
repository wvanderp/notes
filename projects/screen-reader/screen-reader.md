# Screen reader

Many a time ive had the situation where I wanted  to extract text from a video or livestream. But i never found a good solution for this. So this is me planting the seed for a project that would solve this problem.

my solution consists of two parts:

- A web app where you can define the capture areas and the text extraction method and other extraction settings.
- A cli tool that takes a video file and the settings file and extracts the data.

The following extraction methods are possible:

- OCR
  - Both on the entire screen and on specific areas
- Pattern matching
- Color sampling
- Scene change detection
  - For example when a stream has an ad break or to detect in what phase the game is in
- Audio analysis
  - For example to detect when a player is talking
  - Or looking for audio cues
- Determining the average color of a specific area
  - For example to see where the most action is happening by parsing the minimap
- Measuring the "length" of a specific color
  - For example to extract the health bar of a player

The web app should have a preview of the video and the capture areas. It should also have a way to define the extraction settings.
The web app then exports the settings to json, which can be used by the cli tool.

The cli tool should be able to extract the text from the video and output it in a machine-readable format, such as json.

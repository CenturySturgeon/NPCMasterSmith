# NPC Master Smith
A Go Fiber Dungeons &amp; Dragons non-playable character creator using LLMs with GoLlama.

## Docs

Be sure to set the env variables necessary for this project to run:

```Bash
# Port on which the application will be running
export PORT=YOUR_PORT
# Absolute or relative path to your model file
export MODELPATH=MODEL_FILE_PATH
# Your PostgreSQL password for persistency
export POSTGRESPW=YOUR_PSQL_PASSWORD
# Variable that sets mocking LLM responses, false by default
export MOCK=TRUE_OR_FALSE
```

To run the app use ```npm run dev``` from the root folder.

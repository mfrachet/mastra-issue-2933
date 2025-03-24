import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";

export const imageAgent = new Agent({
  name: "Image Agent",
  instructions: `You are a helpful image assistant that provides accurate image information.
 
Your primary function is to help users identify what the picture is about.
`,
  model: openai("gpt-4o-mini"),
});

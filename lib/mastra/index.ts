import { Mastra } from "@mastra/core";
import { imageAgent } from "./agents/image";

export const mastra = new Mastra({
  agents: {
    imageAgent,
  },
});

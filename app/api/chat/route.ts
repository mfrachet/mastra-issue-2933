import { mastra } from "../../../lib/mastra";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const myAgent = mastra.getAgent("imageAgent");
  const stream = await myAgent.stream(messages);

  return stream.toDataStreamResponse();
}

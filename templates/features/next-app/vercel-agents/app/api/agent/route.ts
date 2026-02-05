import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const runtime = "edge";

export async function POST(request: Request) {
  const body = (await request.json()) as { messages?: UIMessage[] };

  const result = streamText({
    model: openai("gpt-4.1-mini"),
    system: "You are a concise senior engineer focused on practical implementation details.",
    messages: await convertToModelMessages(body.messages ?? [])
  });

  return result.toUIMessageStreamResponse();
}

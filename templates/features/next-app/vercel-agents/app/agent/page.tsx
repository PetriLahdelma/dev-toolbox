"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function AgentPage() {
  const [prompt, setPrompt] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/agent"
    })
  });

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-16">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Vercel agent starter</h1>
        <p className="text-sm text-muted-foreground">
          Scaffolded by `--vercel-agents`. Set `OPENAI_API_KEY` and deploy on Vercel to test streaming.
        </p>
      </header>

      <section className="flex min-h-72 flex-col gap-3 rounded-xl border border-border bg-card p-4">
        {messages.length === 0 ? (
          <p className="text-sm text-muted-foreground">No messages yet.</p>
        ) : (
          messages.map((message) => {
            const text = message.parts
              .filter((part) => part.type === "text")
              .map((part) => part.text)
              .join("");

            return (
              <div key={message.id} className="rounded-md border border-border p-3 text-sm">
                <strong className="capitalize">{message.role}</strong>
                <p className="mt-1 whitespace-pre-wrap">{text || "(non-text response part)"}</p>
              </div>
            );
          })
        )}
      </section>

      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={async (event) => {
          event.preventDefault();
          const value = prompt.trim();
          if (!value) {
            return;
          }
          setPrompt("");
          await sendMessage({ text: value });
        }}
      >
        <input
          className="h-10 flex-1 rounded-md border border-border bg-background px-3 text-sm"
          onChange={(event) => setPrompt(event.target.value)}
          placeholder="Ask the agent"
          value={prompt}
        />
        <Button disabled={status === "streaming" || prompt.trim().length === 0} type="submit">
          {status === "streaming" ? "Thinking..." : "Send"}
        </Button>
      </form>
    </main>
  );
}

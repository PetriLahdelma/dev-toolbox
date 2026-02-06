import { readFile } from "node:fs/promises";
import { join } from "node:path";

import Link from "next/link";
import { BookText, ExternalLink } from "lucide-react";
import { codeToHtml } from "shiki";

import { Button } from "@/components/ui/button";

const DOC_SOURCE_PATH = join(process.cwd(), "content/docs/getting-started.mdx");

async function renderHighlightedDoc() {
  let source = "# content/docs/getting-started.mdx\n\nScaffolded docs source missing.";

  try {
    source = await readFile(DOC_SOURCE_PATH, "utf8");
  } catch {
    // Keep fallback content.
  }

  return codeToHtml(source, {
    lang: "markdown",
    theme: "github-dark"
  });
}

export default async function DocsPage() {
  const highlighted = await renderHighlightedDoc();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <section className="space-y-4 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <BookText className="h-5 w-5 text-primary" aria-hidden="true" />
          <h1 className="text-2xl font-semibold tracking-tight">Docs starter (Fumadocs + Shiki)</h1>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Scaffolded by <code>--fumadocs</code>. This route previews docs source with Shiki highlighting and installs
          Fumadocs packages for full docs routing setup.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline">
            <Link href="https://fumadocs.dev/docs/ui/installation" target="_blank" rel="noreferrer">
              Fumadocs installation guide
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-medium">Highlighted source: `content/docs/getting-started.mdx`</h2>
        <div className="overflow-x-auto rounded-xl border border-border bg-card p-4">
          <div
            className="shiki-preview text-sm"
            dangerouslySetInnerHTML={{
              __html: highlighted
            }}
          />
        </div>
      </section>
    </main>
  );
}

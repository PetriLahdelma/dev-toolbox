import Link from "next/link";
import { Database, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function SupabasePage() {
  const client = await createSupabaseServerClient();
  const configured = Boolean(client);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <section className="space-y-4 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <Database className="h-5 w-5 text-primary" aria-hidden="true" />
          <h1 className="text-2xl font-semibold tracking-tight">Supabase starter</h1>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Scaffolded by <code>--supabase</code>. Server and browser client helpers are included in{" "}
          <code>lib/supabase/</code>.
        </p>
        <div className="rounded-lg border border-border bg-background p-4 text-sm">
          <p>
            <strong>Env status:</strong>{" "}
            {configured ? "configured" : "missing NEXT_PUBLIC_SUPABASE_URL/NEXT_PUBLIC_SUPABASE_ANON_KEY"}
          </p>
          <p className="mt-2 text-muted-foreground">
            Check <code>/api/supabase/health</code> for a JSON readiness probe.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/api/supabase/health">Open health endpoint</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs" target="_blank" rel="noreferrer">
              Supabase + Next.js quickstart
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

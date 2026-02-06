import Link from "next/link";
import { CreditCard, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BillingPage() {
  const hasSecretKey = Boolean(process.env.STRIPE_SECRET_KEY);
  const hasPublishableKey = Boolean(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-12">
      <section className="space-y-4 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-3">
          <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
          <h1 className="text-2xl font-semibold tracking-tight">Stripe billing starter</h1>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Scaffolded by <code>--stripe</code>. This page calls a starter checkout session route for fast local
          validation.
        </p>
        <div className="rounded-lg border border-border bg-background p-4 text-sm">
          <p>
            <strong>Env status:</strong>{" "}
            {hasSecretKey && hasPublishableKey ? "configured" : "missing STRIPE keys in .env.example/.env.local"}
          </p>
          <p className="mt-2 text-muted-foreground">
            Required: <code>STRIPE_SECRET_KEY</code>, <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code>,{" "}
            <code>NEXT_PUBLIC_APP_URL</code>.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <form action="/api/stripe/checkout" method="post">
            <Button type="submit">Open checkout</Button>
          </form>
          <Button asChild variant="outline">
            <Link href="https://docs.stripe.com/checkout/quickstart" target="_blank" rel="noreferrer">
              Stripe Checkout docs
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

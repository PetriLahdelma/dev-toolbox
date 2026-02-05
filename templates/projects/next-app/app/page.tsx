import Link from "next/link";
import { ArrowUpRight, Layers, Rocket, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Shipped Defaults",
    description: "Type-safe baseline with practical scripts and CI-ready conventions.",
    icon: Rocket
  },
  {
    title: "Component Foundation",
    description: "Tailwind + shadcn-style patterns on top of Radix primitives.",
    icon: Layers
  },
  {
    title: "Maintainer Hygiene",
    description: "Profiles, release workflow, and baseline docs are scaffolded from day one.",
    icon: ShieldCheck
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_45%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:py-24">
        <section className="space-y-6">
          <span className="inline-flex w-fit items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            dev-toolbox next-app profile
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Build product-grade web apps with fewer setup loops.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
            This scaffold includes a practical UI foundation, Vercel-ready defaults, and maintainer-grade
            repository standards.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://github.com/PetriLahdelma/dev-toolbox" target="_blank" rel="noreferrer">
                Open dev-toolbox
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://ui.shadcn.com/docs" target="_blank" rel="noreferrer">
                shadcn docs
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <pillar.icon className="mb-4 h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="text-lg font-medium">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

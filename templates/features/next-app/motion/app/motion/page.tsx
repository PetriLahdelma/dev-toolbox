import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { FadeUp } from "@/components/motion/fade-up";
import { Button } from "@/components/ui/button";

export default function MotionShowcasePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-8 px-6 py-16">
      <FadeUp>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h1 className="text-4xl font-semibold tracking-tight">Motion starter</h1>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="max-w-2xl text-muted-foreground">
          This page is scaffolded by `--motion`. Use it as a starting point for staggered hero sections,
          transitions, and onboarding flows.
        </p>
      </FadeUp>
    </main>
  );
}

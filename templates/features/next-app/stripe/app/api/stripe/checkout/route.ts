import { NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const DEFAULT_APP_URL = "http://localhost:3000";

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? DEFAULT_APP_URL;

  if (!secretKey) {
    return NextResponse.json(
      {
        error: "Missing STRIPE_SECRET_KEY.",
        nextSteps: ["Set STRIPE_SECRET_KEY in .env.local", "Restart the dev server and try again."]
      },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: `${appUrl}/billing?status=success`,
    cancel_url: `${appUrl}/billing?status=cancel`,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: 1500,
          product_data: {
            name: "dev-toolbox starter plan"
          }
        }
      }
    ]
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe checkout session has no URL." }, { status: 500 });
  }

  return NextResponse.redirect(session.url, 303);
}

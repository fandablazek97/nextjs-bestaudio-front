// pages/api/verify-turnstile.ts
import type { NextApiRequest, NextApiResponse } from "next";

// Cloudflare Turnstile endpoint:
const verifyEndpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { token } = req.body;

    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) {
      return res.status(500).json({ error: "No Turnstile secret key found." });
    }

    // Verify Turnstile token:
    const result = await fetch(verifyEndpoint, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
    });

    const data = await result.json();

    if (!data.success) {
      return res.status(400).json({ success: false, ...data });
    }

    // If success:
    return res.status(200).json({ success: true, ...data });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Error verifying Turnstile token",
    });
  }
}
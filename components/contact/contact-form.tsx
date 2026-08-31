"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (error) {
      setState("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <div className="bento-card p-8">
      <h2 className="text-xl font-bold tracking-tight">Send a message</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        Send a message and I&apos;ll get back to you at {siteConfig.email}.
      </p>

      {state === "success" ? (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-5 text-sm text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
          Message sent — thanks for reaching out. I&apos;ll reply soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={state === "submitting"}
                className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={state === "submitting"}
                className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              disabled={state === "submitting"}
              className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={state === "submitting"}
              className="mt-1.5 w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>

          {state === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={state === "submitting"}
            className="inline-flex items-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {state === "submitting" ? "Sending…" : "Send message"}
          </button>
        </form>
      )}
    </div>
  );
}

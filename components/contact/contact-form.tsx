"use client";

import { useState } from "react";
import Link from "next/link";
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

  const inputClassName =
    "mt-1.5 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm outline-none ring-accent/20 transition focus:border-accent focus:ring-2 disabled:opacity-60 dark:border-gray-700 dark:bg-gray-900/60";

  return (
    <div className="bento-card p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Send a message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        Prefer email?{" "}
        <Link href={`mailto:${siteConfig.email}`} className="font-medium text-accent hover:underline">
          Write to me directly
        </Link>
        . This form will deliver to my inbox once Resend is configured.
      </p>

      {state === "success" ? (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-5 text-sm text-emerald-800 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-300">
          Message sent — thanks for reaching out. I&apos;ll reply soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
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
                className={inputClassName}
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
                className={inputClassName}
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
              placeholder="Role inquiry, collaboration, question…"
              disabled={state === "submitting"}
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Tell me a bit about what you have in mind…"
              disabled={state === "submitting"}
              className={`${inputClassName} resize-y`}
            />
          </div>

          {state === "error" && (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
              {errorMessage.includes("not configured") ? (
                <>
                  The form isn&apos;t live yet — please{" "}
                  <Link href={`mailto:${siteConfig.email}`} className="font-medium underline">
                    email me directly
                  </Link>
                  .
                </>
              ) : (
                errorMessage
              )}
            </div>
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

"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * There is no server behind this site, so the form writes the email for you:
 * submitting opens your mail app with the message addressed to the committee.
 */
export function ContactForm({ to }: { to: string }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const field =
    "mt-2 block w-full rounded-xl border-[1.5px] border-indigo-200 bg-white px-4 py-3 text-base text-ink transition-colors duration-200 placeholder:text-muted/70 hover:border-indigo-300 focus:border-indigo-800 focus:outline-none";

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        if (message.trim().length < 3) {
          setError("Write your message first, then we can open your mail app.");
          return;
        }
        setError(null);
        const subject = name.trim() ? `Message from ${name.trim()}` : "Message from the MSSM website";
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message.trim())}`;
      }}
    >
      <label className="block font-display text-lg font-bold" htmlFor="contact-name">
        Your name
      </label>
      <input id="contact-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} className={field} />

      <label className="mt-6 block font-display text-lg font-bold" htmlFor="contact-message">
        Your message
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={6}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? "contact-error" : "contact-hint"}
        className={`${field} resize-y`}
      />
      {error ? (
        <p id="contact-error" role="alert" className="mt-2 font-semibold text-red">
          {error}
        </p>
      ) : (
        <p id="contact-hint" className="mt-2 text-[0.9375rem] text-muted">
          This opens your mail app with the message addressed to {to}.
        </p>
      )}

      <button type="submit" className="btn btn-indigo mt-6">
        Write the email
        <ArrowRight size={18} aria-hidden />
      </button>
    </form>
  );
}

"use client";

import {
  Copy,
  Mail,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import InputForm from "./_components/input-form";
import TextareaForm from "./_components/textarea-form";
import { Shimmer } from "./ai-elements/shimmer";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(() => {
        setToast({ message: "Message envoyé avec succès ✅", type: "success" });
        form.reset();
      })
      .catch(() => {
        setToast({ message: "Erreur lors de l'envoi ❌", type: "error" });
      })
      .finally(() => {
        // disparaît après 3 secondes
        setTimeout(() => setToast({ message: "", type: "" }), 3000);

        setLoading(false);
      });
  };

  return (
    <section className="pt-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tighter lg:text-4xl">
            Let’s Talk About Your Project
          </h2>

          <p className="mt-4 text-muted-foreground">
            Chat with me quickly on WhatsApp, or send me an email to share all
            the details of your project.
          </p>

          <div className="mt-10 flex flex-row items-center justify-center gap-4">
            <Link
              href="https://wa.me/261331718939"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-2 text-white shadow transition hover:bg-green-700"
            >
              <HugeiconsIcon icon={WhatsappIcon} className="size-5" />
              <Shimmer as="span" className="text-white/80 max-sm:text-xs">
                Contact me on WhatsApp
              </Shimmer>
            </Link>

            <button
              onClick={() => navigator.clipboard.writeText("+261331718939")}
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 font-medium transition hover:bg-muted"
            >
              <HugeiconsIcon icon={Copy} className="size-5" />
              <span className="hidden md:block">Copy Number</span>
            </button>
          </div>

          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">
              or send an email
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <form
            onSubmit={sendEmail}
            className="mx-auto max-w-md space-y-4 text-left"
          >
            {toast.message && (
              <div
                className={`fixed bottom-10 right-10 z-999 rounded-md px-6 py-3 font-medium text-white shadow-lg transition-opacity ${
                  toast.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {toast.message}
              </div>
            )}
            <InputForm
              type="email"
              name="email"
              icon={Mail}
              label="Email Address"
              required
              placeholder="Your email address"
              className="h-12 w-full rounded-xl bg-background px-4 focus:outline-none focus:ring-2 focus:ring-muted"
            />

            <TextareaForm
              label="Message"
              name="message"
              required
              rows={4}
              placeholder="Briefly describe your project or need..."
              className="w-full rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-muted"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3 font-medium text-white transition hover:opacity-90 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

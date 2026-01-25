import { Button } from "@/components/ui/button";
import { SendToMobileIcon, WhatsappIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import TextareaForm from "./_component/textarea-form";
import InputForm from "./_component/input-form";
import { Shimmer } from "./ai-elements/shimmer";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setToast({ message: "Message envoyé avec succès ✅", type: "success" });
        e.target.reset();
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
    <section className="pt-16 ">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-semibold lg:text-4xl tracking-tighter ">
            Discutons de votre projet
          </h2>

          <p className="mt-4 text-muted-foreground">
            Contactez-moi sur WhatsApp pour un échange rapide, ou envoyez-moi un
            email si vous préférez détailler votre besoin.
          </p>

          <div className="mt-10 flex  items-center justify-center gap-4 flex-row">
            {/* Bouton WhatsApp */}

            <a
              href="https://wa.me/261331718939"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-2 text-white shadow hover:bg-green-700 transition"
            >
              <HugeiconsIcon icon={WhatsappIcon} className="size-5" />
              <Shimmer as={"div"} className="text-white/80">
                Me contacter sur WhatsApp
              </Shimmer>
            </a>

            {/* Bouton Copier le numéro */}
            <button
              onClick={() => navigator.clipboard.writeText("+261331718939")}
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-2  font-medium hover:bg-muted transition"
            >
              <HugeiconsIcon icon={SendToMobileIcon} className="size-5" />

              <span className="hidden md:block">Copier le numéro</span>
            </button>
          </div>

          {/* Séparateur */}
          <div className="my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">
              ou envoyer un email
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Formulaire email */}
          <form
            onSubmit={sendEmail}
            className="mx-auto max-w-md space-y-4 text-left"
          >
            {toast.message && (
              <div
                className={`fixed bottom-10 right-10 px-6 py-3 rounded-md text-white font-medium shadow-lg transition-opacity ${
                  toast.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {toast.message}
              </div>
            )}
            <InputForm
              type="email"
              name="email"
              label="Adresse email"
              required
              placeholder="Votre adresse email"
              className="h-12 w-full rounded-xl bg-background px-4 focus:outline-none focus:ring-2 focus:ring-muted"
            />

            <TextareaForm
              label="Message"
              name="message"
              required
              rows={4}
              placeholder="Décrivez brièvement votre projet ou votre besoin..."
              className="w-full rounded-xl  bg-background  focus:outline-none focus:ring-2 focus:ring-muted"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

<Button aria-label="submit" className="rounded-(--radius)">
  <span className="hidden md:block">Contactez-moi</span>
  <HugeiconsIcon
    icon={SendToMobileIcon}
    className="relative mx-auto size-5 md:hidden"
  />
</Button>;

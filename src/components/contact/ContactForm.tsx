// components/ContactForm.tsx

import Alert from "@ui/Alert";
import AppLink from "@ui/AppLink";
import Button from "@ui/Button";
import FormCheckbox from "@ui/FormCheckbox";
import FormTextArea from "@ui/FormTextArea";
import FormTextInput from "@ui/FormTextInput";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Turnstile } from "@marsidev/react-turnstile";

type Props = {
  className?: string;
};

export default function ContactForm({ className = "" }: Props) {
  // states
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Store turnstile token
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  // refs
  const formRef = useRef<HTMLFormElement>(null);

  // router
  const router = useRouter();

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(false);

    // 1) Ensure we have a turnstile token
    if (!turnstileToken) {
      setFormError(true);
      setIsLoading(false);
      return;
    }

    // 2) Verify token with our API route:
    try {
      const verifyRes = await fetch("/api/verify-turnstile", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ token: turnstileToken }),
      });

      if (!verifyRes.ok) {
        // If Turnstile verification fails
        setFormError(true);
        setIsLoading(false);
        return;
      }

      // 3) If Turnstile verification succeeded, send the email via EmailJS
      emailjs
        .sendForm(
          "service_mstrrtr",    // your EmailJS service ID
          "template_3lg57m5",   // your EmailJS template ID
          formRef.current!,
          "peXEQ-b1oFp3uAQvI"   // your EmailJS public key
        )
        .then(
          // Success:
          () => {
            router.push("/odeslany-formular");
            formRef.current?.reset();
            setIsLoading(false);
          },
          // Error:
          () => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } catch (error) {
      setFormError(true);
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" aria-label="Kontaktní formulář">
        <FormTextInput
          type="text"
          id="name-surname"
          name="name-surname"
          label="Jméno a Příjmení"
          placeholder="Jan Novák"
          isRequired
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <FormTextInput
            type="email"
            id="email"
            name="email"
            label="Váš e-mail"
            placeholder="jan.novak@gmail.com"
            isRequired
            className="col-span-1"
          />
          <FormTextInput
            type="tel"
            id="tel"
            name="tel"
            label="Váš telefon"
            placeholder="+420 123 456 789"
            isRequired
            className="col-span-1"
          />
        </div>

        <FormTextArea
          id="message"
          name="message"
          label="S čím vám můžeme pomoci?"
          placeholder="Popište Váš problém..."
          isRequired
        />

        <FormCheckbox
          id="gdpr"
          name="gdpr"
          isRequired
          label={
            <span>
              Souhlasím se zpracováním osobních údajů{" "}
              <AppLink href="/gdpr" hoverEffect="underline" className="text-copy-rich">
                (více informací).
              </AppLink>
            </span>
          }
        />

        <div>
          <Turnstile
            siteKey="0x4AAAAAAA5zlZzERcslRsx3"
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => {
              setFormError(true);
            }}
          />
        </div>

        <Button type="submit" isLoading={isLoading}>
          Odeslat
        </Button>

        {formError && (
          <Alert
            status="error"
            variant="tinted"
            title="E-mail se nepodařilo odeslat"
            text="Bohužel se e-mail nepodařilo odeslat. Zkontrolujte vaše připojení k internetu, případně využijte jinou možnost kontaktu."
          />
        )}
      </form>
    </div>
  );
}
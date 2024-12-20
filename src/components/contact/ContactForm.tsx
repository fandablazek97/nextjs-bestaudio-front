import Alert from "@ui/Alert";
import AppLink from "@ui/AppLink";
import Button from "@ui/Button";
import FormCheckbox from "@ui/FormCheckbox";
import FormHnypot from "@ui/FormHnypot";
import FormTextArea from "@ui/FormTextArea";
import FormTextInput from "@ui/FormTextInput";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

export default function ContactForm({ className = "" }: Props) {
  const router = useRouter();
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Honeypot refs
  const hnyNameRef = useRef<HTMLInputElement>(null);
  const hnySurnameRef = useRef<HTMLInputElement>(null);
  const hnyTelRef = useRef<HTMLInputElement>(null);
  const hnyEmailRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const hnyName = hnyNameRef.current?.value;
    const hnySurname = hnySurnameRef.current?.value;
    const hnyTel = hnyTelRef.current?.value;
    const hnyEmail = hnyEmailRef.current?.value;

    // Check honeypot fields
    if (hnyName || hnySurname || hnyTel || hnyEmail) {
      e.currentTarget.reset();
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name-surname")?.toString(),
          email: formData.get("email")?.toString(),
          tel: formData.get("tel")?.toString(),
          message: formData.get("message")?.toString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      router.push("/odeslany-formular");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setFormError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`${className}`}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`space-y-8`}
        aria-label="Kontaktní formulář"
      >
        {/* Honeypot fields */}
        <FormHnypot ref={hnyNameRef} type="text" id="hny-name" label="Jméno" />
        <FormHnypot
          ref={hnySurnameRef}
          type="text"
          id="hny-surname"
          label="Příjmení"
        />
        <FormHnypot ref={hnyTelRef} type="tel" id="hny-phone" label="Telefon" />
        <FormHnypot
          ref={hnyEmailRef}
          type="email"
          id="hny-email"
          label="E-main"
        />

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
          placeholder="Popiště Váš problém..."
          isRequired
        />
        <FormCheckbox
          id="gdpr"
          name="gdpr"
          isRequired
          label={
            <span>
              Souhlasím se zpracováním osobních údajů{" "}
              <AppLink
                href="/gdpr"
                hoverEffect="underline"
                className="text-copy-rich"
              >
                (více informací).
              </AppLink>
            </span>
          }
        />
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

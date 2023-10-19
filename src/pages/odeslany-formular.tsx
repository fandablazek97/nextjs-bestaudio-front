import AppLink from "@ui/AppLink";
import Button from "@ui/Button";
import Heading from "@ui/Heading";
import Seo from "@ui/Seo";
import { HiHome, HiArrowLeft } from "react-icons/hi2";
import { useRouter } from "next/router";

export default function SuccessForm() {
  const router = useRouter();

  return (
    <>
      <Seo
        title="Váš e-mail byl úspěšně odeslán"
        description="Děkujeme! Váš e-mail byl úspěšně odeslán. Hned jak to bude možné, ozveme se vám zpět."
        noFollow
        noIndex
      />
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="bg-primary-100 flex flex-col items-center justify-center gap-6 rounded-2xl p-4 sm:p-10">
          <AppLink
            as="button"
            onClick={() => router.back()}
            hoverEffect="underline-slide"
            className="inline-flex items-center justify-center gap-3 font-semibold"
          >
            <HiArrowLeft className="h-4 w-4" />
            <span className="block">Zpět</span>
          </AppLink>

          <Heading
            as={"h1"}
            size="lg"
            className="text-xl font-bold sm:text-3xl"
          >
            Váš e-mail byl úspěšně odeslán
          </Heading>
          <p>
            Děkujeme! Váš e-mail byl úspěšně odeslán. Hned jak to bude možné,
            ozveme se vám zpět.
          </p>
          <Button href="/" leftIcon={<HiHome />}>
            Domovská stránka
          </Button>
        </div>
      </div>
    </>
  );
}

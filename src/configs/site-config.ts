export const config = {
  seo: {
    url: "https://bestaudio.cz",
    shortUrl: "bestaudio.cz",
    titleTemplate: "%s | Bestaudio",
  },
  cookies: {
    prefix: "bestaudio",
  },
  author: {
    name: "František Blažek",
    company: "Reveal & Acamo",
    url: "Acamo.cz & Reveal.cz",
    phone: "+420 737 090 913",
    email: "blazek@acamo.cz",
  },
  // New
  legal: {
    websiteLaunchDate: "1.1. 2023",
    company: {
      name: "Bestaudio s.r.o.",
      declaration: "Společnost zapsaná u Krajského soudu v Plzni, spisová značka C 31660/KSPL.",
      adress: "Lábkova 841/51, Skvrňany, 318 00 Plzeň",
      ic: "04146107",
      dic: "CZ04146107",
      phone: "+420 123 456 789",
      email: "info@dbestaudio.cz",
    },
    showroom: {
      adress: "Pařížská 10, 301 00 Plzeň 3"
    },
    person: {
      name: "Jméno Příjmení",
      adress: "Ulice 123, 123 45 Město",
      ic: "00000000",
      dic: "CZ00000000",
      phone: "+420 123 456 789",
      email: "info@domena.cz",
    },
    providers: {
      hostingProvider:
        "WEDOS Internet, a.s. (IČ: 28115708) - poskytovatel webových serverů",
      emailProvider: "Emailjs.com - zprostředkovatel e-mailových serverů",
      websiteAdministrator: "acamo.cz - správce webu",
    },
    cookies: {
      validConsentPeriod: "šest měsíců",
      preferencesCookies: true,
      statisticCookies: true,
      marketingCookies: false,
      thirdPartyCookies: true,
    },
  },
  ipToFetch: "https://bestaudio.up.railway.app"
};

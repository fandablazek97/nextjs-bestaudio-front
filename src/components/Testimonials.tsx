import Button from "@ui/Button";
import Heading from "@ui/Heading";
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Avatar from "@ui/Avatar";
import { HiStar } from "react-icons/hi2";

const testimonialsArray = [
  // Column 1
  [
    {
      name: "Jiri Lechner",
      content:
        "Dostal jsem na Bestaudio kontakt od svého dealera, jelikož jsem nebyl vůbec spokojený s ozvučením Harman/Kardon v mém voze BMW M3 Competition (nejnovější generace G80). Pánové za mnou dojeli do Prahy, aby na svém ukázkovém voze předvedli, co dokáží a bylo na nich hned vidět, že jsou to nejen velcí nadšenci do kvalitní hudby, ale hlavně naprostí profesionálové, kteří vědí, co dělají. Výsledkem je komplet custom řešení výměny audia, které teď hravě strčí do kapsy vše, co jsem v autě (A dost často i doma) slyšel. Do příštího vozu rozhodně už nedávám žádné příplatkové audio a rovnou ho rezervuji k Bestaudio :). Pánové jsou moc příjemní a skvěle se s nimi povídá jak o audiu tak o autech. Děkuji moc a určitě se v budoucnu uvidíme.",
    },
    {
      name: "Petr Chmelar",
      content:
        "Vybral jsem Bestaudio na internetu, jel 300km tam a 300km zpátky … a absolutně nelituji. Mladí, zapálení, ochotní, profesionální, příjemní! A ten poslech, to je koncert! Absolutní spokojenost! Se všemi svými dalšími BMW přijedu zase jen k nim.",
    },
    {
      name: "Karel Mikolas",
      content:
        "Ke společnosti Bestaudio jsem se dostal přes společnost M+H, kde jsem si nechal již 2x skvěle poladit ŘJ motoru. V novém voze jsem si nechal v jedné konkurenční firmě z jižní Moravy vyměnit repro a vytlumit všechny dveře, ale dozrál jsem do fáze, kdy jsem chtěl zvuk ve voze povýšit. Tak jsem zajel do Bestaudia. Zde se mě ujal pan Prorok, mladý, ale velmi zkušený chlapík, který má velký přehled o tom, co dělá. Ve dvou krocích jsme povýšili zvuk vozu na úplně jinou úroveň, zjistili jsme naprosto otřesný přístup konkurenční firmy, která svou práci naprosto odflákla. Výměna páru repro, přidání subwooferu s extra zesilovačem a zesilovač s DSP. Vše doplněno předěláním tlumení, které bylo otřesné. Nyní jsme ve fázi, kdy mám zdarma možnost kdykoliv přijet na doladění zvuku přes DSP zesilovač. Shrnuto podtrženo: lituji toho, že jsem se nedostal do BESTAUDIO na první dobrou, jakoukoliv další hudbu do vozu budu řešit už pouze zde, jmenovitě chci vyzdvihnout pana Proroka, který je vždy připraven, odpovídá rychle a věcně, vyjde vstříc, vše vysvětlí a v neposlední řadě je vždy výborně naladěný, stejně jako jeho sestavy ve vozech (mluvím tedy za svůj, ale věřím, že je to podobné i jinde). Těším se na další upgrade :) Případně na další vůz za nějakou dobu. Ještě jednou veliké díky za velkou přidanou hodnotu Vaší práce, BESTAUDIO (Davide Proroku). A btw, moc se těším na otevření nových prostor !!!!",
    },
    {
      name: "SCREEN RENTAL",
      content:
        "Dlouho jsem hledal někoho kdo rozumí zvuku v autě. A našel jsem :) V BEST AUDIO vědí, že nestačí jen prodat repráky, ale že k tomu, aby to v autě dobře hrálo je potřeba taky zvukový procesor a ten ještě umět naladit. Sestavu co jsem koupil mají suprově odladěnou. Jediný problém vypadal že bude se subwooferem, ale i s tím si skvěle poradili. Dodali mi speciální model co se zabudoval do rezervy, takže nejen že dobře hraje, ale taky nezabírá žádné místo v kufru. A finále bylo ladění procesoru, bez něho by byly nové repráky vyhozené peníze. Ten jsem pak ještě doladil se zvukařem na dálku po první dlouhé jízdě a teď už jsem maximálně spokojen! Díky. Dobrá práce!",
    },
    {
      name: "Pavel Tomsa",
      content:
        "Jsem velice spokojen s přístupem a jednáním vstřícné jednání s produktem jsem velice spokojen poradí a navrhnou řešení. Ochotný personál a tuto firmu VŘELE DOPORUČUJI.",
    },
    {
      name: "Petr Safar",
      content:
        "Nechal jsem si v BestAudiu nainstalovat do BMW 1, 3 pásmový full aktiv vč subwooferu a musím uznat, že chlapi dělají svojí práci nejenom skvěle, ale co se asi nejvíc cení tak i srdcem. Dokázali mě vyslechnout a nabídli mi komponenty, o kterých jsem neměl ani tušení, že existují. Hlavně spojení s původním BMW systémem, které funguje perfektně. Dokázali mi systém odladit a předvedli s trpělivostí, jak si mohu sám upravovat DSP. Tzn. žádné zdlouhavé čtení návodů po nocích, ale okamžitě jsem věděl, kde, co a jak nastavit. Petrovi, Davidovi a Pepovi tímto děkuji za perfektně odvedenou práci.",
    },
    {
      name: "Jan Bafrnec",
      content: "Nejlepší automobilové audio instalace v CZ...vážně!",
    },
    {
      name: "Michal Špinka",
      content:
        "Chtěl bych tímto poděkovat celému týmu bestaudio za perfektně odvedenou práci od výběru  celého systému až po jeho realizaci. Vše bylo přesně dle naší dohody a s výsledkem jsem maximálně spokojený. Bestaudio je vzácným příkladem toho, když je pro někoho jeho práce i koníčkem a ke každé zakázce přistupuje jako kdyby se jednalo o jejich vlastní auto. Od doby instalace vím, že pořizovat jakykoliv fabrický příplatkový audio systém je jen mrhání penězi a lepší je tyto finance investovat přímo u těchto nadšenců, protože celkový dojem je nesrovnatelný. Po dlouhé době mohu říci, že se každé ráno těším do auta, protože ten zvuk je prostě neuvěřitelný. Díky moc, příště přijedu zase 👍",
    },
    {
      name: "Martin Hlavnička",
      content:
        "Naprostá profesionalita a splnění všech přání. Výsledek je naprosto ohromující a hudba zní teď úplně jinak. Hlavní byla pomoc při výběru všech komponentů, kdy mi bylo velmi důkladně sděleno, jaké jsou plusy, mínusy a byly mi nabídnuty ideální komponenty vzhledem k velikosti vozu. Opravdu špička",
    },
    {
      name: "Robert Ptacek",
      content:
        "Včera návštěva BESTAUDIO. Ani nevím jak to popsat. Octl sem se zřejmě v říši pohádek. Kluci maximálně ochotni profíci které to co dělají opravdu baví a žijí tím. Auto odlazeno vše vysvětleno. Celou cestu sem se musel smát jako malé dítě. Pokud audio do auta tak za mě jenom tady. Tímto jim ještě jednou děkuji a určitě se jeste uvidíme s dalším autem.",
    },
    {
      name: "Milan Bečvář",
      content:
        "Naprosto spokojeny s vymennou reproduktoru v automobilu. Firma zamestnava opravdove odborniky, kteri vse vysvetli zakaznikovi. Urcite doporucuji tuto sluzbu ☺️",
    },
    {
      name: "OJ Šimánek",
      content: "Absolutní spokojenost. Super přístup a ještě lepší výsledky.",
    },
    {
      name: "Martin Oppitz",
      content:
        "Recenze je jednoduchá - vše bylo perfektní. Výborná komunikace, precizní práce a naprostá spolehlivost.",
    },
  ],
  //
  //
  //
  //
  //
  // Column 2
  [
    {
      name: "Jenda Bureš",
      content:
        "Super přístup, cena, kvalita. Zvolil jsem variantu 1 a oproti základních bedniček v BMW to hraje o několik levelu lépe. Časem se ještě rozhodnu, zda si tam nechám přidat i zesilovač, abych to posunul ještě o levej dál, pokud mi ten základní balíček nebude pro víkendové auto stačit.",
    },
    {
      name: "Patrik Zachar",
      content:
        "Maximální spokojenost se vším. Ochota, vstřícnost, ale hlavně perfektní zvuk v novém X5 - pánové jsou fak machři! Cestou z Plzně jsem si musel zajet, abych si zvuk mohl vychutnávat ještě déle. Opravdu mazec, co dokážou. Ani na vteřinu nelituji investice. Když to srovnám s nejvyššími systémy od BMW, tak mám o dvě třídy lepší zvuk, než by dokázalo tovární ozvučení.",
    },
    {
      name: "Martin",
      content:
        "Zvažoval jsem zlepšení zvuku na mém automobilu Ford Focus 2016 Combi a po delším hledání na internetu jsem se odhodlal kontaktovat firmu Bestaudio. Vysvětlil jsem jim situaci, jakou mám představu a jaký mám cenový strop. Pan Holub mi nabídl řešení, které jsem přijal s malou změnou , mou preferencí reproduktorů komp. Helix F62C dopředu a koax. Helix F6X dozadu .Na poslední chvíli jsem se ještě rozhodnul pro razantnější proměnu a připlatil si ještě za subwoofer a DSP se zesilovačem, což byla velmi dobrá volba. Automobil jsem ráno předal, a odvážel až večer. Avšak došlo k výměně reproduktorů, vytlumení všech bočních dveří a instalace subwooferu do rezervy ESX V 1100P, odladění DSP se zesilovačem Match UP 7DSP. A výsledek byl takový, že jsem nemohl uvěřit. Auto hrálo naprosto úžasně, velmi čistě a s úžasnou dynamikou a basy ve srovnání s továrním systémem od Fordu. Já i má partnerka jsme z toho byl tak nadšení, že jsme se rozhodli ještě investovat a posunout poslech hudby ještě o trochu výše. Domluvil jsem se s panem Prorokem, který mi navrhl řešení, které jsem schválil. V lednu 2022 jsem se opět dostavil do Bestaudio a nechal si vyměnit stávající Repro Helix za komp. Focal Performance FLAX PS 165 FSE a dozadu koax. Focal Performance FLAX PC 165 FE.A ještě jsem si nechal nainstalovat na zesilovač MEC USB Kartu na nejvyšší kvalitu poslechu bez konverzi přímo přes zesilovač. Práce asi na 6hodin, ale opět s ohromujícím výsledkem. Repro FOCAL Flax nejsou nejlevnější, ale když je uslyšíte hrát, sami uznáte, že se ta investice vyplácí. Ten zvukový přednes je úžasný. Oproti předchozím Helixům o několik levelů jinde a to Helixy nehrají špatně. I bez zapojení subwooferu je teď hudba plná basů, velmi melodická, dynamická, mnoho detailů, výškové repro neskutečně čisté.  Kluci navíc vyřešili problémy s tovární elektronikou Fordu, která mi občas nechtěla ihned zapnout zesilovač na základě signálu do Sync3 jednotky. Za mne nemohu vůbec nic vytknout. Perfektní domluva s lidmi, kteří hudbou v autech žijí,  kvalitně odvedená práce s ohromujícím výsledkem v podání úžasného zvukového projevu. Až budu pořizovat nové auto, první cesta s ním bude právě zase do Bestaudio.",
    },
    {
      name: "Patrik Vogl",
      content:
        "No, klobouk dolů, pánové. Že se mi za pár tisícovek úplně změní pocit z jízdy, to jsem nečekal. Fakt jste předčili očekávání vším – perfektní a rychlá domluva, skvělá práce ❤️👍",
    },
    {
      name: "Jan Verner",
      content:
        "Naprostá spokojenost. Skvělý přístup a komunikace. Kompletní upgrade zvuku v VW Golf Sportsvan (výměna přední + zadní repro napojení na zesilovač s DSP, odhlučnění dveří, subwoofer pod víko kufru na rezervu, výměna autorádia). Výsledný zvuk fantastický, středy a výšky výrazné, basy jsou cítit. Výsledný zvuk naprosto čistý a to především i díky individuálně a profesionálně nastavenému zesilovači. Vhodná investice, kdo rád kvalitní hudbu :) Děkuji, pokud budu někdy řešit další audio, rád se vrátím.",
    },
    {
      name: "Zdeněk Hradecký",
      content: "Velmi ochotný a vstřícný přístup k zákazníkům!",
    },
    {
      name: "Happy Engine",
      content:
        "Klukům jsem svěřil upgrade již několika vozů (zejména Mercedesy a BMW, na které jsou specialisté). Přesvědčil mě jejich přístup k práci, pozornost k detailům, profesionalita a obrovská znalost (světového měřítka) jejich oboru. Kvalitní vytlumení, instalace nejlepších komponent a individuální naladění promění každé auto v o třídu lepší vůz. Věřím, že Petr Holub bude do pár let světová špička!",
    },
    {
      name: "Robert Haas",
      content:
        "Zvukový projev před instalací a po instalaci se těžko srovnává. Je to prostě skvělé. Výsledný dojem ještě podtrhává externí subwoofer, který celou soustavu dostal do jiné dimenze. Celá instalace proběhla absolutně v pohodě a kluci jsou perfektní. Jsem maximálně spokojen. Všem tuto výměnu audiosystému v autě doporučuji. To samé platí i pro firmu Bestaudio.",
    },
    {
      name: "Marek Štembera",
      content:
        "Měl jsem problém s původním B&O ozvučením u Audi A4, který kluci z Bestaudio okamžitě vyřešili. Místo původních čistě basových reproduktorů, jejichž kvalita nebyla nic moc, jsem během hodiny ojížděl s high-end středobasy, které celé audio výrazně pozvedly. Maximálně doporučuji a klukům moc děkuji. Rozhodně jsme se neviděli naposledy! :)",
    },
    {
      name: "Tomáš Švajner",
      content:
        "Individuální přístup a profesionální služby na úrovni. Mohu jen doporučit!",
    },
    {
      name: "Karel Koci",
      content:
        "Nadstandardní péče o zákazníka, doporučili mi sestavu do auta, která opravdu skvěle hraje!",
    },
    {
      name: "Lubos Bafrnec",
      content:
        "Vynikajici a hlavne prestizni prace se smyslem pro detail. Velmi ocenuji konzultacni pristup kde vse naladi presne pro Vas, poradi, a navrhnout exaktni a na miru prizpusobeny system tlumeni a ozvuceni. Perfektni a vzdelany personal s vysokou urovni odbornosti! Po instalaci je z auta naprosto odlisny mnohem lepsi pocit!  Jsou to profici a hlavne za rozumnou a odpovidajici cenu! Velmi chvalim! Keep it up 👍",
    },
    {
      name: "Miroslav Chmelík",
      content: "Vše super a velká spokojenost. Děkuji celému kolektivu.",
    },
    {
      name: "Jakub Valdivia",
      content: "Instalace audia a odhlučnění auta k plné spokojenosti.",
    },
  ],
  //
  //
  //
  //
  //
  // Column 3
  [
    {
      name: "Filip Matušinský",
      content:
        "Instalace prémového zvuku do mého Mercedesu W213, mnohem lepší než Burmester. Rychle, kvalitně, dokonale vyladěný zvuk. Tuhle recenzi píšu ještě v prodejně po prvních dojmech a dost se těším na cestu do Prahy :-)",
    },
    {
      name: "Stěhování J&M",
      content:
        "Lidský přístup, ochota pomoci, dovezli zboží z Plzně do Prahy naprosto zdarma, dali na výběr z několika druhů zboží i kvality. Navíc pomohli při montáži, ochota se zajímat o kvalitu zboží, které prodávají. Naprosto špičkový přístup oproti jiným firmám. A za takový přístup si kdykoli klidně i připlatím.",
    },
    {
      name: "Evžen Leonenko",
      content:
        "Perfektní přístup. Pán byl velice ochotný a příjemný. Zodpověděl všechny mé dotazy a poradil s alternativním zbožím, které by bylo lepší. Už vím, kde budu nakupovat v budoucnu. Velmi doporučuji tento obchod.",
    },
    {
      name: "Martin Havlík",
      content:
        "Na Bestaudio jsem se obrátil, aby mi trochu vylepšili originální ozvučení VW(Pozn. zde bylo repro made in china, co mi vrátili po instalaci novych) v našem rodinném voze VW Sharan. Prostě řečeno jsem požadoval, až povezeme děti na kroužky, abychom si mohli pustit muziku tak, aby nás ta cesta bavila 👨‍👩‍👧‍👧). Také jsem byl limitován rodinným rozpočtem 😂 znáte to. Pan Holub mi vysvětlil všechny možnosti a nabídl variantu, abych byl spokojený. Mohl jsem si dokonce poslechnout i podobný zvuk ve voze Seat Alhambra, abych věděl zhruba do čeho jdu :-). Byla mi doporučena sestava do předních dveří, odhlučnění, dodat repro 180 FOCALinside, pod sedačku HELIX zesilovač s DSP procesorem + do kufru  subwoofer AUDIOSYSTEM ( místo origo přihrádky). Dále ladění DSP procesoru je přizpůsobeno dle Vašich představ a technik Vám upraví zvuk dle vašich preferencí (orientace na řidiče, posádku atd….)  Výsledek se dostavil a jsem NADŠEN !!! Zvuk krásné čistý!!! Bylo mi doporučeno abych v budoucnu se zamyslel nad výměnou origo VW radia, aby byl zvuk ještě lepší. Nabídli mi, že se mohu stavit v budoucnu a můžeme přeladit DSP procesor dle mých nových požadavku zcela zdarma. SUPER. Teď ještě jedno velké poděkování za to, že TEAM Bestaudio se pustil do instalace software modulu pro nezávislého topení WEBASTO o které jsem je požádal, ačkoli to nikdy neinstalovali. Vše dopadlo na 1 a mohu tuto firmu doporučit hlavně i za to, jaký mají osobitý přístup. Děkuji BESTAUDIO celému teamu. PS: udělal jsem dobře, že jsem obětoval cestu z KV  do PLZNĚ 😀",
    },
    {
      name: "Marian K",
      content:
        "Učebnicový přístup, ochota pomoci při výběru a také zkušenosti, tak bych popsal mojí zkušenost s tímto obchodem. Za mě zasloužených 5 hvězd.",
    },
    {
      name: "Filip Urban",
      content:
        "Po domluvě instalován Upgrade 2 do BMW 5. Rozdíl proti jakémukoliv sériovému audio systému je naprosto propastný. Zvuk má ostré, ale přesné výšky, silné basy a po profesionálním doladění také neskutečnou dynamiku. Maximální spokojenost!!",
    },
    {
      name: "Vladimír Bártek",
      content:
        "Bezkonkurencne rychle ziskani terminu, vstricny pristup, rychlost a kvalita zhotoveni. S vysledkem naprosta spokojenost, moc dekuji!",
    },
    {
      name: "Hosty",
      content:
        "Od bestaudia jsem si nechal do své Scaly udělat kompletní upgrade audia - výměnu původních reproduktorů za plug & play výměnu ve formě Focal IS VW 165, vytlumení předních i zadních dveří, a instalace subwooferu ESX V1100A do rezervy (rezervní guma může v autě zůstat, musí se pouze vyndat střed s heverem apod.). Domluva s panem Tržilem, se kterým jsem jednal i následná montáž proběhla na jedničku a výsledek je moje naprostá spokojenost. Kromě výše zmíněných prací mi také podlepili několik nepříjemně vibrujících a rezonujících plastů (klasický koncernový interiér). Abych se dostal ale k samotnému zvuku, tak je to naprostá bomba - výšky a basy jsou krásně separované a člověk v hudbě krásně rozezná jednotlivé prvky písničky jako bicí či vokály. Zvuk zaplňuje kabinu auta krásně do plna a díky vytlumení dveří si člověk při 50 km/h připadá že stojí na místě a v dálničních rychlostech pocitově z hlediska aerodynamického hluku jede maximálně po okresce. V neposlední řadě subwoofer do rezervy je naprostý 'game changer' obzvláště pro Dubstep, Techno, EDM, Rap a další basovou muziku. Před realizací jsem měl mírné obavy abych vůbec poznal rozdíl po upgradu, ale při nastoupení do auta stačilo dobrých 10 sekund aby mi vyskočil obří úsměch od ucha k uchu. Ceny jsou příznivé a určitě tuto investici doporučuji každému kdo docení kvalitní hudbu všema deseti.",
    },
    {
      name: "Daniel Špirk",
      content:
        "Perfektní spolupráce i výsledek včetně následné podpory s vyřazením originál BMW aktivní zvukové jednotky motoru (BMW design reději bez komentáře). Děkuji pánové!",
    },
    {
      name: "Zdenek Skoda",
      content:
        "Recenze normálně nepíši ani nedávám hodnocení, proto budu stručný. Tým z Bestaudia si zaslouží 5 hvězdiček za svůj skvělý přístup, profesionalitu, precizní montáž, kvalitu poskytovaných produktů a ochotu. Rádi se vším poradí a vysvětlí. Nechal jsem si udělat kompletní ozvučení celého vozu a nemůžu si ho vynachválit, naprostá spokojenost.",
    },
    {
      name: "How to do",
      content:
        "Úžasná sympatická obsluha na které je vidět, že ji práce baví a dělá to profesionálně.",
    },
    {
      name: "Michal Demáček",
      content: "Bombová firma mohu jenom doporučit.Krasne vám poradej.",
    },
    {
      name: "Valter Meszaros",
      content:
        "Zakúpená zostava pre Mercedes repro Steg + zosilňovač Match UP7DSP. Majiteľ aj technici maximálne ochotný, poradili pri výbere aj montáži. Už po výmene komponentov bol zvuk lepší, ale naozaj dobrý zvuk prišiel až po naladení DSP technikom z Bestaudio. Maximálna spokojnosť.",
    },
    {
      name: "Pavel Káčerik",
      content: "Velmi kvalifikovany personal, uzasna obsluha a jednani.",
    },
  ],
];

type TestimonialProps = {
  avatar?: string;
  name: string;
  content: string;
};

export function Testimonial({ avatar, name, content }: TestimonialProps) {
  return (
    <li className="col-span-1 flex flex-col gap-4 rounded-xl bg-body-100 px-6 py-8">
      <div className="flex gap-3 sm:gap-5">
        <Avatar src={avatar} name={name} size="lg" loading="lazy" />
        <div className="flex grow flex-col">
          <Heading as={"span"} size="sm" color="white">
            {name}
          </Heading>
          <div className="flex gap-0.5">
            <HiStar className="h-4 w-4 text-yellow-400" />
            <HiStar className="h-4 w-4 text-yellow-400" />
            <HiStar className="h-4 w-4 text-yellow-400" />
            <HiStar className="h-4 w-4 text-yellow-400" />
            <HiStar className="h-4 w-4 text-yellow-400" />
          </div>
        </div>
      </div>
      <p className="text-sm">{content}</p>
    </li>
  );
}

type TestimonialsProps = {
  className?: string;
};

export default function Testimonials({ className = "" }: TestimonialsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapseButtonVisible, setIsCollapseButtonVisible] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { ref: element, inView } = useInView({ threshold: 0 });
  const initial = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    if (isExpanded) {
      ref.current!.focus({ preventScroll: isExpanded });
    }

    if (!isExpanded && !initial.current) {
      ref.current!.focus();
      ref.current!.scrollIntoView({ behavior: "auto" });
    }

    if (isExpanded) {
      setIsCollapseButtonVisible(false);
    }
  }, [isExpanded]);

  useEffect(() => {
    setTimeout(() => setHasTransition(isExpanded), 0);
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded || !inView) return;
    function onScroll() {
      const bodyRect = document.body.getBoundingClientRect();
      const rect = ref.current!.getBoundingClientRect();
      const middle =
        rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2;
      const isHalfWay = window.scrollY > middle;
      if (isCollapseButtonVisible && !isHalfWay) {
        setIsCollapseButtonVisible(false);
        console.log(isCollapseButtonVisible);
      } else if (!isCollapseButtonVisible && isHalfWay) {
        setIsCollapseButtonVisible(true);
        console.log(isCollapseButtonVisible);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isExpanded, isCollapseButtonVisible, inView]);
  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        ref={element}
        className={`grid grid-cols-1 items-start gap-8 md:grid-cols-2 xl:grid-cols-3 ${
          !isExpanded ? "max-h-[42rem] overflow-hidden" : ""
        }`}
      >
        {testimonialsArray.map((column, i) => (
          <ul
            key={i}
            className={`
              space-y-8
              ${i === 1 ? "hidden md:block" : ""}
              ${i === 2 ? "hidden xl:block" : ""}`}
          >
            {column.map((testimonial, i) => (
              <Testimonial
                key={i}
                name={testimonial.name}
                content={testimonial.content}
              />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={`flex h-40 w-full items-center justify-center bg-gradient-to-t from-body to-transparent
        ${hasTransition ? "transition-[transform,opacity] duration-300" : ""}
        ${isExpanded ? "sticky bottom-0 translate-y-0" : "-translate-y-40"}
        ${
          isExpanded && !isCollapseButtonVisible
            ? "translate-y-8 opacity-0"
            : ""
        }
        ${
          isExpanded && isCollapseButtonVisible
            ? "translate-y-0 opacity-100"
            : ""
        }
        `}
      >
        <Button onClick={() => setIsExpanded(!isExpanded)} type="button">
          {!isExpanded ? "Zobrazit další" : "Už je mi to jasné"}
        </Button>
      </div>
    </div>
  );
}

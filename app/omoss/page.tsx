import React from "react";
import Image from "next/image";
import {
  Target,
  Eye,
  Users,
  Map,
  Star,
  Shield,
  Heart,
  Check,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <div className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Din resa börjar här
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              På Rahila Travel förvandlar vi resedrömmar till verklighet med
              personlig service och expertkunskap.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6">
                <div className="text-start">
                  <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                    Din resa börjar här
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    På Rahila Travel förvandlar vi resedrömmar till verklighet
                    med personlig service och expertkunskap.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  På Rahila Travel tror vi att varje resa berättar en historia –
                  och att varje resenär förtjänar oförglömliga upplevelser. Med
                  en passion för upptäcktslust och ett starkt engagemang för
                  kvalitet är vi en fullserviceresebyrå som förvandlar dina
                  resedrömmar till verklighet.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200">
                <Image
                  src="/office.png"
                  alt="Rahila Travel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vilka vi är */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-950">Vilka vi är</h2>
          </div>
          <div className="border-l-4 border-amber-400 pl-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Rahila Travel är en pålitlig resepartner med lång erfarenhet av
              att skapa personliga och genomtänkta reselösningar för resenärer
              från alla bakgrunder. Vårt namn, inspirerat av äventyrets anda,
              speglar vårt uppdrag: att vägleda våra kunder på meningsfulla
              resor med integritet, professionalism och omtanke.
            </p>
          </div>
        </div>

        {/* Vårt uppdrag */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-950">Vårt uppdrag</h2>
          </div>
          <div className="bg-amber-50 rounded-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              Vårt uppdrag är enkelt: Att erbjuda sömlösa, inspirerande och
              skräddarsydda reseupplevelser som berikar livet och skapar
              bestående minnen.
            </p>
            <p className="text-gray-700">
              Oavsett om du planerar en unik upplevelse, en familjesemester, en
              affärsresa eller en andlig pilgrimsfärd, utformar vi varje resa
              med dina behov, önskemål och din budget i fokus.
            </p>
          </div>
        </div>

        {/* Vad vi gör */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
              <Map className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-950">Vad vi gör</h2>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 mb-6">
              På Rahila Travel erbjuder vi ett komplett utbud av resetjänster,
              bland annat:
            </p>

            <div className="space-y-3">
              {[
                "Skräddarsydda semesterpaket – strandresor, kulturella upplevelser, äventyrsresor och mycket mer",
                "Flyg- och boendebokningar – konkurrenskraftiga priser och smidiga arrangemang",
                "Gruppresor och företagsresor – effektiv och tillförlitlig planering för team och organisationer",
                "Visumhjälp och resedokumentation – professionellt stöd som förenklar processen",
                "Specialiserade resor – andliga pilgrimsfärder, lyxresor och noggrant kurerade resplaner",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-gray-700">
                Vårt team av erfarna resekonsulter håller sig ständigt
                uppdaterade om globala resetrender, destinationer och
                säkerhetsriktlinjer, så att du kan resa tryggt och med full
                sinnesro.
              </p>
            </div>
          </div>
        </div>

        {/* Varför välja Rahila Travel */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-amber-400 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-950">
              Varför välja Rahila Travel
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Heart className="w-5 h-5" />,
                title: "Personlig service",
                description:
                  "Varje resenär är unik – därför anpassar vi varje resa efter din stil, ditt schema och din budget.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Expertkunskap",
                description:
                  "Med gedigen destinationskunskap och starka branschpartnerskap erbjuder vi välgrundade rekommendationer och hög kvalitet till rätt pris.",
              },
              {
                icon: <Target className="w-5 h-5" />,
                title: "Engagemang för kvalitet",
                description:
                  "Från första kontakt till dess att du är hemma igen strävar vi efter en smidig och stressfri reseupplevelse.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Pålitlig support",
                description:
                  "Vår service slutar inte vid bokningen – vi finns med dig före, under och efter resan.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:border-amber-400 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <div className="text-blue-950">{item.icon}</div>
                  </div>
                  <h3 className="font-semibold text-blue-950">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vår vision */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-blue-950">Vår vision</h2>
          </div>
          <div className="max-w-7xl">
            <p className="text-gray-700 text-lg leading-relaxed bg-amber-50 rounded-lg p-8">
              Att vara en ledande resebyrå som är erkänd för exceptionell
              service, meningsfulla reseupplevelser och långsiktiga relationer
              med våra kunder. Vi vill inspirera nyfikenhet, skapa möten och
              öppna världen för alla vi arbetar med.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-950 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Låt oss resa tillsammans
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Oavsett om du planerar din nästa resa eller drömmer om din allra
              första, finns Rahila Travel här för att göra den extraordinär. Låt
              oss upptäcka världen – en resa i taget.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-white text-blue-950 px-6 py-3 rounded-lg font-semibold">
                📞 Kontakta oss idag
              </div>
              <p className="text-white/80 text-sm">
                Öppna dörren till ditt nästa äventyr med Rahila Travel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

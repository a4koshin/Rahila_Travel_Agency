import React from "react";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { whatWeDo } from "@/lib/whatWeDo";
const AboutPage = () => {
  return (
    <>
      {/* Heading section */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-blue-50 mb-18  ">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="relative mb-12 text-center">
            {/* Badge/Logo indicator */}
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                {/* <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full blur-md opacity-40"></div> */}
                <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg -mt-12">
                  Din resa börjar här
                </div>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 bg-clip-text text-transparent tracking-tight">
              Varje resa berättar
              <span className="block mt-2">en historia</span>
            </h1>

            {/* Subheading */}
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                På Rahila Travel tror vi att varje resenär förtjänar
                oförglömliga upplevelser.
                <span className="font-semibold text-amber-600">
                  {" "}
                  Med passion för upptäcktslust
                </span>{" "}
                och ett starkt engagemang för kvalitet förvandlar vi dina
                resedrömmar till verklighet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* WHo we are section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Vilka vi är
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Rahila Travel är en pålitlig resepartner med lång erfarenhet av
                att skapa personliga och genomtänkta reselösningar för resenärer
                från alla bakgrunder. Vårt namn, inspirerat av äventyrets anda,
                speglar vårt uppdrag: att vägleda våra kunder på meningsfulla
                resor med integritet, professionalism och omtanke.
              </p>
            </div>
          </div>
          {/* Enhanced Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group px-8">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="relative w-full aspect-[4/3] min-h-[220px] sm:min-h-0">
                  <Image
                    src="/office.png"
                    alt="Innvandrerforum i Østfold - fellesskap og kultur"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  Gradient Overlay
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="group bg-white rounded-2xl p-8 transition-all duration-300 border border-blue-900/30 hover:border-blue-900/40">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-950 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-950">Vårt uppdrag</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Vårt uppdrag är enkelt: Att erbjuda sömlösa, inspirerande och
              skräddarsydda reseupplevelser som berikar livet och skapar
              bestående minnen.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Oavsett om du planerar en unik upplevelse, en familjesemester, en
              affärsresa eller en andlig pilgrimsfärd, utformar vi varje resa
              med dina behov, önskemål och din budget i fokus.
            </p>
          </div>
          {/* Vission */}
          <div className="group bg-white rounded-2xl p-8 transition-all duration-300 border border-amber-200 hover:border-amber-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-400 rounded-xl">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-500">Vår vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Att vara en ledande resebyrå som är erkänd för exceptionell
              service, meningsfulla reseupplevelser och långsiktiga relationer
              med våra kunder. Vi vill inspirera nyfikenhet, skapa möten och
              öppna världen för alla vi arbetar med.
            </p>
          </div>
        </div>
        {/* What we do - Minimal Card Design */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Vad vi gör
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-950 text-white text-2xl hover:bg-amber-400 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
              </div>
            ))}
          </div>
          <p className="font-semibold text-blue-950  mt-6 bg-amber-50 px-8 py-8 rounded-2xl">
            Vårt team av erfarna resekonsulter håller sig ständigt uppdaterade
            om globala resetrender, destinationer och säkerhetsriktlinjer, så
            att du kan resa tryggt och med full sinnesro.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;

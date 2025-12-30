import React from "react";
import Image from "next/image";
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
      </div>
    </>
  );
};

export default AboutPage;

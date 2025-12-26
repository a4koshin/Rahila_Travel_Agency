import React from "react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading  */}
        <div className="bg-amber-400 px-4 py-8 text-center mb-24 ">
          <span className="font-bold uppercase text-2xl">about page</span>
          <p className="font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            culpa numquam rem.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Velkommen til vårt fellesskap
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Innvandrerforum i Østfold er en frivillig organisasjon som
                jobber for inkludering, likeverd og aktiv deltakelse i
                samfunnet. Vi er til stede for barn, ungdom, unge voksne og
                familier med minoritetsbakgrunn i Østfold, og særlig for dem som
                står i fare for å falle utenfor.
              </p>
              <p>
                Vi jobber med å skape trygge møteplasser, meningsfulle
                aktiviteter og arenaer der mennesker kan møtes på tvers av
                bakgrunn, kultur og erfaringer. Gjennom informasjonsarbeid,
                dialog, fritidsaktiviteter og forebyggende ungdomsarbeid bidrar
                vi til mestring, tilhørighet og fellesskap.
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
                    alt="Rahila travel office"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

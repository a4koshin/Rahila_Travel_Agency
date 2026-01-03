import React from "react";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { whatWeDo } from "@/lib/whatWeDo";
const AboutPage = () => {
  return (
    <>
      {/* Heading section */}
      <div className="relative min-h-[50px] flex items-center mb-18 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/dubia.jpeg"
            alt="Travel background"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-950/70"></div>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="relative mb-12 text-center">
            {/* Badge/Logo indicator */}
            <div className="inline-flex items-center justify-center mb-6"></div>

            {/* Main heading */}
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-amber-400 bg-clip-text text-transparent tracking-tight">
              Our History
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* WHo we are section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Your journey starts here
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                At Rahila Travel, we believe that every journey tells a story –
                and that every traveler deserves unforgettable experiences. With
                a passion for discovery and a strong commitment to quality we
                are a full-service travel agency that turns your travel dreams
                into reality.
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
              <h3 className="text-2xl font-bold text-blue-950">Our mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is simple: To offer seamless, inspiring and tailored
              travel experiences that enrich lives and create lasting memories.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you are planning a unique experience, a family vacation, a
              business trip or a spiritual pilgrimage, we design each trip with
              your needs, desires and budget in mind.
            </p>
          </div>
          {/* Vission */}
          <div className="group bg-white rounded-2xl p-8 transition-all duration-300 border border-amber-200 hover:border-amber-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-400 rounded-xl">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-amber-500">Our vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a leading travel agency recognized for exceptional service,
              meaningful travel experiences and long-term relationships with our
              clients. We want to inspire curiosity, create encounters and open
              the world to everyone we work with.
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
                className="group relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400 text-white text-2xl hover:bg-amber-400 transition-all duration-300">
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
          <p className="font-semibold text-blue-950  mt-6 bg-blue-50 px-8 py-8 rounded-2xl">
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

"use client";
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
  ChevronRight,
  Globe,
  MapPin,
  Calendar,
  Compass,
  Award,
} from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Hero Section with Parallax Effect */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated Title */}
            <div className="mb-8">
              <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6 animate-fade-in">
                ✦ Din Resepartner Sedan 2010 ✦
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-blue-950 tracking-tight mb-6 leading-tight">
                Din resa
                <span className="block mt-2 font-bold bg-gradient-to-r from-amber-500 to-blue-600 bg-clip-text text-transparent">
                  börjar här
                </span>
              </h1>
            </div>

            {/* Animated Divider */}
            <div className="flex justify-center items-center mb-10">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
              <div className="mx-4">
                <Globe className="w-6 h-6 text-blue-600 animate-spin-slow" />
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
            </div>

            {/* Hero Description */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
              På{" "}
              <span className="font-semibold text-blue-600">Rahila Travel</span>{" "}
              förvandlar vi resedrömmar till verklighet med personlig service,
              expertkunskap och en passion för extraordinära upplevelser.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                <Compass className="w-5 h-5" />
                Börja planera din resa
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
                Läs våra resberättelser
              </button>
            </div>

            {/* Stats Banner */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                {
                  value: "15+",
                  label: "Års erfarenhet",
                  icon: <Award className="w-4 h-4" />,
                },
                {
                  value: "5,000+",
                  label: "Nöjda kunder",
                  icon: <Heart className="w-4 h-4" />,
                },
                {
                  value: "80+",
                  label: "Destinationer",
                  icon: <MapPin className="w-4 h-4" />,
                },
                {
                  value: "24/7",
                  label: "Support",
                  icon: <Shield className="w-4 h-4" />,
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <div className="text-2xl font-bold text-blue-950">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction - Enhanced Layout */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-amber-400 rounded-lg rotate-12 opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-600 rounded-full opacity-10"></div>

              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-6">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700">
                    Välkommen till Rahila Travel
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-blue-950 leading-tight">
                  Vi skapar
                  <span className="block text-transparent bg-gradient-to-r from-amber-500 to-blue-600 bg-clip-text">
                    minnesvärda resor
                  </span>
                </h2>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    På Rahila Travel tror vi att varje resa berättar en unik
                    historia. Med en passion för upptäcktslust och ett brinnande
                    engagemang för kvalitet, förvandlar vi dina resedrömmar till
                    verkliga, oförglömliga upplevelser.
                  </p>

                  <div className="p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
                    <p className="text-gray-700 italic">
                      "Att resa är att leva, och hos oss blir varje resa ett
                      kapitel i ditt livs berättelse."
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
                      <div>
                        <div className="font-semibold text-blue-950">
                          Rahila, Grundare
                        </div>
                        <div className="text-sm text-gray-500">
                          Resekonsult sedan 15 år
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/office.png"
                      alt="Rahila Travel kontor"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="aspect-[3/2] relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-amber-500/20"></div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/2] relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-600/20"></div>
                  </div>
                  <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/team.jpg"
                      alt="Rahila Travel team"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-950">
                      Bästa Resebyrån 2023
                    </div>
                    <div className="text-xs text-gray-500">
                      Svenska Resepriset
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-950 mb-6">
              Vårt <span className="text-amber-500">hjärta</span> och vår{" "}
              <span className="text-blue-600">själa</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Vi bygger varje resa på grundstenar av tillit, expertis och
              passion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Vilka vi är",
                description:
                  "En pålitlig resepartner med lång erfarenhet av att skapa personliga reselösningar.",
                color: "bg-blue-600",
                delay: "0",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Vårt uppdrag",
                description:
                  "Att erbjuda sömlösa, inspirerande och skräddarsydda reseupplevelser.",
                color: "bg-amber-500",
                delay: "100",
              },
              {
                icon: <Map className="w-8 h-8" />,
                title: "Vad vi gör",
                description:
                  "Kompletta resetjänster från skräddarsydda paket till visumhjälp.",
                color: "bg-blue-600",
                delay: "200",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Vår vision",
                description:
                  "Att vara en ledande resebyrå känd för exceptionell service.",
                color: "bg-amber-500",
                delay: "300",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ animationDelay: `${item.delay}ms` }}
              >
                <div
                  className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section with Interactive Cards */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
              <Map className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-950">
                Vad vi erbjuder
              </h2>
              <p className="text-gray-600 mt-2">
                Kompletta lösningar för alla dina resbehov
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skräddarsydda Paket",
                items: [
                  "Strandresor",
                  "Kulturella upplevelser",
                  "Äventyr",
                  "Lyxresor",
                ],
                color: "from-amber-400 to-amber-500",
                icon: <Compass className="w-6 h-6" />,
              },
              {
                title: "Bokning & Logistik",
                items: [
                  "Flyg & Boende",
                  "Transport",
                  "Försäkringar",
                  "Betalningslösningar",
                ],
                color: "from-blue-500 to-blue-600",
                icon: <Calendar className="w-6 h-6" />,
              },
              {
                title: "Specialresor",
                items: [
                  "Gruppresor",
                  "Företagsresor",
                  "Pilgrimsfärder",
                  "Hållbara resor",
                ],
                color: "from-emerald-500 to-emerald-600",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div
                  className={`bg-gradient-to-br ${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Utforska tjänster
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Enhanced */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <Star className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-blue-700">
                Fördelar
              </span>
            </div>
            <h2 className="text-4xl font-bold text-blue-950 mb-6">
              Varför <span className="text-amber-500">kunderna</span> väljer oss
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Features */}
            <div className="space-y-8">
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Personlig service",
                  description:
                    "Varje resa anpassas efter din unika stil, schema och budget.",
                  stats: "100% skräddarsytt",
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "Expertkunskap",
                  description:
                    "Gedigen destinationskunskap och starka branschpartnerskap.",
                  stats: "80+ destinationer",
                },
                {
                  icon: <Target className="w-6 h-6" />,
                  title: "Kvalitetsengagemang",
                  description:
                    "Sömlös och stressfri reseupplevelse från start till mål.",
                  stats: "99% nöjda kunder",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Pålitlig support",
                  description: "Vi finns med dig före, under och efter resan.",
                  stats: "24/7 support",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="text-blue-600">{feature.icon}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-blue-950 text-lg">
                        {feature.title}
                      </h3>
                      <span className="text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Testimonial */}
            <div className="bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-12 text-white">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6">
                  Kundernas röster talar sitt tydliga språk
                </h3>
              </div>

              <div className="space-y-8">
                {[
                  {
                    text: "Den bästa reseupplevelsen någonsin! Allt var perfekt arrangerat.",
                    author: "Anna S.",
                    trip: "Bali 2023",
                  },
                  {
                    text: "Professionellt och personligt. Rahila Travel överträffade alla förväntningar.",
                    author: "Markus L.",
                    trip: "Japan 2024",
                  },
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-white/90 italic mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {testimonial.author}
                      </span>
                      <span className="text-sm text-white/70">
                        {testimonial.trip}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">4.9/5</div>
                    <div className="text-sm text-white/70">
                      Genomsnittligt betyg
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-white/70">Recensioner</div>
                  </div>
                  <button className="px-6 py-3 bg-white text-blue-950 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Läs fler recensioner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          <div className="relative z-10 p-12 md:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                <Compass className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Bli nästa nöjda resenär
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Redo för ditt
                <span className="block text-amber-300">nästa äventyr?</span>
              </h2>

              <p className="text-white/90 text-xl mb-12 leading-relaxed">
                Oavsett om du planerar din nästa resa eller drömmer om den
                första – vi gör den extraordinär. Låt oss upptäcka världen
                tillsammans.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group px-8 py-4 bg-white text-blue-950 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Boka kostnadsfri konsultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300">
                  Hitta inspiration
                </button>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {[
                  { icon: "✈️", text: "Inga dolda avgifter" },
                  { icon: "🛡️", text: "Full resförsäkring" },
                  { icon: "⭐", text: "Bästa prispengar" },
                  { icon: "📞", text: "Personlig reskonsult" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm text-white/80">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;

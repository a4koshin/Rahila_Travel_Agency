"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/Services";
import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/navigation";
import { whyChooseRahilaTravel } from "@/lib/choose";
import Link from "next/link";
const HomePage = () => {
  const [emailMessage, setEmailMessage] = useState<string>("");
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-8">
        {/* Left Content */}
        <div className="flex-1 w-full max-w-2xl text-center lg:text-left px-4 sm:px-6">
          <div className="relative w-40 ml-45">
            <Image
              src="/arrplane.png"
              alt="arrow"
              width={800}
              height={800}
              className="lg:absolute lg:-mt-20 lg:ml-71"
            />
          </div>
          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 mb-4 md:mb-6">
            Your <span className="text-amber-500">Journey</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-amber-500">Begins</span>
              <span className="absolute bottom-1.5 xs:bottom-2 left-0 w-full h-2 xs:h-3 bg-gradient-to-r from-amber-100 to-amber-50 -rotate-1 z-0"></span>
            </span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-950">Here</span>
              <span className="absolute bottom-1.5 xs:bottom-2 left-0 w-full h-2 xs:h-3 bg-gradient-to-r from-blue-50 to-blue-100 -rotate-1 z-0"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            <span className="font-semibold text-amber-600">
              {" "}
              At Rahila travel agency
            </span>{" "}
            we craft personalized travel experiences with precision, expertise,
            and genuine passion—ensuring every journey is seamless, inspiring,
            and tailored to your unique needs. Explore the world with
            confidence, comfort, and peace of mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex xs:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <Button
              asChild
              className="bg-amber-500 hover:bg-amber-600 text-white
             px-2 sm:px-4
             py-6 sm:py-6
             text-lg sm:text-sm
             font-semibold
             shadow-lg hover:shadow-xl
             transition-all duration-300
             "
            >
              <Link href="/kontaktaoss">
                Book your trip <span className="animate">✈</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-2 border-amber-500 text-amber-500
             hover:bg-amber-500 hover:text-white
             px-2 sm:px-2
             py-6 sm:py-6
             text-lg sm:text-sm
             font-medium
             transition-all duration-300
            "
            >
              Talk to Our Expert
            </Button>
          </div>
          {/* Features List */}
          <div className="hidden sm:flex flex-wrap gap-3 mb-6 max-w-lg">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
              ✓ Personalized Itineraries
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">
              ✓ 24/7 Support
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
              ✓ Best Price Guarantee
            </span>
          </div>
        </div>

        <div className="w-full lg:w-5/12 xl:w-1/3 max-w-lg mx-auto">
          <div className="relative group">
            <div className="aspect-square lg:aspect-[3/4] xl:aspect-[4/5] relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl">
              <Image
                src="/hero.png"
                alt="Caalami Group construction project showcasing modern equipment and professional team"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400/10 rounded-full blur-xl" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-16 px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="font-bold text-3xl md:text-4xl text-blue-950 mb-4">
            Your journey
          </h1>
          <p className="font-medium text-md text-amber-600 max-w-2xl mx-auto">
            We help you travel safely and easily, from start to finish.
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-7xl mx-auto text-base">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/dubia.jpeg"
                  alt="Our team providing excellent travel services"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-blue-950">
              Your journey starts here
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                At Rahila Travel, we believe that every journey tells a story –
                and that every traveler deserves unforgettable experiences.
              </p>
              <p className="text-lg leading-relaxed">
                With a passion for discovery and a strong commitment to quality,
                we are a full-service travel agency that turns your travel
                dreams into reality.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button
                onClick={() => router.push("/omoss")}
                className="group bg-amber-400 text-white px-8 py-6 rounded-xl text-lg font-semibold hover:bg-amber-500 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  learn more about us →
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Services Section */}

      <div className="py-16 px-4 md:px-8">
        {/* Heading */}
        <div className="flex flex-col text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl text-blue-950 mb-3">
            Quick Services
          </h1>
          <p className="font-medium text-lg text-amber-600">
            Fast, reliable solutions for all your travel needs
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
        </div>
        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>

      {/* WHy choose us */}

      <div className="py-16 px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl text-blue-950 mb-3">
            Why Choose Us
          </h1>
          <p className="font-medium text-lg text-amber-600">
            Fast, reliable solutions for all your travel needs
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {whyChooseRahilaTravel.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative bg-gradient-to-br from-white to-amber-50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400 text-blue-950 text-2xl transition-all duration-300">
                    <Icon />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-blue-950 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA section */}

      <div className="py-16 px-4 md:px-8">
        <div className="text-center mb-24 bg-blue-950 px-4 md:px-8  py-16 rounded-2xl">
          {/* Enhanced Header */}
          <div className="inline-flex items-center gap-2 text-gray-100 mb-4">
            <div className="w-8 h-0.5 bg-gray-100"></div>
            <span className="text-sm font-semibold uppercase tracking-wider">
              Contact us
            </span>
            <div className="w-8 h-0.5 bg-gray-100"></div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-100 mb-4">
            We are here to help you with your next trip
          </h2>

          {/* Subtext */}
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us and become part of our travel community. We
            help help you plan a safe, easy and memorable trip - no matter what
            purpose.
          </p>

          {/* Enhanced Input + Button Container */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 max-w-lg mx-auto">
            {/* Input Field */}
            <div className="flex-1">
              <input
                type="text"
                value={emailMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailMessage(e.target.value)
                }
                placeholder="write your message"
                className="w-full h-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-100 focus:outline-none focus:ring focus:ring-white focus:bg-white/20 transition-all duration-300 hover:bg-white/15"
              />
            </div>

            {/* Button */}
            <a
              href={`mailto:agent@rahilatravel.com?subject=Message%20to%20from%20–%20the%20Your%20Website&body=${encodeURIComponent(
                emailMessage
              )}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-amber-400 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-500 hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap min-w-[140px]"
            >
              Contact us
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Render the Model component */}
      {/* <Model isOpen={isModelOpen} onClose={() => setIsModelOpen(false)} /> */}
    </div>
  );
};

export default HomePage;

// import { Button } from "@/components/ui/button";
// import React from "react";
// import Image from "next/image";

// const HomePage = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-white overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-50"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-50 to-transparent rounded-full blur-3xl opacity-30"></div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8 relative z-10">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
//               <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
//               ✨ Premium Travel Experiences
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
//               <span className="block text-gray-900">Discover the</span>
//               <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
//                 World with Confidence
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
//               Plan unforgettable journeys tailored just for you. From
//               breathtaking destinations to seamless travel experiences, we take
//               care of every detail so you can travel stress-free and focus on
//               making memories.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-4 pt-4">
//               <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                 🗺️ Explore Destinations
//               </Button>
//               <Button
//                 variant="outline"
//                 className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-xl hover:border-orange-300 transition-all duration-300 hover:-translate-y-1"
//               >
//                 📅 Plan Your Trip
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="flex flex-wrap gap-8 pt-12">
//               {[
//                 { number: "50K+", label: "Happy Travelers" },
//                 { number: "150+", label: "Destinations" },
//                 { number: "24/7", label: "Support" },
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-bold text-gray-900">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="relative">
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl transform lg:hover:scale-105 transition-transform duration-500">
//               <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent mix-blend-overlay"></div>
//               <Image
//                 src="/hero.jpeg"
//                 alt="Beautiful travel destination"
//                 width={600}
//                 height={600}
//                 priority
//                 className="w-full h-[500px] object-cover"
//               />
//             </div>

//             {/* Floating Card 1 */}
//             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                   ✈️
//                 </div>
//                 <div>
//                   <div className="font-semibold text-gray-900">
//                     Best Price Guarantee
//                   </div>
//                   <div className="text-sm text-gray-500">No hidden charges</div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Card 2 */}
//             <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
//                   ⭐
//                 </div>
//                 <div>
//                   <div className="font-semibold text-gray-900">
//                     5-Star Rated
//                   </div>
//                   <div className="text-sm text-gray-500">By 10K+ travelers</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

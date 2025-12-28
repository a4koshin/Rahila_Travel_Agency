"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/Services";
import ServiceCard from "@/components/ServiceCard";
import { Model } from "@/components/Model";
import { useRouter } from "next/navigation";
const HomePage = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isModelOpen, setIsModelOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 gap-12 items-center">
        {/* TEXT SECTION (TOP) */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-blue-950"> Flight Tickets </span> <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Visa Services You Can Trust
            </span>
          </h1>
        </div>
        {/* IMAGE SECTION */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-7xl overflow-hidden rounded-[140px] aspect-[18/7]">
            <Image
              src="/hero22.png"
              alt="Beautiful travel destination"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 lg:-mt-22">
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-6 rounded-xl shadow-lg hover:scale-105 transition-all">
            Explore Destinations
          </Button>

          <Button
            variant="outline"
            className="border border-orange-200 text-amber-600 hover:bg-orange-50 px-8 py-6 rounded-xl hover:scale-105 transition-all"
          >
            Plan Your Trip
          </Button>
        </div>
        <div className="w-full text-center ">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Trusted by 10,000+ travelers worldwide
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="py-16 px-4 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="font-bold text-4xl md:text-5xl text-blue-950 mb-4">
            Who We Are
          </h1>
          <p className="font-medium text-lg text-amber-600 max-w-2xl mx-auto">
            Your trusted partner for seamless travel experiences worldwide
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
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-medium text-lg">
                    10+ Years of Excellence
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold text-amber-600">5000+</div>
                <div className="text-blue-950 font-medium">Happy Travelers</div>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-blue-950">
              Your Journey, Our Commitment
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                We are a dedicated team of travel experts passionate about
                making your journey unforgettable. With over a decade of
                experience, we specialize in providing comprehensive travel
                solutions including flight bookings, visa processing, and
                personalized travel planning.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to simplify travel by offering reliable,
                transparent, and cost-effective services. We understand that
                every journey is unique, which is why we tailor our services to
                meet your specific needs and preferences.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: "✓", text: "Expert Travel Consultants" },
                { icon: "✓", text: "24/7 Customer Support" },
                { icon: "✓", text: "Best Price Guarantee" },
                { icon: "✓", text: "100% Visa Success Rate" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-600 font-bold">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-blue-950 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-6 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Learn More About Us
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
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
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="font-bold text-3xl text-blue-950 mb-8">
              Your Trusted Travel Partner
            </h2>

            {[
              {
                icon: "✓",
                title: "Best Price Guarantee",
                desc: "We promise the lowest fares for flights and visa services",
              },
              {
                icon: "⚡",
                title: "Fast Processing",
                desc: "Quick visa approvals and instant flight ticket confirmation",
              },
              {
                icon: "🛡️",
                title: "100% Secure",
                desc: "Your documents and payments are completely protected",
              },
              {
                icon: "👨‍💼",
                title: "Expert Support",
                desc: "24/7 assistance from travel professionals",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-blue-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Stats */}
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl lg:text-4xl font-bold text-blue-950">
                  5000+
                </div>
                <div className="text-gray-600 mt-2">Visas Processed</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl lg:text-4xl font-bold text-amber-600">
                  98%
                </div>
                <div className="text-gray-600 mt-2">Success Rate</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl lg:text-4xl font-bold text-blue-950">
                  24/7
                </div>
                <div className="text-gray-600 mt-2">Support Available</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="text-2xl lg:text-4xl font-bold text-amber-600">
                  50+
                </div>
                <div className="text-gray-600 mt-2">Countries Covered</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-center text-white">
              <p className="text-md lg:text-xl font-semibold">
                Ready to start your journey?
              </p>
              <button
                onClick={() => router.push("/kontaktaoss")}
                className="mt-4 bg-white text-amber-600 font-bold px-8 py-2 lg:px-6 lg:py-3 rounded-lg hover:bg-gray-100 hover-scale-105 transition"
              >
                <span className="text-sm">Get Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}

      <div className="py-16 px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-bold text-4xl md:text-5xl text-blue-950 mb-3">
            Get in touch
          </h1>
          <p className="font-medium text-lg text-amber-600">
            Fast, reliable solutions for all your travel needs
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
        </div>

        {/*  */}
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

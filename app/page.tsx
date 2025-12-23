import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          {/* Heading with gradient */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Discover the{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              World with Confidence
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed">
            Plan unforgettable journeys tailored just for you. From breathtaking
            destinations to seamless travel experiences, we take care of every
            detail so you can travel stress-free and focus on making memories.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center items-center gap-2  pt-4">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Explore Destinations
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-xl transition-all"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>

        {/* Image with modern styling */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <Image
              src="/hero.jpeg"
              alt="Beautiful travel destination"
              width={600}
              height={600}
              priority
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
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

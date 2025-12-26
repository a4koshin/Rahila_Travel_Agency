import React from "react";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
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
              Welcome to Rahila Travel Agency
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                Rahila Travel Agency is a trusted travel partner dedicated to
                helping individuals, families, and businesses travel with
                confidence and ease. We provide reliable travel solutions,
                customized itineraries, and exceptional customer service to make
                every journey seamless and unforgettable.
              </p>
              <p>
                From flight bookings and visa assistance to hotel reservations
                and guided tours, we focus on delivering stress-free travel
                experiences. Through personalized planning, expert guidance, and
                attention to detail, we help our clients discover new
                destinations, cultures, and opportunities around the world.
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
        {/* Our Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Our Mission */}
          <div className="group bg-white rounded-2xl p-8 transition-all duration-300 border border-amber-100 hover:border-amber-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-400 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our mission is to inspire people to explore the world by
              delivering seamless, meaningful, and enriching travel experiences
              tailored to every traveler’s dreams. We curate exclusive,
              high-quality journeys through expert planning and personalized
              service while promoting responsible tourism that respects local
              cultures and the environment.
            </p>
            <p className="text-gray-700 text-lg">
              Creating smooth, memorable, and affordable travel experiences for
              every journey.
            </p>
          </div>

          {/* Our Vision */}
          <div className="group bg-white rounded-2xl p-8 transition-all duration-300 border border-amber-100 hover:border-amber-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-950 rounded-xl">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a leading travel agency that connects cultures, broadens
              perspectives, and makes travel accessible to everyone. We aim to
              be the first choice for travelers seeking trust, quality, and
              inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AboutPage;

import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-blue-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative mb-12 text-center">
          {/* Decorative elements */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
          </div>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-70"></div>
          </div>

          {/* Badge/Logo indicator */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full blur-md opacity-40"></div>
              <div className="relative bg-gradient-to-br from-amber-500 to-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                Our Story
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 bg-clip-text text-transparent tracking-tight">
            Crafting Excellence,
            <span className="block mt-2">Building Trust</span>
          </h1>

          {/* Subheading */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We're more than just a company – we're passionate innovators
              dedicated to
              <span className="font-semibold text-amber-600">
                {" "}
                delivering exceptional value
              </span>
              and creating meaningful impact through every project we undertake.
            </p>

            {/* Stats or highlights
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-900">10+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-500">Projects Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-900">98%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-900">50+</div>
                <div className="text-sm text-gray-500">Team Members</div>
              </div>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                Meet Our Team
              </button>
              <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300">
                View Our Work
              </button>
            </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

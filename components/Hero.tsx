"use client";
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-8 pt-16 md:pt-8 bg-background">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--primary-foreground)' }}>
          Analyzing Data, Protecting Animals !
        </h1>
        <p className="text-lg mb-4 text-muted-foreground">
          Solving the age-related complications in animals giving best analysis of data and predicting !
        </p>
        <div className="flex gap-4 mb-2"> {/* Reduced margin-bottom */}
          <button className="bg-primary text-primary-foreground py-3 px-5 rounded-lg shadow hover:shadow-lg transition duration-300 text-lg">
            Analyse and Protect Now !
          </button>
          <button className="border border-primary text-primary py-3 px-5 rounded-lg shadow hover:shadow-lg transition duration-300 text-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 flex justify-center mt-4 md:mt-0">
        <div className="relative overflow-hidden rounded-[2rem] shadow-lg">
          <Image
            src="/assets/Hero_Im.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
        </div>
    </div>
  );
};

export default Hero;

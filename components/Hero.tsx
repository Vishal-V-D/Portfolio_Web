import { FaLocationArrow, FaEye } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-center">
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Hello, I'm Vishal V D , a skilled software engineer and cybersecurity maven."
            className="text-left text-[32px] sm:text-[40px] md:text4xl lg:text-6xl"
          />

          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
          As a passionate advocate for digital security and innovation, I thrive on the dynamic challenges of the tech world. With a robust background in software engineering and a keen focus on cybersecurity, I am dedicated to crafting resilient solutions that propel businesses forward securely and efficiently.
          </p>

          <div className="flex space-x-4">
            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="Myresume.pdf" target="_blank" >
              <MagicButton
                title="View Resume"
                icon={<FaEye />}
                position="right"
              />
            </a>
          </div>
        </div>

        {/* Add Image with Saturn-like Ring */}
        <div className="mt-10 lg:mt-0 relative flex justify-center items-center lg:pl-20">
        <div className="w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 relative">

    {/* Saturn-like Ring */}
    <svg viewBox="0 0 100 100" className="w-full h-full absolute z-0">
      <circle cx="50" cy="50" r="52" stroke="cyan" strokeWidth="1" fill="none" />
    </svg>

    {/* Image */}
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="/profile.png"
        alt="Profile"
        className="rounded-full w-full h-full object-cover"
        style={{ clipPath: "circle(50% at 50% 45%)" }}
      />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;

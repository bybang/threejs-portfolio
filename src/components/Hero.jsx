import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative h-screen w-full mx-auto">
      <div
        className={`absolute flex flex-row items-start gap-5 top-[120px] inset-0 mx-auto max-w-7xl ${styles.paddingX}`}
      >
        {/* Dot Gradient Shape */}
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Title Text */}
        <div>
          <h1 className={`text-white ${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Josh</span>
          </h1>
          <p className={`text-white-100 mt-2 ${styles.heroSubText}`}>
            I develop 3D visuals, user <br className="hidden sm:block" />
            interfaces and web/mobile applications
          </p>
        </div>
      </div>
      {/* Computer */}
      <ComputersCanvas />

      {/* little motion toggle button */}
      <div className="absolute flex items-center justify-center w-full bottom-32 xs:bottom-10">
        <a href="#about">
          <div className="flex items-start justify-center border-4 border-secondary p-2 w-[35px] h-[64px] rounded-3xl">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

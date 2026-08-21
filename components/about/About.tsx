"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const TECH_STACK = [
  "Kali Linux",
  "Python",
  "Nmap",
  "Burp Suite",
  "Wireshark",
  "Docker",
];

function TechPill({
  tech,
  index,
  inView,
}: {
  tech: string;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-5 py-2.5 rounded-xl text-sm font-bold tracking-wider cursor-default select-none"
      style={{
        border: "1px solid #a3151533",
        backgroundColor: hovered ? "#a31515" : "#ffffff",
        color: hovered ? "#ffffff" : "#a31515",
        borderColor: "#a31515",
        boxShadow: hovered
          ? "0 8px 20px rgba(163,21,21,0.30)"
          : "0 1px 2px rgba(0,0,0,.05)",

        opacity: inView ? 1 : 0,
        translate: inView ? "0 0" : "0 20px",

        transitionProperty:
          "background-color, color, box-shadow, opacity, translate",
        transitionDuration:
          "500ms,500ms,500ms,500ms,600ms",
        transitionDelay: `0ms,0ms,0ms,${
          1.5 + index * 0.07
        }s,${0.35 + index * 0.05}s`,

        animation: `pillFloat ${
          2.4 + (index % 3) * 0.2
        }s ease-in-out ${index * 0.80}s infinite`,
      }}
    >
      {tech}
    </div>
  );
}

export default function About() {
  const stackRef = useRef<HTMLDivElement>(null);
  const [stackInView, setStackInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStackInView(true);
      },
      { threshold: 0.25 }
    );

    if (stackRef.current) observer.observe(stackRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#fefefefd] py-24"
    >
      {/* LEFT HANGING WEB */}
      <motion.div
        initial={{ y: -320, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
       transition={{
  type: "spring",
  stiffness: 55,
  damping: 5,
  mass: 1.2,
}}
        className="absolute top-[-150px] left-[-5%] md:left-[2%] flex flex-col items-center pointer-events-none"
      >
        <div className="h-[250px] md:h-[350px] w-px bg-gradient-to-b from-transparent to-gray-300" />

        <motion.div
          animate={{ rotate: [0,360], y: [0, -8, 0] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/spider/web-top.png"
            alt="web"
            width={500}
            height={500}
            className="w-[400px] md:w-[400px] object-contain opacity-20"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT HANGING WEB */}
      <motion.div
        initial={{ y: -320, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
  type: "spring",
  stiffness: 55,
  damping: 5,
  mass: 1.2,
  delay: 0.5,
}}
        className="absolute top-[-80px] right-0 md:right-20 z-10 flex flex-col items-center pointer-events-none"
      >
        <div className="h-[200px] md:h-[300px] w-px bg-gradient-to-b from-transparent to-gray-300" />

        <motion.div
          animate={{ rotate: [0,360], y: [0, 8, 0] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image
            src="/spider/web-bottom.png"
            alt="web"
            width={500}
            height={500}
            className="w-[300px] md:w-[300px] object-contain opacity-20 -mt-8"
          />
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="flex-1 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 2 }}
              className="inline-flex items-center gap-3 text-[#A31515] font-bold uppercase text-xs md:text-sm tracking-[0.2em]"
            >
              {/* SAME IMAGE AS MARQUEE */}
              <Image
                src="/spider/spider-card.png"
                alt="Spider"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              Behind The Mask
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 1.6 }}
              className="mt-5 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase italic text-[#07142B]"
              style={{ textShadow: "2px 2px 0 rgb(252,165,165)" }}
            >
              MR. AMAN.
            </motion.h2>

            <div className="mt-8 flex flex-col gap-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 1 }}
              >
                I'm Aman Shukla, a BCA graduate passionate about Cloud Computing,
                AI and Cybersecurity.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 1.2 }}
              >
                I enjoy building modern web experiences, exploring AWS cloud
                technologies and solving real-world security challenges.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 1.3 }}
              >
                My goal is to become an AI & Cloud Software Developer who builds
                practical products with impactful user experiences.
              </motion.p>
            </div>

            {/* PRIMARY TECH STACK */}
            <div className="mt-10" ref={stackRef}>
              <h3 className="inline-block border-b border-gray-300 pb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                Primary Tech Stack
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {TECH_STACK.map((tech, index) => (
                  <TechPill
                    key={tech}
                    tech={tech}
                    index={index}
                    inView={stackInView}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT HANGING PROFILE */}
          <div className="relative flex min-h-[550px] w-full flex-1 items-start justify-center pt-0">
            <motion.div
              initial={{ y: -750, opacity: 0, rotate: 0 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
  type: "spring",
  stiffness: 75,
  damping: 8,
  mass: 1.2,
  delay: .90,
}}
              className="group z-30 flex flex-col items-center"
            >
              {/* Thread */}
              <div className="h-[200px] w-[2px] bg-gradient-to-b from-transparent via-[#A31515]/60 to-[#A31515] md:h-[350px]" />

              {/* Hanging Circle */}
              <motion.div
  animate={{
    rotate: [-2, 2, -2],
  }}
  transition={{
    duration: 3.8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{ transformOrigin: "50% 0%" }}
  className="relative h-64 w-64 md:h-[340px] md:w-[340px]
             rounded-full border-[6px] border-[#A31515]
             bg-white p-2 shadow-2xl"
>
  <Image
    src="/spider/aman.png"
    alt="Aman"
    fill
    className="rounded-full object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
  />
</motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
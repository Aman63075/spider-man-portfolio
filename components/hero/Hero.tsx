"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState,} from "react";

export default function Hero() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  
  return (
    <section
      id="hero"
      className="relative h-[100svh] overflow-hidden bg-[#F7F6F2] md:h-screen"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left ,
          y: e.clientY - rect.top ,
        });
      }}
      onMouseLeave={() => setPos({ x: -300, y: -300 })}
    >
      {/* Floating Webs */}
      <Image
        src="/spider/web-top.png"
        alt="Top Web"
        width={280}
        height={280}
        style={{ width: "280px", height: "auto" }}
        className="absolute top-0 left-0 z-20 opacity-50 animate-webLeft pointer-events-none select-none"
      />

      <Image
        src="/spider/web-bottom.png"
        alt="Bottom Web"
        width={300}
        height={300}
        style={{ width: "300px", height: "auto" }}
        className="absolute bottom-0 right-0 z-20 opacity-50 animate-webRight pointer-events-none select-none"
      />

    

      {/* Left Text */}
      <div className="relative z-30 flex min-h-screen items-center px-4 sm:px-6 md:px-20">
        <div className="max-w-xl">
          <motion.span
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-3 block text-[11px] font-bold uppercase tracking-[.2em] text-red-500 sm:text-[13px]"
          >
            Your Friendly Neighborhood Engineer
          </motion.span>

          <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-[48px] font-black italic uppercase leading-[.9] sm:text-[56px] md:text-[90px] "
              style={{
                textShadow:
                  "4px 4px 0 #EF4444, 7px 7px 0 #A31515",
              }}
            >
              MR.
              <br />
              AMAN.
            </motion.h1>


          <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4"
            >
              <a
                href="#projects"
                className="rounded-xl border border-red-700 bg-[#A31515] px-8 py-4 text-[13px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#871313] hover:shadow-[0_10px_20px_rgba(163,21,21,.4)]"
              >
                Explore Projects
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-[#111] px-6 py-4 text-[13px] font-bold uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_10px_20px_rgba(0,0,0,.35)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Resume
              </a>
            </motion.div>
        </div>
      </div>

      {/* Spider Hero */}
      {/* <div className="absolute inset-0 z-10 flex items-end justify-center">
        <div
          className="relative h-[120vh] w-300 -translate-y-30"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          }}
          onMouseLeave={() => setPos({ x: -300, y: -300 })}
        > */}
          {/* Aman BACK */}
          <Image
            src="/spider/aman.png"
            alt="Aman"
            fill
            sizes="1000px"
            className="object-contain object-bottom scale-100"
          />

          {/* Spider FRONT */}
          <Image
            src="/spider/spider-man.png"
            alt="Spider-Man"
            fill
            priority
            sizes="1000px"
            className="object-contain object-bottom scale-100"
            style={{
  WebkitMaskImage: `radial-gradient(
    180px 180px at ${pos.x}px ${pos.y}px,
    transparent 0%,
    rgba(0,0,0,0.03) 35%,
    rgba(0,0,0,0.18) 55%,
    rgba(0,0,0,0.45) 72%,
    black 100%
  )`,
  maskImage: `radial-gradient(
    180px 180px at ${pos.x}px ${pos.y}px,
    transparent 0%,
    rgba(0,0,0,0.03) 35%,
    rgba(0,0,0,0.18) 55%,
    rgba(0,0,0,0.45) 72%,
    black 100%
  )`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
}}
          />

          {/* Cursor Ring */}
         {/* Cursor Ring */}
<div
  
  style={{
    width: 120,
    height: 120,
    left: pos.x,
    top: pos.y,
    transform: "translate(-50%, -50%)",
    border: "1px solid rgba(255,255,255,0.95)",
    background: "transparent",
    boxShadow: "0 0 12px rgba(255,255,255,0.35)",
  }}
/>
        {/* </div> */}
      {/* // </div> */}
    </section>
  );
}

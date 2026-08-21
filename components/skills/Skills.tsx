"use client";

import Image from "next/image";
import { useState } from "react";

const SKILLS = [
  ["KALI LINUX", "SECURITY OS", "PROFICIENT"],
  ["NMAP", "NETWORK SCANNING", "PROFICIENT"],
  ["BURP SUITE", "WEB APPLICATION TESTING", "PROFICIENT"],
  ["OWASP / VAPT", "WEB SECURITY", "PROFICIENT"],
  ["DOCKER & DEV", "TOOLS", "PROFICIENT"],
  ["PYTHON / AI", "LANGUAGES", "PROFICIENT"],
  ["GIT & GITHUB", "TOOLS", "ADVANCED"],
  ["TCP/IP & NETWORKING", "NETWORKING", "ADVANCED"],
  ["SURICATA", "THREAT INTELLIGENCE", "PROFICIENT"],
  ["WIRESHARK", "NETWORK ANALYSIS", "PROFICIENT"],
];

function SkillCard({
  name,
  cat,
  level,
  index,
}: {
  name: string;
  cat: string;
  level: string;
  index: number;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative flex items-center justify-between overflow-hidden rounded-xl border border-gray-200 bg-[#F9FAFB]/90 px-5 py-4 cursor-pointer"
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transitionProperty:
          "transform,border-color,box-shadow,opacity,background-color",
        transitionDuration: "300ms,300ms,300ms,500ms,300ms",
        transitionDelay: `${index * 70}ms`,
        borderColor: hover ? "#A31515" : "#E5E7EB",
        boxShadow: hover
          ? "0 8px 20px rgba(163,21,21,.15)"
          : "0 1px 2px rgba(0,0,0,.05)",
        transformOrigin: "center",
      }}
    >
      {/* Red Fill */}
      <div
        className="absolute inset-0"
        style={{
          background: "#A31515",
          transform: hover ? "translateX(0%)" : "translateX(-100%)",
          transition: "transform .4s ease-out",
        }}
      />

      {/* Left */}
      <div className="relative z-10 flex items-center gap-3">
        <div
          className="h-2 w-2 rounded-full"
          style={{
            background: hover ? "#fff" : "#A31515",
            boxShadow: hover
              ? "0 0 8px rgba(255,255,255,.7)"
              : "0 0 8px rgba(163,21,21,.6)",
            transition: "all .3s",
          }}
        />

        <div>
          <span
            className="block text-[15px] font-black uppercase"
            style={{
              color: hover ? "#fff" : "#111827",
              transition: "color .3s",
            }}
          >
            {name}
          </span>

          <span
            className="text-[10px] font-semibold uppercase tracking-[.15em]"
            style={{
              color: hover ? "#E5E7EB" : "#9CA3AF",
              transition: "color .3s",
            }}
          >
            {cat}
          </span>
        </div>
      </div>

      {/* Badge */}
      <span
        className="relative z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
        style={{
          background: hover ? "#000" : "#fff",
          color: hover ? "#fff" : "#374151",
          boxShadow: "0 1px 2px rgba(0,0,0,.05)",
          transition: "all .3s",
        }}
      >
        {level}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden border-t border-gray-200 bg-white px-6 py-20"
    >
      {/* Background Web */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/spider/web-top.png"
          alt="web"
          width={700}
          height={700}
          className="h-[700px] w-[700px] object-contain opacity-[0.04] mix-blend-multiply"
        />
      </div>

      {/* Hanging Spider */}
      <div className="pointer-events-none absolute right-16 top-0 z-10 hidden flex-col items-center md:flex">
        <div className="h-20 w-[2px] bg-gradient-to-b from-transparent to-gray-400 opacity-60" />

        <div className="animate-spidey-swing origin-top">
          <Image
            src="/spider/spydy_hang-Cac1gK30.png"
            alt="Spider"
            width={120}
            height={180}
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[.2em] text-[#A31515]">
            Arsenal & Expertise
          </span>

          <h2
            className="text-4xl font-black uppercase italic text-[#111827] md:text-5xl"
            style={{ textShadow: "2px 2px 0 #FCA5A5" }}
          >
            TECHNICAL SKILLS.
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded bg-[#A31515]" />
        </div>

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {SKILLS.map(([name, cat, level], i) => (
            <SkillCard
              key={name}
              name={name}
              cat={cat}
              level={level}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
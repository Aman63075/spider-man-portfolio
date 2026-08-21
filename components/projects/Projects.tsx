"use client";

import Image from "next/image";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Expense Tracker",
    desc: "AI powered expense management application with analytics dashboard, voice entry and CSV import/export.",
    tags: ["Next.js", "MongoDB", "Chart.js"],
  },
  {
    title: "Spider Portfolio",
    desc: "Interactive cinematic portfolio inspired by Spider-Man with reveal cursor, hanging animations and GSAP style UI.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Cloud Notes",
    desc: "Modern cloud note taking platform with authentication, markdown support and AWS deployment.",
    tags: ["AWS", "Prisma", "TypeScript"],
  },
  {
    title: "Cyber Toolkit",
    desc: "Collection of penetration testing utilities including Nmap automation, Wireshark helpers and VAPT reports.",
    tags: ["Python", "Kali Linux", "Docker"],
  },
];

function ProjectCard({ project, index }: any) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative block overflow-hidden rounded-2xl border border-gray-200 bg-[#F9FAFB]/90 p-6 no-underline transition-all duration-300"
      style={{
        borderColor: hover ? "#A31515" : "#E5E7EB",
        boxShadow: hover
          ? "0 10px 25px rgba(163,21,21,.15)"
          : "0 1px 2px rgba(0,0,0,.05)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        opacity: 1,
        transitionDelay: `${index * 70}ms`,
      }}
    >
      {/* Top Red Bar */}
      <div
        className="absolute left-0 top-0 h-1 w-full bg-[#A31515]"
        style={{
          transform: hover ? "translateX(0)" : "translateX(-100%)",
          transition: "transform .5s ease-out",
        }}
      />

      <div className="mb-3 flex items-start justify-between gap-2">
        <h3
          className="text-[17px] font-black uppercase tracking-tight"
          style={{
            color: hover ? "#A31515" : "#111827",
            transition: "color .3s",
          }}
        >
          {project.title}
        </h3>
      </div>

      <p className="mb-5 text-[13px] font-medium leading-6 text-gray-600">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 border-t border-gray-200/70 pt-3">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="rounded-md border bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide"
            style={{
              borderColor: hover ? "rgba(163,21,21,.3)" : "#E5E7EB",
              color: hover ? "#A31515" : "#6B7280",
              transition: "all .3s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden border-t border-gray-200 bg-white px-6 py-20"
    >
      {/* Background Web */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-end">
        <Image
          src="/spider/web-top.png"
          alt="web"
          width={700}
          height={700}
          className="h-[700px] w-[700px] object-contain opacity-[0.04] mix-blend-multiply"
        />
      </div>

      {/* Standing Spider */}
      <div className="pointer-events-none absolute bottom-0 left-5 z-10 hidden md:block">
        <Image
          src="/spider/spydy_stand-BwBM-zCr.png"
          alt="Spider-Man"
          width={160}
          height={300}
          className="object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,.3)]"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[.2em] text-[#A31515]">
            Featured Works
          </span>

          <h2
            className="text-4xl font-black uppercase italic text-[#111827] md:text-5xl"
            style={{ textShadow: "2px 2px 0 #FCA5A5" }}
          >
            PROJECTS.
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded bg-[#A31515]" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
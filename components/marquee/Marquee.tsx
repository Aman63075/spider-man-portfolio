"use client";

import Image from "next/image";

const topItems = [
  "NETWORK SECURITY",
  "KALI LINUX",
  "SECURITY ANALYST",
  "ETHICAL HACKING",
];

const bottomItems = [
  "KALI LINUX",
  "SECURITY ANALYST",
  "NETWORK SECURITY",
  "ETHICAL HACKING",
];

export default function Marquee() {
  return (
    <section className="relative h-[26vh] min-h-[150px] overflow-hidden bg-white flex items-center justify-center">
      {/* TOP STRIP */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-[60px] w-[110vw] -translate-x-1/2 -translate-y-4 rotate-[4deg] items-center overflow-hidden border-y-[3px] border-black bg-[#B11217] shadow-[0_10px_20px_rgba(0,0,0,.4)]">
        <div className="animate-marquee-left flex w-max items-center">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex items-center">
              {topItems.map((item) => (
                <div key={item} className="flex items-center">
                  <span className="mx-5 whitespace-nowrap text-lg font-black italic uppercase tracking-wider text-white">
                    {item}
                  </span>

                  <Image
                    src="/spider/spider-card.png"
                    alt=""
                    width={90}
                    height={40}
                    className="mx-5 h-10 w-auto"
                  />

                  <Image
                    src="/spider/web-icon.png"
                    alt=""
                    width={42}
                    height={42}
                    className="mx-5 h-8 w-auto"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[60px] w-[110vw] -translate-x-1/2 translate-y-4 -rotate-[4deg] items-center overflow-hidden border-y-[3px] border-[#B11217] bg-[#111] shadow-[0_5px_15px_rgba(0,0,0,.5)]">
        <div className="animate-marquee-right flex w-max items-center">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex items-center">
              {bottomItems.map((item) => (
                <div key={item} className="flex items-center">
                  <span className="mx-5 whitespace-nowrap text-lg font-black italic uppercase tracking-wider text-[#B11217]">
                    {item}
                  </span>

                  <Image
                    src="/spider/spider-card.png"
                    alt=""
                    width={90}
                    height={40}
                    className="mx-5 h-10 w-auto"
                  />

                  <Image
                    src="/spider/web-icon.png"
                    alt=""
                    width={42}
                    height={42}
                    className="mx-5 h-8 w-auto opacity-80"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
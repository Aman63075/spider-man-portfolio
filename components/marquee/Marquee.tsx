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
    <section className="relative h-[22vh] min-h-[130px] overflow-hidden bg-white flex items-center justify-center sm:h-[24vh] sm:min-h-[140px] md:h-[26vh] md:min-h-[150px]">
      {/* TOP STRIP */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-[52px] w-[130vw] -translate-x-1/2 -translate-y-4 rotate-[4deg] items-center overflow-hidden border-y-[3px] border-black bg-[#B11217] shadow-[0_10px_20px_rgba(0,0,0,.4)] sm:h-[56px] sm:w-[120vw] md:h-[60px] md:w-[110vw]">
        <div className="animate-marquee-left flex w-max items-center">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex items-center">
              {topItems.map((item) => (
                <div key={item} className="flex items-center">
                  <span className="mx-3 whitespace-nowrap text-base font-black italic uppercase tracking-wider text-white sm:mx-4 sm:text-lg md:mx-5">
                    {item}
                  </span>

                  <Image
                    src="/spider/spider-card.png"
                    alt=""
                    width={90}
                    height={40}
                    className="mx-3 h-8 w-auto sm:mx-4 sm:h-9 md:mx-5 md:h-10"
                  />

                  <Image
                    src="/spider/web-icon.png"
                    alt=""
                    width={42}
                    height={42}
                    className="mx-3 h-7 w-auto sm:mx-4 sm:h-8 md:mx-5"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="absolute left-1/2 top-1/2 z-10 flex h-[52px] w-[130vw] -translate-x-1/2 translate-y-4 -rotate-[4deg] items-center overflow-hidden border-y-[3px] border-[#B11217] bg-[#111] shadow-[0_5px_15px_rgba(0,0,0,.5)] sm:h-[56px] sm:w-[120vw] md:h-[60px] md:w-[110vw]">
        <div className="animate-marquee-right flex w-max items-center">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex items-center">
              {bottomItems.map((item) => (
                <div key={item} className="flex items-center">
                  <span className="mx-3 whitespace-nowrap text-base font-black italic uppercase tracking-wider text-[#B11217] sm:mx-4 sm:text-lg md:mx-5">
                    {item}
                  </span>

                  <Image
                    src="/spider/spider-card.png"
                    alt=""
                    width={90}
                    height={40}
                    className="mx-3 h-8 w-auto sm:mx-4 sm:h-9 md:mx-5 md:h-10"
                  />

                  <Image
                    src="/spider/web-icon.png"
                    alt=""
                    width={42}
                    height={42}
                    className="mx-3 h-7 w-auto opacity-80 sm:mx-4 sm:h-8 md:mx-5"
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

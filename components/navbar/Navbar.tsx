"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-14 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 border-b border-red-800/50 shadow-[0_4px_30px_rgba(220,38,38,.15)]"
          : "bg-transparent py-4  border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
       <a
  href="#hero"
  className="group text-[30px] font-black italic uppercase tracking-tight"
>
  <span className="text-red-600">A</span>
  <span className="text-white transition-colors duration-300 group-hover:text-red-600">
    MAN.
  </span>
</a>

        {/* Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative pb-2 text-[13px] font-bold uppercase tracking-[.15em] text-gray-400 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-600 after:shadow-[0_0_8px_rgba(220,38,38,.8)] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden border-t border-gray-200 bg-white px-4 py-16 sm:px-6 sm:py-20"
      >
        {/* Background Web */}
<div className="pointer-events-none absolute inset-0 flex items-end justify-start z-0">
  <Image
    src="/spider/web-bottom.png"
    alt="web"
    width={700}
    height={700}
    className="w-[480px] h-[480px] object-contain opacity-[0.04] mix-blend-multiply sm:w-[560px] sm:h-[560px] md:w-[700px] md:h-[700px]"
  />
</div>
        {/* Background Web */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-start">
          <Image
            src="/spider/web-contact.png"
            alt="web"
            width={700}
            height={700}
            className="h-[480px] w-[480px] object-contain opacity-[0.04] mix-blend-multiply sm:h-[560px] sm:w-[560px] md:h-[700px] md:w-[700px]"
          />
        </div>

        {/* Left Instagram */}
        <a
          href="https://www.instagram.com/aman_shukla_a/"
          target="_blank"
          className="absolute left-10 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
        >
          <span className="text-[11px] font-bold uppercase tracking-[.15em] text-[#A31515]">
            CONNECT WITH ME
          </span>

          <Image
            src="/spider/instagram.png"
            alt="Instagram"
            width={44}
            height={44}
            className="object-contain"
          />
        </a>

        {/* Hanging Spider */}
        <div className="pointer-events-none absolute right-16 top-0 z-20 hidden flex-col items-center lg:flex">
          <div className="h-20 w-[2px] bg-gradient-to-b from-transparent to-gray-400 opacity-60" />

          <div className="animate-spidey-swing origin-top">
            <Image
              src="/spider/spydy_hang-Cac1gK30.png"
              alt="Spider"
              width={250}
              height={350}
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#A31515]">
              <Image
                src="/spider/spider-card.png"
                alt="Spider"
                width={16}
                height={16}
              />
              Get In Touch
            </span>

            <h2
              className="text-3xl font-black uppercase italic text-[#111827] sm:text-4xl md:text-5xl"
              style={{ textShadow: "2px 2px 0 #FCA5A5" }}
            >
              CONTACT.
            </h2>

            <div className="mx-auto mt-3 h-1 w-12 rounded bg-[#A31515]" />
          </div>

          {/* Form */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-[#F9FAFB]/90 p-5 sm:p-7 md:p-9">
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="mb-5 grid gap-4 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-bold uppercase tracking-wide text-gray-600">
                      Your Name
                    </label>
                    <input
                      required
                      placeholder="Peter Parker"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-[#A31515] focus:ring-1 focus:ring-[#A31515]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-bold uppercase tracking-wide text-gray-600">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="peter@stark.com"
                      className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-[#A31515] focus:ring-1 focus:ring-[#A31515]"
                    />
                  </div>
                </div>

                <div className="mb-5 flex flex-col gap-2">
                  <label className="text-[12px] font-bold uppercase tracking-wide text-gray-600">
                    Message
                  </label>

                  <textarea
                    required
                    rows={4}
                    placeholder="Let's build something amazing together..."
                    className="resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-[#A31515] focus:ring-1 focus:ring-[#A31515]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#A31515] py-4 text-xs font-bold uppercase tracking-[.1em] text-white shadow-[0_4px_15px_rgba(163,21,21,.3)] transition hover:bg-[#871313] hover:shadow-[0_6px_20px_rgba(163,21,21,.5)]"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#A31515] text-xl font-black text-white">
                  ✓
                </div>

                <h3 className="text-xl font-bold text-[#111827]">
                  Message Sent!
                </h3>

                <p className="mt-2 text-gray-600">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="m-0 border-t border-gray-200 bg-white px-4 py-4 text-center text-sm text-gray-500">
        © 2026 Aman Shukla. All rights reserved.
      </footer>
    </>
  );
}

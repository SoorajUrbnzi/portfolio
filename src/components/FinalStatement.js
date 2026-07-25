"use client";

import Image from "next/image";

export default function FinalStatement() {
  return (
    <section
      id="statement"
      className="relative bg-[#090B14] py-16 px-4 overflow-hidden sm:py-24 sm:px-5"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">

        {/* Main Card */}

        <div className="relative overflow-hidden rounded-[24px] border border-[#4E4AA8]/60 bg-gradient-to-b from-[#3B3578] via-[#1F224A] to-[#111B37] px-5 py-16 sm:rounded-[32px] sm:px-6 sm:py-24 md:px-20">

          {/* Glow */}

          <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7B6DFF]/20 blur-[140px] sm:h-80 sm:w-80" />


          {/* Small Heading */}

          <p className="relative mb-10 text-center text-[11px] tracking-[0.22em] uppercase text-[#35A2FF] font-medium sm:mb-14 sm:text-[13px] sm:tracking-[0.28em]">

            / 09 — Final Statement

          </p>


          {/* Quote */}

          <h2 className="relative mx-auto max-w-4xl text-center font-bold text-white leading-[1.25] text-[30px] sm:text-4xl md:text-6xl">

            &rdquo;Technology changes every day.
            <br />
            Purpose does not.
            <br />
            The products we build may evolve.
            <br />
            The values behind them should never
            <br className="hidden sm:block" />
            change.&rdquo;

          </h2>


          {/* Description */}

          <p className="relative mx-auto mt-10 max-w-2xl text-center text-[#9CA3C4] text-[15px] leading-7 sm:mt-14 sm:text-lg sm:leading-9">

            Thank you for visiting my portfolio. I appreciate your time and hope
            my journey, philosophy, and vision inspire confidence in the work I
            create.

          </p>


          {/* Profile */}

          <div className="relative mt-12 flex flex-col items-center sm:mt-16">

            <div className="rounded-2xl border-2 border-[#5D7CFF] p-[3px] shadow-[0_0_30px_rgba(93,124,255,.35)]">

              <div className="overflow-hidden rounded-xl">

                <Image
                  src="/photo.jpeg"
                  alt="Profile"
                  width={72}
                  height={72}
                  className="h-[72px] w-[72px] object-cover"
                />

              </div>

            </div>


            <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">

              Abhishek

            </h3>


            <p className="mt-2 text-center text-[11px] uppercase tracking-[0.22em] text-[#7E86A8] sm:text-[13px] sm:tracking-[0.28em]">

              Founder, Urbanzi Solutions LLP

            </p>


          </div>


        </div>

      </div>

    </section>
  );
}
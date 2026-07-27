"use client";

import Image from "next/image";

export default function FinalStatement() {
  return (
    <section
      id="statement"
      className="relative overflow-hidden bg-[#090B14] px-4 py-8 sm:px-5 sm:py-12"
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


      <div className="relative mx-auto max-w-6xl">


        {/* Main Card */}

        <div
          className="
          relative
          overflow-hidden
          rounded-[24px]
          border
          border-[#4E4AA8]/60
          bg-gradient-to-b
          from-[#3B3578]
          via-[#1F224A]
          to-[#111B37]
          px-5
          py-10
          sm:rounded-[32px]
          sm:px-8
          sm:py-14
          md:px-20
          "
        >


          {/* Glow */}

          <div
            className="
            absolute
            -top-32
            left-1/2
            h-64
            w-64
            -translate-x-1/2
            rounded-full
            bg-[#7B6DFF]/20
            blur-[140px]
            sm:h-80
            sm:w-80
            "
          />



          {/* Heading */}

          <p
            className="
            relative
            mb-8
            text-left
            sm:text-center
            font-medium
            uppercase
            tracking-[0.28em]
            text-[#35A2FF]
            text-[11px]
            sm:mb-10
            sm:text-[13px]
            "
          >
            / 09 — FINAL STATEMENT
          </p>




          {/* Quote */}

          <h5
            className="
            relative
            mx-auto
            max-w-5xl
            text-left
            sm:text-center
            font-bold
            text-white
            leading-[1.25]
            tracking-[-0.02em]
            text-[24px]
            sm:text-[30px]
            md:text-[36px]
            lg:text-[38px]
            "
          >

            <span className="sm:hidden">
              ”Technology changes every day.
              Purpose does not.
              The products we build may evolve.
              The values behind them should never change.”
            </span>


            <span className="hidden sm:block">
              ”Technology changes every day.
              <br />
              Purpose does not.
              <br />
              The products we build may evolve.
              <br />
              The values behind them should never
              <br />
              change.”
            </span>

          </h5>





          {/* Description */}

          <p
            className="
            relative
            mx-auto
            mt-10
            max-w-3xl
            text-left
            sm:text-center
            text-[#9CA3C4]
            text-[14px]
            leading-7
            sm:mt-12
            sm:text-[17px]
            sm:leading-8
            "
          >

            Thank you for visiting my portfolio. I appreciate your time and hope
            my journey, philosophy, and vision inspire confidence in the work I
            create.

          </p>





          {/* Profile */}

          <div
            className="
            relative
            mt-10
            flex
            flex-col
            items-center
            sm:mt-12
            "
          >

            <div
              className="
              rounded-2xl
              border-2
              border-[#5D7CFF]
              p-[3px]
              shadow-[0_0_30px_rgba(93,124,255,.35)]
              "
            >

              <div className="overflow-hidden rounded-xl">

                <Image
                  src="/photo.jpeg"
                  alt="Profile"
                  width={64}
                  height={64}
                  className="
                  h-[64px]
                  w-[64px]
                  object-cover
                  "
                />

              </div>

            </div>



            <h3
              className="
              mt-3
              text-xl
              font-bold
              text-white
              sm:text-2xl
              "
            >
              Abhishek
            </h3>



            <p
              className="
              mt-1
              text-center
              text-[10px]
              uppercase
              tracking-[0.22em]
              text-[#7E86A8]
              "
            >
              Founder, Urbanzi Solutions LLP
            </p>


          </div>


        </div>


      </div>


    </section>
  );
}
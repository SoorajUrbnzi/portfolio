"use client";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-[#080B14] pt-8 pb-16 lg:pt-14 lg:pb-24"
    >

      {/* Background Grid */}

      <div className="absolute inset-0 hero-grid opacity-[0.18] pointer-events-none"></div>



      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">



        {/* Heading */}

        <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5 lg:mb-10">

          <div className="flex items-center gap-3 sm:gap-5">

            <span className="text-[18px] font-light text-[#45A9FF] sm:text-[22px]">
              /
            </span>


            <span className="font-mono text-[14px] text-[#45A9FF] sm:text-[17px]">
              03—04
            </span>

          </div>



          <h2 className="text-[30px] font-bold tracking-[-0.03em] text-white sm:text-[38px] lg:text-[50px]">
            Vision & Mission
          </h2>


        </div>





        {/* Cards */}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">



          {/* CARD 03 */}

          <div
            className="
            group
            rounded-[24px]
            lg:rounded-[30px]
            border
            border-[#34384A]
            bg-[#11131B]/90
            backdrop-blur-xl
            p-6
            sm:p-8
            lg:p-10
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#6B63FF]
            hover:shadow-[0_0_45px_rgba(107,99,255,.18)]
            "
          >


            <p className="font-mono text-[16px] lg:text-[18px] font-semibold text-[#F4B72A]">
              03
            </p>



            <h3 className="mt-4 text-[30px] sm:text-[38px] lg:text-[46px] font-bold tracking-[-0.03em] text-white">
              Vision
            </h3>



            <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[21px] leading-[1.55] text-[#8E95A8]">

              To build technology that empowers
              people, strengthens businesses,
              and contributes to a future where
              innovation is measured by the value
              it creates, not the complexity it
              contains.

            </p>



            <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[21px] leading-[1.55] text-[#8E95A8]">

              I want Urbanzi to become a company
              recognized for thoughtful engineering,
              exceptional design, and unwavering
              integrity.

            </p>


          </div>





          {/* CARD 04 */}

          <div
            className="
            group
            rounded-[24px]
            lg:rounded-[30px]
            border
            border-[#34384A]
            bg-[#11131B]/90
            backdrop-blur-xl
            p-6
            sm:p-8
            lg:p-10
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#6B63FF]
            hover:shadow-[0_0_45px_rgba(107,99,255,.18)]
            "
          >


            <p className="font-mono text-[16px] lg:text-[18px] font-semibold text-[#F4B72A]">
              04
            </p>



            <h3 className="mt-4 text-[30px] sm:text-[38px] lg:text-[46px] font-bold tracking-[-0.03em] text-white">
              Mission
            </h3>




            <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[21px] leading-[1.55] text-[#8E95A8]">

              To create digital products that combine
              creativity, engineering, and purpose.
              To continuously learn. To embrace
              innovation responsibly.

            </p>




            <p className="mt-4 text-[16px] sm:text-[18px] lg:text-[21px] leading-[1.55] text-[#8E95A8]">

              Every solution should improve lives,
              strengthen businesses,
              and earn lasting trust.

            </p>


          </div>



        </div>


      </div>


    </section>
  );
}
"use client";

const principles = [
  "Learning never ends",
  "Technology puts people first",
  "Simplicity is strength",
  "Quality is never an accident",
  "Trust is earned through consistency",
];

// Duplicate for seamless looping
const loopItems = [...principles, ...principles];

export default function PrinciplesSection() {
  return (
    <section className="relative overflow-hidden bg-[#090B13] py-20 md:py-28">

      {/* Background Grid */}

      <div className="absolute inset-0 hero-grid"></div>


      {/* Left Glow */}

      <div className="absolute -left-64 top-0 h-[650px] w-[650px] rounded-full bg-[#655BFF]/8 blur-[170px]" />


      {/* Right Glow */}

      <div className="absolute -right-64 bottom-0 h-[550px] w-[550px] rounded-full bg-cyan-400/5 blur-[170px]" />


      <div className="relative z-10 mx-auto max-w-[1400px]">


        {/* Heading */}

        <div className="mb-12 flex items-center gap-3 px-5 sm:gap-5 sm:px-6 md:mb-20">


          <span className="text-[#49AFFF] text-[18px] font-light sm:text-[22px]">

            /

          </span>


          <span className="font-mono text-[#49AFFF] text-[14px] sm:text-[17px]">

            06

          </span>


          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-white sm:text-[40px] md:text-[52px]">

            Principles

          </h2>


        </div>


        {/* Top Divider */}

        <div className="h-px w-full bg-white/10"></div>


        {/* Marquee */}

        <div className="group overflow-hidden py-7 sm:py-10">


          <div className="marquee flex w-max items-center">


            {loopItems.map((item, index) => (

              <div
                key={index}
                className="flex shrink-0 items-center"
              >


                <h3 className="mx-7 whitespace-nowrap text-[18px] font-semibold text-[#9098AA] transition-colors duration-300 hover:text-white sm:mx-16 sm:text-[26px]">

                  {item}

                </h3>


                <div className="h-[6px] w-[6px] rotate-45 bg-[#F7B91D] sm:h-[8px] sm:w-[8px]"></div>


              </div>

            ))}


          </div>


        </div>


        {/* Bottom Divider */}

        <div className="h-px w-full bg-white/10"></div>


      </div>


    </section>
  );
}
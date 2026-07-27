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
    <section className="relative overflow-hidden bg-[#080B14] pt-2 pb-12 md:pt-6 md:pb-20">


      {/* Background Grid */}

      <div className="absolute inset-0 hero-grid opacity-[0.18]"></div>





      <div className="relative z-10 mx-auto max-w-[1400px]">



        {/* Heading */}

        <div className="mb-5 flex items-center gap-3 px-5 sm:gap-5 sm:px-6 md:mb-8">


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

        <div className="group overflow-hidden py-3 sm:py-5">


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
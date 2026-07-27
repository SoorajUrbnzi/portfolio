"use client";

export default function AboutUrbanziSection() {
  return (
    <section
      id="urbanzi"
      className="relative overflow-hidden bg-[#080B14] pt-8 pb-20 lg:pt-12 lg:pb-32"
    >

      {/* Background Grid */}

      <div className="absolute inset-0 hero-grid opacity-[0.18]"></div>



      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6">



        {/* Section Heading */}

        <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5 lg:mb-12">

          <div className="flex items-center gap-3 sm:gap-5">

            <span className="text-[18px] font-light text-[#49AFFF] sm:text-[22px]">
              /
            </span>

            <span className="font-mono text-[14px] text-[#49AFFF] sm:text-[17px]">
              05
            </span>

          </div>


          <h2 className="text-[30px] font-bold tracking-[-0.03em] text-white sm:text-[38px] lg:text-[50px]">
            About Urbanzi
          </h2>

        </div>





        {/* Main Card */}

        <div
          className="
            group
            rounded-[24px]
            sm:rounded-[32px]
            border
            border-[#34384A]
            bg-[#11131B]/90
            backdrop-blur-xl
            p-5
            sm:p-10
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-[#6B63FF]
            hover:shadow-[0_0_45px_rgba(107,99,255,.18)]
          "
        >



          {/* Number */}

          <p className="font-mono text-[15px] font-semibold text-[#F4B72A] transition-colors duration-500 group-hover:text-[#FFD86A] sm:text-[18px]">

            05

          </p>





          {/* Title */}

          <h3 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.03em] text-white sm:mt-5 sm:text-[38px] lg:text-[46px]">

            About Urbanzi Solutions LLP

          </h3>





          {/* Paragraph 1 */}

          <p className="mt-5 text-[16px] leading-[1.65] text-[#8E95A8] sm:mt-6 sm:text-[21px] sm:leading-[1.75]">

            Urbanzi Solutions LLP was founded with one clear
            purpose — to build digital solutions that help
            businesses move forward with confidence.

          </p>





          {/* Paragraph 2 */}

          <p className="mt-3 text-[16px] leading-[1.65] text-[#8E95A8] sm:mt-4 sm:text-[21px] sm:leading-[1.75]">

            We create websites, software,
            digital platforms, and user experiences
            designed around clarity, performance,
            and scalability.

          </p>





          {/* Paragraph 3 */}

          <p className="mt-3 text-[16px] leading-[1.65] text-[#8E95A8] sm:mt-4 sm:text-[21px] sm:leading-[1.75]">

            Our focus is not simply delivering
            projects. Our focus is building digital
            foundations that enable businesses
            to grow for years to come.

          </p>





          {/* Link */}

          <div className="mt-5 sm:mt-6">

            <a
              href="https://urbanzi.in"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group/link
                inline-flex
                items-center
                gap-2
                font-mono
                text-[14px]
                tracking-[0.08em]
                text-[#46A9FF]
                sm:gap-3
                sm:text-[18px]
              "
            >

              <span className="relative">

                View our work at Urbanzi.in


                <span
                  className="
                    absolute
                    left-0
                    -bottom-2
                    h-[1px]
                    w-full
                    origin-left
                    scale-x-100
                    bg-[#46A9FF]
                    transition-transform
                    duration-500
                    group-hover/link:scale-x-0
                  "
                />

              </span>


              <span
                className="
                  transition-transform
                  duration-300
                  group-hover/link:translate-x-1
                  group-hover/link:-translate-y-1
                "
              >
                ↗
              </span>


            </a>

          </div>


        </div>


      </div>


    </section>
  );
}
"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090B14] pt-16 pb-0 px-4 sm:pt-24 sm:px-6 min-h-0"
    >

      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />


      <div className="relative max-w-7xl mx-auto">


        {/* Top Divider */}

        <div className="w-full h-px bg-white/10 mb-10 sm:mb-16" />



        {/* Heading */}

        <p className="text-center uppercase tracking-[0.22em] text-[#2EA3FF] text-[11px] font-medium sm:text-[13px] sm:tracking-[0.28em]">

          / GET IN TOUCH

        </p>



        <h2 className="mt-5 text-center text-white font-bold leading-tight text-[32px] tracking-[-0.03em] sm:mt-7 sm:text-[42px] md:text-[64px]">

          Let's Build Something Together

        </h2>



        <p className="mt-5 max-w-3xl mx-auto text-center text-[#8F96AA] text-[16px] leading-7 sm:mt-7 sm:text-[20px] sm:leading-[42px]">

          Have a project in mind, or just want to talk shop? Reach out
          directly, or see everything Urbanzi has shipped so far.

        </p>




        {/* Contact Cards */}

        <div className="mt-10 flex flex-col lg:flex-row justify-center gap-5 sm:mt-14 sm:gap-8">


          {/* Email */}

          <a
            href="mailto:4bhishek.personal@gmail.com?subject=Project Inquiry"
            className="
            group
            w-full
            max-w-[420px]
            rounded-[22px]
            border
            border-white/10
            bg-[#181B24]
            px-6
            py-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#5F74FF]
            hover:bg-[#1B1F2A]
            hover:shadow-[0_20px_60px_rgba(91,116,255,.18)]
            sm:rounded-[26px]
            sm:px-9
            sm:py-8
            "
          >

            <p className="uppercase tracking-[0.22em] text-[#FFB81D] text-[12px] font-medium sm:text-[14px]">

              Email

            </p>


            <h3 className="mt-4 text-white text-[18px] font-semibold leading-[1.5] break-words sm:text-[22px]">

              4bhishek.personal@gmail.com

            </h3>


          </a>




          {/* Location */}

          <div
            className="
            group
            w-full
            max-w-[420px]
            rounded-[22px]
            border
            border-white/10
            bg-[#181B24]
            px-6
            py-6
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-[#5F74FF]
            hover:bg-[#1B1F2A]
            hover:shadow-[0_20px_60px_rgba(91,116,255,.18)]
            sm:rounded-[26px]
            sm:px-9
            sm:py-8
            "
          >

            <p className="uppercase tracking-[0.22em] text-[#FFB81D] text-[12px] font-medium sm:text-[14px]">

              Location

            </p>


            <h3 className="mt-4 text-white text-[20px] font-semibold sm:text-[22px]">

              Trivandrum, Kerala

            </h3>


          </div>


        </div>





        {/* Button */}

        <div className="mt-10 flex justify-center sm:mt-14">

          <a
            href="https://urbanzi.in"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-[#6B63FF]
            to-[#49A8FF]
            px-6
            py-3.5
            text-[14px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:scale-105
            sm:px-9
            sm:py-4
            sm:text-[17px]
            "
          >

            Visit Urbanzi.in — See All Projects

            <span>
              →
            </span>

          </a>

        </div>





        {/* Divider */}

        <div className="mt-6 h-px w-full bg-white/10" />





        {/* Footer */}

        <div
          className="
          mt-1
          mb-0
          pb-0
          h-auto
          flex
          flex-col
          items-center
          justify-between
          gap-1
          leading-none
          text-[#7D849A]
          text-[14px]
          md:flex-row
          "
        >

          <p className="m-0 leading-none">
            Urbanzi Solutions LLP
          </p>


          <p className="m-0 leading-none">
            © 2026
          </p>


        </div>


      </div>


    </section>
  );
}
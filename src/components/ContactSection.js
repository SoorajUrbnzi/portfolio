"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090B14] pt-20 pb-10 px-4 sm:pt-32 sm:pb-12 sm:px-6"
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

        <div className="w-full h-px bg-white/10 mb-14 sm:mb-24" />


        {/* Section Heading */}

        <p className="text-center uppercase tracking-[0.22em] text-[#2EA3FF] text-[11px] font-medium sm:text-[13px] sm:tracking-[0.28em]">

          / GET IN TOUCH

        </p>


        <h2 className="mt-6 text-center text-white font-bold leading-tight text-[32px] tracking-[-0.03em] sm:mt-8 sm:text-[42px] md:text-[64px]">

          Let's Build Something Together

        </h2>


        <p className="mt-6 max-w-3xl mx-auto text-center text-[#8F96AA] text-[16px] leading-7 sm:mt-8 sm:text-[20px] sm:leading-[42px]">

          Have a project in mind, or just want to talk shop? Reach out
          directly, or see everything Urbanzi has shipped so far.

        </p>


        {/* Contact Cards */}

        <div className="mt-12 flex flex-col lg:flex-row justify-center gap-6 sm:mt-20 sm:gap-10">


          {/* Email */}

          <a
            href="mailto:4bhishek.personal@gmail.com?subject=Project Inquiry"
            className="group w-full max-w-[500px] rounded-[24px] border border-white/10 bg-[#181B24] px-6 py-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#5F74FF] hover:bg-[#1B1F2A] hover:shadow-[0_20px_60px_rgba(91,116,255,.18)] sm:rounded-[30px] sm:px-11 sm:py-12"
          >

            <p className="uppercase tracking-[0.22em] text-[#FFB81D] text-[12px] font-medium sm:text-[14px] sm:tracking-[0.28em]">

              Email

            </p>


            <h3 className="mt-6 text-white text-[18px] font-semibold leading-[1.6] tracking-[-0.02em] break-words transition-colors duration-300 group-hover:text-[#EEF2FF] sm:mt-8 sm:text-[22px] md:text-[24px]">

              4bhishek.personal@gmail.com

            </h3>


          </a>



          {/* Location */}

          <div className="group w-full max-w-[500px] rounded-[24px] border border-white/10 bg-[#181B24] px-6 py-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#5F74FF] hover:bg-[#1B1F2A] hover:shadow-[0_20px_60px_rgba(91,116,255,.18)] sm:rounded-[30px] sm:px-11 sm:py-12">


            <p className="uppercase tracking-[0.22em] text-[#FFB81D] text-[12px] font-medium sm:text-[14px] sm:tracking-[0.28em]">

              Location

            </p>


            <h3 className="mt-6 text-white text-[20px] font-semibold leading-[1.6] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#EEF2FF] sm:mt-8 sm:text-[22px] md:text-[24px]">

              Trivandrum, Kerala

            </h3>


          </div>


        </div>



        {/* Button */}

        <div className="mt-12 flex justify-center sm:mt-20">

          <a
            href="https://urbanzi.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#6B63FF] to-[#49A8FF] px-7 py-4 text-center text-[15px] font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(73,168,255,.35)] sm:gap-4 sm:px-12 sm:py-5 sm:text-[20px]"
          >

            Visit Urbanzi.in — See All Projects

            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">

              →

            </span>

          </a>

        </div>



        {/* Divider */}

        <div className="mt-14 h-px w-full bg-white/10 sm:mt-20" />



        {/* Footer */}

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-[#7D849A] text-[14px] sm:mt-8 sm:text-[17px] md:flex-row">

          <p>
            Urbanzi Solutions LLP
          </p>


          <p>
            © 2026
          </p>


        </div>


      </div>

    </section>
  );
}
"use client";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-[#090B13] py-20 lg:py-32"
    >
      {/* Background Grid */}

      <div className="absolute inset-0 hero-grid"></div>

      {/* Left Glow */}

      <div className="absolute -left-60 top-0 h-[700px] w-[700px] rounded-full bg-[#655BFF]/10 blur-[170px]"></div>

      {/* Right Glow */}

      <div className="absolute -right-60 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-400/5 blur-[170px]"></div>

      <div className="relative z-10 mx-auto max-w-[1220px] px-5 sm:px-6">

        {/* Heading */}

        <div className="mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5 lg:mb-14">

          <div className="flex items-center gap-3 sm:gap-5">

            <span className="text-[18px] font-light text-[#53AEFF] sm:text-[22px]">
              /
            </span>

            <span className="font-mono text-[14px] text-[#53AEFF] sm:text-[17px]">
              01—02
            </span>

          </div>

          <h2 className="text-[30px] font-bold tracking-[-0.03em] text-white sm:text-[38px] lg:text-[50px]">
            Who I Am & My Philosophy
          </h2>

        </div>

        {/* ================= CARD 01 ================= */}
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

          {/* Number */}

          <p className="font-mono text-[16px] lg:text-[18px] font-semibold text-[#F5BE32] transition-colors duration-500 group-hover:text-[#FFD86A]">

            01

          </p>

          {/* Title */}

          <h3 className="mt-5 lg:mt-6 text-[30px] sm:text-[38px] lg:text-[46px] font-bold tracking-[-0.03em] text-white transition-colors duration-500 group-hover:text-white">

            Who I Am

          </h3>

          {/* Highlight */}

          <p className="mt-7 lg:mt-10 text-[18px] sm:text-[20px] lg:text-[23px] leading-[1.8] text-[#D2D7E4]">

            Technology has never been just a profession for me.
            It is how I think, create, and solve problems.

          </p>

          {/* Paragraph */}

          <p className="mt-7 lg:mt-10 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.9] lg:leading-[2] text-[#8D94A7]">

            I am Abhishek, the Founder of Urbanzi Solutions LLP.
            My journey is driven by curiosity, discipline,
            and a desire to transform ideas into products
            that people trust and enjoy using.

          </p>

          <p className="mt-6 lg:mt-8 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.9] lg:leading-[2] text-[#8D94A7]">

            My work combines design, development,
            and strategic thinking to build digital
            experiences that are intuitive,
            scalable, and meaningful.

            Every project is an opportunity to learn,
            improve and create something that
            makes a lasting impact.

          </p>

        </div>

        {/* Space */}

        <div className="h-6 lg:h-10"></div>

        {/* ================= CARD 02 ================= */}
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

          {/* Number */}

          <p className="font-mono text-[16px] lg:text-[18px] font-semibold text-[#F5BE32] transition-colors duration-500 group-hover:text-[#FFD86A]">

            02

          </p>

          {/* Title */}

          <h3 className="mt-5 lg:mt-6 text-[30px] sm:text-[38px] lg:text-[46px] font-bold tracking-[-0.03em] text-white transition-colors duration-500 group-hover:text-white">

            My Philosophy

          </h3>

          {/* Highlight */}

          <p className="mt-7 lg:mt-10 text-[18px] sm:text-[20px] lg:text-[23px] leading-[1.8] text-[#D2D7E4]">

            Great products don't begin with code.
            They begin with understanding.

          </p>

          {/* Paragraph */}

          <p className="mt-7 lg:mt-10 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.9] lg:leading-[2] text-[#8D94A7]">

            Understanding people.
            Understanding problems.
            Understanding why something deserves
            to exist before deciding how to build it.

          </p>

          <p className="mt-6 lg:mt-8 text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.9] lg:leading-[2] text-[#8D94A7]">

            Technology is only valuable when it
            serves a meaningful purpose.
            Design is only successful when it becomes
            invisible. The best digital experiences
            feel natural, effortless, and timeless.

          </p>

        </div>

      </div>

    </section>
  );
}
"use client";

const cards = [
  {
    number: "07",
    title: "Beyond Work",
    content: [
      "I believe growth begins with curiosity. Every new technology, every challenge, and every conversation is a chance to learn something valuable.",
      "Building products is only one part of my journey. Building myself as a leader, creator, and lifelong learner matters just as much.",
    ],
  },

  {
    number: "08",
    title: "Looking Forward",
    content: [
      "The future of technology belongs to those who keep learning, adapting, and creating with purpose.",
    ],
    highlight: "This is only the beginning.",
  },
];

export default function BeyondSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0C14] py-5 md:py-16">


      {/* Background Grid - Reduced Opacity */}

      <div className="absolute inset-0 hero-grid opacity-[0.25]" />


      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#0A0C14]/40" />



      {/* Left Glow */}

      <div className="absolute -left-72 top-0 h-[700px] w-[700px] rounded-full bg-[#655BFF]/8 blur-[180px]" />



      {/* Right Glow */}

      <div className="absolute -right-72 bottom-0 h-[650px] w-[650px] rounded-full bg-cyan-400/5 blur-[180px]" />



      <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-6">



        {/* Heading */}

        <div className="mb-4 flex items-center gap-3 sm:mb-8 sm:gap-5">


          <span className="text-[18px] font-light text-[#3FA9FF] sm:text-[22px]">
            /
          </span>


          <span className="font-mono text-[14px] text-[#3FA9FF] sm:text-[17px]">
            07-08
          </span>


          <h2 className="text-[30px] font-bold leading-tight tracking-[-0.03em] text-white sm:text-[40px] md:text-[52px]">
            Beyond Work & Looking Forward
          </h2>


        </div>





        {/* Cards */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">



          {cards.map((card) => (

            <div
              key={card.number}
              className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-[#181B23]
              px-5
              py-5
              transition-all
              duration-500
              hover:border-[#5B63FF]/60
              sm:rounded-[28px]
              sm:px-10
              sm:py-8
              "
            >



              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(101,91,255,0.10),transparent_65%)]" />

              </div>





              <div className="relative z-10">



                {/* Number */}

                <span className="font-mono text-[14px] font-semibold text-[#F7B91D] sm:text-[15px]">

                  {card.number}

                </span>





                {/* Title */}

                <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.03em] text-white sm:mt-5 sm:text-[28px]">

                  {card.title}

                </h3>





                {/* Paragraphs */}

                <div className="mt-5 space-y-5 sm:mt-6 sm:space-y-6">


                  {card.content.map((paragraph, index) => (

                    <p
                      key={index}
                      className="
                      text-[16px]
                      leading-[1.7]
                      text-[#8E95A8]
                      sm:text-[19px]
                      sm:leading-[1.85]
                      "
                    >

                      {paragraph}

                    </p>

                  ))}


                </div>





                {/* Highlight */}

                {card.highlight && (

                  <p className="mt-5 text-[18px] font-semibold text-white sm:mt-6 sm:text-[20px]">

                    {card.highlight}

                  </p>

                )}


              </div>


            </div>

          ))}


        </div>


      </div>


    </section>
  );
}
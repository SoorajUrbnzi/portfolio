"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#090B13]"
    >

      <div className="absolute inset-0 hero-grid" />


      <div
        className="absolute inset-0 pointer-events-none transition-all duration-150"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%,
          rgba(103,92,255,.22),
          rgba(60,140,255,.10),
          transparent 38%)`,
        }}
      />


      <div className="absolute -left-72 -top-20 h-[900px] w-[900px] rounded-full bg-[#665BFF]/20 blur-[180px]" />

      <div className="absolute right-[-250px] bottom-[-250px] h-[650px] w-[650px] rounded-full bg-cyan-400/10 blur-[180px]" />



      <div className="relative z-10 mx-auto min-h-screen max-w-[1700px] px-5 sm:px-8 lg:px-16">


        <div className="flex min-h-screen flex-col items-center justify-center gap-14 pt-24 pb-14 lg:flex-row lg:justify-between lg:gap-0 lg:pt-28">



          {/* LEFT */}

          <div className="w-full text-center lg:w-[46%] lg:text-left">


            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl sm:px-5">

              <span className="h-2 w-2 rounded-full bg-yellow-400" />

              <span className="text-[10px] uppercase tracking-[0.22em] text-[#81889B] sm:text-[11px]">
                Founder — Urbanzi Solutions LLP
              </span>

            </div>



            <div className="mt-8 leading-[0.95] lg:mt-10">


              <h1 className="text-[56px] font-black tracking-[-2px] text-white sm:text-[72px] lg:text-[108px] lg:tracking-[-5px]">
                Abhishek
              </h1>


              <h1 className="mt-1 bg-gradient-to-r from-[#6E63FF] via-[#6D84FF] to-[#4DB7FF] bg-clip-text text-[56px] font-black tracking-[-2px] text-transparent sm:text-[72px] lg:text-[108px] lg:tracking-[-5px]">
                builds
              </h1>


              <h1 className="mt-1 bg-gradient-to-r from-[#6E63FF] via-[#6D84FF] to-[#4DB7FF] bg-clip-text text-[56px] font-black tracking-[-2px] text-transparent sm:text-[72px] lg:text-[108px] lg:tracking-[-5px]">
                forward.
              </h1>


            </div>



            <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-8 text-[#9096A9] sm:text-[16px] lg:mx-0 lg:mt-10 lg:text-[17px] lg:leading-[1.9]">

              Designing meaningful experiences. Building purposeful
              technology. Creating solutions that stand the test of time.

            </p>



            <p className="mx-auto mt-6 max-w-[560px] text-[15px] leading-8 text-[#9096A9] sm:text-[16px] lg:mx-0 lg:mt-10 lg:text-[17px] lg:leading-[1.9]">

              I believe technology should simplify complexity, solve real
              problems, and create lasting value for people and businesses.

            </p>



            <div className="mt-10 flex items-center justify-center gap-4 lg:mt-14 lg:justify-start">

              <div className="h-[2px] w-10 bg-[#777E92]" />

              <span className="text-[13px] text-[#777E92]">
                Scroll to read
              </span>

            </div>


          </div>





          {/* RIGHT IMAGE */}


          <div className="relative flex w-full justify-center lg:w-[48%] lg:justify-end">


            <div className="absolute top-4 h-[240px] w-[240px] rounded-full bg-[#665BFF]/18 blur-[90px] sm:h-[360px] sm:w-[360px] lg:right-10 lg:top-8 lg:h-[520px] lg:w-[520px] lg:blur-[130px]" />



            <div className="relative h-[360px] w-[270px] overflow-hidden rounded-[24px] border border-white/10 bg-[#11131B] shadow-[0_30px_70px_rgba(0,0,0,.45)] sm:h-[560px] sm:w-[430px] lg:h-[720px] lg:w-[610px] lg:rounded-[30px] lg:shadow-[0_40px_90px_rgba(0,0,0,.45)]">


              <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.08),transparent_65%)]" />


              <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-[#090B13]/60 via-transparent to-transparent sm:h-40 lg:h-52" />


              <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/[0.03] via-transparent to-transparent" />



              <Image
                src="/photo.jpeg"
                alt="Founder"
                fill
                priority
                className="object-cover object-center scale-[1.02]"
              />



              <div className="absolute inset-0 rounded-[24px] ring-1 ring-white/5 lg:rounded-[30px]" />


            </div>



            <div className="absolute -right-4 top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-[70px] sm:h-36 sm:w-36 lg:-right-12 lg:top-24 lg:h-48 lg:w-48 lg:blur-[100px]" />


          </div>



        </div>


      </div>


    </section>
  );
}
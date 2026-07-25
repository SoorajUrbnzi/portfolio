"use client";

import { useState } from "react";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = () => {
    const body = `
Name: ${form.name}

Email: ${form.email}

Message:

${form.message}
`;

    window.location.href = `mailto:4bhishek.personal@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setOpen(true)}
        className="
        fixed
        right-5
        bottom-5
        z-[999]
        h-14
        w-14
        sm:right-8
        sm:bottom-8
        sm:h-16
        sm:w-16
        rounded-full
        bg-gradient-to-r
        from-[#5F63FF]
        to-[#49A8FF]
        flex
        items-center
        justify-center
        shadow-[0_15px_40px_rgba(73,123,255,.45)]
        transition-all
        duration-300
        hover:scale-110
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
          className="sm:w-[30px] sm:h-[30px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 10h8M8 14h5m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>


      {open && (
        <>

          {/* Overlay */}

          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm"
          />


          {/* Popup */}

          <div
            className="
            fixed
            right-4
            bottom-20
            z-[999]
            w-[calc(100%-32px)]
            max-h-[85vh]
            overflow-y-auto
            rounded-[24px]
            border
            border-white/10
            bg-[#10131D]
            p-5
            shadow-[0_25px_80px_rgba(0,0,0,.55)]
            transition-all
            duration-300
            sm:right-8
            sm:bottom-28
            sm:w-[420px]
            sm:max-w-[92vw]
            sm:rounded-[28px]
            sm:p-8
            "
          >


            {/* Header */}

            <div className="flex items-center justify-between gap-4">

              <div>

                <p className="uppercase tracking-[0.25em] text-xs text-[#46A7FF] sm:tracking-[0.3em]">
                  CONTACT
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Send Message
                </h2>

              </div>


              <button
                onClick={() => setOpen(false)}
                className="
                h-9
                w-9
                shrink-0
                rounded-full
                bg-white/5
                text-white
                hover:bg-white/10
                transition
                sm:h-10
                sm:w-10
                "
              >
                ✕
              </button>

            </div>


            {/* Name */}

            <div className="mt-6 sm:mt-8">

              <label className="mb-2 block text-sm font-medium text-[#AAB3C5]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-[#171B26]
                px-4
                py-3.5
                text-white
                placeholder:text-[#667085]
                outline-none
                transition-all
                duration-300
                focus:border-[#5F63FF]
                focus:ring-2
                focus:ring-[#5F63FF]/30
                sm:px-5
                sm:py-4
                "
              />

            </div>


            {/* Email */}

            <div className="mt-5">

              <label className="mb-2 block text-sm font-medium text-[#AAB3C5]">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-[#171B26]
                px-4
                py-3.5
                text-white
                placeholder:text-[#667085]
                outline-none
                transition-all
                duration-300
                focus:border-[#5F63FF]
                focus:ring-2
                focus:ring-[#5F63FF]/30
                sm:px-5
                sm:py-4
                "
              />

            </div>


            {/* Subject */}

            <div className="mt-5">

              <label className="mb-2 block text-sm font-medium text-[#AAB3C5]">
                Subject
              </label>

              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project discussion"
                className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-[#171B26]
                px-4
                py-3.5
                text-white
                placeholder:text-[#667085]
                outline-none
                transition-all
                duration-300
                focus:border-[#5F63FF]
                focus:ring-2
                focus:ring-[#5F63FF]/30
                sm:px-5
                sm:py-4
                "
              />

            </div>


            {/* Message */}

            <div className="mt-5">

              <label className="mb-2 block text-sm font-medium text-[#AAB3C5]">
                Message
              </label>

              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-[#171B26]
                px-4
                py-3.5
                text-white
                placeholder:text-[#667085]
                outline-none
                transition-all
                duration-300
                focus:border-[#5F63FF]
                focus:ring-2
                focus:ring-[#5F63FF]/30
                sm:px-5
                sm:py-4
                "
              />

            </div>


            {/* Send Button */}

            <button
              type="button"
              onClick={() => {
                if (
                  !form.name.trim() ||
                  !form.email.trim() ||
                  !form.subject.trim() ||
                  !form.message.trim()
                ) {
                  alert("Please fill in all fields.");
                  return;
                }

                sendEmail();

                setForm({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                });

                setOpen(false);
              }}
              className="
              mt-6
              w-full
              rounded-xl
              bg-gradient-to-r
              from-[#5F63FF]
              to-[#49A8FF]
              py-3.5
              text-base
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_20px_50px_rgba(73,168,255,.35)]
              active:scale-100
              sm:mt-8
              sm:py-4
              sm:text-lg
              "
            >
              Send Message
            </button>


            {/* Footer */}

            <p className="mt-4 text-center text-xs leading-5 text-[#7B8497] sm:mt-5 sm:text-sm">
              Clicking <span className="font-semibold text-white">Send Message</span> will
              open your default email application with all the details
              already filled in.
            </p>


          </div>

        </>
      )}
    </>
  );
}
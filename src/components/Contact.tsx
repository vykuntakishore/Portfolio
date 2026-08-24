import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="portfolio-section relative w-full max-w-full overflow-x-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <Reveal className="mx-auto w-full min-w-0 max-w-7xl">

        {/* Section Label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          Contact
        </p>

        {/* Main Contact Card */}
        <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b11]/80 p-8 backdrop-blur-md md:p-12 lg:p-14">

          {/* Background Glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.06] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-purple-400/[0.06] blur-3xl" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

            {/* ===============================
                LEFT SIDE
            =============================== */}

            <div>

              {/* Availability */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm font-medium text-emerald-300">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                Open to Full-Time Opportunities

              </div>

              <h2 className="mt-7 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl">
                Let&apos;s build something meaningful with data.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
                I&apos;m open to full-time Data Engineering opportunities and
                conversations around cloud data platforms, Snowflake, dbt, AWS,
                scalable pipelines, analytics, and modern Data Engineering.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="mailto:vykuntakishore@gmail.com"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
                >
                  <Mail size={20} />

                  Send Me an Email

                  <ArrowUpRight
                    size={18}
                    className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-zinc-300 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-white"
                >
                  <BriefcaseBusiness size={19} />
                  View Resume
                </a>

              </div>

              {/* Social */}
              <div className="mt-9">

                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Connect With Me
                </p>

                <div className="mt-4 flex gap-3">

                  <a
                    href="https://www.linkedin.com/in/vykunta-kishore-67ba79402"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/[0.05] hover:text-blue-300"
                  >
                    <FaLinkedinIn size={20} />
                  </a>

                  <a
                    href="mailto:vykuntakishore@gmail.com"
                    aria-label="Email"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                  >
                    <Mail size={20} />
                  </a>

                  <a
                    href="https://github.com/harikishoreabbina"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-400/[0.05] hover:text-purple-300"
                  >
                    <FaGithub size={21} />
                  </a>

                </div>

              </div>

            </div>

            {/* ===============================
                RIGHT SIDE
            =============================== */}

            <div className="space-y-4">

              {/* Location */}
              <div className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.025]">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                    <MapPin size={21} />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                      Location
                    </p>

                    <p className="mt-1 text-lg font-medium text-white">
                      Chicago, IL
                    </p>

                  </div>

                </div>

              </div>

              {/* Email */}
              <div className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.025]">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.05] text-blue-300">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                      Email
                    </p>

                    <a
                      href="mailto:vykuntakishore@gmail.com"
                      className="mt-1 block break-all text-base font-medium text-white transition hover:text-blue-300 md:text-lg"
                    >
                      vykuntakishore@gmail.com
                    </a>

                  </div>

                </div>

              </div>

              {/* Phone */}
              <div className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-purple-400/20 hover:bg-white/[0.025]">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-400/[0.05] text-purple-300">
                    <Phone size={21} />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                      Phone
                    </p>

                    <a
                      href="tel:+18565260810"
                      className="mt-1 block text-lg font-medium text-white transition hover:text-purple-300"
                    >
                      +1 (856) 526-0810
                    </a>

                  </div>

                </div>

              </div>

              {/* Response Card */}
              <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-5">

                <p className="text-sm leading-6 text-zinc-500">
                  Have a Data Engineering opportunity or want to discuss a
                  project? Feel free to reach out through email or LinkedIn.
                </p>

              </div>

            </div>

          </div>

        </div>

      </Reveal>
    </section>
  );
}
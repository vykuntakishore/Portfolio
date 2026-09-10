import Image from "next/image";

import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-batman relative w-full max-w-full overflow-hidden px-6 pb-20 pt-28 md:px-12 md:pb-24 md:pt-32 lg:px-16 xl:px-20"
    >
      {/* Hero Effects */}
      <div className="hero-atmosphere -z-10">
        <div className="hero-blue-glow" />
        <div className="hero-purple-glow" />
      </div>

      <div className="hero-signal -z-10" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-10 lg:grid-cols-[1.13fr_0.87fr] xl:grid-cols-[1.1fr_0.9fr]">

        {/* LEFT */}
        <div className="min-w-0">

          <p className="text-sm uppercase tracking-[0.22em] text-zinc-400 sm:text-base sm:tracking-[0.25em]">
            Hi, you finally found
          </p>

          <h1
            className="
              mt-4
              max-w-full
              text-4xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-white
              sm:text-5xl
              md:text-6xl
              lg:whitespace-nowrap
              lg:text-[4.35rem]
              xl:text-[4.9rem]
            "
          >
            Vykunta Kishore
          </h1>

          {/* Roles */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {[
              "DATA ENGINEER",
              "DATA ANALYST",
            ].map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium tracking-wide text-zinc-200 backdrop-blur-sm sm:text-sm"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 md:text-lg md:leading-8">
            I build reliable data pipelines, cloud data solutions,
            and analytics-ready datasets that help teams turn raw data
            into useful business insights.
          </p>

          {/* Availability */}
          <div className="mt-7 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />

            <span>
              Open to Full-Time Opportunities
            </span>
          </div>

          {/* Contact */}
          <div className="mt-8 flex flex-col gap-4 text-base text-zinc-200 md:flex-row md:flex-wrap md:gap-8 md:text-lg">

            <div className="flex items-center gap-3">
              <MapPin
                size={22}
                className="shrink-0 text-zinc-300"
              />

              <span>
                Chicago, IL
              </span>
            </div>

            <div className="flex min-w-0 items-center gap-3">
              <Mail
                size={22}
                className="shrink-0 text-zinc-300"
              />

              <a
                href="mailto:vykuntakishore@gmail.com"
                className="min-w-0 break-all transition hover:text-white"
              >
                vykuntakishore@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone
                size={22}
                className="shrink-0 text-zinc-300"
              />

              <a
                href="tel:+18565260810"
                className="transition hover:text-white"
              >
                +1 (856) 526-0810
              </a>
            </div>

          </div>

          {/* Main Button */}
          <div className="mt-9 flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap">

            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200 sm:w-auto"
            >
              View Projects

              <ArrowRight
                size={20}
                className="transition duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-zinc-700 bg-black/20 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:scale-[1.03] hover:border-zinc-400 hover:bg-white/[0.04] sm:w-auto"
            >
              Contact Me
            </a>

          </div>

          {/* Social */}
          <div className="mt-9 flex items-center gap-7 text-zinc-300">

            <a
              href="https://www.linkedin.com/in/vykunta-kishore-67ba79402"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
              <FaLinkedinIn size={29} />
            </a>

            <a
              href="mailto:vykuntakishore@gmail.com"
              aria-label="Email"
              className="transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
              <Mail size={29} />
            </a>

            <a
              href="https://github.com/harikishoreabbina"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition duration-300 hover:-translate-y-1 hover:scale-110 hover:text-white"
            >
              <FaGithub size={29} />
            </a>

          </div>

        </div>

        {/* PHOTO */}
        <div className="relative mx-auto hidden w-full max-w-[570px] lg:block">

          <div className="photo-wing-accent" />

          <div className="absolute -inset-10 rounded-[3.5rem] bg-gradient-to-br from-blue-500/15 via-transparent to-purple-500/20 blur-3xl" />

          <div className="absolute -inset-4 rounded-[3.2rem] border border-blue-400/[0.08]" />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] border border-white/[0.08] bg-black/20 shadow-2xl">

            <Image
              src="/profile-photo-dark.png"
              alt="Vykunta Kishore"
              fill
              priority
              sizes="(min-width: 1280px) 570px, (min-width: 1024px) 500px, 0px"
              className="object-cover object-top"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b]/28 via-transparent to-transparent" />

          </div>

        </div>

      </div>
    </section>
  );
}
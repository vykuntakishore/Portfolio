"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
} from "lucide-react";

const rowanCourses = [
  "Data Warehousing",
  "Advanced Database Systems",
  "Big Data Analytics",
  "Patient Data Analytics",
  "Database Management Systems",
  "Data Mining",
  "Probability & Statistics",
  "Multivariate Data Analysis",
  "Visual Analytics",
  "Machine Learning",
];

const klCourses = [
  "Python",
  "C Programming",
  "Java",
  "Mathematics for Computing",
  "Data Structures and Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Analog and Digital Communication",
  "Embedded Controllers",
  "Data Networks and Protocols",
  "Control Systems",
  "Digital Signal Processing",
  "Advanced Robotics",
  "Computer Vision and Applications",
  "Industrial Robotics and Automation",
];

export default function Education() {
  return (
    <section
      id="education"
      className="portfolio-section w-full max-w-full overflow-x-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* ===============================
            SECTION HEADER
        =============================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Education
          </p>

          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Academic Background
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            My academic background combines Data Science with Electronics and
            Computer Science, providing a strong foundation across data systems,
            analytics, programming, machine learning, and emerging technologies.
          </p>
        </motion.div>

        {/* ===============================
            EDUCATION CARDS
        =============================== */}

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* ===============================
              ROWAN UNIVERSITY
          =============================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b11]/80 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_20px_70px_rgba(34,211,238,0.07)]"
          >
            {/* Accent Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.10]" />

            {/* Logo */}
            <div className="relative z-10 flex h-48 items-center justify-center border-b border-white/[0.06] bg-white/[0.96] p-6 md:h-52 md:p-8">
              <Image
                src="/rowan-logo.png"
                alt="Rowan University logo"
                width={420}
                height={180}
                className="max-h-36 max-w-[90%] object-contain md:max-h-40"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-7 md:p-9">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/70">
                    Graduate Education
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Rowan University
                  </h3>
                </div>

              </div>

              <p className="mt-7 text-xl leading-8 text-zinc-200">
                Master of Science in Data Science
              </p>

              {/* Meta */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <CalendarDays
                    size={18}
                    className="shrink-0 text-cyan-300"
                  />
                  Aug 2023 – Apr 2025
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <MapPin
                    size={18}
                    className="shrink-0 text-cyan-300"
                  />
                  Glassboro, New Jersey
                </div>

              </div>

              {/* GPA */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-4 py-2 text-sm text-cyan-200">
                GPA
                <span className="font-semibold text-white">
                  3.5
                </span>
              </div>

              {/* Coursework */}
              <div className="mt-8">

                <div className="flex items-center gap-2">
                  <BookOpen
                    size={18}
                    className="text-zinc-500"
                  />

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-300">
                    Relevant Coursework
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {rowanCourses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-400 transition duration-200 hover:border-cyan-400/20 hover:text-cyan-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </div>

            </div>

          </motion.article>

          {/* ===============================
              KL UNIVERSITY
          =============================== */}

          <motion.article
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b11]/80 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-purple-400/25 hover:shadow-[0_20px_70px_rgba(168,85,247,0.07)]"
          >
            {/* Accent Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-400/[0.06] blur-3xl transition duration-500 group-hover:bg-purple-400/[0.10]" />

            {/* Logo */}
            <div className="relative z-10 flex h-48 items-center justify-center border-b border-white/[0.06] bg-white/[0.96] p-6 md:h-52 md:p-8">
              <Image
                src="/klu-logo.png"
                alt="KL University logo"
                width={420}
                height={180}
                className="max-h-36 max-w-[90%] object-contain md:max-h-40"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-7 md:p-9">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/[0.06] text-purple-300">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-300/70">
                    Undergraduate Education
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    KL University
                  </h3>
                </div>

              </div>

              <p className="mt-7 text-xl leading-8 text-zinc-200">
                Bachelor of Technology in Electronics and Computer Science
              </p>

              {/* Meta */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <CalendarDays
                    size={18}
                    className="shrink-0 text-purple-300"
                  />
                  Jul 2019 – Mar 2023
                </div>

                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <MapPin
                    size={18}
                    className="shrink-0 text-purple-300"
                  />
                  Vijayawada, India
                </div>

              </div>

              {/* Grade */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-purple-400/15 bg-purple-400/[0.05] px-4 py-2 text-sm text-purple-200">
                Grade
                <span className="font-semibold text-white">
                  8.9
                </span>
              </div>

              {/* Coursework */}
              <div className="mt-8">

                <div className="flex items-center gap-2">
                  <BookOpen
                    size={18}
                    className="text-zinc-500"
                  />

                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-300">
                    Relevant Coursework
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {klCourses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-400 transition duration-200 hover:border-purple-400/20 hover:text-purple-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>

              </div>

            </div>

          </motion.article>

        </div>

      </div>
    </section>
  );
}
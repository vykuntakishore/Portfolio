"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Fifth Third Bank",
    role: "Data Engineer",
    period: "Mar 2024 – Present",
    location: "Chicago, Illinois",
    dotClass: "bg-blue-400",
    logo: "/fifth-third-logo.png",
    bullets: [
      "Built enterprise-scale ETL/ELT pipelines using IBM DataStage, AWS S3, Snowflake, and dbt.",
      "Engineered Snowflake pipelines using Bronze, Silver, and Gold Medallion Architecture layers.",
      "Implemented incremental dbt processing, data-quality controls, and CI/CD across DEV, QA/UAT, and PROD.",
    ],
    skills: ["Snowflake", "dbt", "AWS", "DataStage", "SQL", "Python"],
  },

  {
    company: "LTIMindtree",
    role: "Data Analyst",
    period: "Feb 2022 – Jul 2023",
    location: "Hyderabad, India",
    dotClass: "bg-purple-400",
    logo: "/ltimindtree-logo.png",
    bullets: [
      "Built ETL workflows using Python, Apache Spark, PySpark, and Spark SQL.",
      "Developed Power BI dashboards and dimensional data models for business reporting.",
      "Performed large-scale cleansing, profiling, deduplication, and quality validation.",
    ],
    skills: ["Python", "PySpark", "Spark SQL", "Power BI", "SQL"],
  },

  {
    company: "Aadhya Skills",
    role: "Summer Intern",
    period: "Jun 2021 – Jul 2021",
    location: "Tadepalli, Andhra Pradesh, India",
    dotClass: "bg-zinc-500",
    logo: "/aadhya-logo.jpeg",
    bullets: [
      "Developed NI LabVIEW applications for sensor data acquisition, monitoring, and automation.",
      "Worked with calibration, signal validation, and instrumentation workflows.",
    ],
    skills: [],
  },

  {
    company: "Tessolve",
    role: "Summer Intern",
    period: "Jun 2021",
    location: "Tadepalli, Andhra Pradesh, India",
    dotClass: "bg-zinc-600",
    logo: "/tessolve-logo.png",
    bullets: [
      "Completed hands-on training in embedded systems, IoT, and industrial automation.",
      "Learned sensor interfacing, data acquisition, monitoring, and connected-device workflows.",
    ],
    skills: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="portfolio-section w-full max-w-full overflow-x-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto w-full min-w-0 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Experience
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">

          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-10">

            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.period}`}
                initial={{
                  opacity: 0,
                  y: 70,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative md:pl-12"
              >

                <div
                  className={`absolute left-0 top-3 hidden h-4 w-4 rounded-full border-4 border-[#05070b] md:block ${experience.dotClass}`}
                />

                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.005,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl border border-white/10 bg-white/[0.028] p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.045] md:p-8"
                >

                  <div className="flex flex-col gap-7 md:flex-row md:items-start md:justify-between">

                    {/* Logo + Info */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                      <div className="flex h-28 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-100 p-2 md:h-32 md:w-44">

                        <Image
                          src={experience.logo}
                          alt={`${experience.company} logo`}
                          width={180}
                          height={120}
                          className="max-h-24 max-w-[96%] object-contain md:max-h-28"
                        />

                      </div>

                      <div className="min-w-0">

                        <h3 className="break-words text-2xl font-semibold text-white md:text-3xl">
                          {experience.company}
                        </h3>

                        <p className="mt-2 text-lg text-zinc-400">
                          {experience.role}
                        </p>

                      </div>

                    </div>

                    {/* Date */}
                    <div className="md:text-right">

                      <p className="text-sm text-zinc-400">
                        {experience.period}
                      </p>

                      <p className="mt-1 text-sm text-zinc-600">
                        {experience.location}
                      </p>

                    </div>

                  </div>

                  {/* Bullets */}
                  <ul className="mt-8 space-y-3 leading-7 text-zinc-400">

                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>
                        • {bullet}
                      </li>
                    ))}

                  </ul>

                  {/* Skills */}
                  {experience.skills.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">

                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1 text-xs text-zinc-400"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>
                  )}

                </motion.div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
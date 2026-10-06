"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Fifth Third Bank",
    role: "Data Engineer",
    period: "Jan 2025 – Present",
    location: "Chicago, Illinois",
    dotClass: "bg-blue-400",
    logo: "/fifth-third-logo.png",

    bullets: [
      "Designed enterprise-scale ETL/ELT pipelines to move on-premises warehouse data into AWS S3 and Snowflake using dbt Core, SQL, and Python, improving end-to-end data availability by 28%.",

      "Implemented Medallion Architecture with Bronze, Silver, and Gold layers in Snowflake, improving maintainability, traceability, and organization of enterprise data products.",

      "Built modular dbt Core models using macros, seeds, tests, documentation, and incremental workflows, reducing duplicated transformation logic by 35% and Snowflake compute usage by 25%.",

      "Applied Snowflake governance and access controls including RBAC, RLAC, secure views, and masking policies to provide secure and compliant downstream access.",

      "Built Git-based CI/CD pipelines using GitHub Actions and Azure DevOps to automate validation, testing, and deployment of dbt models and Snowflake SQL objects.",
    ],

    skills: [
      "Snowflake",
      "dbt Core",
      "AWS S3",
      "SQL",
      "Python",
      "Medallion Architecture",
      "RBAC",
      "RLAC",
      "GitHub Actions",
      "Azure DevOps",
    ],
  },

  {
    company: "LTIMindtree",
    role: "Data Analyst Intern",
    period: "Jan 2023 – Jul 2023",
    location: "Hyderabad, India",
    dotClass: "bg-purple-400",
    logo: "/ltimindtree-logo.png",

    bullets: [
      "Cleaned and analyzed multi-source datasets using SQL, Python, and Excel, improving data accuracy by 30% and supporting business decision-making.",

      "Built Power BI dashboards for KPIs and operational metrics, reducing manual reporting effort by 40%.",

      "Built ETL workflows that consolidated data from 10+ source systems into centralized reporting datasets and reduced reporting discrepancies by 25% through data profiling and quality validation.",
    ],

    skills: [
      "SQL",
      "Python",
      "Excel",
      "Power BI",
      "ETL",
      "Data Profiling",
      "Data Quality",
    ],
  },

  {
    company: "Aadhya Skills",
    role: "Summer Intern",
    period: "Jun 2021 – Jul 2021",
    location: "Tadepalli, India",
    dotClass: "bg-zinc-500",
    logo: "/aadhya-logo.jpeg",

    bullets: [
      "Developed NI LabVIEW applications and Virtual Instruments for sensor data acquisition, calibration, data logging, and real-time monitoring using NI DAQ hardware.",

      "Performed signal conditioning, sensor validation, and calibration testing to improve the accuracy and reliability of acquired data.",
    ],

    skills: [
      "NI LabVIEW",
      "NI DAQ",
      "Data Acquisition",
      "Sensor Validation",
      "Signal Conditioning",
    ],
  },

  {
    company: "Tessolve",
    role: "Summer Intern",
    period: "Jun 2021",
    location: "Tadepalli, India",
    dotClass: "bg-zinc-600",
    logo: "/tessolve-logo.png",

    bullets: [
      "Completed hands-on training in Embedded Systems, IoT, and Industrial Automation.",

      "Worked with sensor interfacing and data acquisition workflows used in connected-device and industrial automation environments.",
    ],

    skills: [
      "Embedded Systems",
      "IoT",
      "Industrial Automation",
      "Sensor Interfacing",
      "Data Acquisition",
    ],
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
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
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

          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Professional Journey
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Experience across enterprise Data Engineering, analytics,
            ETL/ELT pipelines, Snowflake, cloud data platforms,
            reporting, data quality, and industrial data acquisition.
          </p>
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
                  y: 55,
                  scale: 0.98,
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
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 top-3 hidden h-4 w-4 rounded-full border-4 border-[#05070b] md:block ${experience.dotClass}`}
                />

                <motion.div
                  whileHover={{
                    y: -4,
                    scale: 1.004,
                  }}
                  transition={{
                    duration: 0.22,
                    ease: "easeOut",
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080b11]/70 p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.035] md:p-8"
                >

                  {/* Soft Card Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/[0.025] blur-3xl" />

                  <div className="relative z-10 flex flex-col gap-7 md:flex-row md:items-start md:justify-between">

                    {/* Logo + Company */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                      <div className="flex h-28 w-36 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 md:h-32 md:w-44">

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

                    {/* Period */}
                    <div className="md:max-w-[250px] md:text-right">

                      <p className="text-sm font-medium text-zinc-300">
                        {experience.period}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        {experience.location}
                      </p>

                    </div>

                  </div>

                  {/* Responsibilities */}
                  <ul className="relative z-10 mt-8 space-y-3 leading-7 text-zinc-400">

                    {experience.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />

                        <span>
                          {bullet}
                        </span>
                      </li>
                    ))}

                  </ul>

                  {/* Skills */}
                  {experience.skills.length > 0 && (
                    <div className="relative z-10 mt-7 flex flex-wrap gap-2">

                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400 transition duration-200 hover:border-white/20 hover:text-zinc-200"
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
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Fifth Third Bank",
    role: "Data Engineer",
    period: "May 2025 – Present",
    location: "Illinois, United States · Remote",
    dotClass: "bg-blue-400",
    logo: "/fifth-third-logo.png",
    bullets: [
      "Design and support enterprise-scale ETL/ELT pipelines moving data from on-premises data warehouses through Amazon S3 into Snowflake using IBM DataStage and dbt Core.",
      "Build Snowflake pipelines using Medallion Architecture with Bronze, Silver, and Gold layers to improve maintainability, traceability, and downstream data usability.",
      "Develop modular dbt Core models with SQL transformations, incremental processing, tests, macros, documentation, and reusable dependencies.",
      "Implement data-quality controls, source-to-target reconciliation, geocoding and location-enrichment workflows, and Git-based CI/CD across DEV, QA/UAT, and PROD.",
    ],
    skills: [
      "Snowflake",
      "dbt Core",
      "AWS S3",
      "IBM DataStage",
      "SQL",
      "Python",
      "Medallion Architecture",
      "CI/CD",
    ],
  },

  {
    company: "EXL",
    role: "Data Engineer",
    period: "Jun 2024 – Apr 2025",
    location: "Glassboro, New Jersey · Remote",
    dotClass: "bg-cyan-400",
    logo: "/exl-logo.png",
    bullets: [
      "Developed and supported ETL/ELT pipelines to ingest, transform, and load structured datasets across cloud data platforms for downstream reporting and analytics.",
      "Built AWS Glue jobs for extraction, cleansing, transformation, and orchestration, moving data from source systems into Amazon Redshift and Snowflake.",
      "Developed SQL-based transformations in Redshift and Snowflake using joins, filters, aggregations, and business rules to create curated analytical datasets.",
      "Implemented schema validation, reconciliation, record-count checks, and source-to-target quality controls while collaborating with analysts, engineers, and business stakeholders.",
    ],
    skills: [
      "AWS Glue",
      "Amazon Redshift",
      "Snowflake",
      "SQL",
      "ETL / ELT",
      "Data Quality",
      "Reconciliation",
    ],
  },

  {
    company: "LTIMindtree",
    role: "Data Analyst",
    period: "Feb 2022 – Jul 2023",
    location: "Hyderabad, Telangana, India · On-site",
    dotClass: "bg-purple-400",
    logo: "/ltimindtree-logo.png",
    bullets: [
      "Collected, cleaned, transformed, and analyzed large datasets using SQL, Python, PySpark, and Spark SQL to prepare analytics-ready data for reporting and business analysis.",
      "Built and optimized ETL workflows using Python, Apache Spark, PySpark, and Spark SQL to consolidate data from multiple source systems into centralized reporting datasets.",
      "Developed and maintained interactive Power BI dashboards for business KPIs and operational metrics, reducing reliance on manual reporting workflows.",
    ],
    skills: [
      "Python",
      "PySpark",
      "Spark SQL",
      "Apache Spark",
      "Power BI",
      "SQL",
    ],
  },

  {
    company: "Aadhyaa Skills Research and Development",
    role: "Summer Intern",
    period: "Jun 2021 – Jul 2021",
    location: "Chennai, Tamil Nadu, India · Hybrid",
    dotClass: "bg-zinc-500",
    logo: "/aadhya-logo.jpeg",
    bullets: [
      "Developed NI LabVIEW applications for automated sensor data acquisition, real-time monitoring, and control using NI DAQ hardware.",
      "Built Virtual Instruments for sensor calibration, data logging, signal visualization, and measurement analysis.",
      "Performed sensor validation and signal conditioning while gaining exposure to machine vision, image processing, and basic machine learning concepts.",
    ],
    skills: [
      "NI LabVIEW",
      "Data Acquisition",
      "Sensor Validation",
      "Signal Processing",
    ],
  },

  {
    company: "Tessolve",
    role: "Intern",
    period: "Jun 2021",
    location: "Tadepalli, Andhra Pradesh, India · Remote",
    dotClass: "bg-zinc-600",
    logo: "/tessolve-logo.png",
    bullets: [
      "Completed internship training focused on Embedded Systems, IoT, and Industrial Automation.",
      "Gained hands-on exposure to sensor interfacing, data acquisition, monitoring, connected devices, and industrial control concepts.",
    ],
    skills: [
      "Embedded Systems",
      "IoT",
      "Industrial Automation",
      "Sensor Interfacing",
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

          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Professional Journey
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Experience across Data Engineering, analytics, cloud data platforms,
            distributed processing, reporting, and enterprise ETL/ELT workflows.
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

                    {/* Logo + Info */}
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

                    {/* Date + Location */}
                    <div className="md:max-w-[250px] md:text-right">

                      <p className="text-sm font-medium text-zinc-300">
                        {experience.period}
                      </p>

                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        {experience.location}
                      </p>

                    </div>

                  </div>

                  {/* Bullets */}
                  <ul className="relative z-10 mt-8 space-y-3 leading-7 text-zinc-400">

                    {experience.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-600" />
                        <span>{bullet}</span>
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
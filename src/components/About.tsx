"use client";

import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Workflow,
  BarChart3,
} from "lucide-react";

const highlights = [
  {
    title: "4 Years",
    subtitle: "Data Engineering & Analytics",
    icon: Database,
    accent:
      "border-cyan-400/20 bg-cyan-400/[0.05] text-cyan-300",
    hover:
      "hover:border-cyan-400/30 hover:shadow-[0_15px_50px_rgba(34,211,238,0.06)]",
  },
  {
    title: "Snowflake + dbt",
    subtitle: "Cloud Data Warehousing",
    icon: Workflow,
    accent:
      "border-blue-400/20 bg-blue-400/[0.05] text-blue-300",
    hover:
      "hover:border-blue-400/30 hover:shadow-[0_15px_50px_rgba(59,130,246,0.06)]",
  },
  {
    title: "AWS + Databricks",
    subtitle: "Cloud & Distributed Processing",
    icon: Cloud,
    accent:
      "border-purple-400/20 bg-purple-400/[0.05] text-purple-300",
    hover:
      "hover:border-purple-400/30 hover:shadow-[0_15px_50px_rgba(168,85,247,0.06)]",
  },
  {
    title: "Python + SQL + PySpark",
    subtitle: "Data Processing & Analytics",
    icon: BarChart3,
    accent:
      "border-emerald-400/20 bg-emerald-400/[0.05] text-emerald-300",
    hover:
      "hover:border-emerald-400/30 hover:shadow-[0_15px_50px_rgba(16,185,129,0.06)]",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="portfolio-section relative w-full max-w-full overflow-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <motion.div
        className="mx-auto w-full min-w-0 max-w-7xl"
        initial={{
          opacity: 0,
          y: 36,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: false,
          amount: 0.16,
        }}
      >
        {/* Section label */}
        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          About Me
        </p>

        {/* Main content */}
        <div className="mt-8 grid w-full min-w-0 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Left */}
          <div className="min-w-0">
            <h2 className="w-full max-w-xl break-words text-3xl font-bold leading-tight text-white md:text-5xl">
              Turning raw data into reliable, analytics-ready information.
            </h2>

            <div className="mt-7 h-px w-24 bg-gradient-to-r from-cyan-400/70 via-blue-400/40 to-transparent" />
          </div>

          {/* Right */}
          <div className="min-w-0 space-y-6 text-base leading-8 text-zinc-400 md:text-lg">

            <p>
              I&apos;m a Data Engineer with 4 years of experience designing
              and supporting ETL/ELT pipelines across Snowflake, dbt, AWS,
              and Databricks. My work focuses on building dependable data
              workflows that move enterprise data from source systems into
              analytics-ready platforms.
            </p>

            <p>
              I have hands-on experience with Medallion Architecture,
              incremental processing, dimensional modeling, PySpark,
              IBM DataStage, CI/CD-driven deployments, and data quality
              controls including validation, reconciliation, RBAC, and
              row-level access patterns.
            </p>

            <p>
              My earlier Data Analyst experience also gives me a strong
              analytics perspective, including SQL-based analysis, Spark
              processing, Power BI reporting, and translating business data
              into useful insights for downstream users.
            </p>

          </div>

        </div>

        {/* Highlight cards */}
        <div className="mt-14 grid w-full min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group min-w-0 rounded-2xl border border-white/10 bg-[#080b11]/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.035] ${item.hover}`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${item.accent}`}
                >
                  <Icon size={21} />
                </div>

                <p className="mt-5 break-words text-xl font-semibold text-white">
                  {item.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {item.subtitle}
                </p>

              </motion.div>
            );
          })}

        </div>

      </motion.div>
    </section>
  );
}
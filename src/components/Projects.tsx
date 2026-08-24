import Link from "next/link";
import {
  ArrowUpRight,
  Database,
  Workflow,
  LineChart,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

import Reveal from "@/components/Reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/Stagger";

const projectOneSkills = [
  "Python",
  "SQL",
  "AWS",
  "Azure",
  "GCP",
  "Airflow",
  "Apache Spark",
  "Orchestration",
  "CI/CD",
  "Docker",
];

const projectTwoSkills = [
  "Databricks",
  "Python",
  "SQL",
  "PySpark",
  "Git",
  "CI/CD",
  "Cassandra",
  "NoSQL",
  "Data Visualization",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="portfolio-section relative w-full max-w-full overflow-x-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <Reveal className="mx-auto w-full min-w-0 max-w-7xl">

        {/* ===============================
            SECTION HEADER
        =============================== */}

        <div className="max-w-3xl">

          <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
            Featured Projects
          </p>

          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Selected Work
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 md:text-lg">
            Hands-on Data Engineering projects focused on scalable pipelines,
            distributed processing, cloud platforms, orchestration,
            analytics, and production-ready engineering practices.
          </p>

        </div>

        {/* ===============================
            PROJECT CARDS
        =============================== */}

        <StaggerContainer className="mt-14 grid gap-7 lg:grid-cols-2">

          {/* ===============================
              PROJECT 01
          =============================== */}

          <StaggerItem>

            <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b11]/85 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_20px_70px_rgba(34,211,238,0.08)] md:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.10]" />

              {/* Top Row */}
              <div className="relative z-10 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Database size={22} />
                  </div>

                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                    Project 01
                  </p>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                  <ArrowUpRight size={19} />
                </div>

              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-8 text-2xl font-semibold text-white md:text-3xl">
                Data Engineering Prep
              </h3>

              <p className="relative z-10 mt-2 text-sm font-medium text-cyan-300/80">
                Data Engineering Learning & Project Repository
              </p>

              {/* Description */}
              <p className="relative z-10 mt-5 leading-7 text-zinc-400">
                A structured Data Engineering learning repository organized
                around weekly topics, hands-on exercises, assignments, and
                mini-projects covering programming, SQL, data modeling, Spark,
                orchestration, cloud platforms, warehousing, and DevOps.
              </p>

              {/* Project Flow */}
              <div className="relative z-10 mt-7 rounded-2xl border border-white/[0.07] bg-black/20 p-5">

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <Workflow size={15} />
                  Project Flow
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400">

                  <span className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-2">
                    Python / SQL
                  </span>

                  <span className="text-zinc-700">
                    →
                  </span>

                  <span className="rounded-lg border border-blue-400/15 bg-blue-400/[0.05] px-3 py-2">
                    Spark / Airflow
                  </span>

                  <span className="text-zinc-700">
                    →
                  </span>

                  <span className="rounded-lg border border-purple-400/15 bg-purple-400/[0.05] px-3 py-2">
                    Cloud
                  </span>

                  <span className="text-zinc-700">
                    →
                  </span>

                  <span className="rounded-lg border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-2">
                    CI/CD
                  </span>

                </div>

              </div>

              {/* Skills */}
              <div className="relative z-10 mt-7 flex flex-wrap gap-2">

                {projectOneSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400 transition duration-200 hover:border-cyan-400/20 hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Actions */}
              <div className="relative z-10 mt-9 flex flex-wrap gap-3">

                <Link
                  href="/projects/data-engineering-prep"
                  className="group/button flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
                >
                  View Case Study

                  <ArrowUpRight
                    size={16}
                    className="transition duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="https://github.com/harikishoreabbina/Data_Engineer_Prep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

              </div>

            </article>

          </StaggerItem>

          {/* ===============================
              PROJECT 02
          =============================== */}

          <StaggerItem>

            <article className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b11]/85 p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/25 hover:shadow-[0_20px_70px_rgba(168,85,247,0.08)] md:p-8">

              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-400/[0.06] blur-3xl transition duration-500 group-hover:bg-purple-400/[0.10]" />

              {/* Top Row */}
              <div className="relative z-10 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/[0.07] text-purple-300">
                    <LineChart size={22} />
                  </div>

                  <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                    Project 02
                  </p>

                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-500 transition duration-300 group-hover:border-purple-400/30 group-hover:text-purple-300">
                  <ArrowUpRight size={19} />
                </div>

              </div>

              {/* Title */}
              <h3 className="relative z-10 mt-8 text-2xl font-semibold text-white md:text-3xl">
                Stock Analysis
              </h3>

              <p className="relative z-10 mt-2 text-sm font-medium text-purple-300/80">
                Data Pipeline & Analytics Platform
              </p>

              {/* Description */}
              <p className="relative z-10 mt-5 leading-7 text-zinc-400">
                A Data Engineering and analytics project that collects stock
                market data, processes and transforms it using Databricks and
                PySpark, stores analytical datasets, and supports analysis and
                visualization of market trends.
              </p>

              {/* Pipeline Flow */}
              <div className="relative z-10 mt-7 rounded-2xl border border-white/[0.07] bg-black/20 p-5">

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <Workflow size={15} />
                  Pipeline Flow
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400">

                  <span className="rounded-lg border border-purple-400/15 bg-purple-400/[0.05] px-3 py-2">
                    Market Data
                  </span>

                  <span className="text-zinc-700">
                    →
                  </span>

                  <span className="rounded-lg border border-orange-400/15 bg-orange-400/[0.05] px-3 py-2">
                    Databricks
                  </span>

                  <span className="text-zinc-700">
                    →
                  </span>

                  <span className="rounded-lg border border-blue-400/15 bg-blue-400/[0.05] px-3 py-2">
                    PySpark
                  </span>

                  <span className="text-zinc-700">
                    →
                  </span>

                  <span className="rounded-lg border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-2">
                    Analytics
                  </span>

                </div>

              </div>

              {/* Skills */}
              <div className="relative z-10 mt-7 flex flex-wrap gap-2">

                {projectTwoSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400 transition duration-200 hover:border-purple-400/20 hover:text-purple-200"
                  >
                    {skill}
                  </span>
                ))}

              </div>

              {/* Actions */}
              <div className="relative z-10 mt-9 flex flex-wrap gap-3">

                <Link
                  href="/projects/stock-analysis"
                  className="group/button flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
                >
                  View Case Study

                  <ArrowUpRight
                    size={16}
                    className="transition duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </Link>

                <a
                  href="https://github.com/harikishoreabbina/Stock_analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-zinc-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

              </div>

            </article>

          </StaggerItem>

          {/* ===============================
              PROJECT 03 — COMPACT
          =============================== */}

          <StaggerItem className="lg:col-span-2">

            <article className="group relative overflow-hidden rounded-2xl border border-dashed border-white/10 bg-white/[0.012] px-6 py-5 backdrop-blur-sm transition duration-300 hover:border-white/20 md:px-7">

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-500">
                    <Sparkles size={18} />
                  </div>

                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <p className="text-xs uppercase tracking-[0.22em] text-zinc-600">
                        Project 03
                      </p>

                      <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                        Coming Soon
                      </span>

                    </div>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                      Currently Building
                    </h3>

                    <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-500">
                      A new end-to-end Data Engineering project is currently
                      in development.
                    </p>

                  </div>

                </div>

                <ArrowUpRight
                  size={20}
                  className="hidden text-zinc-700 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400 md:block"
                />

              </div>

            </article>

          </StaggerItem>

        </StaggerContainer>

      </Reveal>
    </section>
  );
}
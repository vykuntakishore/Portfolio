import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Database,
  GitBranch,
  Layers3,
  Workflow,
  Container,
  Code2,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Engineering Prep | Vykunta Kishore",
  description:
    "A structured Data Engineering learning project covering Python, SQL, AWS, Azure, GCP, Airflow, Apache Spark, CI/CD, Docker, assignments, and projects.",
};

const technologies = [
  "Python",
  "SQL",
  "AWS",
  "Azure",
  "GCP",
  "Airflow",
  "Apache Spark",
  "PySpark",
  "Kafka",
  "CI/CD",
  "Docker",
];

const learningAreas = [
  {
    title: "Programming",
    description:
      "Python fundamentals, file handling, reusable functions, exceptions, and data transformation.",
    icon: Code2,
  },
  {
    title: "SQL",
    description:
      "SQL fundamentals, advanced queries, joins, CTEs, window functions, ranking, and optimization.",
    icon: Database,
  },
  {
    title: "Data Modeling",
    description:
      "Dimensional modeling, star schemas, warehouse design, staging, curated, and reporting layers.",
    icon: Layers3,
  },
  {
    title: "Distributed Processing",
    description:
      "Apache Spark, PySpark, DataFrames, distributed transformations, and scalable processing.",
    icon: Sparkles,
  },
  {
    title: "Orchestration",
    description:
      "Airflow DAGs, scheduling, task dependencies, retries, failure handling, and workflow design.",
    icon: Workflow,
  },
  {
    title: "Cloud",
    description:
      "Hands-on exposure to AWS, Azure, and GCP Data Engineering services and architecture patterns.",
    icon: Cloud,
  },
  {
    title: "DevOps",
    description:
      "Git, GitHub Actions, testing, Docker, CI/CD, environment configuration, and production workflows.",
    icon: GitBranch,
  },
  {
    title: "Containerization",
    description:
      "Docker and Docker Compose for reproducible local Data Engineering environments.",
    icon: Container,
  },
];

const weeklyModules = [
  {
    week: "Week 1",
    title: "Python Foundations",
    description: "Python, files, CSV, JSON, logging, and data standardization.",
  },
  {
    week: "Week 2",
    title: "SQL Fundamentals",
    description: "Filtering, joins, grouping, aggregation, CASE, and NULL handling.",
  },
  {
    week: "Week 3",
    title: "Advanced SQL",
    description: "CTEs, window functions, ranking, deduplication, and optimization.",
  },
  {
    week: "Week 4",
    title: "Data Modeling",
    description: "Star schema, dimensional modeling, and warehouse design.",
  },
  {
    week: "Week 5",
    title: "Spark / PySpark",
    description: "Distributed processing, DataFrames, transformations, and ETL.",
  },
  {
    week: "Week 6",
    title: "Airflow",
    description: "DAGs, dependencies, scheduling, retries, SLAs, and orchestration.",
  },
  {
    week: "Week 7",
    title: "Data Warehousing",
    description: "Staging, curated, reporting layers, MERGE, and validation.",
  },
  {
    week: "Week 8",
    title: "Kafka",
    description: "Streaming fundamentals, topics, producers, and consumers.",
  },
  {
    week: "Week 9",
    title: "AWS Data Engineering",
    description: "S3, Glue, Lambda, and cloud-native Data Engineering concepts.",
  },
  {
    week: "Week 10",
    title: "Azure Data Engineering",
    description: "ADLS, ADF, Synapse, Managed Identity, RBAC, and orchestration.",
  },
  {
    week: "Week 11",
    title: "GCP Data Engineering",
    description: "BigQuery, Dataflow, and Google Cloud Data Engineering concepts.",
  },
  {
    week: "Week 12",
    title: "DevOps",
    description:
      "Docker, testing, GitHub Actions, logging, CI/CD, and production workflows.",
  },
];

export default function DataEngineeringPrepPage() {
  return (
    <>
      <Navbar />

      <main className="page-flow min-h-screen text-white">
        <section className="px-6 pb-24 pt-24 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">

            {/* Back */}
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:-translate-x-1 hover:text-white"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>

            {/* Hero */}
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

              {/* Left */}
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
                  Featured Project
                </p>

                <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
                  Data Engineering Prep
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                  A structured Data Engineering learning repository built around
                  weekly modules, hands-on exercises, assignments, cloud labs,
                  orchestration workflows, distributed processing, and
                  production-oriented engineering practices.
                </p>

                {/* Technology Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/20 hover:text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/harikishoreabbina/Data_Engineer_Prep"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
                  >
                    <FaGithub size={20} />
                    View GitHub
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href="#roadmap"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-zinc-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-white"
                  >
                    View Roadmap
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-400/15 bg-[#080b11]/80 p-6 backdrop-blur-md">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl" />

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Project Summary
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    ["Format", "12-week learning journey"],
                    ["Focus", "End-to-end Data Engineering"],
                    ["Style", "Hands-on + project-based"],
                    ["Output", "Code, assignments, labs, mini-projects"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-6 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-zinc-500">
                        {label}
                      </span>

                      <span className="max-w-[220px] text-right text-sm font-medium leading-6 text-zinc-200">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Small Scroll Cue */}
            <div className="mt-10 flex justify-center">
              <a
                href="#roadmap"
                aria-label="Scroll to roadmap"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-500 transition hover:border-cyan-400/20 hover:text-cyan-300"
              >
                <ChevronDown size={18} />
              </a>
            </div>

            {/* Roadmap */}
            <section id="roadmap" className="mt-16 scroll-mt-28">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                01 / Roadmap
              </p>

              <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                <div>
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    12-Week Data Engineering Journey
                  </h2>

                  <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
                    The repository progresses from programming and SQL
                    foundations into distributed processing, orchestration,
                    cloud platforms, warehousing, streaming, and DevOps.
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  12 Modules
                </span>

              </div>

              {/* Roadmap Frame */}
              <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#070a0f]/70 p-2 shadow-[0_30px_90px_rgba(0,0,0,0.25)] md:p-4">

                <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.06] bg-black/20">
                  <Image
                    src="/data-engineering-roadmap.png"
                    alt="Data Engineering Prep 12-week learning roadmap"
                    width={1491}
                    height={1055}
                    className="h-auto w-full"
                    priority
                  />
                </div>

              </div>

            </section>

            {/* Core Areas */}
            <section className="mt-20">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                02 / Core Areas
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                What This Project Covers
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                {learningAreas.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                        <Icon size={21} />
                      </div>

                      <h3 className="mt-5 text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </article>
                  );
                })}

              </div>
            </section>

            {/* Weekly Modules */}
            <section className="mt-20">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                03 / Weekly Modules
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Learning Progression
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                {weeklyModules.map((module) => (
                  <article
                    key={module.week}
                    className="rounded-2xl border border-white/10 bg-[#080b11]/65 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.03]"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                      {module.week}
                    </p>

                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {module.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-500">
                      {module.description}
                    </p>
                  </article>
                ))}

              </div>
            </section>

            {/* Workflow */}
            <section className="mt-20">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                04 / Learning Workflow
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                From Concept to Project
              </h2>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">

                {/* Desktop */}
                <div className="hidden items-center gap-4 md:grid md:grid-cols-7">

                  {[
                    "Topic",
                    "→",
                    "Example",
                    "→",
                    "Assignment",
                    "→",
                    "Project",
                  ].map((item, index) =>
                    item === "→" ? (
                      <div
                        key={index}
                        className="text-center text-zinc-600"
                      >
                        →
                      </div>
                    ) : (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-black/20 p-5 text-center text-zinc-200"
                      >
                        {item}
                      </div>
                    )
                  )}

                </div>

                {/* Mobile */}
                <div className="flex flex-col items-center gap-4 text-center md:hidden">

                  {["Topic", "Example", "Assignment", "Project"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="w-full"
                      >
                        <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-zinc-200">
                          {item}
                        </div>

                        {index < 3 && (
                          <div className="py-3 text-zinc-600">
                            ↓
                          </div>
                        )}
                      </div>
                    )
                  )}

                </div>

              </div>
            </section>

            {/* Purpose */}
            <section className="mt-20 grid gap-10 lg:grid-cols-2">

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  05 / Purpose
                </p>

                <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                  Why I Built It
                </h2>
              </div>

              <div>
                <p className="leading-8 text-zinc-400">
                  I created this repository to organize Data Engineering
                  concepts into one practical learning path rather than
                  treating individual technologies as isolated topics.
                  The goal is to connect programming, SQL, cloud platforms,
                  distributed processing, orchestration, CI/CD, and hands-on
                  project work into a continuous engineering workflow.
                </p>

                <div className="mt-7 space-y-4">

                  {[
                    "Build consistent hands-on practice",
                    "Connect technologies through real workflows",
                    "Create reusable learning and project references",
                    "Progress toward production-oriented engineering practices",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-cyan-300"
                      />

                      <span className="leading-7">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </section>

            {/* Outcome */}
            <section className="mt-20">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                06 / Outcome
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                What This Project Demonstrates
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                {[
                  {
                    title: "Structured Learning",
                    text: "A disciplined learning path that progresses from core concepts into practical engineering workflows.",
                  },
                  {
                    title: "Hands-on Engineering",
                    text: "Practical exposure to multiple Data Engineering technologies through exercises, assignments, and projects.",
                  },
                  {
                    title: "End-to-End Thinking",
                    text: "A focus on connecting ingestion, processing, orchestration, cloud, warehousing, testing, and DevOps practices.",
                  },
                ].map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      {item.text}
                    </p>
                  </article>
                ))}

              </div>
            </section>

            {/* Final CTA */}
            <section className="mt-20 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-purple-400/[0.04] p-8 md:p-10">

              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-300/70">
                    Explore the Repository
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    View the complete project on GitHub.
                  </h2>
                </div>

                <a
                  href="https://github.com/harikishoreabbina/Data_Engineer_Prep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
                >
                  <FaGithub size={20} />
                  Open GitHub
                  <ArrowUpRight size={18} />
                </a>

              </div>

            </section>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
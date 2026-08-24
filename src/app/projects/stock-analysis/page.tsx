import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Database,
  GitBranch,
  LineChart,
  Server,
  Workflow,
  Code2,
  Boxes,
} from "lucide-react";

import { FaGithub } from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stock Analysis | Vykunta Kishore",
  description:
    "Stock Analysis data engineering project using Databricks, Python, SQL, PySpark, Cassandra, CI/CD, and data visualization.",
};

const technologies = [
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

const coreAreas = [
  {
    title: "Data Ingestion",
    description:
      "Collecting stock-market data and preparing it for downstream transformation and analysis.",
    icon: Database,
  },
  {
    title: "Data Processing",
    description:
      "Transforming and standardizing market data using Python, SQL, and PySpark.",
    icon: Code2,
  },
  {
    title: "Distributed Compute",
    description:
      "Using Databricks and PySpark for scalable processing of analytical datasets.",
    icon: Boxes,
  },
  {
    title: "NoSQL Storage",
    description:
      "Persisting transformed datasets using Cassandra and NoSQL-oriented storage patterns.",
    icon: Server,
  },
  {
    title: "Pipeline Design",
    description:
      "Connecting ingestion, processing, storage, and analytics into a repeatable data workflow.",
    icon: Workflow,
  },
  {
    title: "Analytics",
    description:
      "Preparing datasets that support exploratory analysis, trend identification, and visualization.",
    icon: LineChart,
  },
  {
    title: "Source Control",
    description:
      "Using Git-based version control to manage code changes and project development.",
    icon: GitBranch,
  },
  {
    title: "CI/CD",
    description:
      "Applying CI/CD practices to support repeatable and controlled development workflows.",
    icon: CheckCircle2,
  },
];

const implementationItems = [
  "Stock market data ingestion and processing pipeline",
  "Data transformation using Python, SQL, and PySpark",
  "Databricks-based distributed processing",
  "Cassandra / NoSQL integration for data storage",
  "Git-based source control and CI/CD practices",
  "Analytical datasets for visualization and trend analysis",
];

export default function StockAnalysisPage() {
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
                <p className="text-sm uppercase tracking-[0.25em] text-purple-300/80">
                  Featured Project
                </p>

                <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl">
                  Stock Analysis
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                  A Data Engineering and analytics project focused on ingesting,
                  processing, transforming, storing, and analyzing stock-market
                  data using Databricks, Python, SQL, PySpark, Cassandra, and
                  modern engineering practices.
                </p>

                {/* Technology Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-purple-400/20 hover:text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/harikishoreabbina/Stock_analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold text-black transition duration-300 hover:scale-[1.03] hover:bg-zinc-200"
                  >
                    <FaGithub size={20} />
                    View GitHub
                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href="#architecture"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 font-medium text-zinc-200 transition hover:border-purple-400/30 hover:bg-purple-400/[0.05] hover:text-white"
                  >
                    View Architecture
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Summary */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-purple-400/15 bg-[#080b11]/80 p-6 backdrop-blur-md">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-400/[0.08] blur-3xl" />

                <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                  Project Summary
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    ["Type", "Data pipeline + analytics"],
                    ["Compute", "Databricks + PySpark"],
                    ["Storage", "Cassandra / NoSQL"],
                    ["Output", "Analysis-ready datasets"],
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

            {/* Overview */}
            <section className="mt-16">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                01 / Overview
              </p>

              <div className="mt-5 grid gap-10 lg:grid-cols-2">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Project Overview
                </h2>

                <p className="leading-8 text-zinc-400">
                  The project builds a data pipeline for stock-market data,
                  transforming raw market information into structured datasets
                  that can be analyzed and visualized to identify trends and
                  support exploratory market analysis.
                </p>
              </div>
            </section>

            {/* Architecture */}
            <section
              id="architecture"
              className="mt-20 scroll-mt-28"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                02 / Architecture
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Data Pipeline Architecture
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
                The pipeline moves stock-market data through ingestion,
                transformation, distributed processing, storage, and
                analytics-ready output stages.
              </p>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-purple-400/15 bg-[#070a0f]/75 p-6 md:p-8">

                {/* Desktop Pipeline */}
                <div className="hidden items-center gap-3 md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">

                  <div className="rounded-xl border border-purple-400/15 bg-purple-400/[0.05] p-5 text-center">
                    <Database
                      size={22}
                      className="mx-auto text-purple-300"
                    />

                    <p className="mt-3 font-medium text-zinc-200">
                      Stock Data
                    </p>
                  </div>

                  <div className="text-center text-zinc-600">
                    →
                  </div>

                  <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.05] p-5 text-center">
                    <Code2
                      size={22}
                      className="mx-auto text-blue-300"
                    />

                    <p className="mt-3 font-medium text-zinc-200">
                      Python / PySpark
                    </p>
                  </div>

                  <div className="text-center text-zinc-600">
                    →
                  </div>

                  <div className="rounded-xl border border-orange-400/15 bg-orange-400/[0.05] p-5 text-center">
                    <Boxes
                      size={22}
                      className="mx-auto text-orange-300"
                    />

                    <p className="mt-3 font-medium text-zinc-200">
                      Databricks
                    </p>
                  </div>

                  <div className="text-center text-zinc-600">
                    →
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] p-5 text-center">
                    <Server
                      size={22}
                      className="mx-auto text-emerald-300"
                    />

                    <p className="mt-3 font-medium text-zinc-200">
                      Cassandra / NoSQL
                    </p>
                  </div>

                </div>

                {/* Desktop Second Row */}
                <div className="mt-5 hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">

                  <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] p-5 text-center">
                    <Workflow
                      size={22}
                      className="mx-auto text-cyan-300"
                    />

                    <p className="mt-3 font-medium text-zinc-200">
                      Processed Data
                    </p>
                  </div>

                  <div className="px-6 text-center text-zinc-600">
                    →
                  </div>

                  <div className="rounded-xl border border-purple-400/15 bg-purple-400/[0.05] p-5 text-center">
                    <BarChart3
                      size={22}
                      className="mx-auto text-purple-300"
                    />

                    <p className="mt-3 font-medium text-zinc-200">
                      Data Visualization
                    </p>
                  </div>

                </div>

                {/* Mobile */}
                <div className="space-y-3 md:hidden">
                  {[
                    "Stock Data",
                    "Python / PySpark",
                    "Databricks",
                    "Cassandra / NoSQL",
                    "Processed Data",
                    "Data Visualization",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="text-center"
                    >
                      <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-zinc-200">
                        {item}
                      </div>

                      {index < 5 && (
                        <div className="py-2 text-zinc-600">
                          ↓
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Core Areas */}
            <section className="mt-20">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                03 / Core Areas
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                Technologies & Engineering Focus
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {coreAreas.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-400/[0.05] text-purple-300">
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

            {/* Implementation */}
            <section className="mt-20">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                04 / Implementation
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                What I Built
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                {implementationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-zinc-300 transition duration-300 hover:border-purple-400/20 hover:bg-white/[0.04]"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-purple-300"
                    />

                    <span className="leading-7">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </section>

            {/* Data Flow */}
            <section className="mt-20">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                05 / Data Flow
              </p>

              <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                From Raw Market Data to Analytics
              </h2>

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">

                {/* Desktop */}
                <div className="hidden items-center gap-4 text-center md:grid md:grid-cols-9">

                  {[
                    "Ingest",
                    "→",
                    "Clean",
                    "→",
                    "Transform",
                    "→",
                    "Store",
                    "→",
                    "Analyze",
                  ].map((item, index) =>
                    item === "→" ? (
                      <div
                        key={index}
                        className="text-zinc-600"
                      >
                        →
                      </div>
                    ) : (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-black/20 p-5 text-zinc-200"
                      >
                        {item}
                      </div>
                    )
                  )}

                </div>

                {/* Mobile */}
                <div className="space-y-3 md:hidden">
                  {["Ingest", "Clean", "Transform", "Store", "Analyze"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="text-center"
                      >
                        <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-zinc-200">
                          {item}
                        </div>

                        {index < 4 && (
                          <div className="py-2 text-zinc-600">
                            ↓
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>

              </div>
            </section>

            {/* Learnings */}
            <section className="mt-20 grid gap-10 lg:grid-cols-2">

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  06 / Learnings
                </p>

                <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
                  Key Learnings
                </h2>
              </div>

              <div>
                <p className="leading-8 text-zinc-400">
                  This project strengthened my understanding of end-to-end data
                  pipeline design, distributed processing with PySpark,
                  Databricks workflows, NoSQL storage, source control, CI/CD,
                  and transforming raw data into information suitable for
                  downstream analysis and visualization.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Designing a complete Data Engineering workflow",
                    "Applying PySpark for distributed transformation",
                    "Using Databricks for scalable processing",
                    "Working with Cassandra / NoSQL storage patterns",
                    "Preparing analytics-ready datasets",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-zinc-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-purple-300"
                      />

                      <span className="leading-7">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </section>

            {/* Final CTA */}
            <section className="mt-20 rounded-[2rem] border border-purple-400/15 bg-gradient-to-br from-purple-400/[0.06] via-transparent to-blue-400/[0.04] p-8 md:p-10">

              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-purple-300/70">
                    Explore the Project
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    View the complete Stock Analysis project.
                  </h2>
                </div>

                <a
                  href="https://github.com/harikishoreabbina/Stock_analysis"
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
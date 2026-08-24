"use client";

import { motion } from "framer-motion";

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
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
      >

        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
          About Me
        </p>

        <div className="mt-8 grid w-full min-w-0 gap-12 lg:grid-cols-2 lg:gap-20">

          <div className="min-w-0">

            <h2 className="w-full max-w-full break-words text-3xl font-bold leading-tight md:text-5xl">
              Building reliable data platforms from ingestion
              to analytics.
            </h2>

          </div>

          <div className="min-w-0 space-y-6 text-base leading-8 text-zinc-400 md:text-lg">

            <p>
              I am a Data Engineer with 4+ years of combined
              experience in data engineering and analytics,
              focused on building scalable ETL/ELT pipelines
              and trusted data products.
            </p>

            <p>
              My work spans AWS, Snowflake, dbt Core, IBM
              DataStage, SQL, Python, and Spark, with hands-on
              experience across ingestion, transformation,
              incremental processing, dimensional modeling,
              data quality, governance, and CI/CD.
            </p>

            <p>
              I enjoy designing data solutions that make
              information easier to trust, maintain, and use
              for regulatory reporting, analytics, business
              intelligence, and downstream decision-making.
            </p>

          </div>

        </div>

        {/* Highlight Cards */}
        <div className="mt-14 grid w-full min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              title: "4+ Years",
              subtitle: "Data Engineering & Analytics",
            },
            {
              title: "Snowflake + dbt",
              subtitle: "Cloud Data Warehousing",
            },
            {
              title: "AWS + DataStage",
              subtitle: "Enterprise Data Integration",
            },
            {
              title: "Python + SQL + Spark",
              subtitle: "Data Processing",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.022] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
            >

              <p className="break-words text-2xl font-semibold text-white">
                {item.title}
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                {item.subtitle}
              </p>

            </div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}
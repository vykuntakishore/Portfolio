"use client";

import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BrainCircuit,
  Cpu,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks Academy",
    type: "Accreditation",
    icon: BadgeCheck,
    color: "#FF3621",
    description:
      "Foundational knowledge of the Databricks Lakehouse Platform, data engineering concepts, analytics workflows, and platform capabilities.",
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks Academy",
    type: "Accreditation",
    icon: BrainCircuit,
    color: "#8B5CF6",
    description:
      "Fundamentals of Generative AI, large language models, responsible AI concepts, and practical AI applications within modern data platforms.",
  },
  {
    title: "NI CLAD Training",
    issuer: "KL University",
    type: "LabVIEW Associate Developer",
    icon: Cpu,
    color: "#FACC15",
    description:
      "Training focused on LabVIEW programming, Virtual Instruments, data acquisition, instrumentation, and measurement-system development.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="portfolio-section relative w-full max-w-full overflow-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
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
            Certifications
          </p>

          <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
            Professional Credentials
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Certifications and technical training that complement my
            experience across Data Engineering, Databricks, Generative AI,
            analytics, and engineering systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <motion.article
                key={certification.title}
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b11]/80 p-7 backdrop-blur-md transition-all duration-300 hover:border-white/20 md:p-8"
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
                  style={{
                    backgroundColor: `${certification.color}10`,
                  }}
                />

                <div className="relative z-10">

                  {/* Top */}
                  <div className="flex items-start justify-between gap-5">

                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                      style={{
                        color: certification.color,
                        borderColor: `${certification.color}35`,
                        backgroundColor: `${certification.color}10`,
                        boxShadow: `0 0 24px ${certification.color}10`,
                      }}
                    >
                      <Icon size={27} />
                    </div>

                    <Award
                      size={22}
                      className="text-zinc-700 transition duration-300 group-hover:text-zinc-500"
                    />

                  </div>

                  {/* Certification Type */}
                  <p
                    className="mt-7 text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{
                      color: certification.color,
                    }}
                  >
                    {certification.type}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {certification.title}
                  </h3>

                  {/* Issuer */}
                  <p className="mt-3 text-sm font-medium text-zinc-400">
                    {certification.issuer}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/[0.07]" />

                  {/* Description */}
                  <p className="text-sm leading-7 text-zinc-500">
                    {certification.description}
                  </p>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
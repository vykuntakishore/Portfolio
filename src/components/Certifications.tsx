"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Cpu,
} from "lucide-react";

const certifications = [
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks Academy",
    type: "Accreditation",
    icon: BadgeCheck,
    color: "#FF3621",

    image:
      "/certificates/databricks-fundamentals.png",

    certificate:
      "/certificates/databricks-fundamentals.pdf",
  },

  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks Academy",
    type: "Accreditation",
    icon: BrainCircuit,
    color: "#8B5CF6",

    image:
      "/certificates/generative-ai-fundamentals.png",

    certificate:
      "/certificates/generative-ai-fundamentals.pdf",
  },

  {
    title: "NI CLAD Training",
    issuer: "KL University",
    type: "LabVIEW Associate Developer Training",
    icon: Cpu,
    color: "#FACC15",

    image:
      "/certificates/ni-clad-training.png",

    certificate:
      "/certificates/ni-clad-training.pdf",
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
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Certifications
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Certifications and technical training across Databricks,
            Generative AI, data platforms, and engineering systems.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="mt-14 grid gap-7 lg:grid-cols-3">

          {certifications.map(
            (certification, index) => {
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
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#080b11]/85 backdrop-blur-md transition-all duration-300 hover:border-white/20"
                >

                  {/* Certificate Preview */}
                  <a
                    href={certification.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[4/3] w-full overflow-hidden border-b border-white/[0.07] bg-zinc-950"
                  >
                    <Image
                      src={certification.image}
                      alt={`${certification.title} certificate`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/45">

                      <div className="flex translate-y-3 items-center gap-2 rounded-full border border-white/20 bg-black/70 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        View Certificate
                        <ArrowUpRight size={16} />
                      </div>

                    </div>
                  </a>

                  {/* Card Content */}
                  <div className="relative p-7 md:p-8">

                    {/* Glow */}
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl"
                      style={{
                        backgroundColor:
                          `${certification.color}10`,
                      }}
                    />

                    <div className="relative z-10">

                      {/* Icon */}
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl border"
                        style={{
                          color:
                            certification.color,

                          borderColor:
                            `${certification.color}35`,

                          backgroundColor:
                            `${certification.color}10`,
                        }}
                      >
                        <Icon size={24} />
                      </div>

                      {/* Type */}
                      <p
                        className="mt-6 text-xs font-semibold uppercase tracking-[0.18em]"
                        style={{
                          color:
                            certification.color,
                        }}
                      >
                        {certification.type}
                      </p>

                      {/* Title */}
                      <h3 className="mt-3 text-2xl font-semibold leading-tight text-white">
                        {certification.title}
                      </h3>

                      {/* Issuer */}
                      <p className="mt-3 text-sm text-zinc-500">
                        {certification.issuer}
                      </p>

                      {/* Button */}
                      <a
                        href={certification.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-sm font-medium text-zinc-300 transition duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                      >
                        View Certificate
                        <ArrowUpRight size={16} />
                      </a>

                    </div>
                  </div>

                </motion.article>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}
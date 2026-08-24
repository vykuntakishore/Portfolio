"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
} from "react";

import { motion } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  SiSnowflake,
  SiPython,
  SiApachespark,
  SiDocker,
  SiTerraform,
  SiGithubactions,
  SiPostgresql,
  SiMysql,
  SiR,
} from "react-icons/si";

import {
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaShieldAlt,
  FaAws,
  FaChartBar,
  FaCloud,
  FaJava,
} from "react-icons/fa";

type Skill = {
  name: string;
  icon: ElementType;
  color: string;
};

type SkillGroup = {
  title: string;
  icon: ElementType;
  color: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Databases & Warehousing",
    icon: FaDatabase,
    color: "#38BDF8",

    skills: [
      {
        name: "Snowflake",
        icon: SiSnowflake,
        color: "#29B5E8",
      },
      {
        name: "Amazon Redshift",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "SQL Server",
        icon: FaDatabase,
        color: "#CC2927",
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
    ],
  },

  {
    title: "ETL & Transformation",
    icon: FaCode,
    color: "#F97316",

    skills: [
      {
        name: "IBM DataStage",
        icon: FaDatabase,
        color: "#0F62FE",
      },
      {
        name: "dbt Core",
        icon: FaCode,
        color: "#FF694B",
      },
      {
        name: "ETL / ELT",
        icon: FaCode,
        color: "#A855F7",
      },
      {
        name: "Incremental Models",
        icon: FaCode,
        color: "#8B5CF6",
      },
      {
        name: "Data Contracts",
        icon: FaCode,
        color: "#EC4899",
      },
    ],
  },

  {
    title: "Cloud & Integration",
    icon: FaCloud,
    color: "#FF9900",

    skills: [
      {
        name: "AWS",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "Amazon S3",
        icon: FaCloud,
        color: "#569A31",
      },
      {
        name: "AWS Glue",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        name: "Amazon Athena",
        icon: FaAws,
        color: "#8C4FFF",
      },
      {
        name: "REST APIs",
        icon: FaCode,
        color: "#06B6D4",
      },
      {
        name: "JSON",
        icon: FaCode,
        color: "#FACC15",
      },
    ],
  },

  {
    title: "Programming",
    icon: FaCode,
    color: "#FACC15",

    skills: [
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
      },
      {
        name: "SQL",
        icon: FaDatabase,
        color: "#38BDF8",
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#ED8B00",
      },
      {
        name: "R",
        icon: SiR,
        color: "#276DC3",
      },
      {
        name: "C",
        icon: FaCode,
        color: "#A8B9CC",
      },
    ],
  },

  {
    title: "Big Data & Processing",
    icon: SiApachespark,
    color: "#E25A1C",

    skills: [
      {
        name: "Apache Spark",
        icon: SiApachespark,
        color: "#E25A1C",
      },
      {
        name: "PySpark",
        icon: SiApachespark,
        color: "#E25A1C",
      },
      {
        name: "Spark SQL",
        icon: SiApachespark,
        color: "#E25A1C",
      },
      {
        name: "Batch Processing",
        icon: FaDatabase,
        color: "#22C55E",
      },
      {
        name: "Incremental Processing",
        icon: FaDatabase,
        color: "#14B8A6",
      },
    ],
  },

  {
    title: "Data Modeling",
    icon: FaDatabase,
    color: "#8B5CF6",

    skills: [
      {
        name: "Star Schema",
        icon: FaDatabase,
        color: "#F59E0B",
      },
      {
        name: "Snowflake Schema",
        icon: SiSnowflake,
        color: "#29B5E8",
      },
      {
        name: "Fact & Dimension Modeling",
        icon: FaDatabase,
        color: "#A855F7",
      },
      {
        name: "SCD Type 1",
        icon: FaDatabase,
        color: "#6366F1",
      },
      {
        name: "SCD Type 2",
        icon: FaDatabase,
        color: "#8B5CF6",
      },
      {
        name: "Medallion Architecture",
        icon: FaDatabase,
        color: "#F59E0B",
      },
    ],
  },

  {
    title: "CI/CD & DevOps",
    icon: FaGitAlt,
    color: "#F05032",

    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05032",
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
      },
      {
        name: "Terraform",
        icon: SiTerraform,
        color: "#844FBA",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        name: "DEV / QA-UAT / PROD",
        icon: FaCode,
        color: "#22C55E",
      },
    ],
  },

  {
    title: "Data Quality & Governance",
    icon: FaShieldAlt,
    color: "#10B981",

    skills: [
      {
        name: "dbt Tests",
        icon: FaCode,
        color: "#FF694B",
      },
      {
        name: "Schema Validation",
        icon: FaShieldAlt,
        color: "#22C55E",
      },
      {
        name: "Source-to-Target Reconciliation",
        icon: FaShieldAlt,
        color: "#14B8A6",
      },
      {
        name: "RBAC",
        icon: FaShieldAlt,
        color: "#F59E0B",
      },
      {
        name: "Row-Level Security",
        icon: FaShieldAlt,
        color: "#EF4444",
      },
    ],
  },

  {
    title: "Analytics & Visualization",
    icon: FaChartBar,
    color: "#FACC15",

    skills: [
      {
        name: "Power BI",
        icon: FaChartBar,
        color: "#F2C811",
      },
      {
        name: "Tableau",
        icon: FaChartBar,
        color: "#4E79A7",
      },
      {
        name: "Snowflake Dashboards",
        icon: SiSnowflake,
        color: "#29B5E8",
      },
    ],
  },
];

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(true);

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    setCanScrollLeft(container.scrollLeft > 10);

    setCanScrollRight(
      container.scrollLeft < maxScroll - 10
    );
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    updateScrollButtons();

    container.addEventListener(
      "scroll",
      updateScrollButtons,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateScrollButtons
    );

    return () => {
      container.removeEventListener(
        "scroll",
        updateScrollButtons
      );

      window.removeEventListener(
        "resize",
        updateScrollButtons
      );
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="skills"
      className="portfolio-section relative w-full max-w-full overflow-hidden px-6 py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto w-full max-w-[1500px]">

        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              Technical Skills
            </p>

            <h2 className="mt-6 text-3xl font-bold text-white md:text-5xl">
              Technologies i'm proficient in.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
              Explore my technology stack across cloud,
              databases, transformation, distributed
              processing, modeling, DevOps, governance,
              analytics, and programming.
            </p>
          </motion.div>

          {/* Desktop Arrows */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">

            <button
              type="button"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              aria-label="Previous skills"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                canScrollLeft
                  ? "border-white/15 bg-white/[0.04] text-white hover:-translate-x-1 hover:border-blue-400/40 hover:bg-blue-400/[0.08]"
                  : "cursor-not-allowed border-white/[0.05] bg-white/[0.01] text-zinc-700"
              }`}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={scrollRight}
              disabled={!canScrollRight}
              aria-label="Next skills"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                canScrollRight
                  ? "border-white/15 bg-white/[0.04] text-white hover:translate-x-1 hover:border-purple-400/40 hover:bg-purple-400/[0.08]"
                  : "cursor-not-allowed border-white/[0.05] bg-white/[0.01] text-zinc-700"
              }`}
            >
              <ChevronRight size={22} />
            </button>

          </div>

        </div>

        {/* Mobile Arrows */}
        <div className="mt-8 flex items-center gap-3 md:hidden">

          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] disabled:opacity-30"
          >
            <ChevronLeft size={21} />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] disabled:opacity-30"
          >
            <ChevronRight size={21} />
          </button>

          <span className="ml-2 text-xs uppercase tracking-[0.2em] text-zinc-600">
            Scroll skills
          </span>

        </div>

        {/* Horizontal Carousel */}
        <div className="relative mt-12">

          <div
            className={`pointer-events-none absolute bottom-3 left-0 top-0 z-20 w-16 bg-gradient-to-r from-[#05070b] to-transparent transition-opacity duration-300 ${
              canScrollLeft
                ? "opacity-100"
                : "opacity-0"
            }`}
          />

          <div
            className={`pointer-events-none absolute bottom-3 right-0 top-0 z-20 w-16 bg-gradient-to-l from-[#05070b] to-transparent transition-opacity duration-300 ${
              canScrollRight
                ? "opacity-100"
                : "opacity-0"
            }`}
          />

          <div
            ref={scrollRef}
            className="
              skills-scroll
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              overflow-y-hidden
              pb-5
              pr-6
              scroll-smooth
            "
          >

            {skillGroups.map((group, index) => {
              const GroupIcon = group.icon;

              return (
                <motion.article
                  key={group.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: Math.min(index * 0.05, 0.25),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    w-[86vw]
                    min-w-[86vw]
                    snap-start
                    rounded-3xl
                    border
                    border-white/10
                    bg-[#080b11]/90
                    p-6
                    backdrop-blur-md
                    transition-all
                    duration-300

                    sm:w-[380px]
                    sm:min-w-[380px]

                    lg:w-[400px]
                    lg:min-w-[400px]

                    hover:-translate-y-1
                    hover:border-white/20
                  "
                  style={{
                    boxShadow:
                      `0 0 0 1px ${group.color}08`,
                  }}
                >

                  {/* Group Heading */}
                  <div className="flex items-center gap-4">

                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
                      style={{
                        color: group.color,
                        borderColor:
                          `${group.color}45`,
                        backgroundColor:
                          `${group.color}12`,
                        boxShadow:
                          `0 0 22px ${group.color}12`,
                      }}
                    >
                      <GroupIcon size={28} />
                    </div>

                    <div className="min-w-0">

                      <h3 className="text-lg font-semibold text-white">
                        {group.title}
                      </h3>

                      <div
                        className="mt-2 h-[2px] w-10 rounded-full"
                        style={{
                          backgroundColor:
                            group.color,
                          boxShadow:
                            `0 0 10px ${group.color}`,
                        }}
                      />

                    </div>

                  </div>

                  {/* Skill List */}
                  <div className="mt-7 space-y-3">

                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="group/skill flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200 hover:translate-x-1"
                          style={{
                            borderColor:
                              `${skill.color}28`,
                            backgroundColor:
                              `${skill.color}08`,
                          }}
                        >

                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                            style={{
                              color:
                                skill.color,
                              backgroundColor:
                                `${skill.color}12`,
                            }}
                          >
                            <SkillIcon size={20} />
                          </div>

                          <span className="text-sm font-medium text-zinc-300">
                            {skill.name}
                          </span>

                          <span
                            className="ml-auto h-1.5 w-1.5 rounded-full opacity-70 transition duration-300 group-hover/skill:scale-150"
                            style={{
                              backgroundColor:
                                skill.color,
                              boxShadow:
                                `0 0 8px ${skill.color}`,
                            }}
                          />

                        </div>
                      );
                    })}

                  </div>

                </motion.article>
              );
            })}

          </div>

          <div className="mt-2 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] text-zinc-600">

            <ChevronLeft size={14} />

            Drag or use arrows

            <ChevronRight size={14} />

          </div>

        </div>

      </div>
    </section>
  );
}
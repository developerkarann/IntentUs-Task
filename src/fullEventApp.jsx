import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Trophy,
  ArrowRight,
  Sparkles,
  Users,
  Globe2,
  Radar,
  Rocket,
  Map,
  BarChart3,
  Shield,
  Clock3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Section = ({ id, children, index = 1 }) => (
  <motion.section
    id={id}
    className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
    custom={index}
  >
    {children}
  </motion.section>
);

const Chip = ({ icon: Icon, label }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm backdrop-blur">
    {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" />}
    <span className="text-slate-100">{label}</span>
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-4 py-5 sm:px-6 sm:py-6 backdrop-blur shadow-lg shadow-black/40 ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-indigo-500/10" />
    <div className="relative z-10">{children}</div>
  </div>
);

// -------------------- NAVBAR --------------------

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400 shadow-lg shadow-indigo-500/60"
            initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Trophy className="h-5 w-5 text-white" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-50 sm:text-base">
              NovaPlay Events
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
              Futuristic Football Experiences
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur">
            {[
              { key: "home", label: "Home" },
              { key: "case-study", label: "Case Study" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                  currentPage === item.key
                    ? "bg-white text-slate-900"
                    : "text-slate-200 hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setCurrentPage("case-study")}
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-lg shadow-indigo-500/50 transition hover:brightness-110"
          >
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Book an event</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// -------------------- HOME PAGE --------------------

const HomePage = ({ goToCaseStudy }) => {
  return (
    <>
      {/* HERO */}
      <Section id="hero" index={1}>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            <Chip icon={Radar} label="Live matchday orchestration · End-to-end" />

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Designing{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                next-gen football
              </span>{" "}
              experiences.
            </motion.h1>

            <p className="max-w-xl text-sm sm:text-base text-slate-300">
              NovaPlay orchestrates matchdays like product launches—synchronizing
              logistics, fan journeys, sponsorships, and live data into one
              cinematic event.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={goToCaseStudy}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-slate-900 shadow-lg shadow-white/20 transition hover:translate-y-0.5"
              >
                View case study
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:bg-white/5">
                Download deck
                <CloudPulseIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] sm:text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Real-time ops room</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Data-driven fan journeys</span>
              </div>
            </div>
          </div>

          {/* Futuristic Card / Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3)_0,_transparent_60%)]" />
            <GlassCard className="relative">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Live Dashboard
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    Matchday: Champions Night
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Chip icon={Users} label="52,184 Fans" />
                  <Chip icon={Shield} label="3x Sponsor lift" />
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-xs text-slate-400">Entry flow</p>
                  <p className="text-2xl font-semibold text-slate-50">97%</p>
                  <p className="text-[11px] text-emerald-300">
                    Smooth entries in first 25 min
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-slate-400">Engagement</p>
                  <p className="text-2xl font-semibold text-slate-50">4.2x</p>
                  <p className="text-[11px] text-sky-300">
                    Interactions vs last season derby
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-slate-400">Apps active</p>
                  <p className="text-2xl font-semibold text-slate-50">78%</p>
                  <p className="text-[11px] text-indigo-300">
                    Used AR challenges at halftime
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock3 className="h-3 w-3" />
                  <span>Kickoff in 01:18:23</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="h-3 w-3" />
                  <span>Global stream · 18 markets</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* CLIENTS */}
      <Section id="clients" index={2}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
                Trusted by clubs & leagues
              </h2>
              <p className="text-sm text-slate-400">
                From cup finals to city derbies, we plug into your existing
                operations and upgrade the full matchday stack.
              </p>
            </div>
            <Chip icon={Globe2} label="EU · UK · MENA · APAC" />
          </div>

          <GlassCard>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {["Urban United FC", "Metro League", "StadiumX Labs", "City Lights Cup"].map(
                (name, idx) => (
                  <motion.div
                    key={name}
                    className="flex flex-col gap-1"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                      CLIENT
                    </div>
                    <div className="text-sm font-semibold text-slate-50">
                      {name}
                    </div>
                    <div className="mt-1 h-px w-8 bg-gradient-to-r from-indigo-400 to-transparent" />
                  </motion.div>
                )
              )}
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" index={3}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-50">
                Matchday orchestration, end-to-end.
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                We treat your event as a living product—designed, prototyped,
                and iterated with data. Each layer is modular, so you can start
                small or go full stadium takeover.
              </p>
            </div>
            <Chip icon={Rocket} label="Plug-and-play modules" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Map,
                title: "Smart logistics",
                body: "Flow-mapped entry, exit, and wayfinding coordinated with your security and ops teams.",
              },
              {
                icon: Users,
                title: "Fan journey design",
                body: "Moments from ticket drop to full-time that feel cohesive, on-brand, and shareable.",
              },
              {
                icon: Shield,
                title: "Sponsor ecosystems",
                body: "Zones, activations, and content loops that turn passive branding into interaction.",
              },
              {
                icon: BarChart3,
                title: "Live data stack",
                body: "Single pane of glass for crowd, sales, and engagement, wired into your BI tools.",
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
              >
                <GlassCard className="h-full hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10 transition">
                  <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10">
                    <card.icon className="h-4 w-4 text-indigo-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    {card.body}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section id="projects" index={4}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-50">
                Selected matchday stories.
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                Each event is a case study in operations, emotion, and outcome.
                We design for both—the fan in row 42 and the sponsor in the
                boardroom.
              </p>
            </div>
            <button
              onClick={goToCaseStudy}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-white/10"
            >
              View Champions Night case study
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="grid gap-4 lg:grid-cols-[2fr,1fr]">
            <GlassCard className="group relative overflow-hidden">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Case study
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">
                    Champions Night Cup Final
                  </h3>
                </div>
                <Chip icon={Trophy} label="Flagship event" />
              </div>
              <p className="text-sm text-slate-300 max-w-xl">
                A full stadium takeover for a sold-out final: synchronized
                lighting, AR fan quests, and a live sponsor control room to
                adjust activations in real time.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-3 text-xs sm:text-sm">
                <div>
                  <p className="text-slate-400">Attendance</p>
                  <p className="text-slate-50 font-semibold">52,184</p>
                </div>
                <div>
                  <p className="text-slate-400">Sponsor uplift</p>
                  <p className="text-slate-50 font-semibold">3.1x scans</p>
                </div>
                <div>
                  <p className="text-slate-400">Fan rating</p>
                  <p className="text-slate-50 font-semibold">96% positive</p>
                </div>
              </div>

              <button
                onClick={goToCaseStudy}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-slate-100 hover:bg-white/20"
              >
                Open full case study
                <ChevronRight className="h-3 w-3" />
              </button>
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:flex-col">
              {[
                {
                  name: "City Lights Derby",
                  metric: "2.4x",
                  label: "App active users",
                },
                {
                  name: "North Ridge Opener",
                  metric: "41%",
                  label: "Faster gate clearance",
                },
              ].map((p) => (
                <GlassCard key={p.name} className="text-xs sm:text-sm">
                  <p className="text-slate-400 uppercase tracking-[0.18em] mb-1">
                    Event
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    {p.name}
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-lg font-semibold text-slate-50">
                      {p.metric}
                    </span>
                    <span className="text-slate-400">{p.label}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS / ROADMAP */}
      <Section id="process" index={5}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-50">
                How we build your event.
              </h2>
              <p className="text-sm text-slate-400 max-w-xl">
                A four-phase operating system for football events—from first
                workshop to the final debrief deck.
              </p>
            </div>
            <Chip icon={Calendar} label="Average cycle: 4–6 weeks" />
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden sm:block border-l border-dashed border-slate-700/70" />
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "Stakeholder sessions, site walk, and data pull from your previous matches.",
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "Experience blueprint, zones, timing charts, and content arcs for each phase of matchday.",
                },
                {
                  step: "03",
                  title: "Deploy",
                  desc: "On-ground crew, dashboards, and real-time decision room for matchday control.",
                },
                {
                  step: "04",
                  title: "Debrief",
                  desc: "Post-game analytics, sponsor reports, and recommendations for the next fixture.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.step}
                  className="flex gap-4 sm:gap-6"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <div className="relative shrink-0">
                    <div className="flex h-7 w-7 sm:h-9 sm:w-9 items-center justify-center rounded-2xl border border-indigo-400/50 bg-slate-900">
                      <span className="text-[10px] sm:text-xs font-semibold text-indigo-200">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  <GlassCard className="w-full">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300">
                      {item.desc}
                    </p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* TECH SECTION */}
      <Section id="tech" index={6}>
        <GlassCard className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-32 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-500/20 to-transparent blur-3xl" />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-50">
                Built on smart stadium tech.
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                We overlay a light, modular tech stack on your existing systems,
                from access control to LED ribbons.
              </p>
            </div>
            <Chip icon={Shield} label="No rip-and-replace required" />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3 text-xs sm:text-sm">
            {[
              "AI-assisted scheduling & capacity planning",
              "Computer-vision assisted crowd heatmaps",
              "AR fan quests synced with stadium screens",
              "Real-time sponsor ROI dashboards",
              "Plug-ins for ticketing, POS & CRM tools",
              "GDPR-ready data architecture",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </Section>

      {/* FOOTER */}
      <Section id="footer" index={7}>
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">© {new Date().getFullYear()} NovaPlay Events.</span>
            <span className="hidden sm:inline text-slate-600">
              Crafted for next-gen football experiences.
            </span>
          </div>
          <div className="flex gap-3 text-slate-400">
            <button className="hover:text-slate-200">Deck</button>
            <span>·</span>
            <button className="hover:text-slate-200">Privacy</button>
            <span>·</span>
            <button className="hover:text-slate-200">Contact</button>
          </div>
        </div>
      </Section>
    </>
  );
};

// small icon reused
const CloudPulseIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    className={props.className}
    aria-hidden="true"
    fill="none"
  >
    <path
      d="M6 18.5h12A3.5 3.5 0 0 0 18 12h-.5A5.5 5.5 0 0 0 7 9.8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 17.5a3.5 3.5 0 0 1 0-7c.4-3 2.7-5 5.6-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.7"
    />
  </svg>
);

// -------------------- CASE STUDY PAGE --------------------

const CaseStudyPage = ({ goHome }) => {
  return (
    <>
      {/* HERO */}
      <Section id="cs-hero" index={1}>
        <div className="flex flex-col gap-4 sm:gap-6">
          <button
            onClick={goHome}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-100 w-fit"
          >
            <ChevronLeft className="h-3 w-3" />
            Back to home
          </button>

          <div className="grid gap-6 lg:grid-cols-[2.2fr,1.2fr] items-start">
            <div className="space-y-4 sm:space-y-5">
              <Chip icon={Trophy} label="Case Study · Cup Final" />
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                Champions Night Cup Final:{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 bg-clip-text text-transparent">
                  full-stadium takeover.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                A sold-out final re-imagined as a connected experience—from the
                first ticket email to the final whistle. One operations brain,
                many unforgettable micro-moments.
              </p>
            </div>

            <GlassCard>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div>
                  <p className="text-slate-400">Attendance</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    52,184
                  </p>
                  <p className="text-[11px] text-emerald-300">
                    99.2% of capacity
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Sponsor uplift</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    3.1x
                  </p>
                  <p className="text-[11px] text-sky-300">
                    QR & NFC interactions
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Fan rating</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    96%
                  </p>
                  <p className="text-[11px] text-indigo-300">
                    “Would attend again”
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Section>

      {/* OVERVIEW */}
      <Section id="cs-overview" index={2}>
        <div className="grid gap-6 lg:grid-cols-[1.3fr,1.7fr]">
          <GlassCard className="space-y-4 text-xs sm:text-sm">
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              Event snapshot
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-400">Location</p>
                <p className="text-slate-100">StadiumX Arena</p>
              </div>
              <div>
                <p className="text-slate-400">Competition</p>
                <p className="text-slate-100">City Lights Cup Final</p>
              </div>
              <div>
                <p className="text-slate-400">Date</p>
                <p className="text-slate-100">May 18, 2025</p>
              </div>
              <div>
                <p className="text-slate-400">Kickoff</p>
                <p className="text-slate-100">20:00 local time</p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-indigo-400/60 via-sky-400/40 to-transparent" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-400">Services</p>
                <p className="text-slate-100">
                  Fan journey design, sponsor ecosystems, live data stack, ops
                  war-room.
                </p>
              </div>
              <div>
                <p className="text-slate-400">Deliverables</p>
                <p className="text-slate-100">
                  Experience blueprint, real-time dashboards, sponsor reports,
                  post-match analytics.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="space-y-4 text-xs sm:text-sm">
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              The brief
            </h2>
            <p className="text-slate-300">
              Transform a traditional cup final into a connected, premium, and
              measurable experience that:
            </p>
            <ul className="space-y-2 text-slate-200 list-disc list-inside">
              <li>Reduces entry stress and queue time.</li>
              <li>Activates sponsors beyond static branding.</li>
              <li>Drives pre-kickoff and halftime engagement.</li>
              <li>Provides real-time visibility into matchday performance.</li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* PROBLEM / CHALLENGES */}
      <Section id="cs-challenges" index={3}>
        <div className="grid gap-6 lg:grid-cols-2">
          <GlassCard className="space-y-3 text-xs sm:text-sm">
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              Challenges on and off the pitch
            </h2>
            <ul className="space-y-2 text-slate-200 list-disc list-inside">
              <li>
                Historic stadium with uneven entry gates creating bottlenecks on
                derby nights.
              </li>
              <li>
                Sponsors demanding measurable engagement, not just logo
                placement.
              </li>
              <li>
                Fans arriving in waves without clear pre-match programming.
              </li>
              <li>
                Fragmented data across ticketing, POS, and app with no single
                real-time view.
              </li>
            </ul>
          </GlassCard>

          <GlassCard className="space-y-3 text-xs sm:text-sm">
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              Our design constraints
            </h2>
            <ul className="space-y-2 text-slate-200 list-disc list-inside">
              <li>No major hardware changes, only overlays and integrations.</li>
              <li>Keep sponsor messaging on-brand for both clubs.</li>
              <li>
                Respect local regulations on data, crowd control, and signage.
              </li>
              <li>
                Deliver a system that the club’s own team can reuse for the
                next season.
              </li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* SOLUTION / SERVICES */}
      <Section id="cs-solution" index={4}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-50">
                How we engineered the experience.
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                We layered a modular matchday system on top of existing
                infrastructure—starting with the fan’s first touchpoint and
                flowing all the way to sponsor dashboards.
              </p>
            </div>
            <Chip icon={Rocket} label="4-week rollout" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fan journey map",
                body: "Mapped journeys for families, ultras, VIPs, and remote fans, to design content and flows for each segment.",
              },
              {
                title: "Content & lighting sync",
                body: "Linked scoreboard, LEDs, and app content into one rhythm—from player walk-outs to penalties.",
              },
              {
                title: "Sponsor ecosystems",
                body: "QR and NFC-based challenges, rewards, and AR filters tied to sponsor products and locations.",
              },
              {
                title: "Ops war-room",
                body: "Single dash for crowd flow, sales, and engagement, enabling faster decisions by match control.",
              },
            ].map((block, idx) => (
              <GlassCard key={block.title} className="text-xs sm:text-sm">
                <h3 className="text-sm font-semibold text-slate-50">
                  {block.title}
                </h3>
                <p className="mt-2 text-slate-300">{block.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE TIMELINE */}
      <Section id="cs-timeline" index={5}>
        <GlassCard className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              Experience timeline.
            </h2>
            <Chip icon={Clock3} label="T-3 weeks → +24h" />
          </div>

          <div className="relative text-xs sm:text-sm">
            <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 border-l border-dashed border-slate-700/70" />
            <div className="space-y-4">
              {[
                {
                  label: "T-3 weeks",
                  title: "Launch",
                  body: "Ticket drop, digital teasers, and sponsor-led experiences revealed inside the app.",
                },
                {
                  label: "Matchday −6h",
                  title: "City activation",
                  body: "Fan zones open with live music, AR scavenger hunt, and sponsor sampling.",
                },
                {
                  label: "Matchday −2h",
                  title: "Stadium arrival",
                  body: "Entry flow guidance, live crowd heatmap, and personalized wayfinding for fans.",
                },
                {
                  label: "Kickoff → Halftime",
                  title: "In-bowl experience",
                  body: "Synchronized content with chants, tifo moments, and sponsor triggers at key match beats.",
                },
                {
                  label: "Full-time → +24h",
                  title: "Afterglow",
                  body: "Highlight reels, sponsor offers, and fan surveys personalized by seat and behavior.",
                },
              ].map((item, idx) => (
                <div key={item.label} className="flex gap-3 sm:gap-4">
                  <div className="relative shrink-0">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-indigo-500/80 shadow shadow-indigo-500/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-slate-50 font-semibold">{item.title}</p>
                    <p className="text-slate-300 mt-1">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </Section>

      {/* OUTCOMES */}
      <Section id="cs-outcomes" index={6}>
        <div className="grid gap-6 lg:grid-cols-[1.4fr,1.6fr]">
          <GlassCard className="space-y-4 text-xs sm:text-sm">
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              Outcomes & impact.
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-400">Queue time</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  −41%
                </p>
                <p className="text-[11px] text-emerald-300">
                  Faster average entry vs previous final.
                </p>
              </div>
              <div>
                <p className="text-slate-400">Sponsor activations</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  +214%
                </p>
                <p className="text-[11px] text-sky-300">
                  Interactions compared to control matches.
                </p>
              </div>
              <div>
                <p className="text-slate-400">App engagement</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  78%
                </p>
                <p className="text-[11px] text-indigo-300">
                  Match attendees used the app at least once.
                </p>
              </div>
              <div>
                <p className="text-slate-400">NPS uplift</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  +23
                </p>
                <p className="text-[11px] text-emerald-300">
                  Improvement over previous season average.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="space-y-4 text-xs sm:text-sm">
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              From the club.
            </h2>
            <p className="text-slate-200 italic">
              “It felt like running a product launch, not just a match. Fans
              noticed, sponsors noticed, and our board noticed. NovaPlay gave us
              a playbook we can reuse and evolve—not a one-off show.”
            </p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <div>
                <p className="text-slate-100 font-semibold">
                  Event Director, Urban United FC
                </p>
                <p className="text-slate-400">City Lights Cup Final 2025</p>
              </div>
              <Chip icon={Shield} label="Repeat client" />
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cs-cta" index={7}>
        <GlassCard className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-50">
              Ready to architect your next matchday?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              We’ll turn your next fixture—league, cup, or friendly—into a
              connected experience with clear numbers your partners will love.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-slate-950 hover:translate-y-0.5">
              Book a discovery call
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            <button
              onClick={goHome}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:bg-white/5"
            >
              Back to overview
            </button>
          </div>
        </GlassCard>
      </Section>
    </>
  );
};

// -------------------- ROOT APP --------------------

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* background grid / glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28)_0,_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(15,23,42,0.6)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(15,23,42,0.6)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-40" />
      </div>

      <Navbar currentPage={page} setCurrentPage={setPage} />

      <main className="pb-16">
        {page === "home" && <HomePage goToCaseStudy={() => setPage("case-study")} />}
        {page === "case-study" && <CaseStudyPage goHome={() => setPage("home")} />}
      </main>
    </div>
  );
};

export default App;

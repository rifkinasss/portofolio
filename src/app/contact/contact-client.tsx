"use client";

import { useState } from "react";
import { usePreferences } from "@/components/layout/app-providers";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig, socialLinks } from "@/data/portfolio";

const helpAreas = [
  {
    title: "Product Development",
    description: {
      en: "Building web applications, dashboards, and internal business systems.",
      id: "Membangun web application, dashboard, dan sistem internal bisnis.",
    },
  },
  {
    title: "Technical Consultation",
    description: {
      en: "Discussing architecture, development strategies, and implementation approaches.",
      id: "Mendiskusikan arsitektur, strategi pengembangan, dan pendekatan implementasi.",
    },
  },
  {
    title: "Startup Ideas",
    description: {
      en: "Exploring and validating software or SaaS opportunities.",
      id: "Mengeksplorasi dan memvalidasi peluang software atau SaaS.",
    },
  },
  {
    title: "Collaboration",
    description: {
      en: "Working together on meaningful technology projects.",
      id: "Bekerja bersama dalam project teknologi yang bermakna.",
    },
  },
];

const topicOptions = [
  "Project Inquiry",
  "Startup Discussion",
  "Collaboration",
  "Other",
];

const alternativeLinks = [
  {
    name: "Email",
    url: `mailto:${siteConfig.email}`,
  },
  ...socialLinks.filter((link) => ["LinkedIn", "GitHub"].includes(link.name)),
  {
    name: "Threads",
    url: "https://www.threads.net/@naslabs.id",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/naslabs.id",
  },
];

const faqs = [
  {
    question: {
      en: "Do you take freelance projects?",
      id: "Apakah kamu menerima project freelance?",
    },
    answer: {
      en: "Yes, depending on scope, timeline, and alignment with my current commitments.",
      id: "Ya, tergantung scope, timeline, dan kesesuaian dengan komitmen saya saat ini.",
    },
  },
  {
    question: {
      en: "Do you work with startups?",
      id: "Apakah kamu bekerja dengan startup?",
    },
    answer: {
      en: "Yes. I'm particularly interested in early-stage products and software ventures.",
      id: "Ya. Saya tertarik dengan produk tahap awal dan venture software.",
    },
  },
  {
    question: {
      en: "What technologies do you use?",
      id: "Teknologi apa yang kamu gunakan?",
    },
    answer: {
      en: "My primary stack includes Laravel, Next.js, PostgreSQL, TypeScript, and related technologies.",
      id: "Stack utama saya mencakup Laravel, Next.js, PostgreSQL, TypeScript, dan teknologi terkait.",
    },
  },
  {
    question: {
      en: "Are you available for collaboration?",
      id: "Apakah kamu terbuka untuk kolaborasi?",
    },
    answer: {
      en: "I'm always open to discussing interesting opportunities and meaningful projects.",
      id: "Saya selalu terbuka untuk mendiskusikan peluang menarik dan project yang bermakna.",
    },
  },
];

const copy = {
  en: {
    heroEyebrow: "Contact",
    heroTitle: "Let's Connect",
    heroSubtitle:
      "Whether you're building a product, exploring a startup idea, or looking for technical collaboration, I'd be happy to hear from you.",
    helpEyebrow: "Collaboration Areas",
    helpTitle: "What Can I Help With?",
    formEyebrow: "Contact Form",
    formTitle: "Start the Conversation",
    formDescription:
      "Share a bit of context so I can understand the idea, challenge, or project.",
    name: "Name",
    namePlaceholder: "Your Name",
    email: "Email",
    emailPlaceholder: "Email Address",
    topic: "Topic",
    description: "Project Description",
    descriptionPlaceholder: "Tell me about your idea, challenge, or project.",
    submit: "Start the Conversation",
    otherEyebrow: "Alternative Contact Methods",
    otherTitle: "Other Ways to Reach Me",
    workingEyebrow: "Working Style",
    workingTitle: "How I Prefer to Work",
    workingBody: [
      "I enjoy working on projects that solve real problems and create measurable value.",
      "The best collaborations usually start with a conversation, not a proposal.",
      "I prefer understanding the problem first before discussing technologies or implementation details.",
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Frequently Asked Questions",
    closingTitle: "Let's Build Something Meaningful",
    closingBody: [
      "Every product starts with an idea.",
      "If you're working on something interesting, I'd love to hear about it.",
    ],
    closingCta: "Send a Message",
  },
  id: {
    heroEyebrow: "Kontak",
    heroTitle: "Mari Terhubung",
    heroSubtitle:
      "Baik kamu sedang membangun produk, mengeksplorasi ide startup, atau mencari kolaborasi teknis, saya senang mendengarnya.",
    helpEyebrow: "Area Kolaborasi",
    helpTitle: "Apa yang Bisa Saya Bantu?",
    formEyebrow: "Form Kontak",
    formTitle: "Mulai Percakapan",
    formDescription:
      "Bagikan sedikit konteks agar saya bisa memahami ide, tantangan, atau project yang ingin dibangun.",
    name: "Nama",
    namePlaceholder: "Nama Kamu",
    email: "Email",
    emailPlaceholder: "Alamat Email",
    topic: "Topik",
    description: "Deskripsi Project",
    descriptionPlaceholder: "Ceritakan ide, tantangan, atau project kamu.",
    submit: "Mulai Percakapan",
    otherEyebrow: "Metode Kontak Alternatif",
    otherTitle: "Cara Lain Menghubungi Saya",
    workingEyebrow: "Cara Kerja",
    workingTitle: "Cara Saya Lebih Suka Bekerja",
    workingBody: [
      "Saya suka mengerjakan project yang menyelesaikan masalah nyata dan menciptakan nilai yang terukur.",
      "Kolaborasi terbaik biasanya dimulai dari percakapan, bukan proposal.",
      "Saya lebih suka memahami masalahnya terlebih dahulu sebelum membahas teknologi atau detail implementasi.",
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Pertanyaan yang Sering Ditanyakan",
    closingTitle: "Mari Bangun Sesuatu yang Bermakna",
    closingBody: [
      "Setiap produk dimulai dari sebuah ide.",
      "Jika kamu sedang mengerjakan sesuatu yang menarik, saya ingin mendengarnya.",
    ],
    closingCta: "Kirim Pesan",
  },
};

export default function ContactPage() {
  const { language } = usePreferences();
  const text = copy[language];
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: topicOptions[0],
    description: "",
  });

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `${form.topic} - ${form.name || "NasLabs Contact"}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.description}`,
  )}`;

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-6">
      <section className="mb-14">
        <p className="mb-3 text-sm font-medium text-cyan-300">
          {text.heroEyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {text.heroTitle}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
          {text.heroSubtitle}
        </p>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.helpEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.helpTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {helpAreas.map((area, index) => (
            <Card key={area.title} className="glass-panel">
              <CardHeader>
                <Badge className="mb-4 w-fit bg-cyan-300/10 text-cyan-100">
                  0{index + 1}
                </Badge>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {area.description[language]}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <Card className="glass-panel">
          <CardHeader>
            <p className="mb-2 text-sm font-medium text-cyan-300">
              {text.formEyebrow}
            </p>
            <CardTitle className="text-3xl">{text.formTitle}</CardTitle>
            <CardDescription>{text.formDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-5">
              <label className="grid gap-2 text-sm font-medium">
                {text.name}
                <input
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder={text.namePlaceholder}
                  className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                {text.email}
                <input
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  type="email"
                  placeholder={text.emailPlaceholder}
                  className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                {text.topic}
                <select
                  value={form.topic}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      topic: event.target.value,
                    }))
                  }
                  className="h-11 rounded-md border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
                >
                  {topicOptions.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium">
                {text.description}
                <textarea
                  value={form.description}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      description: event.target.value,
                    }))
                  }
                  placeholder={text.descriptionPlaceholder}
                  rows={6}
                  className="resize-none rounded-md border border-border bg-background px-3 py-3 text-sm leading-6 text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <ButtonLink href={mailtoHref} className="w-fit">
                {text.submit}
              </ButtonLink>
            </form>
          </CardContent>
        </Card>

        <div className="grid gap-8">
          <Card className="glass-panel">
            <CardHeader>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                {text.otherEyebrow}
              </p>
              <CardTitle>{text.otherTitle}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              {alternativeLinks.map((link) => (
                <ButtonLink
                  key={link.name}
                  href={link.url}
                  variant="outline"
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noreferrer"}
                >
                  {link.name}
                </ButtonLink>
              ))}
            </CardContent>
          </Card>

          <Card className="glass-panel">
            <CardHeader>
              <p className="mb-2 text-sm font-medium text-cyan-300">
                {text.workingEyebrow}
              </p>
              <CardTitle>{text.workingTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
              {text.workingBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-300">
            {text.faqEyebrow}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {text.faqTitle}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.question.en} className="glass-panel">
              <CardHeader>
                <CardTitle className="text-xl">{faq.question[language]}</CardTitle>
                <CardDescription className="text-sm leading-6">
                  {faq.answer[language]}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="glass-panel rounded-lg border border-cyan-300/20 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.closingTitle}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                {text.closingBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <ButtonLink href={`mailto:${siteConfig.email}`} size="lg">
              {text.closingCta}
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}

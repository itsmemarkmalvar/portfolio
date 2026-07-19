import Link from "next/link";
import {
  Code2,
  Server,
  Smartphone,
  Braces,
  GraduationCap,
  ExternalLink,
  Mail,
  Sparkles,
  Github,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

/** Simple Icons slug for each skill (cdn.simpleicons.org/{slug}) */
const skillLogos: Record<string, string> = {
  React: "react",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  Laravel: "laravel",
  PHP: "php",
  "React Native": "react",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Java: "openjdk",
  Python: "python",
  "C++": "cplusplus",
  HTML: "html5",
  CSS: "css",
};

const SKILL_ICON_SIZE = 20;
const skillIconUrl = (name: string) =>
  `https://cdn.simpleicons.org/${skillLogos[name] ?? "code"}/a1a1aa`;

const skillGroups = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Laravel", "PHP"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["React Native"],
  },
  {
    title: "Languages",
    icon: Braces,
    items: ["JavaScript", "TypeScript", "PHP", "Java", "Python", "C++", "HTML", "CSS"],
  },
];

const projects = [
  {
    title: "NetGenie",
    description:
      "AI-powered ISP assistant for PLDT, Globe, and Converge. Delivers instant answers about plans, technical issues, and personalized recommendations — 24/7 support in one place.",
    url: "https://chatbot-frontend-nine-xi.vercel.app/",
    repo: null as string | null,
    tags: ["React", "Next.js", "AI"],
  },
  {
    title: "OJT Attendance System",
    description:
      "The PESO platform is an end-to-end digital solution designed to modernize how government agencies manage their internship programs (like SPES and GIP). Moving away from manual paperwork, this platform digitizes the entire lifecycle of an intern—from onboarding and document submission to daily attendance and final evaluation.",
    url: "https://peso-frontend-fnyv.vercel.app/",
    repo: null as string | null,
    tags: ["React", "Next.js", "Web"],
  },
];

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mark-joseph-malvar-7851103aa/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/itsmemarkmalvar",
    icon: Github,
    external: true,
  },
  {
    label: "malvar.593@gmail.com",
    href: "mailto:malvar.593@gmail.com",
    icon: Mail,
    external: false,
  },
];

const resumeUrl = "#contact"; // Replace with your resume/CV URL when ready

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:flex-nowrap">
          <Button variant="link" size="default" className="text-xl font-bold" asChild>
            <Link href="#hero">MJM</Link>
          </Button>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Button variant="ghost" size="sm" className="text-muted-foreground" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              </li>
            ))}
            <li>
              <Button size="sm" className="rounded-full" asChild>
                <Link href={resumeUrl}>Resume</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden px-6 py-20 sm:py-24 md:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,var(--accent-glow),transparent)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--background)_70%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
                linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
            aria-hidden
          />

          <div className="relative mx-auto max-w-4xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
                Bachelor of Science in Computer Science
              </Badge>
              <Badge variant="outline" className="rounded-full border-primary/60 px-4 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="mr-1.5 size-3.5" aria-hidden />
                Open to opportunities
              </Badge>
            </div>
            <h1 className="mb-3 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Mark Joseph</span> Malvar
            </h1>
            <p className="mb-2 text-xl font-medium text-muted-foreground sm:text-2xl">
              Full-Stack Developer
            </p>
            <p className="mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I build web and mobile apps with React, Next.js, and Laravel —
              focused on clean code, great UX, and shipping products that users love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="min-h-12 rounded-full px-7 shadow-lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" className="min-h-12 rounded-full px-7" asChild>
                <Link href="#contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 px-6 py-16 sm:py-20">
          <Separator className="mb-10" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">About</h2>
            </div>
            <p className="max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              I&apos;m a Computer Science graduate focused on full-stack and mobile development.
              I turn ideas into reliable, user-friendly products — from responsive web apps and APIs
              to cross-platform mobile experiences.
            </p>
            <ul className="mt-6 max-w-2xl space-y-2 text-base text-muted-foreground sm:text-lg">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                Build and ship web & mobile apps with React, Next.js, and Laravel
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                Strong foundation in JavaScript, TypeScript, PHP, and modern tooling
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                Focused on clean code, performance, and user experience
              </li>
            </ul>

            <div className="mt-8 rounded-xl border border-border bg-card/50 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                <GraduationCap className="size-4" aria-hidden />
                Education
              </h3>
              <p className="font-medium text-foreground">Bachelor of Science in Computer Science</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Focus: software development, full-stack and mobile applications
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 px-6 py-16 sm:py-20">
          <Separator className="mb-10" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">Skills</h2>
            </div>
            <p className="mb-8 max-w-xl text-muted-foreground">
              Technologies and languages I use to build products.
            </p>
            <div className="grid gap-8 sm:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="rounded-xl border border-border bg-card/50 p-6">
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      <Icon className="size-4" aria-hidden />
                      {group.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50"
                        >
                          <img
                            src={skillIconUrl(item)}
                            alt=""
                            width={SKILL_ICON_SIZE}
                            height={SKILL_ICON_SIZE}
                            className="size-5 shrink-0"
                          />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 px-6 py-16 sm:py-20">
          <Separator className="mb-10" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
            </div>
            <p className="mb-8 max-w-xl text-muted-foreground">
              A selection of projects I&apos;ve built — from AI-powered tools to full-stack applications.
            </p>
            <div className="space-y-6">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="transition-all hover:border-primary/40 hover:shadow-xl sm:px-8 sm:py-6"
                >
                  <CardHeader className="border-b">
                    <CardTitle className="text-xl sm:text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <CardAction>
                      <Button
                        variant="outline"
                        size="default"
                        className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {project.repo && project.url === project.repo ? "View repo" : "Visit live"}
                          <ExternalLink className="size-4" aria-hidden />
                        </Link>
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              More projects on{" "}
              <Link
                href="https://github.com/itsmemarkmalvar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                GitHub
              </Link>
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-6 py-16 sm:py-20">
          <Separator className="mb-10" />
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-primary" aria-hidden />
              <h2 className="text-2xl font-bold sm:text-3xl">Let&apos;s work together</h2>
            </div>
            <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              I&apos;m open to <strong className="text-foreground">full-time roles</strong>,{" "}
              <strong className="text-foreground">freelance projects</strong>, and{" "}
              <strong className="text-foreground">collaboration</strong>. Reach out — I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.label}
                    variant="outline"
                    size="lg"
                    className="min-h-12 rounded-full px-5"
                    asChild
                  >
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2"
                    >
                      <Icon className="size-5" aria-hidden />
                      {item.label}
                      {item.external && <ExternalLink className="size-4" aria-hidden />}
                    </Link>
                  </Button>
                );
              })}
            </div>
            <div className="mt-6">
              <Button size="lg" className="min-h-12 rounded-full px-7" asChild>
                <Link href="mailto:malvar.593@gmail.com" className="inline-flex items-center gap-2">
                  <Mail className="size-5" aria-hidden />
                  Send me an email
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Mark Joseph N. Malvar. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="hidden sm:inline">Built with Next.js</span>
            <Link
              href="https://www.linkedin.com/in/mark-joseph-malvar-7851103aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" aria-hidden />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/itsmemarkmalvar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Github className="size-4" aria-hidden />
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap, VideoCamera, Briefcase, Globe, Target, Buildings, ArrowsClockwise,
  ChalkboardTeacher, ArrowUpRight, Star, MapPin, EnvelopeSimple, Phone, List, X, Check,
} from "@phosphor-icons/react";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import workspace from "@/assets/workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ENTECH Innovations | Tech, Media & Workspace Hub in Onitsha" },
      { name: "description", content: "Practical tech training, media production, co-working and digital solutions in Onitsha, Anambra State." },
      { property: "og:title", content: "ENTECH Innovations | Onitsha's Tech & Media Hub" },
      { property: "og:description", content: "Learn real skills, create great content and grow your business at ENTECH, Onitsha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  { icon: GraduationCap, tag: "Academy", title: "Tech Academy", text: "Hands-on training in skills people actually pay for.", items: ["Web dev, UI/UX, cybersecurity, data analysis", "AI for business and automation", "Photography and cinematography"] },
  { icon: VideoCamera, tag: "Media", title: "Creative & Media Production", text: "Photos, videos and branding that make people stop scrolling.", items: ["Studio for portraits and products", "Content room for YouTubers and podcasters", "Live streaming for virtual events"] },
  { icon: Briefcase, tag: "Workspace", title: "Workspace & Business", text: "A professional base that helps you get serious work done.", items: ["Co-working with fast internet and backup power", "Boardrooms for 50+ people", "Startup incubation, pitch decks, mentorship"] },
  { icon: Globe, tag: "Digital", title: "Digital Integration", text: "Modern tools that help your business run smarter.", items: ["E-commerce and websites that convert", "AI chatbots and workflow automation", "SEO and online reputation"] },
];

const why = [
  { icon: Target, title: "100% practical", text: "Real tools and real projects, so you leave ready to work." },
  { icon: Buildings, title: "A proper hub", text: "Everything you need under one roof in Onitsha." },
  { icon: ArrowsClockwise, title: "Full ecosystem", text: "Learn, create, work and launch, all in one place." },
  { icon: ChalkboardTeacher, title: "Working experts", text: "Your instructors do this for a living every day." },
];

const reviews = [
  { q: "The web development course changed things for me. We built real projects and I got my first developer job three months after finishing.", n: "Chinedu Okonkwo", r: "Web Developer" },
  { q: "My startup grew out of the co-working space. Internet that never drops, steady power and people who genuinely want you to win.", n: "Ada Nwosu", r: "Startup Founder" },
  { q: "The studio team gave us photos and videos that look world class. Our brand has been getting noticed ever since.", n: "Emeka Okafor", r: "Business Owner" },
];

const tools = ["figma.com", "github.com", "google.com", "openai.com", "adobe.com", "canva.com", "wordpress.com", "shopify.com"];

const faqs = [
  { q: "Do I need any experience before joining a course?", a: "Not at all. Most of our classes start from the basics and move at a pace that works for beginners." },
  { q: "Can I book the studio or boardroom by the hour?", a: "Yes. Call or email us with your date and we will sort out a slot that suits you." },
  { q: "Do you offer daily co-working passes?", a: "We have daily, weekly and monthly plans. Drop by for a tour first if you like." },
  { q: "Can you build a website for my business?", a: "Definitely. We design and build sites, online stores and automations for businesses of every size." },
];

function Index() {
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-in", { y: 30, opacity: 0, duration: 0.9, stagger: 0.1, ease: "power3.out" });
      gsap.from(".hero-img", { scale: 1.08, opacity: 0, duration: 1.4, ease: "power3.out" });
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, { y: 40, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.to(".marquee", { xPercent: -50, repeat: -1, duration: 25, ease: "none" });
      gsap.to(".float-a", { y: -12, rotate: -8, yoyo: true, repeat: -1, duration: 2.6, ease: "sine.inOut" });
      gsap.to(".float-b", { y: 12, rotate: 8, yoyo: true, repeat: -1, duration: 3, ease: "sine.inOut" });
    }, root);
    return () => ctx.revert();
  }, []);

  const nav = [["Services", "#services"], ["Why us", "#why"], ["Stories", "#stories"], ["FAQ", "#faq"]];

  return (
    <div ref={root} className="overflow-x-hidden text-sm">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a href="#" className="font-display text-base font-semibold">Entech<span className="text-muted-foreground">Innovations</span></a>
          <nav className="hidden gap-7 text-xs font-medium text-muted-foreground md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="transition-colors hover:text-foreground">{l}</a>)}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground md:inline-flex">Get in touch</a>
          <button aria-label="Menu" className="md:hidden" onClick={() => setMenu(!menu)}>{menu ? <X size={22} /> : <List size={22} />}</button>
        </div>
        {menu && (
          <div className="flex flex-col gap-4 border-t border-border bg-background px-5 py-5 md:hidden">
            {[...nav, ["Contact", "#contact"]].map(([l, h]) => <a key={h} href={h} onClick={() => setMenu(false)} className="font-medium">{l}</a>)}
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pt-24 md:pt-28">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground hero-in">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Onitsha, Anambra State
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="hero-in text-4xl font-medium leading-[1.05] sm:text-5xl md:text-6xl">Building West Africa's digital future, one skill at a time.</h1>
          <div className="hero-in space-y-5">
            <p className="text-muted-foreground leading-relaxed">ENTECH Innovations is a tech, media and business hub where people learn real skills, create great work and grow serious businesses. We don't just teach. We build alongside you.</p>
            <div className="flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-accent-foreground">Explore services <ArrowUpRight size={14} weight="bold" /></a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-xs font-semibold">Visit the hub</a>
            </div>
          </div>
        </div>
        <div className="relative mt-10 overflow-hidden rounded-3xl">
          <img src={hero} alt="Students learning together at ENTECH" width={1600} height={1008} className="hero-img h-[320px] w-full object-cover sm:h-[460px]" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            {["Individuals", "Startups", "SMEs", "Corporates", "Government"].map((t) => (
              <span key={t} className="rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium backdrop-blur">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="mt-14 overflow-hidden border-y border-border py-6">
        <p className="mb-5 text-center text-[11px] uppercase tracking-wider text-muted-foreground">Tools you'll work with</p>
        <div className="marquee flex w-max gap-14">
          {[...tools, ...tools].map((d, i) => (
            <img key={i} src={`https://cdn.brandfetch.io/${d}/w/200/h/60`} alt={d} loading="lazy" className="h-6 w-auto opacity-60 grayscale" onError={(e) => (e.currentTarget.style.display = "none")} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20">
        <div className="reveal flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <Label>Services</Label>
            <h2 className="mt-3 text-3xl font-medium sm:text-4xl">Four ways we help you grow</h2>
          </div>
          <p className="max-w-xs text-muted-foreground">Pick one or use them all. Everything connects.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map(({ icon: Icon, tag, title, text, items }) => (
            <div key={title} className="reveal group rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-xl">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary"><Icon size={20} /></div>
                <span className="rounded-full bg-secondary px-3 py-1 text-[11px] text-muted-foreground">{tag}</span>
              </div>
              <h3 className="mt-6 text-lg font-medium">{title}</h3>
              <p className="mt-1 text-muted-foreground">{text}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {items.map((i) => <li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0" weight="bold" />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[[studio, "Studio & media"], [workspace, "Boardrooms & workspace"]].map(([src, l]) => (
            <div key={l} className="reveal relative overflow-hidden rounded-3xl">
              <img src={src} alt={l} loading="lazy" width={800} height={1008} className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-96" />
              <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium backdrop-blur">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-deep text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="reveal">
            <Label light>Why ENTECH</Label>
            <h2 className="mt-3 max-w-lg text-3xl font-medium sm:text-4xl">The place to level up in tech</h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {why.map(({ icon: Icon, title, text }, i) => (
              <div key={title} className="reveal bg-primary p-6">
                <span className="text-[11px] text-primary-foreground/50">0{i + 1}</span>
                <Icon size={26} className="mt-6 text-accent" />
                <h3 className="mt-4 text-base font-medium">{title}</h3>
                <p className="mt-1 text-primary-foreground/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="stories" className="mx-auto max-w-6xl px-5 py-20">
        <div className="reveal"><Label>Stories</Label><h2 className="mt-3 text-3xl font-medium sm:text-4xl">What our people say</h2></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="reveal flex flex-col justify-between rounded-3xl bg-card p-6 shadow-sm">
              <div>
                <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} weight="fill" />)}</div>
                <blockquote className="mt-4 leading-relaxed">"{r.q}"</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">{r.n.split(" ").map((x) => x[0]).join("")}</span>
                <span><span className="block font-semibold">{r.n}</span><span className="text-xs text-muted-foreground">{r.r}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 md:grid-cols-2">
        <div className="reveal flex flex-col justify-between gap-8">
          <div><Label>FAQ</Label><h2 className="mt-3 text-3xl font-medium sm:text-4xl">Questions people ask</h2></div>
          <div className="max-w-xs rounded-3xl bg-card p-6 shadow-sm">
            <p className="font-semibold">Still curious?</p>
            <p className="mt-2 text-muted-foreground">Courses, studio bookings, desk space or anything else. We're happy to talk.</p>
            <a href="#contact" className="mt-5 flex items-center justify-between font-semibold">Contact us <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary"><ArrowUpRight size={14} /></span></a>
          </div>
        </div>
        <div className="reveal">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-border py-4">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-start justify-between gap-4 text-left">
                <span><span className="block text-[11px] text-muted-foreground">0{i + 1}</span><span className="font-medium">{f.q}</span></span>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-secondary transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && <p className="mt-3 pr-10 text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative mx-auto max-w-6xl px-5 py-16 text-center">
        <img src={studio} alt="" className="float-a absolute left-2 top-6 hidden h-40 w-32 rounded-2xl object-cover shadow-xl sm:block md:left-16" />
        <img src={hero} alt="" className="float-b absolute bottom-6 right-2 hidden h-32 w-40 rounded-2xl object-cover shadow-xl sm:block md:right-16" />
        <div className="reveal mx-auto max-w-md">
          <h2 className="text-3xl font-medium sm:text-4xl"><span className="text-muted-foreground">Ready to</span><br />build something great?</h2>
          <p className="mt-4 text-muted-foreground">Got a project, want to join a class or need a desk? Come say hello.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="mailto:info@entechinnovations.com" className="rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-accent-foreground">Contact us today</a>
            <a href="https://maps.google.com/?q=207+Ugwunobamkpa+Road+Onitsha" target="_blank" rel="noreferrer" className="rounded-full border border-border px-5 py-2.5 text-xs font-semibold">Get directions</a>
          </div>
        </div>
      </section>

      <footer className="bg-deep text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 pt-14">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-lg font-semibold">EntechInnovations</p>
              <p className="mt-1 text-primary-foreground/60">Innovate. Create. Elevate.</p>
              <ul className="mt-6 space-y-3 text-primary-foreground/80">
                <li className="flex gap-3"><MapPin size={18} className="shrink-0" />207 Ugwunobamkpa Road, by Savoir Junction, off Awka Road, Onitsha, Anambra State</li>
                <li className="flex gap-3"><EnvelopeSimple size={18} />info@entechinnovations.com</li>
                <li className="flex gap-3"><Phone size={18} />+234 806 983 1304</li>
              </ul>
            </div>
            {[["Explore", ["About us", "Tech Academy", "Media & Studio"]], ["Connect", ["Co-working", "Blog & News", "Contact"]]].map(([h, ls]) => (
              <div key={h as string}>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/50">{h}</p>
                <ul className="mt-4">
                  {(ls as string[]).map((l) => <li key={l}><a href="#" className="flex items-center justify-between border-b border-primary-foreground/10 py-2.5">{l}<ArrowUpRight size={12} /></a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 select-none font-display text-[22vw] font-semibold leading-[0.8] text-primary-foreground/15 md:text-[15rem]">entech</p>
          <div className="flex flex-col justify-between gap-2 border-t border-primary-foreground/10 py-5 text-[11px] text-primary-foreground/50 sm:flex-row">
            <span>© {new Date().getFullYear()} ENTECH Innovations Limited</span><span>Onitsha, Nigeria</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Label({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />{children}
    </span>
  );
}

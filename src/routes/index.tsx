import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight, ArrowRight, ArrowLeft, Asterisk, List, X, MapPin, EnvelopeSimple, Phone,
  InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo, Target, Buildings, ArrowsClockwise, ChalkboardTeacher,
  Plus, CaretDown, ChatCircleDots, ArrowUp,
} from "@phosphor-icons/react";

const IMG = "https://placehold.net/default.png";

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
  { title: "Tech Academy", tags: ["Web dev", "UI/UX", "AI"], text: "Practical classes in web development, UI/UX, cybersecurity, data analysis and AI for business." },
  { title: "Media Studio", tags: ["Photo", "Video"], text: "Portrait and product shoots, a content room for creators and live streaming for events." },
  { title: "Workspace", tags: ["Co-working", "Boardroom"], text: "Fast internet, steady power and boardrooms that seat more than fifty people." },
  { title: "Digital Solutions", tags: ["Web", "SEO", "Automation"], text: "Websites, online stores, chatbots and SEO that help your business get found." },
];

const programs = [
  { t: "Web Development", tag: "Academy", d: "12 weeks" },
  { t: "UI/UX Design", tag: "Academy", d: "8 weeks" },
  { t: "Photography & Film", tag: "Creative", d: "6 weeks" },
  { t: "Startup Incubation", tag: "Business", d: "Ongoing" },
];

const why = [
  { icon: Target, t: "Fully practical", d: "Real tools, real projects. You leave ready to work." },
  { icon: Buildings, t: "One proper hub", d: "Learn, shoot, meet and work under one roof." },
  { icon: ArrowsClockwise, t: "Full ecosystem", d: "From your first class to your first client." },
  { icon: ChalkboardTeacher, t: "Working experts", d: "Taught by people who do this every day." },
];

const reviews = [
  { q: "We built real projects from week one. Three months after finishing, I landed my first developer job.", n: "Chinedu Okonkwo", r: "Web Developer" },
  { q: "My startup grew in that co-working space. The internet never drops and the people genuinely want you to win.", n: "Ada Nwosu", r: "Startup Founder" },
  { q: "The studio team gave us photos and videos that look world class. People finally notice our brand.", n: "Emeka Okafor", r: "Business Owner" },
];

const team = [
  { n: "Team member", r: "Founder & CEO" },
  { n: "Team member", r: "Head of Academy" },
  { n: "Team member", r: "Creative Director" },
  { n: "Team member", r: "Hub Manager" },
];

const faqs = [
  { q: "Do I need experience before joining a course?", a: "Not at all. Most classes start from the basics and move at a pace that works for beginners." },
  { q: "Can I book the studio or boardroom by the hour?", a: "Yes. Call or email us with your date and we'll find a slot that suits you." },
  { q: "Do you offer daily co-working passes?", a: "We have flexible plans. Drop by for a tour and we'll find one that fits how you work." },
  { q: "Can you build a website for my business?", a: "Definitely. We design and build websites, online stores and automations for businesses of every size." },
  { q: "Where exactly are you located?", a: "207 Ugwunobamkpa Road, by Savoir Junction, off Awka Road, Onitsha, Anambra State." },
];

const tools = ["figma.com", "github.com", "google.com", "openai.com", "adobe.com", "canva.com", "notion.so", "shopify.com"];

function Index() {
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [rev, setRev] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [pil, setPil] = useState(0);
  const [faq, setFaq] = useState<number | null>(0);
  const [top, setTop] = useState(false);
  useEffect(() => {
    const f = () => setTop(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".h-in", { y: 24, opacity: 0, duration: 0.9, stagger: 0.08, ease: "power3.out", delay: 0.1 });
      gsap.from(".h-card", { y: 40, opacity: 0, duration: 1.1, stagger: 0.12, ease: "power3.out" });
      gsap.utils.toArray<HTMLElement>(".rv").forEach((el) =>
        gsap.from(el, { y: 32, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } }),
      );
      gsap.from(".pill", { scale: 0.85, opacity: 0, stagger: 0.1, duration: 0.7, ease: "back.out(1.6)", scrollTrigger: { trigger: ".pills", start: "top 85%" } });
      gsap.to(".orb", { y: -10, yoyo: true, repeat: -1, duration: 2.4, stagger: 0.4, ease: "sine.inOut" });
      gsap.to(".marquee", { xPercent: -50, repeat: -1, duration: 30, ease: "none" });
      gsap.to(".hero-par", { yPercent: -10, ease: "none", scrollTrigger: { trigger: ".hero-par", start: "top top", end: "bottom top", scrub: true } });
      gsap.from(".wordmark", { yPercent: 40, opacity: 0, ease: "power3.out", scrollTrigger: { trigger: ".wordmark", start: "top 95%", end: "top 60%", scrub: true } });
      gsap.to(".spin", { rotate: 360, repeat: -1, duration: 12, ease: "none" });
    }, root);
    return () => ctx.revert();
  }, []);

  const nav = [["About", "#about"], ["Services", "#services"], ["Team", "#team"], ["FAQ", "#faq"]];
  const r = reviews[rev]!;

  return (
    <div ref={root} className="overflow-x-hidden text-[13px] sm:text-sm">
      <div className="mx-auto max-w-[1240px] px-3 sm:px-5">
        {/* NAV */}
        <header className="sticky top-3 z-50 mt-3 flex items-center justify-between rounded-full border border-border bg-background/85 p-1.5 backdrop-blur-md">
          <nav className="hidden gap-1 md:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="rounded-full px-3.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">{l}</a>
            ))}
          </nav>
          <a href="#" className="flex items-center gap-1.5 pl-3 font-display text-[15px] font-semibold md:absolute md:left-1/2 md:-translate-x-1/2 md:pl-0">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-primary-foreground"><Asterisk size={14} weight="bold" /></span>
            Entech
          </a>
          <a href="#contact" className="hidden rounded-full bg-ink px-4 py-2 text-xs font-medium text-primary-foreground md:inline-flex">Contact us</a>
          <button aria-label="Menu" onClick={() => setMenu(!menu)} className="grid h-9 w-9 place-items-center rounded-full bg-muted md:hidden">
            {menu ? <X size={18} /> : <List size={18} />}
          </button>
          {menu && (
            <div className="absolute inset-x-0 top-14 flex flex-col rounded-3xl border border-border bg-background p-3 shadow-xl md:hidden">
              {[...nav, ["Contact", "#contact"]].map(([l, h]) => (
                <a key={h} href={h} onClick={() => setMenu(false)} className="rounded-2xl px-4 py-3 font-medium hover:bg-muted">{l}</a>
              ))}
            </div>
          )}
        </header>

        {/* HERO */}
        <section className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="h-card relative flex min-h-[420px] flex-col items-center justify-center rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground sm:min-h-[520px]">
            <span className="h-in flex items-center gap-1.5 text-[11px] font-medium opacity-80"><Asterisk size={12} weight="bold" /> Entech Innovations Limited</span>
            <h1 className="h-in mt-5 font-display text-[2.4rem] font-medium leading-[1.02] sm:text-6xl">
              Empowering West Africa's <span className="underline decoration-accent decoration-2 underline-offset-[6px]">digital</span> future.
            </h1>
            <p className="h-in mt-5 max-w-sm opacity-80">A tech, media and business hub in Onitsha where people learn real skills and build real things.</p>
            <div className="h-in mt-7 flex flex-wrap justify-center gap-2">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-xs font-medium text-foreground">Start learning <ArrowRight size={14} /></a>
              <a href="#services" className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-xs font-medium">Our services</a>
            </div>
            <div className="h-in mt-8 flex items-center gap-3 text-[11px] opacity-90">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => <img key={i} src={IMG} alt="" className="h-7 w-7 rounded-full border-2 border-primary object-cover" />)}
              </div>
              <span className="text-left leading-tight">Trusted by students,<br />startups and SMEs</span>
            </div>
          </div>

          <div className="h-card flash group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-muted sm:min-h-[520px]">
            <img src={IMG} alt="ENTECH hub" className="hero-par absolute inset-0 h-[115%] w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
            <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight size={16} /></span>
          </div>
        </section>

        {/* STATEMENT */}
        <section id="about" className="relative py-24 text-center sm:py-32">
          <img src={IMG} alt="" className="orb absolute left-[6%] top-16 hidden h-12 w-12 rounded-full object-cover sm:block" />
          <img src={IMG} alt="" className="orb absolute left-[14%] top-36 hidden h-14 w-14 rounded-full object-cover sm:block" />
          <img src={IMG} alt="" className="orb absolute right-[8%] top-14 hidden h-14 w-14 rounded-full object-cover sm:block" />
          <img src={IMG} alt="" className="orb absolute right-[16%] top-40 hidden h-11 w-11 rounded-full object-cover sm:block" />
          <h2 className="rv mx-auto max-w-xl font-display text-3xl font-medium leading-tight sm:text-5xl">We don't just teach and serve. We build.</h2>
          <p className="rv mx-auto mt-5 max-w-md text-muted-foreground">From the commercial heart of Onitsha, we help individuals, startups, SMEs, corporates and government agencies grow with the right skills and tools.</p>
          <div className="rv mt-7 flex justify-center gap-3">
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium">Explore services <ArrowRight size={14} /></a>
          </div>
        </section>

        {/* PILLS */}
        <section className="pills grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="pill grid h-28 place-items-center rounded-full bg-muted font-display text-2xl font-medium sm:h-36 sm:text-4xl">Learn</div>
          <div className="pill relative grid h-28 place-items-center overflow-hidden rounded-full sm:h-36">
            <img src={IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-ink/45" />
            <span className="relative font-display text-2xl font-medium text-primary-foreground sm:text-4xl">Create</span>
          </div>
          <div className="pill grid h-28 place-items-center rounded-full bg-primary text-primary-foreground sm:h-36"><ArrowRight size={44} weight="light" /></div>
          <div className="pill relative grid h-28 place-items-center overflow-hidden rounded-full sm:h-36">
            <img src={IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-ink/45" />
            <span className="relative font-display text-2xl font-medium text-primary-foreground sm:text-4xl">Elevate</span>
          </div>
        </section>

        {/* PROGRAMS TABLE */}
        <section id="programs" className="py-24">
          <div className="rv flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Popular programs</h2>
            <p className="max-w-[220px] text-xs text-muted-foreground">Short, focused and hands-on. Pick a track and start this month.</p>
          </div>
          <div className="mt-8 hidden grid-cols-[2fr_1fr_1fr_40px] pb-3 text-[11px] text-muted-foreground sm:grid">
            <span>Program</span><span>Track</span><span>Duration</span><span />
          </div>
          <div className="relative border-t border-border" onMouseLeave={() => setHover(null)}>
            {programs.map((p, i) => (
              <a key={p.t} href="#contact" onMouseEnter={() => setHover(i)}
                className="rv relative grid grid-cols-[1fr_auto] items-center gap-2 border-b border-border py-5 sm:grid-cols-[2fr_1fr_1fr_40px]">
                <span className="font-display text-lg font-medium sm:text-xl">{p.t}</span>
                <span className="hidden sm:block"><span className={`rounded-full border px-2.5 py-0.5 text-[11px] ${hover === i ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>{p.tag}</span></span>
                <span className="hidden text-muted-foreground sm:block">{p.d}</span>
                <span className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${hover === i ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}><ArrowRight size={14} /></span>
              </a>
            ))}
            {hover !== null && (
              <img src={IMG} alt="" style={{ top: hover * 72 - 20 }} className="pointer-events-none absolute right-24 hidden h-32 w-48 -rotate-6 rounded-2xl object-cover shadow-2xl transition-all duration-300 lg:block" />
            )}
          </div>
        </section>

        {/* SERVICES CARDS */}
        <section id="services">
          <div className="rv mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Our pillars</h2>
            <p className="max-w-[220px] text-xs text-muted-foreground">Four connected services that help you grow faster.</p>
          </div>
          <div className="flex flex-col gap-3 lg:h-[460px] lg:flex-row" onMouseLeave={() => setPil(0)}>
            {pillars.map((p, i) => {
              const on = pil === i;
              return (
                <div key={p.title} onMouseEnter={() => setPil(i)} onClick={() => setPil(i)}
                  style={{ flexGrow: on ? 3.2 : 1 }}
                  className="rv flash group relative h-[340px] min-w-0 basis-0 cursor-pointer overflow-hidden rounded-[1.75rem] bg-muted transition-[flex-grow] duration-700 ease-[cubic-bezier(.7,0,.2,1)] lg:h-auto">
                  <img src={IMG} alt={p.title} loading="lazy" className={`absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ${on ? "scale-105" : ""}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                  <span className="absolute left-5 top-5 font-display text-xs text-primary-foreground/70">0{i + 1}</span>
                  <span className={`absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full transition-all duration-500 ${on ? "rotate-45 bg-accent text-accent-foreground" : "bg-background text-foreground"}`}><ArrowUpRight size={14} /></span>
                  <div className="absolute inset-x-5 bottom-5 text-primary-foreground">
                    <h3 className={`font-display font-medium leading-none transition-all duration-500 ${on ? "text-3xl" : "text-xl lg:[writing-mode:vertical-rl] lg:rotate-180"}`}>{p.title}</h3>
                    <div className={`grid transition-all duration-700 ${on ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 lg:grid-rows-[0fr]"} max-lg:mt-3 max-lg:grid-rows-[1fr] max-lg:opacity-100`}>
                      <div className="overflow-hidden">
                        <div className="flex flex-wrap gap-1">{p.tags.map((t) => <span key={t} className="rounded-full border border-primary-foreground/40 px-2.5 py-0.5 text-[10px]">{t}</span>)}</div>
                        <p className="mt-3 max-w-sm text-xs leading-relaxed opacity-80">{p.text}</p>
                        <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-[11px] font-semibold text-foreground">Learn more <ArrowRight size={12} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* LOGOS */}
        <section className="mt-24 overflow-hidden">
          <p className="rv mb-6 text-center text-[11px] text-muted-foreground">Industry tools you'll learn and work with</p>
          <div className="relative [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="marquee flex w-max items-center gap-16">
              {[...tools, ...tools].map((d, i) => (
                <img key={i} src={`https://cdn.brandfetch.io/${d}/w/240/h/80/logo`} alt={d} loading="lazy" className="h-6 w-auto opacity-50 grayscale"
                  onError={(e) => { e.currentTarget.style.display = "none"; }} />
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="py-24">
          <div className="grid gap-3 lg:grid-cols-[1fr_2fr]">
            <div className="rv flex flex-col justify-between rounded-[1.75rem] bg-ink p-7 text-primary-foreground">
              <div>
                <span className="text-[11px] opacity-60">Why Entech</span>
                <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">Where serious growth happens.</h2>
              </div>
              <div className="mt-10 flex items-end justify-between">
                <div><p className="font-display text-5xl font-medium">50+</p><p className="text-[11px] opacity-60">seat conference hall</p></div>
                <Asterisk size={56} className="spin text-accent" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {why.map(({ icon: Icon, t, d }) => (
                <div key={t} className="rv rounded-[1.75rem] border border-border bg-card p-6 transition-colors hover:border-primary">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary"><Icon size={18} /></span>
                  <h3 className="mt-8 font-display text-lg font-medium">{t}</h3>
                  <p className="mt-1 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section id="stories" className="rv rounded-[2rem] bg-secondary px-6 py-14 sm:px-14 sm:py-20">
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-secondary-foreground/70">Stories · {String(rev + 1).padStart(2, "0")}/03</span>
            <div className="flex gap-2">
              <button aria-label="Previous" onClick={() => setRev((rev + 2) % 3)} className="grid h-9 w-9 place-items-center rounded-full bg-background"><ArrowLeft size={14} /></button>
              <button aria-label="Next" onClick={() => setRev((rev + 1) % 3)} className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowRight size={14} /></button>
            </div>
          </div>
          <blockquote key={rev} className="mt-10 max-w-3xl font-display text-2xl font-medium leading-snug text-secondary-foreground sm:text-4xl">"{r.q}"</blockquote>
          <div className="mt-10 flex items-center gap-3">
            <img src={IMG} alt="" className="h-11 w-11 rounded-full object-cover" />
            <div><p className="font-semibold">{r.n}</p><p className="text-xs text-secondary-foreground/70">{r.r}</p></div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="py-24">
          <div className="rv flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Meet the team</h2>
            <p className="max-w-[220px] text-xs text-muted-foreground">The people who make the hub tick, every single day.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {team.map((m) => (
              <div key={m.n} className="rv flash group relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-muted">
                <img src={IMG} alt={m.n} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <span className="absolute left-3 top-3 rounded-full bg-background/85 px-3 py-1 text-[11px] font-medium backdrop-blur">{m.n}</span>
                <span className="absolute bottom-3 right-3 rounded-full bg-ink/60 px-3 py-1 text-[11px] text-primary-foreground backdrop-blur transition-all duration-500 group-hover:bg-primary">{m.r}</span>
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/85 transition-transform duration-500 group-hover:rotate-90"><Plus size={12} /></span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="grid gap-10 pb-24 md:grid-cols-2">
          <div className="rv flex flex-col justify-between gap-8">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Frequently<br />asked questions</h2>
            <div className="max-w-[260px] rounded-[1.5rem] border border-border bg-card p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-secondary text-primary"><ChatCircleDots size={18} /></span>
              <p className="mt-4 font-medium">Still have questions?</p>
              <p className="mt-1 text-xs text-muted-foreground">Courses, studio bookings, desks or anything in between. We're happy to help.</p>
              <a href="#contact" className="mt-5 flex items-center justify-between text-xs font-semibold">Contact us <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary"><ArrowUpRight size={12} /></span></a>
            </div>
          </div>
          <div className="rv">
            {faqs.map((f, i) => {
              const on = faq === i;
              return (
                <div key={f.q} className="border-b border-border">
                  <button onClick={() => setFaq(on ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
                    <span><span className="block text-[10px] text-muted-foreground">0{i + 1}</span><span className="font-medium">{f.q}</span></span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-500 ${on ? "rotate-180 bg-primary text-primary-foreground" : "bg-muted"}`}><CaretDown size={12} /></span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${on ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <p className="overflow-hidden pr-12 text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="pb-24">
          <div className="rv grid gap-8 border-b border-border pb-16 md:grid-cols-2 md:items-end">
            <span className="w-max rounded-full border border-border px-3 py-1 text-[11px]">Let's talk</span>
            <div>
              <h2 className="font-display text-2xl font-medium leading-snug sm:text-3xl">Have a project, want to join a class or need a desk? Let's build something great together.</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href="mailto:info@entechinnovations.com" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium text-primary-foreground">Contact us today <ArrowRight size={14} /></a>
                <a href="https://maps.google.com/?q=207+Ugwunobamkpa+Road+Onitsha" target="_blank" rel="noreferrer" className="rounded-full border border-border bg-background px-5 py-2.5 text-xs font-medium">Get directions</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="relative mt-4 overflow-hidden rounded-t-[2.5rem] bg-ink text-primary-foreground sm:rounded-t-[4rem]">
        <div className="mx-auto max-w-[1240px] px-5 pt-16 sm:pt-20">
          <div className="grid gap-10 border-b border-primary-foreground/10 pb-14 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className="rv font-display text-3xl font-medium leading-tight sm:text-5xl">Ready to build<br /><span className="text-primary-foreground/40">your next big thing?</span></h2>
            <form onSubmit={(e) => e.preventDefault()} className="rv flex w-full items-center gap-2 rounded-full border border-primary-foreground/15 p-1.5 focus-within:border-accent">
              <input type="email" required placeholder="Your email for updates" className="min-w-0 flex-1 bg-transparent px-4 text-xs outline-none placeholder:text-primary-foreground/40" />
              <button className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground">Subscribe <ArrowRight size={12} /></button>
            </form>
          </div>
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary"><Asterisk size={15} weight="bold" /></span>Entech
              </a>
              <p className="mt-4 max-w-[240px] text-xs leading-relaxed text-primary-foreground/55">Premier ICT, media and business solutions hub. Innovate. Create. Elevate.</p>
              <div className="mt-6 flex gap-2">
                {[InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo].map((I, k) => (
                  <a key={k} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/15 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary"><I size={14} /></a>
                ))}
              </div>
            </div>
            {[["Services", ["Tech Academy", "Media & Studio", "Co-working", "Digital Solutions"]], ["Company", ["About us", "Our team", "Blog & News", "FAQ"]]].map(([h, ls]) => (
              <div key={h as string}>
                <p className="text-[11px] uppercase tracking-wider text-primary-foreground/40">{h}</p>
                <ul className="mt-5 space-y-3 text-xs">
                  {(ls as string[]).map((l) => (
                    <li key={l}><a href="#" className="group inline-flex items-center gap-1 text-primary-foreground/80 transition-colors hover:text-primary-foreground">{l}<ArrowUpRight size={10} className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" /></a></li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className="text-[11px] uppercase tracking-wider text-primary-foreground/40">Visit us</p>
              <ul className="mt-5 space-y-3 text-xs text-primary-foreground/80">
                <li className="flex gap-2"><MapPin size={14} className="mt-0.5 shrink-0" />207 Ugwunobamkpa Road, by Savoir Junction, off Awka Road, Onitsha</li>
                <li><a href="mailto:info@entechinnovations.com" className="flex gap-2 hover:text-primary-foreground"><EnvelopeSimple size={14} className="shrink-0" />info@entechinnovations.com</a></li>
                <li><a href="tel:+2348069831304" className="flex gap-2 hover:text-primary-foreground"><Phone size={14} className="shrink-0" />+234 806 983 1304</a></li>
              </ul>
            </div>
          </div>
          <p className="wordmark select-none text-center font-display text-[25vw] font-semibold leading-[0.72] tracking-tighter text-primary lg:text-[18rem]">entech</p>
          <div className="flex flex-col items-center justify-between gap-2 border-t border-primary-foreground/10 py-5 text-[11px] text-primary-foreground/45 sm:flex-row">
            <span>© {new Date().getFullYear()} Entech Innovations Limited</span>
            <span>Made in Onitsha, Nigeria</span>
          </div>
        </div>
      </footer>

      <button aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-500 hover:-translate-y-1 ${top ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>
        <ArrowUp size={16} />
      </button>
    </div>
  );
}

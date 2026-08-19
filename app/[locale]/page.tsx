import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, isLocale } from "./content";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = content[locale];
  const navigationItems = [
    { label: copy.navigation.work, href: "#work" },
    { label: copy.navigation.about, href: "#about" },
    { label: copy.navigation.notes, href: "#notes" },
    { label: copy.navigation.places, href: "#places" },
  ];

  return (
    <main className="min-h-screen px-3 py-3 sm:px-5 sm:py-5">
      <div className="mx-auto max-w-[1520px] overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--paper)] shadow-[0_12px_35px_rgb(91_62_43_/_10%)]">
        <header className="flex min-h-16 flex-wrap items-center gap-x-8 gap-y-3 border-b border-[var(--line)] px-6 py-4 md:min-h-20 md:px-10">
          <Link
            href={`/${locale}`}
            className="font-mono text-base font-semibold tracking-[0.12em] text-[var(--coral)]"
            aria-label="Homepage"
          >
            ANETE.
          </Link>

          <nav className="order-3 w-full md:order-none md:w-auto" aria-label="Main navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] text-[var(--foreground)]">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a className="transition-colors hover:text-[var(--coral)]" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-3 font-mono text-[10px]">
            <Link href="/en" className={locale === "en" ? "text-[var(--foreground)]" : "text-[var(--muted)]"}>EN</Link>
            <span className="text-[var(--muted)]">/</span>
            <Link href="/pt" className={locale === "pt" ? "text-[var(--foreground)]" : "text-[var(--muted)]"}>PT</Link>
            <a href="#contact" className="ml-2 rounded-md bg-[var(--coral-soft)] px-3 py-2 text-[var(--coral)] transition-colors hover:bg-[var(--coral)] hover:text-white">
              {copy.navigation.contact} ♡
            </a>
          </div>
        </header>

        <section className="relative overflow-hidden px-6 py-12 md:px-16 md:py-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 opacity-45 md:block [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:14px_14px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
            <div className="max-w-3xl lg:pl-12">
              <div className="flex items-start gap-7">
                <div className="relative w-24 -rotate-3 rounded-sm border border-[var(--line)] bg-[#fffaf2] px-3 py-7 text-center shadow-[4px_6px_10px_rgb(91_62_43_/_10%)]">
                  <span className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full border border-[#9574b7] bg-[#c9a9e1]" />
                  <pre className="font-mono text-sm leading-6 text-[var(--foreground)]">{`/\\_/\\\n( o.o )\n > ^ <`}</pre>
                </div>
                <p className="pt-3 font-mono text-[11px] leading-6 text-[var(--foreground)]">
                  {copy.hero.label}
                </p>
              </div>

              <h1 className="mt-10 font-serif text-5xl leading-[0.98] text-[var(--foreground)] sm:text-6xl md:text-7xl">
                {copy.hero.titlePrefix} <span className="relative inline-block italic text-[var(--coral)]">{copy.hero.titleName}<span className="absolute -bottom-2 left-1/2 h-1 w-[92%] -translate-x-1/2 -rotate-2 rounded-full bg-[#b590de]" /></span>
              </h1>

              <p className="mt-8 max-w-2xl font-serif text-2xl leading-[1.3] text-[var(--foreground)] md:text-[31px]">
                {copy.hero.description}
              </p>

              <p className="mt-8 font-mono text-xs leading-6 text-[var(--foreground)]">{copy.hero.currently}</p>

              <a href="#work" className="mt-6 inline-flex rounded-full bg-[var(--coral)] px-5 py-3 font-mono text-[11px] font-medium text-white shadow-[0_5px_0_#c94651] transition-transform hover:-translate-y-0.5">
                {copy.hero.cta}
              </a>
            </div>

            <div className="mx-auto grid w-full max-w-sm gap-8 lg:max-w-none">
              <div className="relative mx-auto w-56 rotate-[4deg] rounded-sm border border-[var(--line)] bg-[linear-gradient(145deg,#e6d2bb,#f6eadb_42%,#c4d3df)] p-3 shadow-[7px_8px_12px_rgb(91_62_43_/_12%)]">
                <span className="absolute -top-3 left-10 h-5 w-24 -rotate-3 bg-[#f4b5b4]/80" />
                <div className="flex aspect-[4/3] items-end justify-end border border-white/60 bg-[radial-gradient(circle_at_25%_25%,#f8e6ca,transparent_28%),linear-gradient(155deg,#7298b4,#ead2bb)] p-3">
                  <span className="font-mono text-[9px] text-white/90">{copy.hero.photoLabel}</span>
                </div>
              </div>

              <aside className="mx-auto w-56 -rotate-2 border border-[#ddd2e7] bg-[var(--lavender-soft)] px-5 py-5 shadow-[3px_5px_8px_rgb(91_62_43_/_8%)] lg:ml-4">
                {copy.hero.details.map((detail) => <p className="font-mono text-xs leading-6 text-[var(--foreground)]" key={detail}>{detail}</p>)}
                <span className="float-right mt-1 text-xl text-[var(--coral)]">♡</span>
              </aside>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-[var(--line)] px-6 py-12 md:px-10 md:py-14">
          <div className="mb-5 flex items-center justify-between gap-5 font-mono text-[11px] text-[var(--coral)]">
            <h2>{copy.work.title}</h2>
            <a href="https://github.com/anetep" target="_blank" rel="noreferrer" className="text-[var(--foreground)] hover:text-[var(--coral)]">{copy.work.viewAll}</a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {copy.work.items.map((item) => {
              const style = { "--card-accent": item.accent, "--card-wash": item.wash } as CSSProperties;
              const card = <ProjectCard item={item} />;
              const className = "group block min-h-[265px] rounded-xl border border-[var(--card-accent)] bg-[var(--card-wash)] p-5 shadow-[0_5px_10px_rgb(91_62_43_/_7%)] transition-transform hover:-translate-y-1";

              if ("slug" in item) return <Link key={item.name} href={`/${locale}/projects/${item.slug}`} className={className} style={style}>{card}</Link>;
              if ("href" in item) return <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className={className} style={style}>{card}</a>;
              return <article key={item.name} className={className} style={style}>{card}</article>;
            })}
          </div>
        </section>

        <section id="about" className="border-t border-[var(--line)] px-6 py-12 md:px-10 md:py-14">
          <p className="font-mono text-[11px] text-[var(--coral)]">{copy.about.eyebrow}</p>
          <div className="mt-7 grid gap-10 lg:grid-cols-[280px_1fr_250px] lg:items-start">
            <div className="relative mx-auto w-56 -rotate-3 border border-[var(--line)] bg-[#fffaf2] p-3 shadow-[5px_7px_11px_rgb(91_62_43_/_10%)] lg:mx-0">
              <span className="absolute -top-2 left-16 h-4 w-20 -rotate-2 bg-[#bda4db]/75" />
              <div className="flex aspect-square items-center justify-center bg-[#d5c1ad] font-mono text-[10px] text-white">photo to add</div>
            </div>

            <div>
              <h2 className="max-w-2xl font-serif text-4xl leading-tight text-[var(--foreground)] md:text-5xl">{copy.about.title}</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)]">{copy.about.description}</p>
              <dl className="mt-8 grid gap-5 border-t border-[var(--line)] pt-6 sm:grid-cols-3">
                {copy.about.facts.map((fact) => <div key={fact.label}><dt className="font-mono text-[10px] uppercase text-[var(--coral)]">{fact.label}</dt><dd className="mt-2 text-sm leading-5 text-[var(--muted)]">{fact.value}</dd></div>)}
              </dl>
            </div>

            <aside className="relative rotate-2 border border-[#e1d3bd] bg-[#fff2d7] p-5 shadow-[4px_5px_8px_rgb(91_62_43_/_8%)]">
              <span className="absolute -top-2 right-8 h-4 w-16 rotate-3 bg-[#deb479]/70" />
              <p className="font-mono text-[10px] text-[var(--coral)]">{copy.about.noteLabel}</p>
              <p className="mt-6 font-mono text-xs leading-6 text-[var(--foreground)]">{copy.about.note}</p>
            </aside>
          </div>
        </section>

        <section className="border-t border-[var(--line)] px-6 py-12 md:px-10 md:py-14">
          <h2 className="font-mono text-[11px] text-[var(--coral)]">{copy.archive.title}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {copy.archive.cards.map((card) => <article id={card.id} key={card.id} className="min-h-44 rounded-xl border border-[var(--line)] bg-[#fffaf2] p-5 transition-transform hover:-translate-y-1"><p className="font-mono text-[10px] text-[var(--coral)]">{card.label} ↗</p><h3 className="mt-8 font-serif text-2xl text-[var(--foreground)]">{card.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{card.description}</p></article>)}
          </div>
        </section>

        <footer id="contact" className="border-t border-[var(--line)] bg-[var(--coral-soft)] px-6 py-12 md:px-10 md:py-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div><p className="font-mono text-[11px] text-[var(--coral)]">{copy.contact.eyebrow}</p><h2 className="mt-5 font-serif text-5xl text-[var(--foreground)]">{copy.contact.title}</h2><p className="mt-4 max-w-lg text-sm leading-6 text-[var(--muted)]">{copy.contact.description}</p><a href="mailto:anetempereira@gmail.com" className="mt-7 inline-block border-b border-[var(--coral)] pb-1 font-mono text-sm text-[var(--foreground)]">anetempereira@gmail.com</a></div>
            <div className="font-mono text-xs leading-8 text-[var(--foreground)]"><a className="block hover:text-[var(--coral)]" href="https://github.com/anetep" target="_blank" rel="noreferrer">{copy.contact.githubLabel} ↗</a><a className="block hover:text-[var(--coral)]" href="https://www.linkedin.com/in/anete-pereira-8b3726216/" target="_blank" rel="noreferrer">{copy.contact.linkedinLabel} ↗</a><p className="mt-4 max-w-60 text-[10px] leading-5 text-[var(--muted)]">{copy.contact.note}</p></div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ProjectCard({ item }: { item: { year: string; name: string; description: string; technologies: string; doodle: string } }) {
  return <><span className="inline-flex rounded-md bg-[var(--card-accent)] px-2 py-1 font-mono text-[10px] text-white">{item.year}</span><h3 className="mt-5 font-serif text-3xl text-[var(--foreground)]">{item.name}</h3><p className="mt-2 max-w-56 font-mono text-[11px] leading-5 text-[var(--foreground)]">{item.description}</p><p className="mt-5 font-mono text-[9px] leading-4 text-[var(--foreground)]">{item.technologies}</p><div className="mt-8 flex h-14 items-end justify-end border-t border-[var(--card-accent)]/35"><span className="text-5xl leading-none text-[var(--card-accent)]">{item.doodle}</span></div></>;
}

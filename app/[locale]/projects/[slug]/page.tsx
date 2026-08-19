import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "../../content";
import { getProject, getProjectSlugs, isProjectSlug } from "../../projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => getProjectSlugs().map((slug) => ({ locale, slug })));
}

export async function generateMetadata(props: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await props.params;
  if (!isLocale(locale) || !isProjectSlug(slug)) return {};
  const project = getProject(locale, slug);
  return { title: `${project.title} | Anete Pereira`, description: project.description };
}

export default async function ProjectPage(props: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await props.params;
  if (!isLocale(locale) || !isProjectSlug(slug)) notFound();
  const project = getProject(locale, slug);

  return (
    <main className="min-h-screen px-3 py-3 sm:px-5 sm:py-5">
      <article className="mx-auto max-w-[1520px] overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--paper)] shadow-[0_12px_35px_rgb(91_62_43_/_10%)]">
        <header className="flex min-h-16 items-center justify-between border-b border-[var(--line)] px-6 py-4 md:px-10">
          <Link href={`/${locale}#work`} className="font-mono text-[11px] text-[var(--foreground)] transition-colors hover:text-[var(--coral)]">{project.backLabel}</Link>
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-[var(--coral-soft)] px-3 py-2 font-mono text-[10px] text-[var(--coral)] transition-colors hover:bg-[var(--coral)] hover:text-white">{project.liveLabel}<span className="material-symbols-rounded text-sm" aria-hidden="true">open_in_new</span></a>
        </header>

        <section className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] text-[var(--coral)]">{project.label}</p>
            <h1 className="mt-5 font-serif text-6xl leading-none text-[var(--foreground)] md:text-7xl">{project.title}</h1>
            <p className="mt-4 font-serif text-2xl text-[var(--foreground)]">{project.description}</p>
            <p className="mt-8 max-w-md text-sm leading-6 text-[var(--muted)]">{project.visual.description}</p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[linear-gradient(135deg,#e0cbb7,#f9ece0_42%,#bdd2dd)] p-3 shadow-[5px_7px_12px_rgb(91_62_43_/_10%)]">
            <span className="absolute -top-2 left-14 h-5 w-24 -rotate-3 bg-[#f4b5b4]/75" />
            <div className="flex min-h-64 items-end justify-between border border-white/70 bg-[radial-gradient(circle_at_78%_36%,#d2e1e4_0_2px,transparent_3px),radial-gradient(circle_at_40%_50%,#b5d9e8_0_3px,transparent_4px),linear-gradient(135deg,#fff8ef,#b5cee2)] p-5 md:min-h-80">
              <p className="font-mono text-[10px] text-[var(--muted)]">{project.visual.label}</p>
              <span className="font-mono text-[10px] text-[var(--muted)]">screenshot to add</span>
            </div>
          </div>
        </section>

        <dl className="grid gap-px border-y border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {project.metadata.map((item) => <div key={item.label} className="bg-[var(--coral-soft)] px-6 py-5"><dt className="font-mono text-[10px] text-[var(--coral)]">{item.label}</dt><dd className="mt-2 font-mono text-[10px] leading-5 text-[var(--foreground)]">{item.value}</dd></div>)}
        </dl>

        <div className="px-6 md:px-10">
          <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-[1fr_280px] md:py-16">
            <div><p className="font-mono text-[11px] text-[var(--coral)]">✧ {project.overview.title}</p><p className="mt-6 max-w-2xl text-base leading-8 text-[var(--foreground)]">{project.overview.description}</p></div>
            <aside className="relative -rotate-1 self-start border border-[#ead5bd] bg-[#fff2d7] p-6 shadow-[4px_5px_8px_rgb(91_62_43_/_8%)]"><span className="absolute -top-2 right-10 h-4 w-20 rotate-2 bg-[#deb479]/70" /><p className="font-serif text-2xl text-[var(--foreground)]">{project.product.title}</p><p className="mt-4 text-sm leading-6 text-[var(--foreground)]">{project.product.description}</p></aside>
          </section>

          <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-[0.6fr_1.4fr] md:py-16"><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.role.title}</h2><ul className="grid gap-4">{project.role.items.map((item) => <li key={item} className="border-l-2 border-[var(--coral)] pl-4 text-sm leading-7 text-[var(--muted)]">{item}</li>)}</ul></section>

          <section className="border-b border-[var(--line)] py-12 md:py-16"><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.highlights.title}</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{project.highlights.items.map((item) => <article key={item.title} className="rounded-xl border border-[var(--line)] bg-[#fffaf2] p-5"><h3 className="font-serif text-2xl text-[var(--foreground)]">{item.title}</h3><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.description}</p></article>)}</div></section>

          <section className="grid gap-4 border-b border-[var(--line)] py-12 md:grid-cols-2 md:py-16"><article className="rounded-xl border border-[var(--line)] bg-[var(--lavender-soft)] p-6"><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.outcome.title}</h2><p className="mt-5 text-sm leading-7 text-[var(--foreground)]">{project.outcome.description}</p></article><div className="rounded-xl border border-dashed border-[var(--line)] p-6"><p className="font-mono text-[11px] text-[var(--coral)]">screenshots</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{project.screenshots.map((screenshot) => <div key={screenshot.title} className="min-h-32 border border-[var(--line)] bg-[#fffaf2] p-3"><span className="font-mono text-base text-[var(--coral)]">⌁</span><h3 className="mt-5 font-mono text-[10px] text-[var(--foreground)]">{screenshot.title}</h3><p className="mt-2 text-[10px] leading-4 text-[var(--muted)]">{screenshot.description}</p></div>)}</div></div></section>

          <section className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-[var(--line)] px-3 py-2 font-mono text-[10px] text-[var(--muted)]">{technology}</span>)}</div><Link href={`/${locale}#work`} className="font-mono text-[11px] text-[var(--coral)]">{project.backLabel}</Link></section>
        </div>
      </article>
    </main>
  );
}

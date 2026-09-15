import type { Metadata } from "next";
import Image from "next/image";
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
  const hasHeroVisual = "caseStudy" in project;

  return (
    <main className="min-h-screen px-3 py-3 sm:px-5 sm:py-5">
      <article className="mx-auto max-w-[1520px] overflow-hidden rounded-[26px] border border-[var(--line)] bg-[var(--paper)] shadow-[0_12px_35px_rgb(91_62_43_/_10%)]">
        <header className="flex min-h-16 items-center justify-between border-b border-[var(--line)] px-6 py-4 md:px-10">
          <Link href={`/${locale}#work`} className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--foreground)] transition-colors hover:text-[var(--coral)]"><span className="material-symbols-rounded text-sm" aria-hidden="true">arrow_back</span>{project.backLabel}</Link>
          <div className="flex flex-wrap justify-end gap-2">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md bg-[var(--coral-soft)] px-3 py-2 font-mono text-[10px] text-[var(--coral)] transition-colors hover:bg-[var(--coral)] hover:text-white">{project.liveLabel}<span className="material-symbols-rounded text-sm" aria-hidden="true">open_in_new</span></a>}
            {"secondaryUrl" in project && <a href={project.secondaryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-[var(--line)] px-3 py-2 font-mono text-[10px] text-[var(--foreground)] transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]">{project.secondaryLabel}<span className="material-symbols-rounded text-sm" aria-hidden="true">open_in_new</span></a>}
          </div>
        </header>

        <section className={`mx-auto grid max-w-[1280px] gap-8 px-6 py-10 md:px-10 lg:items-center lg:py-14 ${hasHeroVisual ? "lg:grid-cols-[1fr_0.8fr]" : ""}`}>
          <div className={hasHeroVisual ? "" : "max-w-3xl"}>
            <p className="font-mono text-[11px] text-[var(--coral)]">{project.label}</p>
            <h1 className="mt-4 font-serif text-5xl leading-none text-[var(--foreground)] md:text-6xl">{project.title}</h1>
            <p className="mt-4 max-w-2xl font-serif text-2xl leading-snug text-[var(--foreground)]">{project.description}</p>
            {project.visual.description && <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)]">{project.visual.description}</p>}
          </div>

          {hasHeroVisual && <div className="mx-auto w-full max-w-[520px]">
            <figure className="overflow-hidden rounded-lg border border-[var(--line)] bg-[#fffaf2]">
              <Image src="/images/projects/thesis/implem_all_factory.png" alt={project.caseStudy.imageAlts.hero} width={1399} height={826} priority sizes="(max-width: 1024px) calc(100vw - 72px), 55vw" className="h-auto w-full" />
              <figcaption className="border-t border-[var(--line)] px-4 py-3 font-mono text-[9px] leading-4 text-[var(--muted)]">{project.caseStudy.imageCaptions.hero}</figcaption>
            </figure>
          </div>}
        </section>

        <dl className="mx-auto grid max-w-[1280px] gap-x-8 gap-y-4 border-y border-[var(--line)] px-6 py-5 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
          {project.metadata.map((item) => <div key={item.label}><dt className="flex items-center gap-2 font-mono text-[10px] text-[var(--coral)]"><span className="material-symbols-rounded text-sm" aria-hidden="true">{item.icon}</span>{item.label}</dt><dd className="mt-1.5 text-xs leading-5 text-[var(--foreground)]">{item.value}</dd></div>)}
        </dl>

        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <section className="grid gap-8 border-b border-[var(--line)] py-10 md:grid-cols-[1fr_260px] md:py-12">
            <div><p className="font-mono text-[11px] text-[var(--coral)]">{project.overview.title}</p><p className="mt-6 max-w-2xl text-base leading-8 text-[var(--foreground)]">{project.overview.description}</p></div>
            <aside className="self-start border-l-2 border-[var(--coral)] pl-5"><p className="font-serif text-xl text-[var(--foreground)]">{project.product.title}</p><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.product.description}</p></aside>
          </section>

          <section className="grid gap-6 border-b border-[var(--line)] py-10 md:grid-cols-[220px_1fr] md:py-12"><h2 className="font-serif text-3xl text-[var(--foreground)]">{project.role.title}</h2><ul className="grid gap-3">{project.role.items.map((item) => <li key={item} className="relative pl-5 text-sm leading-7 text-[var(--muted)] before:absolute before:left-0 before:top-[0.7rem] before:h-1 before:w-1 before:rounded-full before:bg-[var(--coral)]">{item}</li>)}</ul></section>

          <section className="border-b border-[var(--line)] py-10 md:py-12"><h2 className="font-serif text-3xl text-[var(--foreground)]">{project.highlights.title}</h2><div className="mt-7 grid gap-x-8 gap-y-6 md:grid-cols-3">{project.highlights.items.map((item, index) => <article key={item.title} className="border-t border-[var(--line)] pt-4"><span className="font-mono text-[10px] text-[var(--coral)]">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 font-serif text-xl text-[var(--foreground)]">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p></article>)}</div></section>

          {"caseStudy" in project && <>
            <section className="border-b border-[var(--line)] py-10 md:py-12">
              <h2 className="font-serif text-3xl text-[var(--foreground)]">{project.caseStudy.modelTitle}</h2>
              <dl className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                {project.caseStudy.modelItems.map((item) => <div key={item.label} className="border-t border-[var(--line)] pt-4"><dt className="font-serif text-xl text-[var(--foreground)]">{item.label}</dt><dd className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.value}</dd></div>)}
              </dl>
            </section>

            <section className="grid gap-8 border-b border-[var(--line)] py-10 md:grid-cols-[0.7fr_1.3fr] md:py-12">
              <div><h2 className="font-serif text-3xl text-[var(--foreground)]">{project.caseStudy.architectureTitle}</h2><p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">{project.visual.description}</p></div>
              <ol className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
                {project.caseStudy.architecture.map((item, index) => <li key={item} className="flex items-center gap-4 py-3"><span className="font-mono text-[10px] text-[var(--coral)]">{String(index + 1).padStart(2, "0")}</span><span className="text-sm text-[var(--foreground)]">{item}</span></li>)}
              </ol>
            </section>

            <section className="border-b border-[var(--line)] py-10 md:py-12">
              <h2 className="font-serif text-3xl text-[var(--foreground)]">{project.caseStudy.interactionTitle}</h2>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">{project.caseStudy.interaction}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <figure className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2]"><Image src="/images/projects/thesis/magnifier_in_scene.png" alt={project.caseStudy.imageAlts.magnifier} width={1421} height={877} sizes="(max-width: 768px) calc(100vw - 72px), 48vw" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">{project.caseStudy.imageCaptions.magnifier}</figcaption></figure>
                <figure className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2]"><Image src="/images/projects/thesis/run_info_panel_in_scene.png" alt={project.caseStudy.imageAlts.runPanel} width={1380} height={825} sizes="(max-width: 768px) calc(100vw - 72px), 48vw" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">{project.caseStudy.imageCaptions.runPanel}</figcaption></figure>
              </div>
            </section>

            <section className="grid gap-8 border-b border-[var(--line)] py-10 md:grid-cols-[220px_1fr] md:items-center md:py-12">
              <figure className="mx-auto w-full max-w-52 overflow-hidden rounded-lg border border-[var(--line)] bg-white p-2"><Image src="/images/projects/thesis/color_palette_daltonic_friendly.png" alt={project.caseStudy.imageAlts.palette} width={551} height={719} sizes="208px" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-2 pt-3 text-[10px] leading-4 text-[var(--muted)]">{project.caseStudy.imageCaptions.palette}</figcaption></figure>
              <div><h2 className="font-serif text-3xl text-[var(--foreground)]">{project.caseStudy.visualCuesTitle}</h2><p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">{project.caseStudy.visualCues}</p></div>
            </section>

            <section className="grid gap-8 border-b border-[var(--line)] py-10 lg:grid-cols-[0.8fr_1.2fr] md:py-12">
              <div><h2 className="font-serif text-3xl text-[var(--foreground)]">{project.caseStudy.evaluationTitle}</h2><p className="mt-5 text-sm leading-7 text-[var(--muted)]">{project.caseStudy.evaluationIntro}</p><figure className="mt-6 overflow-hidden rounded-lg border border-[var(--line)] bg-[#fffaf2]"><div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/projects/thesis/eval_user_vr.png" alt={project.caseStudy.imageAlts.evaluation} fill sizes="(max-width: 1024px) calc(100vw - 72px), 36vw" className="object-cover object-[50%_44%]" /></div><figcaption className="border-t border-[var(--line)] px-4 py-3 text-[10px] leading-4 text-[var(--muted)]">{project.caseStudy.imageCaptions.evaluation}</figcaption></figure></div>
              <div className="self-start overflow-hidden rounded-xl border border-[var(--line)]">
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 bg-[var(--coral-soft)] px-4 py-3 font-mono text-[9px] text-[var(--coral)]"><span>{project.caseStudy.tableLabel}</span><span>GitHub</span><span className="w-14 text-right">VR</span></div>
                {project.caseStudy.results.map((result) => <div key={result.label} className="grid grid-cols-[1fr_auto_auto] gap-4 border-t border-[var(--line)] bg-[#fffaf2] px-4 py-3 text-xs text-[var(--foreground)]"><span>{result.label}</span><span className="font-mono text-[10px] text-[var(--muted)]">{result.github}</span><span className="w-14 text-right font-mono text-[10px] text-[var(--foreground)]">{result.vr}</span></div>)}
              </div>
            </section>

            <section className="grid gap-6 border-b border-[var(--line)] py-10 md:grid-cols-[220px_1fr] md:py-12">
              <h2 className="font-serif text-3xl text-[var(--foreground)]">{project.caseStudy.lessonsTitle}</h2>
              <ul className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{project.caseStudy.lessons.map((item) => <li key={item} className="py-4 text-sm leading-7 text-[var(--muted)]">{item}</li>)}</ul>
            </section>
          </>}

          <section className="grid gap-8 border-b border-[var(--line)] py-10 md:py-12"><article><h2 className="font-serif text-3xl text-[var(--foreground)]">{project.outcome.title}</h2><p className="mt-5 max-w-3xl text-sm leading-7 text-[var(--muted)]">{project.outcome.description}</p>{"outcomeLinks" in project && <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] leading-5">{project.outcomeLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="border-b border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[var(--coral)] hover:text-[var(--coral)]">{link.label} ↗</a>)}</p>}</article></section>

          <section className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-[var(--line)] px-3 py-2 font-mono text-[10px] text-[var(--muted)]">{technology}</span>)}</div><Link href={`/${locale}#work`} className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--coral)]"><span className="material-symbols-rounded text-sm" aria-hidden="true">arrow_back</span>{project.backLabel}</Link></section>
        </div>
      </article>
    </main>
  );
}

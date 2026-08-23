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

        <section className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="font-mono text-[11px] text-[var(--coral)]">{project.label}</p>
            <h1 className="mt-5 font-serif text-6xl leading-none text-[var(--foreground)] md:text-7xl">{project.title}</h1>
            <p className="mt-4 font-serif text-2xl text-[var(--foreground)]">{project.description}</p>
            <p className="mt-8 max-w-md text-sm leading-6 text-[var(--muted)]">{project.visual.description}</p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-[var(--line)] bg-[linear-gradient(135deg,#e0cbb7,#f9ece0_42%,#bdd2dd)] p-3 shadow-[5px_7px_12px_rgb(91_62_43_/_10%)]">
            <span className="absolute -top-2 left-14 h-5 w-24 -rotate-3 bg-[#f4b5b4]/75" />
            {"caseStudy" in project ? <figure className="border border-white/70 bg-[#fffaf2]">
              <Image src="/images/projects/thesis/implem_all_factory.png" alt={project.caseStudy.imageAlts.hero} width={1399} height={826} priority sizes="(max-width: 1024px) calc(100vw - 72px), 55vw" className="h-auto w-full" />
              <figcaption className="border-t border-[var(--line)] px-4 py-3 font-mono text-[9px] leading-4 text-[var(--muted)]">{project.caseStudy.imageCaptions.hero}</figcaption>
            </figure> : "o2moveVisuals" in project ? <figure className="border border-white/70 bg-[#fffaf2]">
              <div className="flex max-h-[620px] justify-center overflow-hidden bg-[#eefaf5] p-3"><Image src="/images/projects/o2move/standby_page.png" alt={project.o2moveVisuals.hero.alt} width={2160} height={3840} priority sizes="(max-width: 1024px) calc(100vw - 72px), 34vw" className="h-auto max-h-[594px] w-auto object-contain" /></div>
              <figcaption className="border-t border-[var(--line)] px-4 py-3 font-mono text-[9px] leading-4 text-[var(--muted)]">{project.o2moveVisuals.hero.caption}</figcaption>
            </figure> : <div className="flex min-h-64 items-end justify-between border border-white/70 bg-[radial-gradient(circle_at_78%_36%,#d2e1e4_0_2px,transparent_3px),radial-gradient(circle_at_40%_50%,#b5d9e8_0_3px,transparent_4px),linear-gradient(135deg,#fff8ef,#b5cee2)] p-5 md:min-h-80">
              <p className="font-mono text-[10px] text-[var(--muted)]">{project.visual.label}</p>
              <span className="material-symbols-rounded text-7xl text-[var(--coral)]/70" aria-hidden="true">{project.visual.icon}</span>
            </div>}
          </div>
        </section>

        <dl className="grid gap-px border-y border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
          {project.metadata.map((item) => <div key={item.label} className="bg-[var(--coral-soft)] px-6 py-5"><dt className="flex items-center gap-2 font-mono text-[10px] text-[var(--coral)]"><span className="material-symbols-rounded text-base" aria-hidden="true">{item.icon}</span>{item.label}</dt><dd className="mt-2 font-mono text-[10px] leading-5 text-[var(--foreground)]">{item.value}</dd></div>)}
        </dl>

        <div className="px-6 md:px-10">
          <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-[1fr_280px] md:py-16">
            <div><p className="font-mono text-[11px] text-[var(--coral)]">{project.overview.title}</p><p className="mt-6 max-w-2xl text-base leading-8 text-[var(--foreground)]">{project.overview.description}</p></div>
            <aside className="relative -rotate-1 self-start border border-[#ead5bd] bg-[#fff2d7] p-6 shadow-[4px_5px_8px_rgb(91_62_43_/_8%)]"><span className="absolute -top-2 right-10 h-4 w-20 rotate-2 bg-[#deb479]/70" /><p className="font-serif text-2xl text-[var(--foreground)]">{project.product.title}</p><p className="mt-4 text-sm leading-6 text-[var(--foreground)]">{project.product.description}</p></aside>
          </section>

          <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-[0.6fr_1.4fr] md:py-16"><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.role.title}</h2><ul className="grid gap-4">{project.role.items.map((item) => <li key={item} className="border-l-2 border-[var(--coral)] pl-4 text-sm leading-7 text-[var(--muted)]">{item}</li>)}</ul></section>

          <section className="border-b border-[var(--line)] py-12 md:py-16"><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.highlights.title}</h2><div className="mt-6 grid gap-4 md:grid-cols-3">{project.highlights.items.map((item) => <article key={item.title} className="rounded-xl border border-[var(--line)] bg-[#fffaf2] p-5"><h3 className="font-serif text-2xl text-[var(--foreground)]">{item.title}</h3><p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.description}</p></article>)}</div></section>

          {"o2moveVisuals" in project && <section className="border-b border-[var(--line)] py-12 md:py-16">
            <div className="grid gap-6 md:grid-cols-[0.6fr_1.4fr] md:items-end"><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.o2moveVisuals.title}</h2><p className="max-w-2xl text-sm leading-7 text-[var(--muted)]">{project.o2moveVisuals.description}</p></div>
            <div className="-mx-6 mt-8 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
              <figure className="w-[78vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2] md:w-full md:max-w-none"><Image src="/images/projects/o2move/spider-map_page_stop_mode.png" alt={project.o2moveVisuals.stopMode.alt} width={2160} height={3840} sizes="(max-width: 768px) 78vw, 30vw" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-4 py-3 text-[10px] leading-4 text-[var(--muted)]">{project.o2moveVisuals.stopMode.caption}</figcaption></figure>
              <figure className="w-[78vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2] md:w-full md:max-w-none"><Image src="/images/projects/o2move/spider-map_page_hub_mode.png" alt={project.o2moveVisuals.hubMode.alt} width={2160} height={3840} sizes="(max-width: 768px) 78vw, 30vw" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-4 py-3 text-[10px] leading-4 text-[var(--muted)]">{project.o2moveVisuals.hubMode.caption}</figcaption></figure>
              <figure className="w-[78vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2] md:w-full md:max-w-none"><Image src="/images/projects/o2move/spider-map_page_mapa.png" alt={project.o2moveVisuals.schematic.alt} width={2160} height={3840} sizes="(max-width: 768px) 78vw, 30vw" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-4 py-3 text-[10px] leading-4 text-[var(--muted)]">{project.o2moveVisuals.schematic.caption}</figcaption></figure>
            </div>
          </section>}

          {"caseStudy" in project && <>
            <section className="border-b border-[var(--line)] py-12 md:py-16">
              <h2 className="font-mono text-[11px] text-[var(--coral)]">{project.caseStudy.modelTitle}</h2>
              <dl className="mt-6 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
                {project.caseStudy.modelItems.map((item) => <div key={item.label} className="bg-[#fffaf2] p-5"><dt className="font-serif text-2xl text-[var(--foreground)]">{item.label}</dt><dd className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.value}</dd></div>)}
              </dl>
            </section>

            <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-[0.7fr_1.3fr] md:py-16">
              <div><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.caseStudy.architectureTitle}</h2><p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">{project.visual.description}</p></div>
              <ol className="grid gap-2">
                {project.caseStudy.architecture.map((item, index) => <li key={item} className="flex items-center gap-4 rounded-lg border border-[var(--line)] bg-[var(--lavender-soft)] px-4 py-3"><span className="font-mono text-[10px] text-[var(--coral)]">{String(index + 1).padStart(2, "0")}</span><span className="text-sm text-[var(--foreground)]">{item}</span></li>)}
              </ol>
            </section>

            <section className="border-b border-[var(--line)] py-12 md:py-16">
              <h2 className="font-mono text-[11px] text-[var(--coral)]">{project.caseStudy.interactionTitle}</h2>
              <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--muted)]">{project.caseStudy.interaction}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <figure className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2]"><Image src="/images/projects/thesis/magnifier_in_scene.png" alt={project.caseStudy.imageAlts.magnifier} width={1421} height={877} sizes="(max-width: 768px) calc(100vw - 72px), 48vw" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">{project.caseStudy.imageCaptions.magnifier}</figcaption></figure>
                <figure className="overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2]"><Image src="/images/projects/thesis/run_info_panel_in_scene.png" alt={project.caseStudy.imageAlts.runPanel} width={1380} height={825} sizes="(max-width: 768px) calc(100vw - 72px), 48vw" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-4 py-3 text-xs leading-5 text-[var(--muted)]">{project.caseStudy.imageCaptions.runPanel}</figcaption></figure>
              </div>
            </section>

            <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-[0.6fr_1.4fr] md:items-center md:py-16">
              <figure className="mx-auto w-full max-w-64 overflow-hidden rounded-xl border border-[var(--line)] bg-white p-3 shadow-[3px_5px_8px_rgb(91_62_43_/_8%)]"><Image src="/images/projects/thesis/color_palette_daltonic_friendly.png" alt={project.caseStudy.imageAlts.palette} width={551} height={719} sizes="256px" className="h-auto w-full" /><figcaption className="border-t border-[var(--line)] px-2 pt-3 text-[10px] leading-4 text-[var(--muted)]">{project.caseStudy.imageCaptions.palette}</figcaption></figure>
              <div><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.caseStudy.visualCuesTitle}</h2><p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--muted)]">{project.caseStudy.visualCues}</p></div>
            </section>

            <section className="grid gap-8 border-b border-[var(--line)] py-12 lg:grid-cols-[0.8fr_1.2fr] md:py-16">
              <div><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.caseStudy.evaluationTitle}</h2><p className="mt-6 text-sm leading-7 text-[var(--muted)]">{project.caseStudy.evaluationIntro}</p><figure className="mt-6 overflow-hidden rounded-xl border border-[var(--line)] bg-[#fffaf2]"><div className="relative aspect-[4/3] overflow-hidden"><Image src="/images/projects/thesis/eval_user_vr.png" alt={project.caseStudy.imageAlts.evaluation} fill sizes="(max-width: 1024px) calc(100vw - 72px), 36vw" className="object-cover object-[50%_44%]" /></div><figcaption className="border-t border-[var(--line)] px-4 py-3 text-[10px] leading-4 text-[var(--muted)]">{project.caseStudy.imageCaptions.evaluation}</figcaption></figure></div>
              <div className="self-start overflow-hidden rounded-xl border border-[var(--line)]">
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 bg-[var(--coral-soft)] px-4 py-3 font-mono text-[9px] text-[var(--coral)]"><span>{project.caseStudy.tableLabel}</span><span>GitHub</span><span className="w-14 text-right">VR</span></div>
                {project.caseStudy.results.map((result) => <div key={result.label} className="grid grid-cols-[1fr_auto_auto] gap-4 border-t border-[var(--line)] bg-[#fffaf2] px-4 py-3 text-xs text-[var(--foreground)]"><span>{result.label}</span><span className="font-mono text-[10px] text-[var(--muted)]">{result.github}</span><span className="w-14 text-right font-mono text-[10px] text-[var(--foreground)]">{result.vr}</span></div>)}
              </div>
            </section>

            <section className="grid gap-8 border-b border-[var(--line)] py-12 md:grid-cols-[0.6fr_1.4fr] md:py-16">
              <h2 className="font-mono text-[11px] text-[var(--coral)]">{project.caseStudy.lessonsTitle}</h2>
              <ul className="grid gap-4 sm:grid-cols-2">{project.caseStudy.lessons.map((item) => <li key={item} className="rounded-xl border border-[var(--line)] bg-[#fffaf2] p-5 text-sm leading-7 text-[var(--muted)]">{item}</li>)}</ul>
            </section>
          </>}

          <section className={`grid gap-4 border-b border-[var(--line)] py-12 md:py-16 ${project.screenshots.length ? "md:grid-cols-2" : ""}`}><article className="rounded-xl border border-[var(--line)] bg-[var(--lavender-soft)] p-6"><h2 className="font-mono text-[11px] text-[var(--coral)]">{project.outcome.title}</h2><p className="mt-5 text-sm leading-7 text-[var(--foreground)]">{project.outcome.description}</p></article>{project.screenshots.length > 0 && <div className="rounded-xl border border-dashed border-[var(--line)] p-6"><p className="font-mono text-[11px] text-[var(--coral)]">screenshots</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{project.screenshots.map((screenshot) => <div key={screenshot.title} className="min-h-32 border border-[var(--line)] bg-[#fffaf2] p-3"><span className="font-mono text-base text-[var(--coral)]">⌁</span><h3 className="mt-5 font-mono text-[10px] text-[var(--foreground)]">{screenshot.title}</h3><p className="mt-2 text-[10px] leading-4 text-[var(--muted)]">{screenshot.description}</p></div>)}</div></div>}</section>

          <section className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-[var(--line)] px-3 py-2 font-mono text-[10px] text-[var(--muted)]">{technology}</span>)}</div><Link href={`/${locale}#work`} className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--coral)]"><span className="material-symbols-rounded text-sm" aria-hidden="true">arrow_back</span>{project.backLabel}</Link></section>
        </div>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, locales } from "../../content";
import {
  getProject,
  getProjectSlugs,
  isProjectSlug,
} from "../../projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProjectSlugs().map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata(
  props: PageProps<"/[locale]/projects/[slug]">
): Promise<Metadata> {
  const { locale, slug } = await props.params;

  if (!isLocale(locale) || !isProjectSlug(slug)) {
    return {};
  }

  const project = getProject(locale, slug);

  return {
    title: `${project.title} | Anete Pereira`,
    description: project.description,
  };
}

export default async function ProjectPage(
  props: PageProps<"/[locale]/projects/[slug]">
) {
  const { locale, slug } = await props.params;

  if (!isLocale(locale) || !isProjectSlug(slug)) {
    notFound();
  }

  const project = getProject(locale, slug);

  return (
    <main className="min-h-screen bg-[#f6f2e7] px-6 md:px-16">
      <header className="flex h-28 items-center">
        <Link
          href={`/${locale}#work`}
          className="text-sm font-medium text-[#45614a] transition-colors hover:text-[#241f1a]"
        >
          ← {project.backLabel}
        </Link>
      </header>

      <article className="pb-20 md:pb-28">
        <section className="rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] px-8 py-10 md:px-14 md:py-14">
          <p className="text-xs font-medium text-[#45614a]">{project.label}</p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#241f1a] md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-[#665e52] md:text-2xl">
            {project.description}
          </p>

          <dl className="mt-12 grid gap-x-8 gap-y-7 border-t border-[#c7baa3] pt-7 sm:grid-cols-2 lg:grid-cols-4">
            {project.metadata.map((item) => (
              <div key={item.label}>
                <dt className="text-[11px] font-medium text-[#45614a]">
                  {item.label}
                </dt>
                <dd className="mt-2 text-sm leading-5 text-[#665e52]">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-4 rounded-[3px] border border-dashed border-[#c7baa3] bg-[#eee8d9] p-8 md:p-14">
          <p className="text-[11px] font-medium text-[#996e4d]">
            {project.visual.label}
          </p>
          <div className="mt-16 max-w-xl">
            <p className="text-2xl font-semibold text-[#241f1a]">
              {project.visual.title}
            </p>
            <p className="mt-4 text-sm leading-6 text-[#665e52]">
              {project.visual.description}
            </p>
          </div>
          <div className="mt-16 h-1 w-24 bg-[#45614a]" />
        </section>

        <section className="grid gap-10 border-t border-[#c7baa3] py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-20">
          <h2 className="text-xs font-medium text-[#45614a]">
            {project.overview.title}
          </h2>
          <p className="max-w-2xl text-xl leading-8 text-[#241f1a]">
            {project.overview.description}
          </p>
        </section>

        <section className="grid gap-10 border-t border-[#c7baa3] py-16 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:py-20">
          <h2 className="text-xs font-medium text-[#45614a]">
            {project.role.title}
          </h2>
          <ul className="grid gap-5">
            {project.role.items.map((item) => (
              <li
                key={item}
                className="border-l-2 border-[#45614a] pl-5 text-lg leading-7 text-[#665e52]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[#c7baa3] py-16 md:py-20">
          <h2 className="text-xs font-medium text-[#45614a]">
            {project.highlights.title}
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[3px] border border-[#c7baa3] bg-[#c7baa3] md:grid-cols-3">
            {project.highlights.items.map((item) => (
              <article key={item.title} className="bg-[#fbf9f0] p-6">
                <h3 className="text-lg font-semibold text-[#241f1a]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#665e52]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 border-t border-[#c7baa3] py-16 md:grid-cols-2 md:py-20">
          <article className="rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] p-7">
            <h2 className="text-xs font-medium text-[#45614a]">
              {project.product.title}
            </h2>
            <p className="mt-7 text-lg leading-7 text-[#665e52]">
              {project.product.description}
            </p>
          </article>

          <article className="rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] p-7">
            <h2 className="text-xs font-medium text-[#45614a]">
              {project.outcome.title}
            </h2>
            <p className="mt-7 text-lg leading-7 text-[#665e52]">
              {project.outcome.description}
            </p>
          </article>
        </section>

        <section className="border-t border-[#c7baa3] py-16 md:py-20">
          <p className="text-xs font-medium text-[#45614a]">SCREENSHOTS</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {project.screenshots.map((screenshot) => (
              <div
                key={screenshot.title}
                className="flex min-h-56 flex-col rounded-[3px] border border-dashed border-[#c7baa3] bg-[#eee8d9] p-6"
              >
                <span className="text-sm text-[#996e4d]">⌁</span>
                <h3 className="mt-auto text-lg font-semibold text-[#241f1a]">
                  {screenshot.title}
                </h3>
                <p className="mt-2 text-sm leading-5 text-[#665e52]">
                  {screenshot.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 border-t border-[#c7baa3] pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#c7baa3] px-4 py-2 text-xs font-medium text-[#45614a]"
              >
                {technology}
              </span>
            ))}
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-[#45614a] transition-colors hover:text-[#241f1a]"
          >
            {project.liveLabel} ↗
          </a>
        </section>
      </article>
    </main>
  );
}

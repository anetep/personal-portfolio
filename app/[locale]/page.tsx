import Link from "next/link";
import { notFound } from "next/navigation";
import { content, isLocale } from "./content";

export default async function Home({
  params,
}: PageProps<"/[locale]">) {
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
    <main className="min-h-screen bg-[#f6f2e7] px-6 md:px-16">
      <header className="flex h-28 items-center gap-10">
        <Link
          href={`/${locale}`}
          className="text-[15px] font-semibold text-[#241f1a]"
          aria-label="Homepage"
        >
          ANETE
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex gap-7 text-xs font-medium text-[#665e52]">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex border-l border-[#c7baa3] pl-4 text-xs font-medium">
          <Link
            href="/en"
            className={
              locale === "en" ? "text-[#241f1a]" : "text-[#996e4d]"
            }
            aria-current={locale === "en" ? "page" : undefined}
          >
            EN
          </Link>

          <span className="px-2 text-[#c7baa3]">/</span>

          <Link
            href="/pt"
            className={
              locale === "pt" ? "text-[#241f1a]" : "text-[#996e4d]"
            }
            aria-current={locale === "pt" ? "page" : undefined}
          >
            PT
          </Link>
        </div>
      </header>

      <section className="relative min-h-[470px] rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] px-8 py-9 md:px-[53px]">
        <div className="flex items-start gap-8">
          <p className="whitespace-pre text-[13px] leading-5 text-[#996e4d]">
            {"⌁  /\\_/\\\n( o.o )"}
          </p>

          <p className="pt-2 text-[11px] font-medium text-[#45614a]">
            {copy.hero.label}
          </p>
        </div>

        <div className="mt-12 md:ml-[116px]">
          <h1 className="text-5xl font-semibold tracking-tight text-[#241f1a] md:text-[68px] md:leading-[1.1]">
            {copy.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#665e52] md:text-[21px]">
            {copy.hero.description}
          </p>
          <p className="mt-10 text-sm text-[#996e4d]">
            {copy.hero.currently}
          </p>

          <a
            href="#work"
            className="mt-10 inline-flex h-12 items-center rounded-full bg-[#45614a] px-7 text-sm font-semibold text-[#fbf9f0] transition-colors hover:bg-[#35503a]"
          >
            {copy.hero.cta}
          </a>
        </div>

        <div className="mt-10 text-sm leading-5 text-[#665e52] md:absolute md:right-[14%] md:bottom-12 md:mt-0">
          {copy.hero.details.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      </section>

      <section id="work" className="py-14">
        <h2 className="mb-5 text-xs font-medium text-[#665e52]">
          {copy.work.title}
        </h2>

        <div className="overflow-hidden rounded-[3px] border border-[#c7baa3]">
          {copy.work.items.map((item) => {
            const row = (
              <>
                <span className="text-[11px] font-medium">{item.year}</span>

                <span className="text-lg font-semibold text-[#241f1a]">
                  {item.name}
                </span>

                <span className="text-sm">{item.description}</span>

                <span className="text-xs">{item.technologies}</span>

                <span className="text-lg text-[#45614a]" aria-hidden="true">
                  ↗
                </span>
              </>
            );

            const className =
              "grid gap-3 border-b border-[#c7baa3] px-5 py-5 text-[#665e52] transition-colors last:border-b-0 hover:bg-[#fbf9f0] md:grid-cols-[105px_1.35fr_1.8fr_1.6fr_auto] md:items-center md:gap-8";

            if ("slug" in item) {
              return (
                <Link
                  key={item.name}
                  href={`/${locale}/projects/${item.slug}`}
                  className={className}
                >
                  {row}
                </Link>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {row}
              </a>
            );
          })}
        </div>
      </section>
      <section
        id="about"
        className="border-t border-[#c7baa3] py-16 md:py-20"
      >
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:gap-20">
          <div>
            <p className="text-xs font-medium text-[#45614a]">
              {copy.about.eyebrow}
            </p>

            <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-[#241f1a] md:text-5xl">
              {copy.about.title}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#665e52]">
              {copy.about.description}
            </p>

            <dl className="mt-10 grid gap-6 border-t border-[#c7baa3] pt-6 sm:grid-cols-3">
              {copy.about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[11px] font-medium text-[#45614a]">
                    {fact.label}
                  </dt>

                  <dd className="mt-2 text-sm leading-5 text-[#665e52]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="self-start rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] p-6 md:mt-8">
            <p className="text-[11px] font-medium text-[#996e4d]">
              {copy.about.noteLabel}
            </p>

            <p className="mt-10 text-lg font-semibold leading-7 text-[#241f1a]">
              {copy.about.note}
            </p>

            <p className="mt-8 text-sm text-[#996e4d]">⌁</p>
          </aside>
        </div>
      </section>
      <section className="border-t border-[#c7baa3] py-16 md:py-20">
        <h2 className="mb-5 text-xs font-medium text-[#665e52]">
          {copy.archive.title}
        </h2>

        <div className="grid gap-3 md:grid-cols-3">
          {copy.archive.cards.map((card) => (
            <article
              id={card.id}
              key={card.id}
              className="flex min-h-44 flex-col rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] p-6 transition-colors hover:bg-[#f0eadc]"
            >
              <p className="text-[11px] font-medium text-[#45614a]">
                {card.label}
              </p>

              <h3 className="mt-10 text-lg font-semibold text-[#241f1a]">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-5 text-[#665e52]">
                {card.description}
              </p>

              <span className="mt-auto pt-6 text-sm text-[#996e4d]">⌁</span>
            </article>
          ))}
        </div>
      </section>
      <footer
          id="contact"
          className="border-t border-[#c7baa3] py-16 md:py-20"
        >
          <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr] md:gap-20">
            <div>
              <p className="text-xs font-medium text-[#45614a]">
                {copy.contact.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#241f1a] md:text-5xl">
                {copy.contact.title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#665e52]">
                {copy.contact.description}
              </p>

              <a
                href="mailto:anetempereira@gmail.com"
                className="mt-10 inline-block border-b border-[#45614a] pb-1 text-lg font-semibold text-[#45614a] transition-colors hover:text-[#241f1a]"
              >
                anetempereira@gmail.com
              </a>
            </div>

            <div className="self-end border-t border-[#c7baa3] pt-6">
              <div className="flex gap-6 text-xs font-medium text-[#665e52]">
                <a
                  href="https://github.com/anetep"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#241f1a]"
                >
                  {copy.contact.githubLabel} ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/anete-pereira-8b3726216/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#241f1a]"
                >
                  {copy.contact.linkedinLabel} ↗
                </a>
              </div>

              <p className="mt-10 text-sm leading-5 text-[#996e4d]">
                {copy.contact.note}
              </p>
            </div>
          </div>
        </footer>
    </main>
  );
}

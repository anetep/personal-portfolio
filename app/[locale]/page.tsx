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

      <section className="min-h-[470px] rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] px-8 py-9 md:px-[53px]">
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
        </div>
      </section>
    </main>
  );
}
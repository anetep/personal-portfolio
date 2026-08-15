const navigationItems = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "NOTES", href: "#notes" },
  { label: "PLACES", href: "#places" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2e7] px-6 md:px-16">
      <header className="flex h-28 items-center gap-10">
        <a
          href="/"
          className="text-[15px] font-semibold text-[#241f1a]"
          aria-label="Homepage"
        >
          ANETE
        </a>

        <nav aria-label="Main navigation">
          <ul className="flex gap-7 text-xs font-medium text-[#665e52]">
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section className="min-h-[470px] rounded-[3px] border border-[#c7baa3] bg-[#fbf9f0] px-8 py-9 md:px-[53px]">
        <div className="flex items-start gap-8">
          <p className="whitespace-pre text-[13px] leading-5 text-[#996e4d]">
            {"⌁  /\\_/\\\n( o.o )"}
          </p>

          <p className="pt-2 text-[11px] font-medium text-[#45614a]">
            PERSONAL NOTEBOOK · SOFTWARE ENGINEER
          </p>
        </div>
        <div className="mt-12 md:ml-[116px]">
          <h1 className="text-5xl font-semibold tracking-tight text-[#241f1a] md:text-[68px] md:leading-[1.1]">
            Hi, I’m Anete.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#665e52] md:text-[21px]">
            I’m a software engineer who enjoys building useful things for the web and
            making complicated problems feel simple.
          </p>
        </div>
      </section>
    </main>
  );
}
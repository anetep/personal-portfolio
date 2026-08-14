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
    </main>
  );
}
export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const content = {
  en: {
    navigation: {
      work: "WORK",
      about: "ABOUT",
      notes: "NOTES",
      places: "PLACES",
    },
    hero: {
      label: "PERSONAL NOTEBOOK · SOFTWARE ENGINEER",
      title: "Hi, I’m Anete.",
      description:
        "I’m a software engineer who enjoys building useful things for the web and making complicated problems feel simple.",
    },
  },
  pt: {
    navigation: {
      work: "TRABALHO",
      about: "SOBRE",
      notes: "NOTAS",
      places: "LUGARES",
    },
    hero: {
      label: "CADERNO PESSOAL · ENGENHEIRA DE SOFTWARE",
      title: "Olá, sou a Anete.",
      description:
        "Sou engenheira de software e gosto de criar coisas úteis para a web e de tornar problemas complicados mais simples.",
    },
  },
} as const;
const defaultLang = "en";

const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.universities": "Universities",
    "nav.contacts": "Contacts",
    "nav.support": "Supports",
    "foot.copy":
      "Copyright © 2025 Indonesia Higher Education | Powered by Indonesia Higher Education.",
  },
  cn: {
    "nav.home": "首页",
    "nav.about": "关于",
    "nav.services": "服务",
    "nav.universities": "大学与学院",
    "nav.contacts": "联系方式",
    "nav.support": "支持",
    "foot.copy":
      "版权所有 © 2025 印度尼西亚高等教育 | 由印度尼西亚高等教育提供支持",
  },
} as const;

type Lang = keyof typeof ui;

type TranslationKeys = keyof (typeof ui)[Lang];

export function getLangFromUrl(url: URL): Lang {
  const [_, lang] = url.pathname.split("/");
  return lang in ui ? (lang as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKeys): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

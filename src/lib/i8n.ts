const defaultLang = "en";

const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.universities": "Universities",
    "nav.contacts": "Contacts",
  },
  cn: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.universities": "大学",
    "nav.contacts": "联系方式",
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

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
    "form.name": "Name",
    "form.phone": "Phone Number",
    "form.email": "Email Address",
    "form.subject": "Subject",
    "form.fullname": "Full Name",
    "form.message": "Message",
    "form.course": "Course of Interest",
    "form.city": "City of Interest",
    "form.submit": "Submit",
    "toast.success": "Success",
    "toast.successMessage": "Your message has been sent",
    "toast.failed": "Failed",
    "toast.failedMessage":
      "There is something wrong when sending, contact admin",
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
    "form.name": "姓名",
    "form.phone": "电话号码",
    "form.email": "电子邮件地址",
    "form.subject": "主题",
    "form.fullname": "全名",
    "form.message": "留言",
    "form.course": "感兴趣的课程",
    "form.city": "感兴趣的城市",
    "form.submit": "提交",
    "toast.success": "成功",
    "toast.successMessage": "您的消息已发送",
    "toast.failed": "失败",
    "toast.failedMessage": "发送时出现错误，请联系管理员",
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

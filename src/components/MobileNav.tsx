import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getLangFromUrl, useTranslations } from "@/lib/i8n";

export default function MobileNav({ url }: { url: URL }) {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 12h16M4 6h16M4 18h16"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 px-4">
          <a href="/" className="border-b pb-2">
            {t("nav.home")}
          </a>
          <a href="/about" className="border-b pb-2">
            {t("nav.about")}
          </a>
          <a href="/services" className="border-b pb-2">
            {t("nav.services")}
          </a>
          <a href="/university" className="border-b pb-2">
            {t("nav.universities")}
          </a>
          <a href="/contact" className="border-b pb-2">
            {t("nav.contacts")}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

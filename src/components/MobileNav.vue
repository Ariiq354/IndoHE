<script setup lang="ts">
  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

  import { getLangFromUrl, useTranslations } from "@/lib/i8n";

  const props = defineProps<{
    url: URL;
    localeUrls: {
      home: string;
      about: string;
      services: string;
      university: string;
      contact: string;
      supports: string;
    };
  }>();

  const lang = getLangFromUrl(props.url);
  const t = useTranslations(lang);
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <div role="button" aria-label="Open Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 12h16M4 6h16M4 18h16"
          ></path>
        </svg>
      </div>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <nav className="flex flex-col gap-4 px-4">
        <a :href="localeUrls['home']" className="border-b pb-2">
          {{ t("nav.home") }}
        </a>
        <a :href="localeUrls['about']" className="border-b pb-2">
          {{ t("nav.about") }}
        </a>
        <a :href="localeUrls['services']" className="border-b pb-2">
          {{ t("nav.services") }}
        </a>
        <a :href="localeUrls['university']" className="border-b pb-2">
          {{ t("nav.universities") }}
        </a>
        <a :href="localeUrls['supports']" className="border-b pb-2">
          {{ t("nav.support") }}
        </a>
        <a :href="localeUrls['contact']" className="border-b pb-2">
          {{ t("nav.contacts") }}
        </a>
      </nav>
    </SheetContent>
  </Sheet>
</template>

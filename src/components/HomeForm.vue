<script setup lang="ts">
  import { getLangFromUrl, useTranslations } from "@/lib/i8n";
  import emailjs from "@emailjs/browser";
  import { ref } from "vue";
  import Input from "./Input.vue";
  import Textarea from "./Textarea.vue";
  import { toast } from "vue-sonner";

  const isLoading = ref(false);
  const form = ref();
  const props = defineProps<{
    url: URL;
  }>();

  const lang = getLangFromUrl(props.url);
  const t = useTranslations(lang);

  function sendEmail() {
    isLoading.value = true;

    emailjs
      .sendForm("service_p81i1n3", "template_fgxzs3g", form.value, {
        publicKey: "aRcbUp8IOulZEh4vX",
      })
      .then(
        () => {
          toast(t("toast.success"), {
            description: t("toast.successMessage"),
          });
        },
        () => {
          toast(t("toast.failed"), {
            description: t("toast.failedMessage"),
          });
        }
      )
      .finally(() => (isLoading.value = false));
  }
</script>

<template>
  <form
    ref="form"
    @submit.prevent="sendEmail"
    class="relative z-10 container flex max-w-[736px] flex-col gap-4 md:text-lg"
  >
    <div class="grid gap-4 md:grid-cols-2">
      <Input :title="t('form.fullname')" name="name" white />
      <Input :title="t('form.email')" name="email" white />
    </div>
    <div class="grid gap-4 md:grid-cols-2">
      <Input :title="t('form.phone')" name="phone" white />
      <Input :title="t('form.course')" name="course" white />
    </div>
    <Input :title="t('form.city')" name="city" white />
    <Textarea :title="t('form.message')" name="message" white />
    <button
      type="submit"
      class="w-fit rounded-full bg-red-700 px-4 py-2 text-white disabled:opacity-75"
      :disabled="isLoading"
    >
      {{ t("form.submit") }}
    </button>
  </form>
</template>

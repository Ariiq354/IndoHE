<script setup lang="ts">
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import SelectGroup from "./ui/select/SelectGroup.vue";
  import ENFlag from "@/assets/ENFlag.vue";
  import CNFlag from "@/assets/CNFlag.vue";

  defineProps<{
    lang: string;
  }>();

  function handleChange(value: string) {
    if (value === "en") {
      window.location.href = "/";
    } else {
      window.location.href = "/cn";
    }
  }
</script>

<template>
  <Select
    :default-value="lang"
    @update:model-value="(e) => handleChange(e!.toString())"
  >
    <SelectTrigger aria-label="Language Select">
      <SelectValue class="text-base">
        <ENFlag v-if="lang === 'en'" />
        <CNFlag v-else />
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="en">
          <ENFlag />
          English
        </SelectItem>
        <SelectItem value="cn">
          <CNFlag />
          中文
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import SelectGroup from "./ui/select/SelectGroup.vue";

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
      <SelectValue class="text-base" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="en">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.67"
            height="32"
            viewBox="0 0 640 480"
          >
            <path fill="#012169" d="M0 0h640v480H0z"></path>
            <path
              fill="#FFF"
              d="m75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301L81 480H0v-60l239-178L0 64V0z"
            ></path>
            <path
              fill="#C8102E"
              d="m424 281l216 159v40L369 281zm-184 20l6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
            ></path>
            <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"></path>
            <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"></path>
          </svg>
          English
        </SelectItem>
        <SelectItem value="cn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42.67"
            height="32"
            viewBox="0 0 640 480"
          >
            <defs>
              <path
                id="flagCn4x30"
                fill="#ff0"
                d="M-.6.8L0-1L.6.8L-1-.3h2z"
              ></path>
            </defs>
            <path fill="#ee1c25" d="M0 0h640v480H0z"></path>
            <use
              width="30"
              height="20"
              href="#flagCn4x30"
              transform="matrix(71.9991 0 0 72 120 120)"
            ></use>
            <use
              width="30"
              height="20"
              href="#flagCn4x30"
              transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"
            ></use>
            <use
              width="30"
              height="20"
              href="#flagCn4x30"
              transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"
            ></use>
            <use
              width="30"
              height="20"
              href="#flagCn4x30"
              transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"
            ></use>
            <use
              width="30"
              height="20"
              href="#flagCn4x30"
              transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"
            ></use>
          </svg>
          中文
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

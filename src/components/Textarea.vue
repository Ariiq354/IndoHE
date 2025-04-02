<script setup lang="ts">
  defineProps<{
    title: string;
    white?: boolean;
    name?: string;
  }>();
</script>

<template>
  <div class="flex flex-col">
    <h2 :class="{ 'text-white': white }">{{ title }}</h2>
    <textarea
      :name
      rows="5"
      class="rounded-md border border-black/40 bg-white p-2"
      :aria-label="title"
    />
  </div>
</template>

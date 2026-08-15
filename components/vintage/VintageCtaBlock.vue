<template>
  <div class="bg-primary text-white border border-frame-ink p-4 font-serif text-sm leading-relaxed vintage-sticker-shadow">
    <h3 class="font-ui font-bold text-sm sm:text-base uppercase tracking-wider mb-2 text-yellow-sticker border-b border-yellow-sticker/40 pb-1">
      {{ title }}
    </h3>
    <div class="text-white space-y-2">
      <slot>
        <p>{{ text }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  text?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'DIRECT VALUE PROPOSITION',
  text: 'At Leonardo Nadin Portfolio, we help you build high-performance web applications, resilient backend architectures, and delightful digital experiences tailored directly to your technical needs.'
});
</script>

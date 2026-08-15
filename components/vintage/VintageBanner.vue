<template>
  <header class="bg-frame-ink text-canvas px-3 py-2 border-b-2 border-frame-ink">
    <div class="flex flex-col md:flex-row items-center justify-between gap-2">
      <!-- Title & Subtitle -->
      <div class="text-center md:text-left">
        <h1 class="font-display text-lg sm:text-xl md:text-2xl font-black tracking-normal uppercase leading-tight text-canvas">
          {{ title }}
        </h1>
        <p class="font-ui text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wide">
          {{ subtitle }}
        </p>
      </div>

      <!-- Right Action Group (Sticker + Contact) -->
      <div class="flex items-center gap-3 flex-wrap justify-center">
        <!-- BUY a NADIN Yellow Sticker -->
        <div class="bg-yellow-sticker text-ink px-2 py-1 border border-frame-ink font-ui font-bold text-xs uppercase flex items-center shadow-[1px_1px_0px_#000000]">
          <span>HIRE a</span>
          <span class="bg-purple-stripe text-white px-1 ml-1 text-[10px] tracking-tight">DEV</span>
          <span class="ml-1 font-black">NADIN</span>
        </div>

        <!-- Red Phone / Contact Callout -->
        <a
          v-if="contactLink"
          :href="contactLink"
          target="_blank"
          class="font-ui font-bold text-sm md:text-base text-primary hover:text-red-400 no-underline whitespace-nowrap bg-black px-2 py-0.5 border border-primary"
        >
          {{ contactText }}
        </a>
        <span
          v-else
          class="font-ui font-bold text-sm md:text-base text-primary whitespace-nowrap bg-black px-2 py-0.5 border border-primary"
        >
          {{ contactText }}
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  contactText?: string;
  contactLink?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'LEONARDO NADIN',
  subtitle: 'BUILD YOUR WEB APPLICATIONS. ONLINE.',
  contactText: '1-800-DEV-NADIN',
  contactLink: 'https://www.linkedin.com/in/leonardo-nadin/'
});
</script>

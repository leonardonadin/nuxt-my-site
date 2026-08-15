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

      <!-- Right Action Group (Badge Sticker + Location Callout) -->
      <div class="flex items-center gap-3 flex-wrap justify-center">
        <!-- Vintage Retro Badge Sticker 1995 -->
        <div class="bg-yellow-sticker text-ink px-2 py-1 border border-frame-ink font-ui font-bold text-xs uppercase flex items-center shadow-[1px_1px_0px_#000000]">
          <span>LEONARDO</span>
          <span class="bg-purple-stripe text-white px-1 ml-1 text-[10px] tracking-tight">.COM</span>
          <span class="ml-1 font-black">1995</span>
        </div>

        <!-- Location Callout -->
        <span
          class="font-ui font-bold text-xs sm:text-sm text-primary whitespace-nowrap bg-black px-2 py-0.5 border border-primary uppercase"
        >
          CHAPECÓ &bull; SC
        </span>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  title: 'LEONARDO NADIN',
  subtitle: 'LÍDER TÉCNICO · DESENVOLVEDOR FULL STACK · LARAVEL · JS'
});
</script>

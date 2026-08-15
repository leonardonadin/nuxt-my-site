<template>
  <div class="border border-frame-ink bg-canvas mb-4 text-ink">
    <!-- Title Bar: White background, 1px bottom border, bold Helvetica all-caps -->
    <div class="bg-canvas text-ink px-3 py-1.5 border-b border-frame-ink flex items-center justify-between">
      <div class="flex items-center gap-2">
        <h3 class="font-ui font-bold text-xs sm:text-sm uppercase tracking-wide">
          {{ title }}
        </h3>
        <span v-if="subtitle" class="font-serif text-xs italic text-gray-700">
          ({{ subtitle }})
        </span>
      </div>
      
      <!-- Optional NEW! yellow burst sticker -->
      <span
        v-if="badgeText"
        class="bg-yellow-sticker text-ink px-1.5 py-0.5 border border-frame-ink font-ui font-bold text-[10px] uppercase shadow-[1px_1px_0px_#000000]"
      >
        {{ badgeText }}
      </span>
    </div>

    <!-- Body Block: Flat catalog tint fill, Times New Roman body copy, 12px x 16px padding -->
    <div :class="[tintBgClass, 'px-4 py-3 border-t-0 text-ink font-serif text-sm leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3']">
      <div class="flex-1">
        <p class="text-ink">
          {{ description }}
        </p>
      </div>

      <!-- Action Button / Link (1996 bevel button) -->
      <div v-if="url" class="shrink-0 mt-2 sm:mt-0">
        <a
          :href="url"
          target="_blank"
          class="vintage-bevel-button inline-flex items-center gap-1 bg-frame-ink text-white hover:text-yellow-sticker px-3 py-1 font-ui font-bold text-xs uppercase no-underline transition-none"
        >
          <span>VISIT SITE &raquo;</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  subtitle?: string;
  description: string;
  url?: string;
  tint?: 'sage' | 'salmon' | 'peach' | 'lime' | 'sky' | 'steel' | 'periwinkle' | 'olive';
  badgeText?: string;
}

const props = withDefaults(defineProps<Props>(), {
  tint: 'sage'
});

const tintBgClass = computed(() => {
  const map: Record<string, string> = {
    sage: 'bg-tint-sage',
    salmon: 'bg-tint-salmon',
    peach: 'bg-tint-peach',
    lime: 'bg-tint-lime',
    sky: 'bg-tint-sky',
    steel: 'bg-tint-steel',
    periwinkle: 'bg-tint-periwinkle',
    olive: 'bg-tint-olive',
  };
  return map[props.tint] || 'bg-tint-sage';
});
</script>

<template>
  <div :class="[tintBgClass, 'text-ink px-4 py-3 sm:py-4 border border-frame-ink flex items-center justify-between']">
    <h2 class="font-display font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight leading-none text-ink">
      {{ title }}
    </h2>
    <span v-if="tag" class="font-ui font-bold text-xs bg-canvas text-ink px-2 py-0.5 border border-frame-ink uppercase">
      {{ tag }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  tag?: string;
  tint?: 'olive' | 'salmon' | 'sage' | 'peach' | 'lime' | 'sky' | 'steel' | 'periwinkle';
}

const props = withDefaults(defineProps<Props>(), {
  tint: 'olive'
});

const tintBgClass = computed(() => {
  const map: Record<string, string> = {
    olive: 'bg-tint-olive',
    salmon: 'bg-tint-salmon',
    sage: 'bg-tint-sage',
    peach: 'bg-tint-peach',
    lime: 'bg-tint-lime',
    sky: 'bg-tint-sky',
    steel: 'bg-tint-steel',
    periwinkle: 'bg-tint-periwinkle',
  };
  return map[props.tint] || 'bg-tint-olive';
});
</script>

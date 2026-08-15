<template>
  <footer class="bg-canvas text-ink border-t border-frame-ink mt-8 pt-4 pb-6 px-4">
    <!-- Icon-label navigation bar connected by green rule -->
    <div class="relative max-w-lg mx-auto my-4">
      <!-- Vintage connecting green line -->
      <div class="absolute top-1/2 left-0 right-0 h-[2px] bg-green-700 -translate-y-1/2 z-0 hidden sm:block"></div>
      
      <div class="relative z-10 flex items-center justify-around gap-2 bg-canvas py-1">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.url"
          :target="item.external ? '_blank' : undefined"
          class="flex flex-col items-center gap-1 text-ink no-underline group px-2 py-1 bg-canvas"
        >
          <div class="w-8 h-8 flex items-center justify-center border border-frame-ink bg-gray-100 group-hover:bg-yellow-sticker">
            <Icon :name="item.icon" size="1.2em" class="text-ink" />
          </div>
          <span class="font-ui font-bold text-[10px] sm:text-xs uppercase text-link underline group-hover:text-primary">
            {{ item.label }}
          </span>
        </a>
      </div>
    </div>

    <!-- Copyright & Disclaimer -->
    <div class="text-center font-serif text-xs text-ink space-y-1 pt-3 border-t border-gray-300 max-w-2xl mx-auto">
      <p>
        Copyright &copy; 1996&ndash;{{ currentYear }} Leonardo Nadin. All rights reserved.
        <a href="https://github.com/leonardonadin" target="_blank" class="text-link underline ml-1">GitHub</a> |
        <a href="https://www.linkedin.com/in/leonardo-nadin/" target="_blank" class="text-link underline ml-1">LinkedIn</a>
      </p>
      <p class="text-[11px] text-gray-600 font-serif italic">
        This site is best viewed with browser versions 3.0 and higher at 800&times;600 resolution. Designed in vintage Dell 1996 catalog style.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const navItems = [
  { label: 'HOME', icon: 'uil:home', url: '#' },
  { label: 'PROJECTS', icon: 'uil:apps', url: '#projects' },
  { label: 'GITHUB', icon: 'uil:github', url: 'https://github.com/leonardonadin', external: true },
  { label: 'CONTACT', icon: 'uil:envelope', url: 'https://www.linkedin.com/in/leonardo-nadin/', external: true }
];
</script>

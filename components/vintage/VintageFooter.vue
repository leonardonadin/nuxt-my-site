<template>
  <footer class="bg-canvas text-ink border-t border-frame-ink mt-8 pt-4 pb-6 px-4">
    <!-- Icon-label navigation bar connected by green rule -->
    <div class="relative max-w-2xl mx-auto my-4">
      <!-- Vintage connecting green line -->
      <div class="absolute top-1/2 left-0 right-0 h-[2px] bg-green-700 -translate-y-1/2 z-0 hidden sm:block"></div>
      
      <div class="relative z-10 flex items-center justify-around gap-1 sm:gap-2 bg-canvas py-1 flex-wrap">
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
        Copyright &copy; 1996&ndash;{{ currentYear }} Leonardo Nadin &bull; Chapec&oacute;, SC &bull;
        <a href="mailto:leo.nadin@hotmail.com.br" class="text-link underline ml-1">leo.nadin@hotmail.com.br</a> &bull;
        <a href="https://github.com/leonardonadin" target="_blank" class="text-link underline ml-1">GitHub</a> &bull;
        <a href="https://www.linkedin.com/in/leonardonadin/" target="_blank" class="text-link underline ml-1">LinkedIn</a> &bull;
        <a href="https://medium.com/@nadin.leonardo" target="_blank" class="text-link underline ml-1">Medium</a>
      </p>
      <p class="text-[11px] text-gray-600 font-serif italic">
        Site desenvolvido em estilo vintage catálogo Dell 1996 &bull; Compatível com navegadores versão 3.0 ou superior em 800&times;600.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const navItems = [
  { label: 'HOME', icon: 'uil:home', url: '#' },
  { label: 'EXPERIÊNCIA', icon: 'uil:briefcase-alt', url: '#experiencia' },
  { label: 'PROJETOS', icon: 'uil:apps', url: '#projetos' },
  { label: 'GITHUB', icon: 'uil:github', url: 'https://github.com/leonardonadin', external: true },
  { label: 'LINKEDIN', icon: 'uil:linkedin', url: 'https://www.linkedin.com/in/leonardonadin/', external: true },
  { label: 'MEDIUM', icon: 'uil:medium-m', url: 'https://medium.com/@nadin.leonardo', external: true },
  { label: 'E-MAIL', icon: 'uil:envelope', url: 'mailto:leo.nadin@hotmail.com.br', external: true }
];
</script>

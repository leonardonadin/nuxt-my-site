<template>
  <VintagePageFrame>
    <!-- Top Black Banner with Yellow Sticker & Phone/Contact Callout -->
    <VintageBanner
      title="LEONARDO NADIN"
      subtitle="FULL STACK DEVELOPER · PORTFOLIO & CATALOG"
      contact-text="1-800-DEV-NADIN"
      contact-link="https://www.linkedin.com/in/leonardo-nadin/"
    />

    <!-- Main Content Area: 2-Column Catalog Spread -->
    <main class="flex-1 p-3 sm:p-4 md:p-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
        
        <!-- LEFT RAIL (~30% / 4 columns on md) -->
        <aside class="md:col-span-4 space-y-4">
          <!-- Developer Quick Bio Box -->
          <div class="border border-frame-ink bg-canvas p-3">
            <div class="bg-frame-ink text-white px-2 py-1 font-ui font-bold text-xs uppercase mb-2">
              SYSTEM OPERATOR PROFILE
            </div>
            <p class="font-serif text-sm leading-relaxed text-ink mb-3">
              <strong>Leonardo Nadin</strong> is a Full Stack Developer specialized in architecting responsive web applications, modern APIs, and clean digital experiences.
            </p>

            <!-- Vintage Directory Links -->
            <div class="grid grid-cols-2 gap-1 font-ui text-xs font-bold pt-2 border-t border-gray-300">
              <a
                href="https://github.com/leonardonadin"
                target="_blank"
                class="flex items-center gap-1 p-1 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline"
              >
                <Icon name="uil:github" size="1.2em" />
                <span>GITHUB</span>
              </a>
              <a
                href="https://www.linkedin.com/in/leonardo-nadin/"
                target="_blank"
                class="flex items-center gap-1 p-1 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline"
              >
                <Icon name="uil:linkedin" size="1.2em" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          <!-- Vivid Dell Red CTA Block -->
          <VintageCtaBlock
            title="DIRECT VALUE PROPOSITION"
            text="Looking for robust full-stack engineering? From interactive client-side interfaces to resilient backend APIs, I deliver reliable, high-performance web software ready for production."
          >
            <p class="mb-3 font-serif text-sm">
              Looking for robust full-stack engineering? From interactive client-side interfaces to resilient backend APIs, I deliver reliable, high-performance web software ready for production.
            </p>
            <div class="pt-2 border-t border-white/30 text-center">
              <a
                href="https://www.linkedin.com/in/leonardo-nadin/"
                target="_blank"
                class="vintage-bevel-button inline-block w-full text-center bg-white text-ink hover:bg-yellow-sticker font-ui font-bold text-xs uppercase py-1.5 no-underline"
              >
                GET IN TOUCH &raquo;
              </a>
            </div>
          </VintageCtaBlock>

          <!-- Vintage Quality Seal (Dell PC Magazine Readers' Choice style) -->
          <div class="border border-frame-ink bg-gray-50 p-4 text-center">
            <div class="inline-flex flex-col items-center justify-center w-24 h-24 rounded-full bg-primary text-white border-2 border-frame-ink p-2 mx-auto shadow-[2px_2px_0px_#000000]">
              <span class="font-ui font-black text-[9px] uppercase tracking-tighter">RELIABILITY</span>
              <span class="font-display font-black text-xs uppercase leading-tight my-0.5 text-yellow-sticker">100%</span>
              <span class="font-ui font-bold text-[8px] uppercase tracking-tighter text-center">CLEAN CODE</span>
            </div>
            <p class="font-serif text-xs text-ink mt-2">
              Standard-compliant HTML5, Vue, TypeScript, & Responsive Layouts.
            </p>
          </div>
        </aside>

        <!-- RIGHT RAIL (~70% / 8 columns on md) -->
        <section id="projects" class="md:col-span-8 space-y-6">
          <!-- SECTION 1: Featured Applications -->
          <div>
            <VintageEyebrow
              title="FLAGSHIP APPLICATIONS"
              tag="ONLINE CATALOG"
              tint="olive"
            />
            
            <div class="mt-3 space-y-3">
              <!-- Qual o App? Ribbon Card -->
              <VintageRibbonCard
                title="QUAL O APP?"
                subtitle="Who is the app?"
                description="A specialized web utility designed to help users discover exactly which delivery, transportation, and service applications operate in their target city."
                url="https://qualoapp.com.br/"
                tint="sage"
                badge-text="NEW!"
              />

              <!-- Quero me mudar Ribbon Card -->
              <VintageRibbonCard
                title="QUERO ME MUDAR"
                subtitle="I want to move"
                description="A streamlined portal assisting individuals and families in researching rental properties, neighborhood metrics, and relocation services across cities."
                url="https://queromemudar.com.br/"
                tint="peach"
              />
            </div>
          </div>

          <!-- SECTION 2: Technical Specifications & Capabilities -->
          <div>
            <VintageEyebrow
              title="ENGINEERING SPECIFICATIONS"
              tag="SYSTEM ARCHITECTURE"
              tint="salmon"
            />

            <div class="mt-3 space-y-3">
              <!-- Full Stack Card -->
              <VintageRibbonCard
                title="FRONTEND & BACKEND ARCHITECTURE"
                description="Engineered with Nuxt 3, Vue.js, TypeScript, Node.js, and modern CSS architectures. Focused on blazing load times, resilient state management, and ergonomic component hierarchies."
                tint="periwinkle"
              />

              <!-- Infrastructure Card -->
              <VintageRibbonCard
                title="DATA & INFRASTRUCTURE SYSTEMS"
                description="Relational database schema modeling with PostgreSQL/MySQL, containerized workflows with Docker, and automated CI/CD deployment pipelines on Linux servers."
                tint="sky"
              />
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Vintage Footer with 4-Item Icon Navigation -->
    <VintageFooter />
  </VintagePageFrame>
</template>

<script setup lang="ts">
import VintagePageFrame from '~/components/vintage/VintagePageFrame.vue';
import VintageBanner from '~/components/vintage/VintageBanner.vue';
import VintageCtaBlock from '~/components/vintage/VintageCtaBlock.vue';
import VintageEyebrow from '~/components/vintage/VintageEyebrow.vue';
import VintageRibbonCard from '~/components/vintage/VintageRibbonCard.vue';
import VintageFooter from '~/components/vintage/VintageFooter.vue';

useHead({
  title: 'Leonardo Nadin · Full Stack Developer (1996 Edition)',
  meta: [
    { name: 'description', content: 'Leonardo Nadin - Full Stack Developer Portfolio rendered in authentic Dell 1996 catalog web design.' }
  ]
});
</script>
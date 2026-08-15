<template>
  <VintagePageFrame>
    <!-- Top Black Banner with Vintage Badge & Location -->
    <VintageBanner
      title="LEONARDO NADIN"
      subtitle="LÍDER TÉCNICO · DESENVOLVEDOR FULL STACK · LARAVEL · JS"
    />

    <!-- Main Content Area: 2-Column Catalog Layout -->
    <main class="flex-1 p-3 sm:p-4 md:p-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
        
        <!-- LEFT RAIL (~35% / 4 columns on md) -->
        <aside class="md:col-span-4 space-y-4">
          <!-- Profile & Location Box -->
          <div class="border border-frame-ink bg-canvas p-3">
            <div class="bg-frame-ink text-white px-2 py-1 font-ui font-bold text-xs uppercase mb-2 flex items-center justify-between">
              <span>SYSTEM OPERATOR</span>
              <span class="text-yellow-sticker text-[10px]">VER. 1995</span>
            </div>
            
            <div class="space-y-1 mb-3">
              <h2 class="font-display font-black text-lg sm:text-xl text-ink leading-tight">
                Leonardo Nadin
              </h2>
              <p class="font-ui text-xs font-bold text-gray-700">
                Chapecó, Santa Catarina, Brasil
              </p>
              <p class="font-serif text-xs text-gray-800 italic pt-1">
                Líder Técnico &bull; Desenvolvedor Full Stack &bull; Especialista Laravel, PHP e JavaScript
              </p>
            </div>

            <!-- Directory Links Grid (No email) -->
            <div class="grid grid-cols-3 gap-1 font-ui text-xs font-bold pt-2 border-t border-gray-300">
              <a
                href="https://www.linkedin.com/in/leonardonadin/"
                target="_blank"
                class="flex flex-col items-center justify-center p-1.5 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline text-center"
                title="LinkedIn"
              >
                <Icon name="uil:linkedin" size="1.2em" />
                <span class="text-[10px] mt-0.5">LINKEDIN</span>
              </a>
              <a
                href="https://github.com/leonardonadin"
                target="_blank"
                class="flex flex-col items-center justify-center p-1.5 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline text-center"
                title="GitHub"
              >
                <Icon name="uil:github" size="1.2em" />
                <span class="text-[10px] mt-0.5">GITHUB</span>
              </a>
              <a
                href="https://medium.com/@nadin.leonardo"
                target="_blank"
                class="flex flex-col items-center justify-center p-1.5 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline text-center"
                title="Medium Blog"
              >
                <Icon name="uil:medium-m" size="1.2em" />
                <span class="text-[10px] mt-0.5">BLOG</span>
              </a>
            </div>
          </div>

          <!-- Red Panel: Professional Summary / Manifesto -->
          <VintageCtaBlock
            title="RESUMO PROFISSIONAL"
          >
            <p class="font-serif text-sm leading-relaxed text-white">
              Desenvolvedor Full Stack com mais de uma década de experiência criando soluções digitais, principalmente com PHP e JavaScript/TypeScript.
            </p>
            <p class="font-serif text-sm leading-relaxed text-white mt-2">
              Foco em arquitetura de software, Laravel, sistemas de alta confiabilidade, mensageria com RabbitMQ, boas práticas e código limpo que resolve problemas reais de ponta a ponta.
            </p>
          </VintageCtaBlock>

          <!-- Education & Formação Acadêmica Box -->
          <div class="border border-frame-ink bg-canvas p-3 text-ink">
            <div class="bg-frame-ink text-white px-2 py-1 font-ui font-bold text-xs uppercase mb-2">
              FORMAÇÃO ACADÊMICA
            </div>
            
            <div class="space-y-3 font-serif text-xs">
              <div class="border-b border-gray-300 pb-2">
                <p class="font-ui font-bold text-ink">MBA em Arquitetura Full Cycle</p>
                <p class="text-gray-700">Full Cycle &bull; 2026 &ndash; 2027</p>
              </div>
              <div class="border-b border-gray-300 pb-2">
                <p class="font-ui font-bold text-ink">Bacharel em Ciência da Computação</p>
                <p class="text-gray-700">Universidade do Oeste de SC &bull; 2014 &ndash; 2018</p>
              </div>
              <div>
                <p class="font-ui font-bold text-ink">Técnico em Informática</p>
                <p class="text-gray-700">EEB Prof Elza Mancelos de Moura &bull; 2010 &ndash; 2013</p>
              </div>
            </div>
          </div>

          <!-- Certificações & Idiomas Box -->
          <div class="border border-frame-ink bg-gray-50 p-3 text-ink">
            <div class="bg-frame-ink text-white px-2 py-1 font-ui font-bold text-xs uppercase mb-2">
              CERTIFICAÇÕES & IDIOMAS
            </div>
            
            <ul class="list-disc list-inside font-serif text-xs space-y-1 text-gray-800">
              <li>Fundamentos de Arquitetura de Software</li>
              <li>Docker &amp; Containers</li>
              <li>RabbitMQ &amp; Mensageria</li>
              <li>Electron: Apps Desktop com Web Tech</li>
              <li>Cordova &amp; PhoneGap Mobile</li>
            </ul>

            <div class="mt-3 pt-2 border-t border-gray-300 font-serif text-xs">
              <p><strong>Português:</strong> Nativo</p>
              <p><strong>Inglês:</strong> Profissional (Professional Working)</p>
            </div>
          </div>

          <!-- Quality Seal Badge -->
          <div class="border border-frame-ink bg-canvas p-3 text-center">
            <div class="inline-flex flex-col items-center justify-center w-20 h-20 rounded-full bg-primary text-white border-2 border-frame-ink p-2 mx-auto shadow-[2px_2px_0px_#000000]">
              <span class="font-ui font-black text-[8px] uppercase tracking-tighter">EXPERIÊNCIA</span>
              <span class="font-display font-black text-xs uppercase leading-tight my-0.5 text-yellow-sticker">+10 ANOS</span>
              <span class="font-ui font-bold text-[7px] uppercase tracking-tighter text-center">FULL STACK</span>
            </div>
            <p class="font-serif text-xs text-ink mt-2">
              Qualidade de software, Clean Architecture e compromisso com resultados.
            </p>
          </div>
        </aside>

        <!-- RIGHT RAIL (~65% / 8 columns on md) -->
        <section class="md:col-span-8 space-y-6">
          
          <!-- SEÇÃO PRINCIPAL: APLICAÇÕES & PROJETOS EM DESTAQUE -->
          <div id="projetos">
            <VintageEyebrow
              title="APLICAÇÕES & PROJETOS"
              tag="CATÁLOGO 1995"
              tint="olive"
            />
            
            <div class="mt-3 space-y-4">
              <!-- Qual o App? -->
              <VintageRibbonCard
                title="QUAL O APP?"
                subtitle="Guia Completo de Aplicativos por Cidade"
                description="Plataforma web desenvolvida para identificar, comparar e catalogar com precisão quais aplicativos de entrega, transporte e serviços operam em cada município do Brasil. Conta com sistema de busca inteligente, filtragem dinâmica e categorização por tipo de serviço."
                url="https://qualoapp.com.br/"
                tint="sage"
                badge-text="DESTAQUE"
              />

              <!-- Quero me mudar -->
              <VintageRibbonCard
                title="QUERO ME MUDAR"
                subtitle="Portal e Análise de Imóveis para Mudança"
                description="Solução online projetada para auxiliar famílias e profissionais que planejam mudar de cidade a encontrar e analisar imóveis para locação, infraestrutura dos bairros, custo de vida e serviços essenciais."
                url="https://queromemudar.com.br/"
                tint="peach"
                badge-text="DESTAQUE"
              />

              <!-- Artigos & Conteúdo Técnico -->
              <VintageRibbonCard
                title="PUBLICAÇÕES & ARTIGOS TÉCNICOS"
                subtitle="Medium Blog"
                description="Artigos e reflexões sobre engenharia de software, desenvolvimento backend com PHP/Laravel, JavaScript moderno, padrões arquiteturais e soluções práticas para o ecossistema web."
                url="https://medium.com/@nadin.leonardo"
                tint="periwinkle"
                badge-text="BLOG"
              />

              <!-- Código Aberto & Repositórios -->
              <VintageRibbonCard
                title="CÓDIGO ABERTO & EXPERIMENTOS"
                subtitle="GitHub Projects"
                description="Repositórios com projetos públicos, integrações de APIs, boilerplates, bibliotecas utilitárias e contribuições para a comunidade open source."
                url="https://github.com/leonardonadin"
                tint="sky"
                badge-text="GITHUB"
              />
            </div>
          </div>

        </section>
      </div>
    </main>

    <!-- Vintage Footer with Navigation -->
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
  title: 'Leonardo Nadin · Líder Técnico & Desenvolvedor Full Stack (1995 Edition)',
  meta: [
    { name: 'description', content: 'Portfolio de Leonardo Nadin: Líder Técnico e Desenvolvedor Full Stack com mais de 10 anos de experiência em PHP, Laravel, JS e Arquitetura de Software.' }
  ]
});
</script>
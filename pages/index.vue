<template>
  <VintagePageFrame>
    <!-- Top Black Banner with Vintage Badge & Contact Email -->
    <VintageBanner
      title="LEONARDO NADIN"
      subtitle="LÍDER TÉCNICO · DESENVOLVEDOR FULL STACK · LARAVEL · JS"
      email="leo.nadin@hotmail.com.br"
    />

    <!-- Main Content Area: 2-Column Catalog Layout -->
    <main class="flex-1 p-3 sm:p-4 md:p-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
        
        <!-- LEFT RAIL (~33% / 4 columns on md) -->
        <aside class="md:col-span-4 space-y-4">
          <!-- Profile & Location Box -->
          <div class="border border-frame-ink bg-canvas p-3">
            <div class="bg-frame-ink text-white px-2 py-1 font-ui font-bold text-xs uppercase mb-2 flex items-center justify-between">
              <span>SYSTEM OPERATOR</span>
              <span class="text-yellow-sticker text-[10px]">VER. 1996</span>
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

            <!-- Directory Links Grid -->
            <div class="grid grid-cols-2 gap-1 font-ui text-xs font-bold pt-2 border-t border-gray-300">
              <a
                href="https://www.linkedin.com/in/leonardonadin/"
                target="_blank"
                class="flex items-center gap-1 p-1 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline"
                title="LinkedIn"
              >
                <Icon name="uil:linkedin" size="1.1em" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://github.com/leonardonadin"
                target="_blank"
                class="flex items-center gap-1 p-1 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline"
                title="GitHub"
              >
                <Icon name="uil:github" size="1.1em" />
                <span>GITHUB</span>
              </a>
              <a
                href="https://medium.com/@nadin.leonardo"
                target="_blank"
                class="flex items-center gap-1 p-1 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline"
                title="Medium Blog"
              >
                <Icon name="uil:medium-m" size="1.1em" />
                <span>BLOG</span>
              </a>
              <a
                href="mailto:leo.nadin@hotmail.com.br"
                class="flex items-center gap-1 p-1 bg-gray-100 border border-frame-ink hover:bg-yellow-sticker text-ink no-underline"
                title="Enviar E-mail"
              >
                <Icon name="uil:envelope" size="1.1em" />
                <span>E-MAIL</span>
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

        <!-- RIGHT RAIL (~67% / 8 columns on md) -->
        <section class="md:col-span-8 space-y-6">
          
          <!-- SECTION 1: Experiência Profissional -->
          <div id="experiencia">
            <VintageEyebrow
              title="EXPERIÊNCIA PROFISSIONAL"
              tag="TRAJETÓRIA"
              tint="olive"
            />
            
            <div class="mt-3 space-y-3">
              <!-- IXC Soft -->
              <VintageRibbonCard
                title="IXC SOFT"
                subtitle="Líder Técnico & Desenvolvedor de Sistemas · 2024 - Presente · Chapecó/SC"
                description="Atuação como Líder Técnico (Jan/2026 - Presente) e Desenvolvedor de Sistemas (Jul/2024 - Presente). Liderança técnica de equipes de desenvolvimento, sustentação e evolução de sistemas robustos, definição de padrões de arquitetura, mensageria e otimização de performance."
                tint="sage"
                badge-text="ATUAL"
              />

              <!-- Alcance Tecnologia -->
              <VintageRibbonCard
                title="ALCANCE TECNOLOGIA"
                subtitle="Desenvolvedor Full Stack · 2014 - 2024 (10 anos 1 mês)"
                description="Uma década de liderança e desenvolvimento full stack: construção de sistemas web e e-commerces em Laravel integrados a ERPs, gateways de pagamento e frete; REST APIs; interfaces em Vue, React e Alpine.js; apps Desktop em Electron com SQLServer; mobile em Ionic; treinamento e mentoria de novos colaboradores; manutenção de bancos MySQL e servidores Linux (AWS, VPS, cPanel)."
                tint="peach"
              />
            </div>
          </div>

          <!-- SECTION 2: Projetos em Destaque -->
          <div id="projetos">
            <VintageEyebrow
              title="APLICAÇÕES & PROJETOS"
              tag="PORTFOLIO"
              tint="salmon"
            />
            
            <div class="mt-3 space-y-3">
              <!-- Qual o App? -->
              <VintageRibbonCard
                title="QUAL O APP?"
                subtitle="Guia de Aplicativos por Cidade"
                description="Plataforma que identifica e categoriza quais aplicativos de transporte, delivery e serviços operam em cada cidade do Brasil, com busca inteligente e dados geo-localizados."
                url="https://qualoapp.com.br/"
                tint="lime"
                badge-text="PROJETO"
              />

              <!-- Quero me mudar -->
              <VintageRibbonCard
                title="QUERO ME MUDAR"
                subtitle="Portal de Moradia e Mudança"
                description="Ferramenta web para busca e análise de imóveis para locação, custo de vida e facilidades de bairros para quem planeja mudar de cidade."
                url="https://queromemudar.com.br/"
                tint="sky"
                badge-text="PROJETO"
              />
            </div>
          </div>

          <!-- SECTION 3: Competências & Stack Tecnológica -->
          <div id="competencias">
            <VintageEyebrow
              title="COMPETÊNCIAS & ARQUITETURA"
              tag="ESPECIFICAÇÃO"
              tint="periwinkle"
            />

            <div class="mt-3 space-y-3">
              <!-- Backend & Arquitetura -->
              <VintageRibbonCard
                title="BACKEND & ARQUITETURA DE SOFTWARE"
                description="Especialista em PHP (Laravel, Zend 1), JavaScript/TypeScript (Node.js, Express), Mensageria com RabbitMQ, APIs RESTful, Microsserviços, Design Patterns, SOLID, Testes e Clean Architecture."
                tint="periwinkle"
              />

              <!-- Frontend, Desktop & Mobile -->
              <VintageRibbonCard
                title="FRONTEND, DESKTOP & MOBILE"
                description="Desenvolvimento de SPAs e SSR com Vue.js, React, Alpine.js, Nuxt, TypeScript e TailwindCSS. Construção de softwares desktop multiplataforma com ElectronJs e aplicativos mobile híbridos com Ionic/Cordova."
                tint="steel"
              />

              <!-- Banco de Dados, DevOps & Infra -->
              <VintageRibbonCard
                title="BANCO DE DADOS, CLOUD & INFRAESTRUTURA"
                description="Modelagem e otimização de MySQL e SQLServer. Ambientes conteinerizados com Docker, servidores Linux (AWS, VPS, WHM), Git workflows e esteiras de CI/CD."
                tint="olive"
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
  title: 'Leonardo Nadin · Líder Técnico & Desenvolvedor Full Stack (1996 Edition)',
  meta: [
    { name: 'description', content: 'Portfolio e currículo de Leonardo Nadin: Líder Técnico e Desenvolvedor Full Stack com mais de 10 anos de experiência em PHP, Laravel, JS, RabbitMQ e Arquitetura de Software.' }
  ]
});
</script>
import { EcosystemNavigator } from "./EcosystemNavigator";

const modules = [
  {
    code: "01",
    name: "Sites with AI",
    role: "Build, manage and publish conversion-ready digital experiences.",
    href: "https://sites.marketingdigitalretina.com.br",
    accent: "pink",
  },
  {
    code: "02",
    name: "Ads AI Manager",
    role: "Plan, operate and improve paid-media workflows with clear approvals.",
    href: "https://ads.marketingdigitalretina.com.br",
    accent: "cyan",
  },
  {
    code: "03",
    name: "SEO + GEO",
    role: "Turn search intent into an actionable organic growth program.",
    href: "https://seo.marketingdigitalretina.com.br",
    accent: "gold",
  },
  {
    code: "04",
    name: "Social Operations",
    role: "Connect channels, plan content and preserve approval-first publishing.",
    href: "https://redes.marketingdigitalretina.com.br",
    accent: "violet",
  },
  {
    code: "05",
    name: "Content Studio",
    role: "Create structured content and copy for campaigns and digital products.",
    href: "https://conteudo.marketingdigitalretina.com.br",
    accent: "pink",
  },
  {
    code: "06",
    name: "Visual Identity",
    role: "Translate business positioning into a coherent brand direction.",
    href: "https://identidade.marketingdigitalretina.com.br",
    accent: "cyan",
  },
  {
    code: "07",
    name: "Specialist Agents",
    role: "Route each request to one of 13 rigorously evaluated specialists.",
    href: "https://equipe.retinacomunicacao.com.br",
    accent: "gold",
  },
];

const foundations = [
  {
    code: "F1",
    name: "Retina Comunicacao",
    role: "The service and delivery foundation behind the ecosystem, connecting a broad digital portfolio to specialist execution.",
    evidence: "Public service taxonomy + 13-specialist operating layer",
    href: "https://retinacomunicacao.com",
    accent: "pink",
  },
  {
    code: "F2",
    name: "RetinaCoin",
    role: "A Polygon utility-token foundation and responsible payments roadmap for future ecosystem services.",
    evidence: "Verified contract foundation + multilingual White Paper 1.3",
    href: "https://retinacoin.com",
    accent: "cyan",
  },
  {
    code: "F3",
    name: "Consultoria Blockchain",
    role: "Education, advisory and implementation pathways for wallets, security, tokens and blockchain combined with AI.",
    evidence: "Four published learning paths + token creation tooling",
    href: "https://consultoriablockchain.com.br",
    accent: "gold",
  },
  {
    code: "T1",
    name: "Codex Token Generator",
    role: "A guided token-creation experience that turns technical parameters into a structured implementation flow.",
    evidence: "Built end-to-end with Codex · existing portfolio project",
    href: "https://token.consultoriablockchain.com.br/gerador",
    accent: "cyan",
  },
  {
    code: "V1",
    name: "AstroConsulta",
    role: "An independent astrology consultation and digital-product venture supported by AI-enabled acquisition, content and client operations.",
    evidence: "Live Brazilian brand + consultation and product growth pathway",
    href: "https://astroconsulta.com.br",
    accent: "violet",
  },
];

const specialistNetworks = [
  {
    code: "N1",
    name: "Retina Specialist Network",
    role: "A multidisciplinary roster spanning marketing, design, technology, sales, data, security and operations.",
    validation: "13 primary specialists were rigorously validated across 65 scenarios. The broader live roster is linked as existing platform context.",
    stats: ["13 validated leads", "65/65 QA scenarios", "broader live roster"],
    href: "https://equipe.retinacomunicacao.com.br/ai-team",
  },
  {
    code: "N2",
    name: "Blockchain Consultant Network",
    role: "A dedicated expert network for blockchain, cryptocurrencies, DeFi, NFT, Metaverse and supporting business disciplines.",
    validation: "The full specialist catalog is linked directly. Individual profiles remain pre-existing portfolio work and are not included in the 65-scenario claim.",
    stats: ["Web3 specialists", "multi-category routing", "existing consultant roster"],
    href: "https://consultores.consultoriablockchain.com.br/ai-team",
  },
];

const ecosystemExpansions = [
  {
    code: "E1",
    name: "Retina Apresenta",
    role: "An AI presentation product that structures the narrative, creates premium visuals and exports editable PowerPoint and PDF files.",
    evidence: "Live product · AI-generated presentations · PPTX + PDF exports",
    href: "https://apresentacoes.marketingdigitalretina.com.br",
    accent: "pink",
  },
  {
    code: "E2",
    name: "IAEquipePro",
    role: "An independent free platform that helps people find and talk to the right AI specialist across professional and everyday categories.",
    evidence: "Live platform · 100 AI specialists · independent portfolio project",
    href: "https://iaequipepro.com.br",
    accent: "violet",
  },
];

const principles = [
  ["One intake", "A shared business brief replaces seven disconnected starts."],
  ["Human approval", "Publishing and production actions stay gated until explicit approval."],
  ["Specialist routing", "The operating layer sends each objective to the right agent and product."],
  ["Documented delivery", "Every engagement moves through visible stages and a concrete next action."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Retina AI Ecosystem home">
          <span className="brand-mark" aria-hidden="true" />
          <span>RETINA<span className="brand-muted">/AI</span></span>
        </a>
        <div className="nav-links">
          <a href="#ecosystem">Ecosystem</a>
          <a href="#foundations">Foundations</a>
          <a href="#networks">Networks</a>
          <a href="#expansion">Expansion</a>
          <a href="#navigator">Navigator</a>
          <a href="#build-week">Build Week</a>
        </div>
        <a className="nav-cta" href="https://marketingdigitalretina.com.br" target="_blank" rel="noreferrer">
          Open live hub <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> OpenAI Build Week 2026</p>
          <h1>One operating layer for an entire <em>AI business ecosystem.</em></h1>
          <p className="hero-lede">
            Retina connects specialist agents, digital services, AI products and responsible Web3 foundations into
            one approval-first workflow for small businesses.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#navigator">Try the ecosystem navigator</a>
            <a className="button button-ghost" href="#build-week">See what is new</a>
          </div>
          <div className="hero-proof" aria-label="Project metrics">
            <div><strong>13</strong><span>validated lead specialists</span></div>
            <div><strong>7 + 5</strong><span>AI products + foundations, tools and ventures</span></div>
            <div><strong>65/65</strong><span>agent QA scenarios approved</span></div>
          </div>
        </div>
        <div className="orbital" aria-label="Visual map of the Retina ecosystem">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="retina-core"><span>RETINA</span><small>operating layer</small></div>
          <div className="satellite satellite-sites"><span>01</span>Sites</div>
          <div className="satellite satellite-ads"><span>02</span>Ads</div>
          <div className="satellite satellite-seo"><span>03</span>SEO</div>
          <div className="satellite satellite-social"><span>04</span>Social</div>
          <div className="satellite satellite-agents"><span>13</span>Agents</div>
        </div>
      </section>

      <section className="statement">
        <div className="shell statement-inner">
          <p>THE PROBLEM</p>
          <h2>Small businesses do not need seven more dashboards. They need one clear path from intent to delivery.</h2>
        </div>
      </section>

      <section className="section shell" id="ecosystem">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Connected products</p>
            <h2>The ecosystem, not a feature list.</h2>
          </div>
          <p>Each product solves a focused job. The operating layer turns them into one coordinated service journey.</p>
        </div>
        <div className="module-grid">
          {modules.map((module) => (
            <a className={`module-card accent-${module.accent}`} href={module.href} target="_blank" rel="noreferrer" key={module.code}>
              <span className="module-code">{module.code}</span>
              <div>
                <h3>{module.name}</h3>
                <p>{module.role}</p>
              </div>
              <span className="module-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section foundation-section" id="foundations">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Foundations and ventures</p>
              <h2>Delivery, utility, Web3 and a vertical AI venture.</h2>
            </div>
            <p>
              These established projects expand the portfolio without being claimed as new Build Week work. They
              provide service delivery, utility infrastructure, blockchain education, a Codex-built token generator
              and a real vertical venture.
            </p>
          </div>
          <div className="foundation-grid">
            {foundations.map((foundation) => (
              <a className={`foundation-card accent-${foundation.accent}`} href={foundation.href} target="_blank" rel="noreferrer" key={foundation.code}>
                <span className="module-code">{foundation.code}</span>
                <h3>{foundation.name}</h3>
                <p>{foundation.role}</p>
                <small>{foundation.evidence}</small>
                <span className="foundation-arrow" aria-hidden="true">Visit project</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section network-section" id="networks">
        <div className="shell">
          <div className="section-heading light">
            <div>
              <p className="eyebrow"><span /> Specialist networks</p>
              <h2>Two expert networks, with evidence kept precise.</h2>
            </div>
            <p>
              The full consultant catalogs are part of the existing portfolio. Only the 13 Retina primary specialists
              carry the documented 65-scenario homologation claim.
            </p>
          </div>
          <div className="network-grid">
            {specialistNetworks.map((network) => (
              <article className="network-card" key={network.code}>
                <div className="network-topline"><span>{network.code}</span><b>EXISTING NETWORK</b></div>
                <h3>{network.name}</h3>
                <p>{network.role}</p>
                <div className="network-stats">
                  {network.stats.map((stat) => <span key={stat}>{stat}</span>)}
                </div>
                <small>{network.validation}</small>
                <a href={network.href} target="_blank" rel="noreferrer">Explore complete roster</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section expansion-section" id="expansion">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> Broader live ecosystem</p>
              <h2>More products, without changing the judged scope.</h2>
            </div>
            <p>
              The Retina portfolio continued to evolve around the submitted core. These additional live projects are
              presented as broader portfolio evidence—not as extra Build Week functionality and not as part of the
              65-scenario validation claim.
            </p>
          </div>
          <div className="expansion-grid">
            {ecosystemExpansions.map((project) => (
              <a className={`expansion-card accent-${project.accent}`} href={project.href} target="_blank" rel="noreferrer" key={project.code}>
                <span className="module-code">{project.code}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.role}</p>
                  <small>{project.evidence}</small>
                </div>
                <span className="module-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section navigator-section" id="navigator">
        <div className="shell">
          <div className="section-heading light">
            <div>
              <p className="eyebrow"><span /> Working demo</p>
              <h2>Turn a business goal into an operating sequence.</h2>
            </div>
            <p>Choose a goal and constraints. The navigator routes the work across specialists and products.</p>
          </div>
          <EcosystemNavigator />
        </div>
      </section>

      <section className="section shell principles-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Operating principles</p>
            <h2>Agentic, but accountable.</h2>
          </div>
        </div>
        <div className="principle-grid">
          {principles.map(([title, copy], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section build-section" id="build-week">
        <div className="shell build-grid">
          <div>
            <p className="eyebrow"><span /> Meaningful extension</p>
            <h2>What changed during Build Week.</h2>
            <p className="build-intro">
              The individual products and ecosystem foundations pre-date the event. The new work is the connective
              operating layer: a shared offer, one intake, staged delivery, specialist routing and this runnable
              ecosystem navigator.
            </p>
          </div>
          <ol className="timeline">
            <li><span>01</span><div><strong>Unified catalog</strong><p>Seven product journeys were mapped into one coherent business offer.</p></div></li>
            <li><span>02</span><div><strong>Central orchestration</strong><p>Checkout, briefing and progress tracking converge in a single setup flow.</p></div></li>
            <li><span>03</span><div><strong>Approval-first states</strong><p>Briefing → access → configuration → approval → documented delivery.</p></div></li>
            <li><span>04</span><div><strong>Codex-built demo</strong><p>GPT-5.6 in Codex shaped the product story, architecture, implementation and QA.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="closing shell">
        <p className="eyebrow"><span /> A practical AI economy</p>
        <h2>From scattered tools to a system that knows the next best action.</h2>
        <div className="closing-actions">
          <a className="button button-primary" href="#navigator">Explore the workflow</a>
          <a className="button button-ghost" href="https://retinacomunicacao.com" target="_blank" rel="noreferrer">Explore Retina Comunicacao</a>
          <a className="button button-ghost" href="https://consultoriablockchain.com.br" target="_blank" rel="noreferrer">Explore Blockchain Consulting</a>
        </div>
        <p className="roadmap-note">RetinaCoin is presented as a utility and payments roadmap. Consultoria Blockchain provides education and advisory paths. No investment or return claims are made.</p>
      </section>

      <footer className="footer shell">
        <section className="founder-section" id="founder">
          <div>
            <p className="eyebrow"><span /> Founder &amp; product builder</p>
            <h2>William Noronha</h2>
            <p>Founder and product builder coordinating the Retina portfolio and its approval-first operating model.</p>
          </div>
          <div className="founder-links" aria-label="William Noronha professional profiles">
            <a href="https://www.linkedin.com/in/williamnoronha/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://www.instagram.com/williamnoronha/" target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </section>
        <div className="brand"><span className="brand-mark" aria-hidden="true" /><span>RETINA<span className="brand-muted">/AI</span></span></div>
        <p>Built with Codex and GPT-5.6 for OpenAI Build Week 2026.</p>
        <a href="https://retinacomunicacao.com" target="_blank" rel="noreferrer">Retina Comunicação ↗</a>
      </footer>
    </main>
  );
}

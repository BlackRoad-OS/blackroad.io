// Pages - All site pages
import { CSS, HEADER, FOOTER, layout } from '../templates/base.js';

export async function home(env) {
  // Fetch stats from D1
  let stats = { agents: '1,000', domains: '21', github_orgs: '16', repositories: '40+' };
  try {
    const result = await env.DB.prepare('SELECT key, value FROM stats').all();
    for (const row of result.results) {
      stats[row.key] = row.value;
    }
  } catch (e) {}

  return layout('The Road Ahead Is Infinite', 'Browser-native operating system for AI agent orchestration', `
    <section class="hero">
      <div class="container">
        <h1>The Road Ahead<br><span>Is Infinite</span></h1>
        <p>Browser-native operating system for AI agent orchestration. ${stats.agents} agents. One system. Infinite possibilities.</p>
        <div class="hero-buttons">
          <a href="/connect" class="btn btn-primary">Connect Platforms →</a>
          <a href="/ecosystem" class="btn btn-ghost">View Ecosystem</a>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="container" style="display: contents;">
        <div class="stat"><div class="stat-value">${stats.agents}</div><div class="stat-label">AI Agents</div></div>
        <div class="stat"><div class="stat-value">${stats.domains}</div><div class="stat-label">Domains</div></div>
        <div class="stat"><div class="stat-value">${stats.github_orgs}</div><div class="stat-label">GitHub Orgs</div></div>
        <div class="stat"><div class="stat-value">${stats.repositories}</div><div class="stat-label">Repositories</div></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Core Systems</h2>
        <p class="section-desc">The foundational architecture powering BlackRoad's AI ecosystem.</p>
        <div class="cards">
          <div class="card">
            <div class="card-icon" style="background: rgba(255, 135, 0, 0.15);">🧠</div>
            <h3 class="card-title">Lucidia Core</h3>
            <p class="card-desc">Recursive AI with trinary logic, paraconsistent contradiction handling, and PS-SHA∞ memory persistence.</p>
          </div>
          <div class="card">
            <div class="card-icon" style="background: rgba(255, 0, 135, 0.15);">🔄</div>
            <h3 class="card-title">Agent Orchestration</h3>
            <p class="card-desc">Event bus architecture with pub/sub messaging, capability registry, and hybrid coordination.</p>
          </div>
          <div class="card">
            <div class="card-icon" style="background: rgba(175, 95, 215, 0.15);">🌌</div>
            <h3 class="card-title">Three-Layer Universe</h3>
            <p class="card-desc">Universe → Lucidia → Metaverse. Fundamental physics to buildable platform.</p>
          </div>
          <div class="card">
            <div class="card-icon" style="background: rgba(30, 144, 255, 0.15);">⚡</div>
            <h3 class="card-title">Z-Framework</h3>
            <p class="card-desc">Z:=yx-w universal feedback. Equilibrium and adaptation unified.</p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="section" style="background: var(--gray-900);">
      <div class="container">
        <h2 class="section-title">Quick Links</h2>
        <div class="cards" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
          <a href="/instagram" class="platform-card">
            <div class="platform-icon" style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);">📸</div>
            <div class="platform-info"><div class="platform-name">Instagram</div><div class="platform-desc">@blackroad.io</div></div>
            <span class="platform-arrow">→</span>
          </a>
          <a href="/stripe" class="platform-card">
            <div class="platform-icon" style="background: #635bff;">💳</div>
            <div class="platform-info"><div class="platform-name">Stripe</div><div class="platform-desc">Payments</div></div>
            <span class="platform-arrow">→</span>
          </a>
          <a href="/cloudflare" class="platform-card">
            <div class="platform-icon" style="background: #f48120;">☁️</div>
            <div class="platform-info"><div class="platform-name">Cloudflare</div><div class="platform-desc">Infrastructure</div></div>
            <span class="platform-arrow">→</span>
          </a>
          <a href="/gh/BlackRoad-OS" class="platform-card">
            <div class="platform-icon" style="background: #333;">🐙</div>
            <div class="platform-info"><div class="platform-name">GitHub</div><div class="platform-desc">BlackRoad-OS</div></div>
            <span class="platform-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  `);
}

export async function connect(env) {
  return layout('Connect', 'Link your tools and platforms to BlackRoad', `
    <section class="hero" style="padding: 80px 0 40px;">
      <div class="container">
        <h1><span>Connect</span></h1>
        <p>Link your tools and platforms to the BlackRoad ecosystem.</p>
      </div>
    </section>
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <h2 class="section-title">Development</h2>
        <div class="cards" style="margin-bottom: 48px;">
          <a href="/cloudflare" class="platform-card"><div class="platform-icon" style="background: #f48120;">☁️</div><div class="platform-info"><div class="platform-name">Cloudflare</div><div class="platform-desc">Workers, DNS, R2, D1, KV</div></div><span class="platform-arrow">→</span></a>
          <a href="/vercel" class="platform-card"><div class="platform-icon" style="background: #000; border: 1px solid #333;">▲</div><div class="platform-info"><div class="platform-name">Vercel</div><div class="platform-desc">Frontend Deployments</div></div><span class="platform-arrow">→</span></a>
          <a href="/gh/BlackRoad-OS" class="platform-card"><div class="platform-icon" style="background: #333;">🐙</div><div class="platform-info"><div class="platform-name">GitHub</div><div class="platform-desc">16 Organizations</div></div><span class="platform-arrow">→</span></a>
        </div>
        <h2 class="section-title">Business</h2>
        <div class="cards">
          <a href="/salesforce" class="platform-card"><div class="platform-icon" style="background: #00a1e0;">☁️</div><div class="platform-info"><div class="platform-name">Salesforce</div><div class="platform-desc">Trailblazer</div></div><span class="platform-arrow">→</span></a>
          <a href="/stripe" class="platform-card"><div class="platform-icon" style="background: #635bff;">💳</div><div class="platform-info"><div class="platform-name">Stripe</div><div class="platform-desc">Payments</div></div><span class="platform-arrow">→</span></a>
          <a href="/notion" class="platform-card"><div class="platform-icon" style="background: #000; border: 1px solid #333;">📝</div><div class="platform-info"><div class="platform-name">Notion</div><div class="platform-desc">Documentation</div></div><span class="platform-arrow">→</span></a>
        </div>
      </div>
    </section>
  `);
}

export async function ecosystem(env) {
  return layout('Ecosystem', 'The complete BlackRoad infrastructure', `
    <section class="hero" style="padding: 80px 0 40px;">
      <div class="container">
        <h1><span>Ecosystem</span></h1>
        <p>The complete BlackRoad infrastructure and agent network.</p>
      </div>
    </section>
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <h2 class="section-title">Hardware</h2>
        <div class="cards" style="margin-bottom: 48px;">
          <div class="card"><div class="card-icon" style="background: rgba(30, 144, 255, 0.15);">🖥️</div><h3 class="card-title">Alice</h3><p class="card-desc">K3s/Traefik gateway + Redis + APIs</p><span class="card-link">alice.blackroad.lan</span></div>
          <div class="card"><div class="card-icon" style="background: rgba(175, 95, 215, 0.15);">⚡</div><h3 class="card-title">Octavia</h3><p class="card-desc">Hailo accelerated ML inference</p><span class="card-link">octavia.blackroad.lan</span></div>
          <div class="card"><div class="card-icon" style="background: rgba(255, 0, 135, 0.15);">🧠</div><h3 class="card-title">Lucidia</h3><p class="card-desc">Pi 5 nodes running local LLMs</p><span class="card-link">lucidia.blackroad.lan</span></div>
          <div class="card"><div class="card-icon" style="background: rgba(255, 135, 0, 0.15);">🌐</div><h3 class="card-title">Jetson</h3><p class="card-desc">NVIDIA edge AI inference</p><span class="card-link">Edge Compute</span></div>
        </div>
        <h2 class="section-title">Stack</h2>
        <div class="cards">
          <div class="card"><h3 class="card-title">Agents</h3><p class="card-desc">LangGraph + CrewAI</p></div>
          <div class="card"><h3 class="card-title">LLM</h3><p class="card-desc">vLLM + llama.cpp</p></div>
          <div class="card"><h3 class="card-title">Vectors</h3><p class="card-desc">Milvus</p></div>
          <div class="card"><h3 class="card-title">Messaging</h3><p class="card-desc">NATS</p></div>
          <div class="card"><h3 class="card-title">MLOps</h3><p class="card-desc">Kubeflow + Langfuse</p></div>
          <div class="card"><h3 class="card-title">API</h3><p class="card-desc">APISIX</p></div>
          <div class="card"><h3 class="card-title">Blockchain</h3><p class="card-desc">Besu</p></div>
          <div class="card"><h3 class="card-title">Metaverse</h3><p class="card-desc">Ethereal Engine</p></div>
        </div>
      </div>
    </section>
  `);
}

export async function github(env) {
  // Fetch orgs from D1
  let orgs = ['BlackRoad-OS', 'blackboxprogramming', 'Blackbox-Enterprises', 'BlackRoad-AI', 'BlackRoad-Archive', 'BlackRoad-Cloud', 'BlackRoad-Education', 'BlackRoad-Foundation', 'BlackRoad-Gov', 'BlackRoad-Hardware', 'BlackRoad-Interactive', 'BlackRoad-Labs', 'BlackRoad-Media', 'BlackRoad-Security', 'BlackRoad-Studio', 'BlackRoad-Ventures'];
  try {
    const result = await env.DB.prepare('SELECT name FROM github_orgs ORDER BY name').all();
    if (result.results.length > 0) {
      orgs = result.results.map(r => r.name);
    }
  } catch (e) {}

  const orgCards = orgs.map(org => `
    <a href="https://github.com/${org}" class="github-org" target="_blank">
      <svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      ${org}
    </a>
  `).join('');

  return layout('GitHub', '16 organizations, 40+ repositories', `
    <section class="hero" style="padding: 80px 0 40px;">
      <div class="container">
        <h1><span>GitHub</span></h1>
        <p>16 organizations. 40+ repositories. One enterprise.</p>
      </div>
    </section>
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <a href="https://github.com/enterprises/blackroad-os" class="platform-card" style="margin-bottom: 48px; max-width: 400px;" target="_blank">
          <div class="platform-icon" style="background: #333;">🏢</div>
          <div class="platform-info"><div class="platform-name">BlackRoad Enterprise</div><div class="platform-desc">github.com/enterprises/blackroad-os</div></div>
          <span class="platform-arrow">→</span>
        </a>
        <h2 class="section-title">Organizations</h2>
        <div class="github-grid">${orgCards}</div>
      </div>
    </section>
  `);
}

export async function domains(env) {
  // Fetch domains from D1
  let domainList = [];
  try {
    const result = await env.DB.prepare('SELECT name, primary_domain, status FROM domains ORDER BY primary_domain DESC, name').all();
    domainList = result.results;
  } catch (e) {
    domainList = [
      { name: 'blackroad.io', primary_domain: 1 },
      { name: 'blackroad.systems', primary_domain: 0 },
      { name: 'lucidia.earth', primary_domain: 0 },
      { name: 'roadchain.io', primary_domain: 0 },
    ];
  }

  const domainCards = domainList.map(d => `
    <div class="domain-item">
      <span class="domain-name">${d.name}</span>
      ${d.primary_domain ? '<span class="domain-badge">PRIMARY</span>' : '<span class="domain-badge" style="background: rgba(115, 115, 115, 0.15); color: var(--gray-400);">ACTIVE</span>'}
    </div>
  `).join('');

  return layout('Domains', '21 domains across the BlackRoad network', `
    <section class="hero" style="padding: 80px 0 40px;">
      <div class="container">
        <h1><span>Domains</span></h1>
        <p>${domainList.length} domains across the BlackRoad network.</p>
      </div>
    </section>
    <section class="section" style="padding-top: 0;">
      <div class="container">
        <div class="domain-grid">${domainCards}</div>
        <div style="margin-top: 48px; text-align: center;">
          <a href="/cloudflare" class="btn btn-ghost">Manage in Cloudflare →</a>
        </div>
      </div>
    </section>
  `);
}

export async function about(env) {
  return layout('About', 'The story behind BlackRoad', `
    <section class="hero" style="padding: 80px 0 40px;">
      <div class="container">
        <h1><span>About</span></h1>
        <p>Building the infrastructure for the next era of AI.</p>
      </div>
    </section>
    <section class="section" style="padding-top: 0;">
      <div class="container" style="max-width: 720px;">
        <p style="color: var(--gray-400); font-size: 18px; margin-bottom: 24px;">
          BlackRoad OS, Inc. is a Delaware C-Corporation founded in November 2025, developing a browser-native operating system designed around AI agent orchestration.
        </p>
        <p style="color: var(--gray-400); margin-bottom: 24px;">
          Our mission: 30,000 agents serving 1 million+ users, scaling to 30 billion users globally.
        </p>
        <h2 class="section-title" style="margin-top: 48px;">Core Technology</h2>
        <p style="color: var(--gray-400); margin-bottom: 16px;"><strong>Lucidia Core</strong> — Recursive AI system with trinary logic (1/0/-1 states), paraconsistent contradiction handling, and PS-SHA∞ cryptographic memory persistence.</p>
        <p style="color: var(--gray-400); margin-bottom: 16px;"><strong>Z-Framework</strong> — Universal feedback system (Z:=yx-w) unifying physics, quantum mechanics, and control theory.</p>
        <p style="color: var(--gray-400); margin-bottom: 16px;"><strong>Three-Layer Universe</strong> — Universe (fundamental physics) → Lucidia (canonical world) → Metaverse (buildable platform).</p>
      </div>
    </section>
  `);
}

export async function design(env) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Design System — BlackRoad</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root { --gray-950: #0a0a0a; --gray-900: #171717; --gray-800: #262626; --gray-700: #404040; --gray-600: #525252; --gray-500: #737373; --gray-400: #a3a3a3; --gray-300: #d4d4d4; --gray-200: #e5e5e5; --gray-100: #f5f5f5; --accent-1: #ff8700; --accent-2: #ff5f00; --accent-3: #ff0087; --accent-4: #af5fd7; --accent-5: #ff00ff; --accent-6: #1e90ff; --font-headline: 'Space Grotesk', sans-serif; --font-body: 'Inter', sans-serif; --font-mono: 'JetBrains Mono', monospace; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--gray-950); color: var(--gray-100); font-family: var(--font-body); padding: 48px; max-width: 1200px; margin: 0 auto; }
    a { color: var(--accent-6); }
    .back-link { display: inline-block; margin-bottom: 32px; font-size: 14px; color: var(--gray-400); text-decoration: none; }
    h1 { font-family: var(--font-headline); font-size: 72px; font-weight: 700; margin-bottom: 8px; letter-spacing: -2px; }
    h2 { font-family: var(--font-headline); font-size: 28px; margin: 64px 0 24px; padding-bottom: 12px; border-bottom: 1px solid var(--gray-800); }
    .subtitle { color: var(--gray-500); margin-bottom: 64px; }
    p { color: var(--gray-400); margin-bottom: 16px; max-width: 640px; }
    .swatches { display: flex; gap: 4px; margin-bottom: 16px; }
    .swatch { flex: 1; height: 80px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 8px; font-family: var(--font-mono); font-size: 11px; }
    .swatch span { font-size: 9px; opacity: 0.6; margin-top: 2px; }
    .swatch.dark { color: var(--gray-100); }
    .swatch.light { color: var(--gray-900); }
    .gradient-bar { height: 64px; border-radius: 8px; background: linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-4), var(--accent-5), var(--accent-6)); margin-bottom: 16px; }
    .accent-swatches { display: flex; gap: 4px; }
    .accent-swatch { flex: 1; height: 100px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 10px; font-family: var(--font-mono); font-size: 12px; color: var(--gray-950); }
    .type-demo { background: var(--gray-900); border: 1px solid var(--gray-800); border-radius: 12px; padding: 32px; margin-top: 24px; }
    .type-label { font-family: var(--font-mono); font-size: 11px; color: var(--gray-600); margin-bottom: 4px; margin-top: 24px; }
    .type-label:first-child { margin-top: 0; }
    .type-headline-xl { font-family: var(--font-headline); font-size: 72px; font-weight: 700; letter-spacing: -2px; }
    .type-headline-lg { font-family: var(--font-headline); font-size: 48px; font-weight: 700; }
    .type-body { font-family: var(--font-body); font-size: 16px; color: var(--gray-400); }
    .type-mono { font-family: var(--font-mono); font-size: 14px; color: var(--accent-6); background: var(--gray-950); padding: 16px 20px; border-radius: 6px; margin-top: 16px; }
    .divider { height: 1px; background: var(--gray-800); margin: 32px 0; }
  </style>
</head>
<body>
  <a href="/" class="back-link">← Back to BlackRoad</a>
  <h1>BlackRoad</h1>
  <p class="subtitle">Design System Reference • Grayscale First • Color as Meaning</p>
  
  <h2>Grayscale Palette</h2>
  <p>The foundation. Build everything in grayscale first, then add color sparingly.</p>
  <div class="swatches">
    <div class="swatch dark" style="background: var(--gray-950)">#0a0a0a<span>950</span></div>
    <div class="swatch dark" style="background: var(--gray-900)">#171717<span>900</span></div>
    <div class="swatch dark" style="background: var(--gray-800)">#262626<span>800</span></div>
    <div class="swatch dark" style="background: var(--gray-700)">#404040<span>700</span></div>
    <div class="swatch dark" style="background: var(--gray-600)">#525252<span>600</span></div>
    <div class="swatch light" style="background: var(--gray-500)">#737373<span>500</span></div>
    <div class="swatch light" style="background: var(--gray-400)">#a3a3a3<span>400</span></div>
    <div class="swatch light" style="background: var(--gray-300)">#d4d4d4<span>300</span></div>
    <div class="swatch light" style="background: var(--gray-200)">#e5e5e5<span>200</span></div>
    <div class="swatch light" style="background: var(--gray-100)">#f5f5f5<span>100</span></div>
  </div>
  
  <h2>Accent Gradient</h2>
  <div class="gradient-bar"></div>
  <div class="accent-swatches">
    <div class="accent-swatch" style="background: var(--accent-1)">#ff8700<span>orange</span></div>
    <div class="accent-swatch" style="background: var(--accent-2)">#ff5f00<span>dark orange</span></div>
    <div class="accent-swatch" style="background: var(--accent-3)">#ff0087<span>deep pink</span></div>
    <div class="accent-swatch" style="background: var(--accent-4)">#af5fd7<span>orchid</span></div>
    <div class="accent-swatch" style="background: var(--accent-5)">#ff00ff<span>magenta</span></div>
    <div class="accent-swatch" style="background: var(--accent-6)">#1e90ff<span>blue</span></div>
  </div>
  
  <h2>Typography</h2>
  <div class="type-demo">
    <div class="type-label">SPACE GROTESK 72px / 700</div>
    <div class="type-headline-xl">Headlines</div>
    <div class="type-label">SPACE GROTESK 48px / 700</div>
    <div class="type-headline-lg">Section Titles</div>
    <div class="divider"></div>
    <div class="type-label">INTER 16px / 400</div>
    <div class="type-body">Default body text for content and UI.</div>
    <div class="type-label">JETBRAINS MONO 14px / 400</div>
    <div class="type-mono">const agent = await lucidia.spawn('alice')</div>
  </div>
  
  <h2>Principles</h2>
  <p><strong>1. Grayscale First</strong> — Build in grayscale. Color is last.</p>
  <p><strong>2. Color = Meaning</strong> — Every color communicates status, action, emphasis.</p>
  <p><strong>3. Mono for Data</strong> — JetBrains Mono for numbers, IDs, code.</p>
  <p><strong>4. Consistent Spacing</strong> — 4px base: 8, 12, 16, 24, 32, 48, 64.</p>
</body>
</html>`;
}

export function notFound() {
  return layout('404', 'Page not found', `
    <section class="hero">
      <div class="container">
        <h1 style="font-size: 120px; color: var(--gray-700);">404</h1>
        <p>This road doesn't exist. Yet.</p>
        <div class="hero-buttons">
          <a href="/" class="btn btn-primary">← Back Home</a>
        </div>
      </div>
    </section>
  `);
}

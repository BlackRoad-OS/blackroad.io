// BlackRoad.io - The Hub
// Central platform with template library and dynamic content

import { CSS, HEADER, FOOTER } from './templates/base.js';
import * as pages from './pages/index.js';
import * as templates from './templates/library.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // API routes for dynamic content
    if (path.startsWith('/api/')) {
      return handleAPI(path, request, env);
    }

    // Template library routes (raw templates for fetching)
    if (path.startsWith('/templates')) {
      return handleTemplates(path, env);
    }

    // Check D1 for dynamic redirects first
    const redirect = await getRedirect(path, env);
    if (redirect) {
      return Response.redirect(redirect.target, redirect.permanent ? 301 : 302);
    }

    // GitHub org shortcut
    if (path.startsWith('/gh/')) {
      const org = path.replace('/gh/', '');
      return Response.redirect(`https://github.com/${org}`, 302);
    }

    // Static pages
    const pageRoutes = {
      '/': () => pages.home(env),
      '/design': () => pages.design(env),
      '/connect': () => pages.connect(env),
      '/ecosystem': () => pages.ecosystem(env),
      '/github': () => pages.github(env),
      '/domains': () => pages.domains(env),
      '/about': () => pages.about(env),
    };

    if (pageRoutes[path]) {
      const content = await pageRoutes[path]();
      return html(content);
    }

    // 404
    return html(pages.notFound());
  }
};

// Handle /api/* routes
async function handleAPI(path, request, env) {
  const route = path.replace('/api/', '');
  
  // GET /api/stats - fetch live stats from D1
  if (route === 'stats') {
    const stats = await getStats(env);
    return json(stats);
  }
  
  // GET /api/domains - fetch domains from D1
  if (route === 'domains') {
    const domains = await getDomains(env);
    return json(domains);
  }
  
  // GET /api/orgs - fetch GitHub orgs from D1
  if (route === 'orgs') {
    const orgs = await getOrgs(env);
    return json(orgs);
  }

  // GET /api/health
  if (route === 'health') {
    return json({ status: 'ok', timestamp: new Date().toISOString() });
  }

  return json({ error: 'Not found' }, 404);
}

// Handle /templates/* routes
function handleTemplates(path, env) {
  const route = path.replace('/templates', '') || '/';
  
  const templateRoutes = {
    '/': () => templates.index(),
    '/base.css': () => css(templates.baseCSS()),
    '/components/header': () => html(templates.header()),
    '/components/footer': () => html(templates.footer()),
    '/layouts/base': () => html(templates.baseLayout()),
    '/pages/home': () => html(templates.homePage()),
    '/pages/about': () => html(templates.aboutPage()),
    '/pages/404': () => html(templates.notFoundPage()),
    '/pages/coming-soon': () => html(templates.comingSoonPage()),
  };

  if (templateRoutes[route]) {
    return templateRoutes[route]();
  }

  return html(templates.notFoundPage(), 404);
}

// D1 Helpers
async function getRedirect(path, env) {
  try {
    const result = await env.DB.prepare(
      'SELECT target, permanent FROM redirects WHERE path = ?'
    ).bind(path).first();
    return result;
  } catch (e) {
    return null;
  }
}

async function getStats(env) {
  try {
    const result = await env.DB.prepare(
      'SELECT key, value FROM stats'
    ).all();
    const stats = {};
    for (const row of result.results) {
      stats[row.key] = row.value;
    }
    return stats;
  } catch (e) {
    return { agents: '1000', domains: '21', github_orgs: '16', repositories: '40' };
  }
}

async function getDomains(env) {
  try {
    const result = await env.DB.prepare(
      'SELECT name, status, primary_domain FROM domains ORDER BY primary_domain DESC, name'
    ).all();
    return result.results;
  } catch (e) {
    return [];
  }
}

async function getOrgs(env) {
  try {
    const result = await env.DB.prepare(
      'SELECT name, display_name, description FROM github_orgs ORDER BY name'
    ).all();
    return result.results;
  } catch (e) {
    return [];
  }
}

// Response helpers
function html(content, status = 200) {
  return new Response(content, {
    status,
    headers: {
      'content-type': 'text/html;charset=UTF-8',
      'x-content-type-options': 'nosniff',
      'x-frame-options': 'SAMEORIGIN',
      'x-xss-protection': '1; mode=block',
      'referrer-policy': 'strict-origin-when-cross-origin',
      'permissions-policy': 'geolocation=(), microphone=(), camera=()',
      'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
      'access-control-allow-origin': '*'
    }
  });
}

function css(content) {
  return new Response(content, {
    headers: {
      'content-type': 'text/css;charset=UTF-8',
      'access-control-allow-origin': '*',
      'cache-control': 'public, max-age=86400'
    }
  });
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      'content-type': 'application/json',
      'access-control-allow-origin': '*'
    }
  });
}

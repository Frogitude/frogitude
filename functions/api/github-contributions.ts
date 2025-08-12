// Cloudflare Pages Function: GET /api/github-contributions
// Fetches GitHub contributions via GraphQL. Requires a secret binding GITHUB_TOKEN.

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestOptions = async () => new Response(null, { headers: CORS });

export const onRequestGet = async (context: any) => {
  const { env, request } = context;
  const url = new URL(request.url);
  const username = url.searchParams.get('username') || 'freddynewton';
  const debug = url.searchParams.get('debug') === '1';

  if (!env.GITHUB_TOKEN) {
    return new Response(
      JSON.stringify({ error: 'Missing GITHUB_TOKEN secret in Pages → Settings → Functions → Environment variables.' }),
      { status: 500, headers: { 'content-type': 'application/json', ...CORS } }
    );
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks { contributionDays { date contributionCount color } }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'frogitude-pages-function',
        'accept': 'application/json',
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });
    const text = await res.text();
    let data: any = null;
    try { data = JSON.parse(text); } catch { /* keep raw text */ }

    if (!res.ok || (data && data.errors)) {
      const payload = {
        status: res.status,
        statusText: res.statusText,
        error: data?.errors || text || 'Upstream error',
      };
      return new Response(JSON.stringify(payload), {
        status: 500,
        headers: { 'content-type': 'application/json', ...CORS },
      });
    }
    const user = data?.data?.user;
    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found', username }), {
        status: 404,
        headers: { 'content-type': 'application/json', ...CORS },
      });
    }
    const cal = user.contributionsCollection.contributionCalendar;
    const body = debug ? { debug: { username }, ...cal } : cal;
    return new Response(JSON.stringify(body), { headers: { 'content-type': 'application/json', ...CORS } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || 'Request failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json', ...CORS },
    });
  }
};

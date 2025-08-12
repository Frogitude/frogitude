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
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query, variables: { login: username } }),
    });
    const data = await res.json();
    if (!res.ok || data.errors) {
      return new Response(JSON.stringify({ error: data.errors || res.statusText }), {
        status: 500,
        headers: { 'content-type': 'application/json', ...CORS },
      });
    }
    const cal = data.data.user.contributionsCollection.contributionCalendar;
    return new Response(JSON.stringify(cal), { headers: { 'content-type': 'application/json', ...CORS } });
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || 'Request failed' }), {
      status: 500,
      headers: { 'content-type': 'application/json', ...CORS },
    });
  }
};

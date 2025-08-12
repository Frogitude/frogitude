// Years-of-experience mapping derived from the provided resume summary.
// Keep these coarse and easy to tweak.
export const YEARS_MAP: Record<string, number> = {
  'unity': 5.5,
  'c#': 5.5,
  'xr': 4.0,
  'ar/vr': 4.0,
  'ar': 4.0,
  'vr': 4.0,
  'hololens': 3.0,
  'ios': 3.0,
  'mrtk': 3.0,
  'visionlib': 1.5,
  'webxr': 1.5,
  'blender': 2.0,
  'architecture': 3.5,
  'clean code': 4.0,
  'performance': 4.0,
  'performance optimization': 4.0,
  'dependency injection': 4.0,
  'meta quest': 2.0,
  'cloudflare': 0.5,
  'react': 1.0,
  'typescript': 1.0,
  'next.js': 1.0,
  'zenject': 2.0,
  'testing': 2.0,
  'python': 1.5,
  'javascript': 2.0,
  'js/html/css': 2.0,
  'html': 2.0,
  'css': 2.0,
  'agile': 4.0,
  'scrum': 4.0,
  'jira': 4.0,
  'team lead': 1.0,
  'roadmapping': 2.0,
  'client comm.': 3.0,
  'godot': 1.0,
  'unreal': 1.0,
  'unreal engine': 1.0,
  'shader programming': 2.0,
  'multiplayer': 2.0,
  'rest api': 3.0,
};

export function normalizeSkill(label: string): string {
  return (label || '')
    .toLowerCase()
    .replace(/engine|development|developer|dev|sdk|\s+games?/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function yearsFor(label: string): number {
  const n = normalizeSkill(label);
  if (YEARS_MAP[n] != null) return YEARS_MAP[n];
  // try partial matches
  for (const [k, v] of Object.entries(YEARS_MAP)) {
    if (n.includes(k)) return v;
  }
  return 0;
}

export function yearsForList(labels: string[] | undefined): number {
  if (!labels || labels.length === 0) return 0;
  let maxY = 0;
  for (const l of labels) maxY = Math.max(maxY, yearsFor(l));
  return maxY;
}

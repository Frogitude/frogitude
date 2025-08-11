export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (basePath && path.startsWith('/')) return `${basePath}${path}`;
  return path;
}

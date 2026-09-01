export function withBase(path: string): string {
  if (!path.startsWith("/")) return path;
  // GitHub Pages hosts this site under /lune-sushi/.
  // <Image src> does not honor assetPrefix automatically.
  return `/lune-sushi${path}`;
}
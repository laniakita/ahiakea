'use client';

// Docs: https://aws.amazon.com/developer/application-security-performance/articles/image-optimization
export default function cloudFrontLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const url = new URL(`${process.env.NEXT_PUBLIC_DEPLOYED_URL}${src}`);
  url.searchParams.set('format', 'auto');
  url.searchParams.set('width', width.toString());
  url.searchParams.set('quality', (quality ?? 75).toString());
  return url.href;
}

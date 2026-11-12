import type { APIRoute } from 'astro';
import sharp from 'sharp';
import { resolve } from 'node:path';
import artwork from '../assets/social-card.svg?raw';

// Render once at build time. No image service or runtime server is required.
export const GET: APIRoute = async () => {
  // Reuse the original logo pixels rather than drawing a replacement mark.
  const logo = await sharp(resolve('public/icon_nobg.png')).resize(430, 430).toBuffer();
  const image = await sharp(Buffer.from(artwork))
    .composite([{ input: logo, left: 710, top: 40 }])
    .png().toBuffer();
  return new Response(new Uint8Array(image), { headers: { 'Content-Type': 'image/png' } });
};
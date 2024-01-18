import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';
import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev()],
  adapter: vercel(),
});
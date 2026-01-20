import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // MUST be at the top level, NOT inside experimental
  // MUST be named 'turbo', not 'turbopack'
  turbo: {
    root: __dirname,
  },
};

export default nextConfig;
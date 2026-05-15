import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** This repo lives next to `~/package-lock.json`; Next 16+ Turbopack otherwise picks the parent lockfile and uses the wrong root (breaks dev / “Rendering” forever). */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [72, 75, 78],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    const isProd = process.env.NODE_ENV === "production";

    /* CSP is production-only. In dev it blocks Next.js HMR websockets and breaks every page client-side. */
    if (!isProd) {
      return [];
    }

    const csp = [
      "default-src 'self'",
      "img-src 'self' https://images.pexels.com data: blob:",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self'",
      "frame-src https://www.google.com/maps/",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
      "object-src 'none'",
    ].join("; ");

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;

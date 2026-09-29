import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      allowedHosts: ["bounce-beyond-themes.onrender.com"],
    },
  },

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    // (our SSR error wrapper).
    server: { entry: "server" },
  },
});

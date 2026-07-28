import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/cb-codes",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        impressum: new URL("./impressum.html", import.meta.url).pathname,
      },
    },
  },
});

import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./src/openapi.yaml",
    output: {
      target: "./src/client/Client.ts",
      prettier: true,
    },
  },
});

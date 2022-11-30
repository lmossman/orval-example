import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./src/petstore.yaml",
    output: {
      target: "./src/client/Petstore.ts",
      prettier: true,
    },
  },
});

import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./src/petstore.yaml",
    output: {
      target: "./src/client/Petstore.ts",
      prettier: true,
    },
  },
  apiNestedJson: {
    input: "./src/petstore_nested_json.yaml",
    output: {
      target: "./src/client/PetstoreNestedJson.ts",
      prettier: true,
    },
  },
});

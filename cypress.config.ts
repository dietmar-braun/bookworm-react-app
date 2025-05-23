import { defineConfig } from "cypress";
import { devServer } from "@cypress/vite-dev-server";

export default defineConfig({
  component: {
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "react",
        viteConfig: require("./vite.config.js"),
      });
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

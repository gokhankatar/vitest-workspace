import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue"
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
    plugins: [
        vue(),
        vuetify({ autoImport: true }),
    ],
    test: {
        coverage: {
            reporter: ["text", "json"]
        },
        includeSource: ["src/**/*.(js,ts"],
        environment: "jsdom",
        deps: {
            inline: ["vuetify"]
        }
    }
});
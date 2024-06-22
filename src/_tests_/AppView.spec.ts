import { describe, expect, it } from "vitest";
import AppView from "../views/AppView.vue";
// import { mount } from "@vue/test-utils";

// ! vuetify kütüphane yapılandırılmasını test icin belirtmem gerekecek!
describe("AppView component", () => {
    it("Rendered AppView Component", () => {
        expect(AppView).toBeTruthy();
    });
});
import { describe, expect, it } from "vitest";
import AppView from "../views/AppView.vue";

describe("AppView component", () => {
    it("Rendered AppView Component", () => {
        expect(AppView).toBeTruthy();
    });
});
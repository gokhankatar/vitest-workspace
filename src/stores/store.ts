import { defineStore } from "pinia";

const store = defineStore('piniaStore', {
    state() {
        return {
            count: 100
        }
    },
    getters: {
        calculatedCount(state) {
            let result = state.count * 10;
            return `Calculated Countis ${result}`;
        }
    },
    actions: {
        incrementCount() {
            if (this.count < 250) {
                this.count += 10
            } else {
                this.count = 250
            }
        },
        decreaseCount() {
            if (this.count <= 0) {
                this.count = 0
            } else {
                this.count -= 10;
            }
        }
    },
    persist: true
});

export default store;
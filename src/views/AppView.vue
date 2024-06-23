<template>
  <div class="d-flex justify-center align-center pa-5 ga-2">
    <p id="cap-text"class="text-subtitle-2 text-uppercase font-weight-bold">
      the value will be in the range 0-250
    </p>
  </div>
  <div class="d-flex justify-center align-center pa-5 ga-2">
    <v-btn @click="_store.incrementCount" rounded="xl" color="green"
      >increase count</v-btn
    >
    <v-btn @click="_store.decreaseCount" rounded="xl" color="error">decrease count</v-btn>
  </div>
  <div class="d-flex justify-center align-center ga-5">
    <v-sheet color="warning" class="pa-5 text-subtitle-1">{{ count }}</v-sheet>
    <v-sheet color="teal-darken-2" class="pa-5 text-subtitle-1">{{
      _store.calculatedCount
    }}</v-sheet>
  </div>
</template>
<script setup lang="ts">
import { computed, watch } from "vue";
import store from "../stores/store";

const _store = store();
const count = computed(() => _store.count);
watch(count, (val) => {
  if (val <= 0) {
    alert("it cannot be less than 0 !");
  } else if (val == 250) {
    alert("it cannot be longer than 250 !");
  }
}),
  { immediate: true };
</script>

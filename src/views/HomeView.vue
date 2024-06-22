<template>
  <div class="d-flex justify-center align-center">
    <h2 class="text-h2" color="primary">{{ msg }}</h2>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const msg = ref<string>("There is Home Page");
</script>

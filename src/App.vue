<template>
  <v-app theme="dark">
    <v-main>
      <v-row class="my-5 d-flex justify-center align-center ga-2">
        <v-btn @click="$router.replace('/')" size="x-large" color="primary" variant="outlined"
          >Home</v-btn
        >
        <v-btn @click="$router.replace('/about')" size="x-large" color="green" variant="outlined"
          >About</v-btn
        >
        <v-btn @click="$router.replace('/app')" size="x-large" color="warning" variant="outlined"
          >App</v-btn
        >
      </v-row>
      <v-row>
        <v-container class="pa-5">
          <router-view />
        </v-container>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>

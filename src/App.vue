<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Modal from "@/components/Modal.vue";
</script>

<template>
  <div id="app">
    <Header />
    <Modal />

    <RouterView />
  </div>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

body {
  background-color: #e6e6e6;
  margin: 0;
}
</style>
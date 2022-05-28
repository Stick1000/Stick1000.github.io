<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Modal from "./components/Modal.vue";
</script>

<template>
    <div>
        <Header />
        <Modal />

        <RouterView />
    </div>
</template>

<style>
body {
    background-color: #e6e6e6;
    margin: 0;
}
</style>

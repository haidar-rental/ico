<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/HaidarNavbar.vue";
</script>

<template>
  <Navbar />

  <div class="container">
    <RouterView />
  </div>
</template>

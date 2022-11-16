<script setup>
import Navbar from "@/components/Navbar.vue";




</script>

<template>
  <div class="flex flex-col h-full">
    <div>
      <Navbar v-if="!$route.meta.disableNavbar" />
    </div>
    <div class="h-full">
      <router-view />
    </div>
  </div>
</template>

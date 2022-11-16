<script setup>
import {ref} from 'vue'

const botones = ref(['Login','Home','Variadores','Administracion'])
let srcImagen = 'src/assets/logo.png'
</script>

<template>
<div
    class="
      sticky
      bg-gray-100
      w-full
      flex flex-row
      z-20
      border-b-4 border-red-700
      justify-between
    "
  >
    <div class="w-20 h-20">
      <img :src="srcImagen" alt="" class="p-1" />
    </div>

    <div class="flex flex-row items-center">
      <div class="list-none p-3" v-for="(item, index) in botones" :key="index">
        <router-link :to="item === 'Home'?'/': `/${item}`">{{ item }}</router-link>
      </div>
    </div>
  </div>

</template>
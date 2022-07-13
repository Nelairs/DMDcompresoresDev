<template>
  <div>
    <div class="w-20 h-20">
      <img :src="imagen" alt=""/>
    </div>

    <div class="flex flex-row items-center">
      <div class="list-none p-3" v-for="(item, index) in botones" :key="index">
        <router-link :to='`/${item}`'>{{ item }}</router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {
    imagen: String,
    botones: Array,
  },
};
</script>

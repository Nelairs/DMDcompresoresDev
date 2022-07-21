<template>

<div class="inline-flex rounded-md shadow-sm w-full flex justify-start p-4">
  <router-link to="/" class="py-2 px-4 text-sm font-medium text-blue-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dar:bg-gray-700 dar:border-gray-600 dar:text-white dar:hover:text-white dar:hover:bg-gray-600 dar:focus:ring-blue-500 dar:focus:text-white"> Actuales </router-link>
  <router-link to="/" class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dar:bg-gray-700 dar:border-gray-600 dar:text-white dar:hover:text-white dar:hover:bg-gray-600 dar:focus:ring-blue-500 dar:focus:text-white"> Historico </router-link>
</div>


  <div
    class="
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      grid grid-cols
      gap-y-6
      content-stretch
      place-items-center
    "
  >

    <Card v-for="item in dataVariadores" :key="item._id" :item="item"  />

  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import BtnAdd from "@/components/BtnAdd.vue";
import axios from "axios";
import { createLogger } from 'vuex';

export default {
  name: "variadores",
  data() {
    return {
      dataVariadores: [],
    };
  },
  components: {
    Card,
    BtnAdd,
  },
  methods: {
    getDataBase() {
      axios.get("http://175.10.0.166:8080/api/variadores").then((res) => {
        this.dataVariadores = res.data;
      });
    }
  },
  created() {
    this.getDataBase();

  },
};
</script>

<style scoped>
button {
  cursor: context-menu;
  text-decoration: None !important;
}
</style>
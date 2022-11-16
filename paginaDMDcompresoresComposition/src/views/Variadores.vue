<script setup>
import Card from "@/components/Card.vue";
import { ref,watch } from "vue";
import axios from "axios";
import { getVariadores } from "../utils/endPoints";
import Filtros from "../components/Filtros.vue"
import { useRoute } from "vue-router";

const route = useRoute()
const dataVariadores = ref([]);


async function traerVariadores() {
  try {
    let { data } = await axios.get(route.query === undefined?getVariadores():`${getVariadores()}?name=${route.query.name}&finished=${route.query.finished}`);
    dataVariadores.value = data; 
    console.log(data)
  } catch (error) {
    console.log(error);
  }
}


watch(route,()=>{
  traerVariadores()
},{ immediate: true })


</script>

<template>
  <div class="h-full items-start">
    <div class="flex flex-row mt-8 ml-14 gap-4 items-center">
      <Filtros  />
    </div>
    <div
    class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols gap-6 py-6 px-14"
    >
      <Card
        v-for="item in dataVariadores"
        :key="item._id"
        :item="item"
        class="p-4"
      />
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: context-menu;
  text-decoration: None !important;
}
</style>

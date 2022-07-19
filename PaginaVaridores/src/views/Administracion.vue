<template>
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

    <Card v-for="item in dataVariadores" :key="item._id" :item="item" :isEdit="true" @delete="deleteCard"/>

  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import BtnAdd from "@/components/BtnAdd.vue";
import axios from "axios";

export default {
  name: "administacion",
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
    },
    deleteCard(id){
      console.log(id);
    console.log(this.dataVariadores);
    const index = this.dataVariadores.findIndex(object => {
    return object._id === id;
    });
   this.dataVariadores.splice(index,1)
    console.log(this.dataVariadores);
    }
  },
  created() {
    this.getDataBase();
  },
};
</script>


<style>

</style>
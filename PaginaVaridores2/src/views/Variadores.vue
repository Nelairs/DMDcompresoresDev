<template>
<div class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols gap-y-6 content-stretch place-items-center">
<Card :array="dataVariadores"/>
<BtnAdd />
</div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue"
import BtnAdd from "@/components/BtnAdd.vue"


export default {
  name: "variadores",
  data() {
    return {
      dataVariadores: [],
    };
  },
  components:{
    Card, BtnAdd
  },
  methods: {
    getDataBase() {
      axios.get("http://175.10.0.166:8080/api/variadores").then((res) => {
        this.dataVariadores = res.data;
      });
    },
  },
  created() {
    this.getDataBase();
  },
};
</script>

<style scoped>
button{
cursor: context-menu; 
text-decoration: None !important;
}
</style>
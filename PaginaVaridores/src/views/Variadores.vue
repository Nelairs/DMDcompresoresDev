<template>
<div class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols gap-y-6 content-stretch place-items-center">
<Card :array="dataVariadores"/>

</div>
</template>

<script>
import {getDataBase} from "@/utils/functions";
import Card from "@/components/Card.vue"
import BtnAdd from "@/components/BtnAdd.vue"
import {mapState} from "vuex"

export default {
  name: "variadores",
  data() {
    return {
      dataVariadores:  getDataBase(),
    };
  },
  components:{
    Card, BtnAdd
  },
  mounted() {
  
  },
  computed: {
    ...mapState(['endpointData'])
  }
};
</script>

<style scoped>
button{
cursor: context-menu; 
text-decoration: None !important;
}
</style>
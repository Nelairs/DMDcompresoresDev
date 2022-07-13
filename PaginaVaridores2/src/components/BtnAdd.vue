<template>

  <button type="button" @click="changeStatus">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-12 w-12 text-green-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </button>


 <Formulario :formStatus="formStatus" @accion='changeStatus'/>
 
</template>

<script>
import Formulario from "@/components/Formulario.vue"
//anashe
export default {
    name:'BtnAdd',
    data(){
        return{
           formStatus : false
        }
    },
    components:{
      Formulario
    },
    methods:{
       changeStatus(){
        this.formStatus = !this.formStatus
       },


    


    }
};
</script>

<style>
</style>
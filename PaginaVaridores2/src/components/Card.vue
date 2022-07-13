<template>
  <div v-for="item in array" :key="item._id" >
    <div
      class="
        bg-gray-200
        border-2 border-gray-600
        rounded-xl
        w-60
        flex flex-col
        font-mono
        items-center
      "
    >
      <ul class="flex flex-col  text-sm p-2 gap-4" style="cursor: context-menu">
        <li class="text-center text-lg">Variador {{ item.modelo_equipo }}</li>
        <li>N°:{{ item.numero_equipo }}</li>
        <li>Nombre del cliente:{{ remplazarNombre(item.nombre_cliente) }}</li>
        <li>Potencia:{{ item.potencia_equipo }}kW</li>
        <li>Fecha de ingreso:10/5 13:30hs</li>
      </ul>
      <div class="text-white">
        <BtnEstado :item='item' />
      </div>
    </div>
  </div>


</template>


<script>
import BtnEstado from "@/components/BtnEstado";

export default {
    name:"Card",
    components:{
      BtnEstado
    },
    data(){
        return{

        }
    },
    props:{
        array:Array
    },
    methods:{
      remplazarNombre(cliente){
        cliente = cliente.replace(/["_"]/g, " ");
        return cliente
      }
    }
}
</script>

<style>

</style>
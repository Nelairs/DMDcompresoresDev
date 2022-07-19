<template>
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
    <ul class="flex flex-col text-sm p-2 gap-4" style="cursor: context-menu">
      <li class="text-center text-lg">Variador {{ item.modelo_equipo }}</li>
      <li>N°:{{ item.numero_equipo }}</li>
      <li>Nombre del cliente:{{ remplazarNombre(item.nombre_cliente) }}</li>
      <li>Potencia:{{ item.potencia_equipo }}kW</li>
      <li>Fecha de ingreso:10/5 13:30hs</li>
    </ul>
    <div class="text-white flex flex-col">
      <BtnEstado :item="item" />
      <button
        v-if="isEdit == true"
        type="button"
        class="botonBorrar bg-red-700 text p-2 mb-2 rounded-xl text-white"
        @click="deleteVariador(item._id)"
      >
        Terminar
      </button>
    </div>
  </div>
</template>


<script>
import BtnEstado from "@/components/BtnEstado";
import axios from "axios";
export default {
  name: "Card",
  components: {
    BtnEstado,
  },
  props: {
    item: Object,
    isEdit: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    remplazarNombre(cliente) {
      cliente = cliente.replace(/["_"]/g, " ");
      return cliente;
    },
    deleteVariador(id){
      axios.post('http://175.10.0.166:8080/api/finish',{
        _id:id
      })
      .then(()=>{
        this.accion()
      })
    }
  },
  accion() {
      this.$emit("accion");
    },
};
</script>

<style>
</style>
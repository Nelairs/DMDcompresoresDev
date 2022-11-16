<script setup>
import { format } from "date-fns";
import BtnEstado from "./BtnEstado.vue"


const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isEdit: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(["changeStatus"]);


function remplazarNombre(cliente) {
  cliente = cliente.replace(/["_"]/g, " ");
  return cliente;
}

function deleteVariador(id){
  emit("changeStatus",id)
}

</script>

<template>
  <div
    class="bg-gray-200 border-2 border-gray-600 rounded-xl flex flex-col font-mono items-center justify-between"
  >
    <ul class="flex flex-col text-sm p-2 gap-4" style="cursor: context-menu">
      <li class="text-center text-lg">Variador {{ item.modelo_equipo }}</li>
      <li>N°:{{ item.numero_equipo }}</li>
      <li>Nombre del cliente:{{ remplazarNombre(item.nombre_cliente) }}</li>
      <li>Potencia:{{ item.potencia_equipo }}kW</li>
      <li>
        Fecha de ingreso:{{
          format(new Date(item.fecha_de_entrada), "dd/MM/yyyy pp ")
        }}
      </li>
    </ul>
    <div class="text-white flex flex-col w-7/12">
      <BtnEstado :item="item" :isEdit="isEdit" />
      <button
        v-if="isEdit && item.estado_equipo != 3"
        type="button"
        class=" bg-red-700 text p-2 mb-2 rounded-xl text-white  "
        @click="deleteVariador(item._id)"
      >
        Terminar
      </button>
    </div>
  </div>
</template>

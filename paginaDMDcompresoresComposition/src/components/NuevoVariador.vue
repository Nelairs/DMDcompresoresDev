<script setup>
import Formulario from "@/components/FormularioEntrada.vue";
import axios from "axios"; 
import { ref } from "vue";
import { postNewVariador } from "../utils/endPoints";

const emit = defineEmits(['add'])
const formStatus = ref(false)

function changeStatusForm() {
  formStatus.value = !formStatus.value
}

function cargarNuevoVariador(dataVariador) {
      axios.post(postNewVariador(), {
          nombre_cliente: dataVariador.cliente,
          numero_equipo: dataVariador.nEquipo,
          modelo_equipo: dataVariador.modelo,
          potencia_equipo: dataVariador.potencia,
          numero_serie_equipo: dataVariador.nSerie,
          marca_equipo: dataVariador.marca,
          fecha_de_entrada: new Date(),
          estado_equipo: 0,
        })
        .then((res) => {
          changeStatusForm();
          emit('add',res.data)
        })
        .catch((err) => {
          console.log(err);
        });
}
</script>

<template>
  <div>
  <button type="button"  @click="changeStatusForm" class="bg-green-700 text-white text-center text p-2 px-3 mb-2 rounded-xl" >
    Agregar variador
  </button>

  <Formulario
    :formStatus="formStatus"
    @submit="cargarNuevoVariador"
    @changeStatusForm="changeStatusForm"
  />
</div>
</template>

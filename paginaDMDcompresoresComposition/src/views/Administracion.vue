<script setup>
import Card from "@/components/Card.vue";
import { ref,watch } from "vue";
import axios from "axios";
import NuevoVariador from "@/components/NuevoVariador.vue";
import { getVariadores } from "../utils/endPoints";
import FormularioSalida from "../components/FormularioSalida.vue";
import Swal from "sweetalert2";
import Filtros from "../components/Filtros.vue";
import {postFinish} from "../utils/endPoints"
import { useRoute } from "vue-router";

const route = useRoute()
const dataVariadores = ref([]);
const deleteId = ref("");
const statusForm = ref(false);

async function traerVariadores() {
  try {
    let { data } = await axios.get(route.query === undefined?getVariadores():`${getVariadores()}?name=${route.query.name}&finished=${route.query.finished}`);
    dataVariadores.value = data;
  } catch (error) {
    console.log(error);
  }
}


watch(route,()=>{
  traerVariadores()
},
{ immediate: true })

function addCard(data) {
  dataVariadores.value.push(data);
}

function changeStatusForm() {
  statusForm.value = !statusForm.value;
}
function openModal(id) {
  statusForm.value = !statusForm.value;
  deleteId.value = id;
}

function PostDeleteVariador(args) {
  const { horas, conclusion, id } = args;
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .post(postFinish(), {
          _id: deleteId.value,
          horas: horas,
          conclusion: conclusion,
          fecha_de_salida: new Date(),
        })
        .then(() => {
          const index = dataVariadores.value.findIndex((object) => {
            return object._id === id;
          });
          dataVariadores.value.splice(index, 1);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          changeStatusForm();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

</script>

<template>
  <div class="h-full items-start">
    <div class="flex flex-row mt-8 ml-14 gap-4 items-center">
      <Filtros/>
      <NuevoVariador  @add="addCard" />
    </div>
    <div
      class="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols gap-6 py-6 px-14"
    >
      <Card
        v-for="item in dataVariadores"
        :key="item._id"
        :item="item"
        class="p-4"
        :isEdit="true"
        @changeStatus="openModal"
      />
      <FormularioSalida
        v-if="statusForm"
        @changeStatus="changeStatusForm"
        @delete="PostDeleteVariador"
      />
    </div>
  </div>
</template>

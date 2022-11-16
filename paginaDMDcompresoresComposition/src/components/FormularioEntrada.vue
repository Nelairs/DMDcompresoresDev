<script setup>
import { ref, toRefs, computed, watch } from "vue";
import Cruz from "@/assets/cruz.vue";

const emit = defineEmits(["changeStatusForm", "submit"]);

const props = defineProps({
  formStatus: {
    type: Boolean,
    required: true,
  },
});
const { formStatus } = toRefs(props);
const dataVariador = ref({
  cliente: "",
  potencia: "",
  nEquipo: "",
  nSerie: "",
  marca: "",
  modelo: "",
});
const disabledBtn = computed(() => {
  return formVoid.value ? true : false;
});
const estilosbtnDisabled = computed(() => {
  return formVoid.value
    ? "bg-blue-400 cursor-not-allowed"
    : "hover:bg-blue-800 bg-blue-700 cursor-pointer";
});
const formVoid = computed(()=>{
  let estado 

  if (
    dataVariador.value.cliente != "" &&
    dataVariador.value.potencia != "" &&
    dataVariador.value.nSerie != "" &&
    dataVariador.value.nEquipo != "" &&
    dataVariador.value.marca != "" &&
    dataVariador.value.modelo != ""
  ) {
    estado = false;
  } else {
    estado = true;
  }
  return estado
});

function changeStatusForm() {
  emit("changeStatusForm");
}

function postNewVariador() {
  emit("submit", dataVariador.value); 
  dataVariador.value = {
  cliente: "",
  potencia: "",
  nEquipo: "",
  nSerie: "",
  marca: "",
  modelo: "",
}
}
</script>

<template>
  <div v-if="formStatus == true" class="fixed z-20 inset-0">
    <div
      @click="changeStatusForm"
      class="z-20 text-black fixed inset-0 bg-black bg-opacity-50"
    ></div>

    <div class="h-full w-full flex justify-center items-center">
      <div class="z-40 bg-white border rounded-xl p-4">
        <div class="w-full flex justify-end">
          <button @click="changeStatusForm"><Cruz /></button>
        </div>
        <div class="h-full w-full flex flex-row gap-4">
          <div>
            <div class="mb-6">
              <label
                for="cliente"
                class="block mb-2 text-sm font-medium flex flex-row text-gray-900"
                >Cliente<div class="text-red-500">*</div></label
              >
              <input
                type="cliente"
                id="cliente"
                v-model="dataVariador.cliente"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="nEquipo"
                class="block mb-2 text-sm flex flex-row font-medium text-gray-900"
                >N° Equipo <div class="text-red-500">*</div></label
              >
              <input
                type="text"
                id="nEquipo"
                v-model="dataVariador.nEquipo"
                min="0"
                max="99999"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="marca"
                class="block mb-2 text-sm font-medium flex flex-row text-gray-900"
                >Marca <div class="text-red-500">*</div></label
              >
              <input
                type="text"
                id="marca"
                v-model="dataVariador.marca"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
          </div>
          <div>
            <div class="mb-6">
              <label
                for="modelo"
                class="block mb-2 text-sm flex flex-row font-medium text-gray-900"
                >Modelo <div class="text-red-500">*</div></label
              >
              <input
                type="text"
                id="modelo"
                v-model="dataVariador.modelo"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="potencia"
                class="block mb-2 text-sm flex flex-row font-medium text-gray-900"
                >Potencia (Kw) <div class="text-red-500">*</div></label
              >
              <input
                type="text"
                id="potencia"
                v-model="dataVariador.potencia"
                min="0"
                max="200"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="marca"
                class="block mb-2 text-sm flex flex-row font-medium text-gray-900"
                >N° serie <div class="text-red-500">*</div></label
              >
              <input
                type="text"
                id="nSerie"
                v-model="dataVariador.nSerie"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required=""
              />
            </div>
          </div>
        </div>
        <button
          type="button"
          @click="postNewVariador"
          :disabled="disabledBtn"
          :class="[
            estilosbtnDisabled,
            'text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
          ]"
        >
          Agregar
        </button>
      </div>
    </div>
  </div>
</template>

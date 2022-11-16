<script setup>
import { computed, ref} from "vue";
import {useFiltrosStore} from "../stores/filtros"
import {storeToRefs} from "pinia"
import router from "../router";


const useFiltros = useFiltrosStore()
const {filtros} = storeToRefs(useFiltros)
const queryParams = ref({
  name : filtros.value.name,
  finished : filtros.value.finished
})
const estilosBtnTerminados = computed(() => {
  return queryParams.value.finished ? "text-white bg-blue-800 " : "text-blue-700  ";
});


function updateFinished() {
    queryParams.value.finished = !queryParams.value.finished
    useFiltros.changeTerminados(queryParams.value.finished)
    setQuery()
}

function updateName() {
  useFiltros.changeCliente(queryParams.value.name == ''?queryParams.value.name: queryParams.value.name.toUpperCase())
  setQuery()
}

function setQuery() {
  const query = {}
  Object.entries(filtros.value).forEach(([key,value]) => {
    if (value || key == "finished"){
      query[key] = value
    }
  });
  router.push({query})
}

</script>

<template>
  <div class="flex flex-row">
    <!-- boton para filtrar por terminados -->
    <button
      @click="updateFinished"
      :class="[
        estilosBtnTerminados,
        'border border-blue-700  font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2',
      ]"
    >
      Terminados
    </button>
    <!-- input para filtrar por nombre de cliente -->
    <div class="flex flex-row">
      <label for="simple-search" class="sr-only">Nombre de cliente</label>
      <div class="relative w-full flex items-start ">
        <div
          class="flex absolute inset-y-0 left-0 bottom-2 items-center justify-center pl-3 pointer-events-none "
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          @keyup.enter="updateName"
          type="text"
          v-model="queryParams.name"
          id="simple-search"
          class="bg-gray-50 rounded-r-none border border-gray-300 text-gray-900 text-sm rounded-lg block focus:outline-none  w-full pl-10 p-2.5"
          placeholder="Nombre de cliente"
        />
          <button
            @click="updateName"
            class="p-2.5 rounded-l-none text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span class="sr-only">Search</span>
          </button>
      </div>
    </div>
  </div>
</template>

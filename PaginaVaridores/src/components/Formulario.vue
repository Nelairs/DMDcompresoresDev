<template>
  <div v-if="formStatus == true" class="fixed right-0 left-0 top-0 bottom-0">
    <div
      @click="accion"
      class="
        z-20
        text-black
        fixed
        right-0
        left-0
        top-0
        bottom-0
        bg-black bg-opacity-50
      "
    ></div>

    <div class="h-full w-full flex justify-center items-center">
      <div class="z-40 bg-white border rounded-xl p-4 ">
          <div class="h-full w-full flex flex-row gap-4">
          <div >
          <div class="mb-6">
            <label
              for="cliente"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-600
              "
              >Cliente</label
            >
            <input
              type="cliente"
              id="cliente"
              v-model="cliente"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-200
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                dark:shadow-sm-light
              "
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="nEquipo"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-600
              "
              >N° Equipo</label
            >
            <input
              type="text"
              id="nEquipo"
              v-model="nEquipo"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-200
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                dark:shadow-sm-light
              "
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="marca"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-600
              "
              >Marca</label
            >
            <input
              type="text"
              id="marca"
              v-model="marca"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-200
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                dark:shadow-sm-light
              "
              required=""
            />
          </div>
          </div>
          <div>
          <div class="mb-6">
            <label
              for="modelo"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-600
              "
              >Modelo</label
            >
            <input
              type="text"
              id="modelo"
              v-model="modelo"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-200
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                dark:shadow-sm-light
              "
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="potencia"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-600
              "
              >Potencia (Kw)</label
            >
            <input
              type="text"
              id="potencia"
              v-model="potencia"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-200
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                dark:shadow-sm-light
              "
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="marca"
              class="
                block
                mb-2
                text-sm
                font-medium
                text-gray-900
                dark:text-gray-600
              "
              >N° serie</label
            >
            <input
              type="text"
              id="nSerie"
              v-model="nSerie"
              class="
                shadow-sm
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-200
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-black
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
                dark:shadow-sm-light
              "
              required=""
            />
          </div>
          </div>
          </div>
          <button
            type="button"
            @click="postNewVariador"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            Agregar
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { format } from 'date-fns'
export default {
  name: "form",
  data(){
    return{
      cliente:'',
      potencia:0,
      nEquipo:0,
      nSerie:0,
      marca:'',
      modelo:'',
    }
  },
  props: {
    formStatus: Boolean,
  },
  methods: {
    accion() {
      this.$emit("accion");
    },
    postNewVariador(){
      axios.post("http://175.10.0.166:8080/api/formPost",{
        nombre_cliente: this.cliente,
        numero_equipo: this.nEquipo,
        modelo_equipo: this.modelo,
        potencia_equipo: this.potencia, 
        numero_serie_equipo: this.nSerie,
        marca_equipo: this.marca,
        fecha_de_entrada: new Date(),
        estado_equipo: 0, 
      }).then(()=>{
        console.log('anashe')
      })
      .catch(()=>{
        console.log('todo como el  orto')
      })
    }
  },

};
</script>

<style>
</style>
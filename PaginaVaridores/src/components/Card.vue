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
      <li>Fecha de ingreso:{{formatFecha(item.fecha_de_entrada)}}</li>
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
import Swal from 'sweetalert2'
import { format } from 'date-fns'

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
    formatFecha(fecha){
      console.log(fecha)
      let alfredo = new Date()
      console.log(alfredo);
      
   
      return fecha
    },
    deleteVariador(id) {
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
        .post("http://175.10.0.166:8080/api/finish", {
          _id: id,
        })
        .then(() => {
          this.pasarId(id);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          console.log("salio bien");
        })
        .catch(() => {
          console.log("salio mal");
        });
        }
      });

      
    },
    pasarId(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style>
</style>
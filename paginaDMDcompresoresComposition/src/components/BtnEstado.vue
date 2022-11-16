<script setup>
import Swal from "sweetalert2";
import axios from "axios";
import { ref, toRefs } from "vue";
import { postNewStatus } from "../utils/endPoints";

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

const {item,isEdit} = toRefs(props)

const statuses = ref({
        0: { id: 0, text: "Por hacer", color: "yellow" },
        1: { id: 1, text: "Haciendo", color: "green" },
        2: { id: 2, text: "Bloqueado", color: "red" },
        3: { id: 3, text: "Hecho", color: "blue" },
})

function getStatusColor(status) {
  return statuses.value[status].color;
}

function changeStatus(estado) {
  if (isEdit.value == true) {
    if (estado === 0) {
      Swal.fire({
        title: "Estas seguro?",
        text: "Confirmas que inicias el variador??",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, inciar!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(postNewStatus(), {
              _id: item.value._id,
              estado_equipo: 1,
            })
            .then(() => {
              item.value.estado_equipo = 1;
              Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: "Se inicio correctamente",
                showConfirmButton: false,
                timer: 1300,
                toast: true,
              });
            })
            .catch(() => {
              Swal.fire({ title: "hubo un error", icon: "error" });
            });
        }
      });
    }

    if (estado === 1) {
      axios
        .post(postNewStatus(), {
          _id: item.value._id,
          estado_equipo: 2,
        })
        .then(() => {
          props.item.estado_equipo = 2;
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "El estado paso a bloqueado",
            showConfirmButton: false,
            timer: 1300,
            toast: true,
          });
        })
        .catch(() => {
          Swal.fire({ title: "hubo un error", icon: "error" });
        });
    } else if (estado === 2) {
      axios
        .post(postNewStatus(), {
          _id: item.value._id,
          estado_equipo: 1,
        })
        .then(() => {
          item.value.estado_equipo = 1;
          Swal.fire({
            position: "bottom-end",
            icon: "success",
            title: "El estado paso a haciendo",
            showConfirmButton: false,
            timer: 1300,
            toast: true,
          });
        })
        .catch(() => {
          Swal.fire({ title: "hubo un error", icon: "error" });
        });
    }
  }
}
</script>

<template>
  <button
    type="button"
    :class="[
      {
        'bg-yellow-500': getStatusColor(item.estado_equipo) == 'yellow',
        'bg-green-700': getStatusColor(item.estado_equipo) == 'green',
        'bg-red-700': getStatusColor(item.estado_equipo) == 'red',
        'bg-blue-700 disabled': getStatusColor(item.estado_equipo) == 'blue',
        
      },
      'text p-2 mb-2 rounded-xl  select-none 	 ',
    ]"
    :disabled="!isEdit"
    @click="changeStatus(item.estado_equipo)"
  >
    {{ statuses[item.estado_equipo].text }}
  </button>
</template>
<script setup>
import { ref, watch } from "vue";
import Cruz from "@/assets/cruz.vue";
import { computed } from "@vue/reactivity";

const dataVariador = ref({
  horas: "",
  conclusion: "",
  file: "",
});
const formVoid = ref(true);
const file = ref(null);
const disabledBtn = computed(() => {
  return formVoid.value ? true : false;
});
const estilosbtnDisabled = computed(() => {
  return formVoid.value
    ? "bg-blue-400 cursor-not-allowed"
    : "hover:bg-blue-800 bg-blue-700 cursor-pointer";
});
const emit = defineEmits(["changeStatus", "delete"]);

function changeStatusForm() {
  emit("changeStatus");
}

function deleteVariador() {
  emit("delete", dataVariador.value);
}

function uploadFile() {
  console.log(file.value.files);
}

watch(dataVariador.value, () => {
  if (dataVariador.value.conclusion != "") {
    formVoid.value = false;
  } else {
    formVoid.value = true;
  }
  console.log(dataVariador.value.conclusion);
});
</script>

<template>
  <div class="fixed z-20 inset-0">
    <div
      @click="changeStatusForm"
      class="z-20 text-black fixed inset-0 bg-black bg-opacity-50"
    ></div>

    <div class="h-full w-full flex justify-center items-center">
      <div class="z-40 bg-white border w-full max-w-xl rounded-xl p-4">
        <div class="w-full flex justify-end text-black">
          <button @click="changeStatusForm"><Cruz /></button>
        </div>
        <div class="h-full w-full flex flex-col gap-4">
          <div>
          <div class="mb-6 w-4/12">
            <label
              for="horas"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Horas dedicadas</label
            >
            <input
              type="text"
              id="horas"
              v-model="dataVariador.horas"
              autocomplete="off"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required="true"
            />
          </div>
        </div>
          <div class="mb-6">
            <label
              for="conclusion"
              class="block mb-2 text-sm font-medium flex flex-row text-gray-900"
              >Conclusión
              <div class="text-red-500">*</div></label
            >
            <textarea
              id="conclusion"
              rows="4"
              v-model="dataVariador.conclusion"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Escriba su conclusión"
            ></textarea>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <button
            type="button"
            @click="deleteVariador"
            :disabled="disabledBtn"
            :class="[
              estilosbtnDisabled,
              'text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
            ]"
          >
            Terminar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

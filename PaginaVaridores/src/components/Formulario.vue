<template>
  <div v-if="formStatus == true" class="fixed   right-0
        left-0
        top-0
        bottom-0">
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

    <div class="h-full w-full flex justify-center items-center ">
      <form class="z-40">
        <div class="form border bg-gray-100 rounded shadow-xl h-auto w-auto">
          <header class="flex flex-col items-center">
            <h1 id="title">Variadores</h1>
            <p class="text-xs text-gray-800" id="description">
              Ingrese los datos del variador
            </p>
          </header>
          <form id="survey-form">
            <div class="form-group p-3">
              <label id="name-label" for="name">Cliente:</label>
              <input
                class="border border-slate-800 rounded"
                id="nombre_cliente"
                type="Name"
                placeholder="Nombre del cliente"
                required
              />
            </div>
            <div class="form-group p-3">
              <label id="number-label" for="age">N° Equipo:</label>
              <input
                class="border border-slate-800 rounded"
                type="number"
                id="numero_equipo"
                required
              />
            </div>
            <div class="form-group p-3">
              <label id="marca-label" for="marca_equipo">Marca:</label>
              <input
                class="border border-slate-800 rounded"
                id="marca_equipo"
                type="Name"
                placeholder="Marca del equipo"
                required
              />
            </div>
            <div class="form-group p-3">
              <label id="modelo-label" for="name">Modelo:</label>
              <input
                class="border border-slate-800 rounded"
                id="modelo"
                type="modelo"
                placeholder="Modelo"
                required
              />
            </div>
            <div class="form-group p-3">
              <label id="potencia-label" for="potencia_equipo"
                >Potencia(Kw):</label
              >
              <input
                class="border border-slate-800 rounded"
                type="number"
                min="16"
                max="99"
                id="potencia_equipo"
                required
              />
            </div>
            <div class="form-group p-3">
              <label id="serie-label" for="numero_serie">N° serie:</label>
              <input
                class="border border-slate-800 rounded"
                id="numero_serie"
                type="Name"
                placeholder="numero de serie"
                required
              />
            </div>
          </form>
          <div class="flex flex-col pt-6 items-center">
            <button
              type="submit"
              id="submit"
              class="button bg-black p-1.5 border rounded"
            >
              <strong class="text-white">Submit</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "form",
  props: {
    formStatus: Boolean,
  },
  methods: {
    accion() {
      this.$emit("accion");
    },
  },
};
</script>

<style>
</style>
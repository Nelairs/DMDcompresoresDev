import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFiltrosStore = defineStore('filtros', () => {
  const filtros = ref({
    finished : false,
    name : ''
  })
  
  
  function changeTerminados(finished) {
    filtros.value.finished = finished
  }

  function changeCliente(name){
    console.log(name)
    filtros.value.name = name
  }

  function deleteFiltros() {
    filtros.value = {
      terminados : false ,
      name: ''
    }
  }
  

  return { filtros, changeTerminados, changeCliente,deleteFiltros}
})

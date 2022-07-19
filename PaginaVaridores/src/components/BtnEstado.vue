<template>
  <button
  type="button"
  :class="[{
    'bg-yellow-500': getStatusColor(this.item.estado_equipo) == 'yellow',
    'bg-green-700': getStatusColor(this.item.estado_equipo) == 'green',
    'bg-red-700': getStatusColor(this.item.estado_equipo) == 'red',
    'bg-blue-700': getStatusColor(this.item.estado_equipo) == 'blue',
  },'text p-2 mb-2 rounded-xl']"
>
  {{statuses[this.item.estado_equipo].text}}
</button>
</template>

<script>
export default {
    name:'BtnEstado',
    data(){
        return{
         statuses : {
         0: { id: 0, text: "Por hacer", color: "yellow" },
         1: { id: 1, text: "Haciendo", color: "green" },
         2: { id: 2, text: "Bloqueado", color: "red" },
         3: { id: 3, text: "Hecho", color: "blue" },
            }
        }
    },
    props:{
        item: Object
    },
    methods:{
        getStatusColor(status){
             return this.statuses[status].color
        }
    }
}
</script>

<style>

</style>
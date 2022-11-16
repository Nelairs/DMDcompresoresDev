import {useFiltrosStore} from "../stores/filtros"


export function deleteFiltrosPinia() {
const useFiltros = useFiltrosStore()
useFiltros.deleteFiltros()
}
import { ref} from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {
  const state ={
    token:null,
    name: null
  }

    function LOGIN_SUCCESS(userData) {
      state.token = userData.token
      state.name = userData.name

      axios.defaults.headers.common= {};
      axios.defaults.headers.common["Authorization"] = userData.token;
    }

    function DESTROY_TOKEN() {
      state.token = null
      state.name = null
      
      axios.defaults.headers.common= '';
    }
  return {LOGIN_SUCCESS,DESTROY_TOKEN,state}
})

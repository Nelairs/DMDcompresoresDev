<script setup>
import axios from "axios";
import {postUser,pruebaProtected} from "../utils/endPoints"
import {useUserStore} from "../stores/user"
import {ref} from "vue"

const useUser = useUserStore()
const user = ref({
  email: "",
  password: "",
});

async function login() {
  try {
    const userData  = await axios.post(postUser(),{
      username: user.value.email,
      password: user.value.password
    });
    console.log(userData)
    useUser.LOGIN_SUCCESS(userData)
  } catch (err) {
    console.log(err);
  }
}

async function prueba() {
  try {
    axios.get(pruebaProtected())
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="flex flex-row h-full justify-center items-center" id="login">
    <div class="w-2/4 h-full flex items-center">
      <div class="flex w-full gap-4 flex-col items-center">
        <div class="w-20">
          <img src="../assets/logo.png" alt="" />
        </div>
        <div>
          <input
            class="border border-2 bg-gray-200 rounded"
            type="text"
            name="username"
            autocomplete="off"
            placeholder="Username"
            @keyup.enter="enviar"
            v-model="user.email"
          />
        </div>

        <div class="">
          <input
            class="border bg-gray-200 rounded"
            autocomplete="off"
            placeholder="Password"
            @keyup.enter="enviar"
            name="password"
            type="password"
            v-model="user.password"
          />
        </div>

        <button
          type="button"
          class="p-3 py-1 bg-gray-700 text-white rounded-xl"
          @click="login"
        >
          Submit
        </button>
        <button
          type="button"
          class="p-3 py-1 bg-gray-700 text-white rounded-xl"
          @click="prueba"
        >
          prueba
        </button>
      </div>
    </div>
    <div class="flex justify-center h-full items-center w-2/4">
      <video class="h-full w-full object-fill" autoplay muted loop>
        <source src="../assets/10-HP-Animation.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

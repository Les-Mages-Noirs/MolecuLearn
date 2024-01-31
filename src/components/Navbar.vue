<script setup lang="ts">
import loginSVG from "../../public/img/login.svg";
import profileSvg from "../../public/img/profile.svg";
import { userStore } from "../store/user";
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1 space-x-12">
      <router-link class="btn btn-ghost text-xl" to="/">Accueil</router-link>
      <router-link class="btn btn-ghost text-xl" to="/molecules">Molécules</router-link>
      <router-link class="btn btn-ghost text-xl" to="/atomes">Atomes</router-link>
    </div>
    <div class="">

      <div class="flex items-center" v-if="userStore.isLoggedIn()">
        <router-link to="/profile">
          <profileSvg />
        </router-link>
        <router-link to="/login">
          <button class="btn btn-ghost" @click.prevent="userStore.logout()">
            Logout
          </button>
        </router-link>
      </div>
      <router-link v-else to="/login">
        <button class="btn btn-square btn-ghost">
          <loginSVG />
        </button>
      </router-link>
    </div>
  </div>
</template>

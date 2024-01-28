<script setup lang="ts">
import { ref, defineProps } from "vue";
import { updateUser } from "../api/user";
import { User } from "../api/types";

const props = defineProps<{
  user: User;
}>();

const isPremium = ref(false);
const isEditingUsername = ref(false);
const isEditingEmail = ref(false);
const isEditingPassword = ref(false);

const userRef = ref({
  username: "azer" ?? props.user.username,
  email: "azer" ?? props.user.email,
  plainPassword: "",
});

function toggleEditingUsername() {
  isEditingUsername.value = !isEditingUsername.value;
}

function toggleEditingEmail() {
  isEditingEmail.value = !isEditingEmail.value;
}

function toggleEditingPassword() {
  isEditingPassword.value = !isEditingPassword.value;
}

async function save() {
  await updateUser(props.user["@id"], userRef.value);
}

const handleEditProfile = (event: KeyboardEvent) => {
  if (
    event.key === "Enter" &&
    (isEditingEmail.value || isEditingPassword.value || isEditingUsername.value)
  ) {
    save();
  }
};
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex justify-center items-center">
    <div class="p-6 border border-gray-200 rounded-md h-1/3 w-1/2">
      <div class="flex items-center justify-between">
        <div class="avatar">
          <div class="w-32 rounded-full">
            <img src="../../public/img/profile-pic.jpg" />
          </div>
        </div>
        <div v-if="isPremium" class="badge badge-accent">Premium</div>
        <button v-else class="btn">Passer à premium</button>
      </div>
      <div class="py-4 flex flex-col space-y-6">
        <h1
          class="text-2xl font-bold"
          v-if="!isEditingUsername"
          @click="toggleEditingUsername"
        >
          <span class="">{{ userRef.username }}</span>
        </h1>
        <input
          v-else
          type="text"
          v-model="userRef.username"
          class="text-gray-600 w-fit"
          @blur="toggleEditingUsername"
          @keydown="handleEditProfile"
        />

        <div class="flex flex-col space-y-2">
          <span
            class="text-gray-400"
            v-if="!isEditingEmail"
            @click="toggleEditingEmail"
          >
            Email :
            <span class="text-gray-600">{{ userRef.email }}</span>
          </span>
          <input
            v-else
            type="text"
            v-model="userRef.email"
            class="text-gray-600 w-fit"
            @blur="toggleEditingEmail"
            @keydown="handleEditProfile"
          />

          <span
            class="text-gray-400"
            v-if="!isEditingPassword"
            @click="toggleEditingPassword"
          >
            Mot de passe :
            <span class="text-gray-600">********</span>
          </span>
          <input
            v-else
            type="password"
            v-model="userRef.plainPassword"
            class="text-gray-600 w-fit"
            @blur="toggleEditingPassword"
            @keydown="handleEditProfile"
          />
        </div>
      </div>
      <div class="p-6 flex items-center justify-center">
        <button class="btn btn-error">Déconnexion</button>
      </div>
    </div>
  </div>
</template>

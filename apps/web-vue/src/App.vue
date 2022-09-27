<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { Avatar } from "@boringer-avatars/vue3";
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <Avatar
    :title="false"
    :size="420"
    variant="bauhaus"
    name="FOOOOOBAAARRRR"
    :square="false"
    :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
  />
</template>

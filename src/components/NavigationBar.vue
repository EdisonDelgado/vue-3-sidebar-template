<template>
  <nav class="p-4 flex justify-between">
    <div>
      <button @click="$emit('toggle')">
        <Bars3Icon class="h-6 w-6" />
      </button>
    </div>
    <div class="md:font-medium">
      <router-link class="mr-4" to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
    </div>
  </nav>
</template>

<script>
import { Bars3Icon } from '@heroicons/vue/24/solid'

export default {
  name: "NavigationBar",
  components: {
    Bars3Icon,
  },
};
</script>

<style scoped>
/* puedes agregar estilos personalizados si lo necesitas */
</style>
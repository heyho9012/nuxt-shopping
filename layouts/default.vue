<template>
  <div id="app">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
  components: { AppHeader },
};
</script>

<style scoped>
.app {
  position: relative;
}
</style>

<template>
  <header id="header">
    <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  height: 60px;
}
.logo {
  font-weight: 900;
  font-size: 1.5rem;
}
.logo:visited {
  color: inherit;
}
</style>

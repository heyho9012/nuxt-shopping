<template>
  <div class="input-wrapper flex">
    <input
      type="text"
      class="search-input"
      :value="searchKeyword"
      @input="$emit('input', $event.target.value)"
      @keydown.enter="searchHandler"
    />
    <button type="button" class="btn" @click="searchHandler">search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    searchHandler() {
      this.$emit('search');
    },
  },
};
</script>

<style scoped>
input {
  margin: 0 0.25rem 0 0;
}
</style>

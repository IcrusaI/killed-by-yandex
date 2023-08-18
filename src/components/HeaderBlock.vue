<script lang="ts">
import { Vue, Options } from "vue-class-component";
import Language from "@/language";

@Options({
  computed: {
    Language() {
      return Language;
    },
  },
})
export default class HeaderBlock extends Vue {}
</script>

<template>
  <header>
    <h1>{{ Language.get("app_name") }}</h1>
    <p>{{ Language.get("description") }}</p>
    <div class="search">
      <input placeholder="Search" type="text" />
    </div>
    <div class="filters">
      <select>
        <option value="all">All</option>
        <option value="services">Services</option>
        <option value="products">Products</option>
      </select>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  padding: 2rem;
}

.search {
  margin-top: 1rem;
}

.search input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search button {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.filters {
  margin-top: 1rem;
}

.filters select {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

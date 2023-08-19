<script setup lang="ts">
import Language from "@/language";
import products from "../products";

const props = defineProps({
  changeFilter: {
    type: Function,
    required: true,
  },
  changeSearch: {
    type: Function,
    required: true,
  },
});

function changeFilterLoc(event: any) {
  let type = event.target.value;
  if (type === "all") {
    type = null;
  }

  props.changeFilter(type);
}

function changeSearchLoc(event: any) {
  let search = event.target.value.trim().toLowerCase();
  if (search === "") {
    search = null;
  }

  props.changeSearch(search);
}

function changeLang(event: any) {
  const language = event.target.value;

  Language.setCurrentLanguage(language);
}

const productTypes = products
  .reduce((accumulator: any, val) => {
    const e = accumulator.find((e: any) => e[0] === val.type);

    if (e === undefined) {
      accumulator.push([val.type, 1]);
    } else {
      e[1]++;
    }

    return accumulator;
  }, [])
  .sort((a: any, b: any) => a[1] - b[1]);
</script>

<template>
  <header>
    <h1>{{ Language.get("app_name") }}</h1>
    <p>{{ Language.get("description") }}</p>
    <div class="actions">
      <div class="languages">
        <select @change="changeLang">
          <option disabled>{{ Language.get("select_language") }}</option>
          <option
            :selected="Language.getCurrentLanguage() === lang"
            v-for="lang in Language.Languages"
            :value="lang"
            :key="lang"
          >
            {{ Language.flags[lang] }}
            {{ Language.get(lang + "_name") }}
          </option>
        </select>
      </div>
      <div class="search">
        <input
          @input="changeSearchLoc"
          :placeholder="Language.get('search')"
          type="text"
        />
      </div>
      <div class="filters">
        <select @change="changeFilterLoc">
          <option value="all">
            {{ Language.get("all") }} ({{ products.length }})
          </option>
          <option v-for="type in productTypes" :key="type[0]" :value="type[0]">
            {{ Language.get(type[0]) }} ({{ type[1] }})
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  padding: 2rem;
}

.search,
.filters {
  display: inline-block;
  vertical-align: middle;
}

.search,
.filters,
.languages {
  margin: 5px;
}

.search input {
  padding: 10px 2px 0.5px;
  border-bottom: 1px solid #ccc;
}

.filters select,
.languages select {
  height: 27px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

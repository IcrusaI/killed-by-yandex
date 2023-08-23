<script setup lang="ts">
import products from "@/products";
import Language, { getCurrentLanguage } from "@/language";
import { computed, ref, Ref } from "vue";

let filter: Ref<string | null> = ref(null);
let search: Ref<string | null> = ref(null);

function changeFilter(type: string) {
  filter.value = type;
}

function changeSearch(searchString: string) {
  search.value = searchString;
}

const productsSort = computed(() => {
  const arr = products;

  arr.sort(function (a, b) {
    return b.end_date.getTime() - a.end_date.getTime();
  });

  return products.filter((e) => {
    let isFilter = true,
      isNameSearch = true,
      isDescriptionSearch = true;
    if (filter.value !== null) {
      isFilter = e.type === filter.value;
    }

    if (search.value !== null) {
      isNameSearch =
        e.name[getCurrentLanguage()].toLowerCase().indexOf(search.value) !== -1;
      isDescriptionSearch =
        e.description[getCurrentLanguage()]
          .toLowerCase()
          .indexOf(search.value) !== -1;
    }

    return isFilter && isNameSearch && isDescriptionSearch;
  });
});

defineExpose({
  changeFilter,
  changeSearch,
});
</script>

<template>
  <section class="gallery">
    <div class="product" v-for="(product, key) in productsSort" :key="key">
      <div class="product-image">
        <img alt="Product Image" src="@/assets/gravestone.png" />
        <div class="date">
          {{ product.start_date ? product.start_date.getFullYear() + " - " : ""
          }}{{ product.end_date.getFullYear() }}
        </div>
        <div class="type">{{ Language.get(product.type) }}</div>
      </div>
      <div class="product-details">
        <h2 v-if="product.proof">
          <a :href="product.proof" target="_blank">{{
            product.name[getCurrentLanguage()]
          }}</a>
        </h2>
        <h2 v-else>{{ product.name[getCurrentLanguage()] }}</h2>
        <p>{{ product.description[getCurrentLanguage()] }}</p>
      </div>
    </div>
  </section>
  <h2 class="more">Список ещё пополняется...</h2>
</template>

<style scoped>
.gallery {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  overflow-x: auto;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

.product {
  height: 100%;
  border: none;
  padding: 1rem;
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 2rem;
  display: flex;
  min-width: 250px;
  max-width: 600px;
}

.product-image {
  flex-basis: 30%;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-image img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.type {
  text-transform: capitalize;
  font-size: 13px;
  background: #e1e1e1;
  padding: 2px 5px;
  border-radius: 5px;
  color: #7f7676;
}

.date {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #777;
}

.product-details {
  flex: 1;
  padding: 0 1rem;
}

.product h2 {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

.product p {
  margin-top: 0.5rem;
}

.more {
  text-align: center;
  margin-bottom: 50px;
}
</style>

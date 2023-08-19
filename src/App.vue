<template>
  <main>
    <HeaderBlock
      :changeFilter="callChangeFilter"
      :changeSearch="callChangeSearch"
    />

    <GalleryBlock ref="gallery" />
  </main>

  <FooterBlock class="footer" />
</template>

<script setup lang="ts">
import FooterBlock from "@/components/FooterBlock.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";
import GalleryBlock from "@/components/GalleryBlock.vue";
import Language from "@/language";
import { ref } from "vue";

document.title = Language.get("app_name");

const gallery = ref();

const callChangeFilter = (type: string) => {
  gallery.value.changeFilter(type);
};

const callChangeSearch = (search: string) => {
  gallery.value.changeSearch(search);
};
</script>

<style>
html,
body,
h1,
h2,
p,
input,
button,
select,
span {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}

.footer {
  flex-shrink: 0;
}

a {
  color: black;
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-skip-ink: none;
}
</style>

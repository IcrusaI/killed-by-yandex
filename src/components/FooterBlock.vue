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
export default class FooterBlock extends Vue {}
</script>

<template>
  <footer>&copy; 2023 {{ Language.get("app_name") }}</footer>
</template>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
}
</style>

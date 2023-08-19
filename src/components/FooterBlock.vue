<script setup lang="ts">
import Language from "@/language";
</script>

<template>
  <footer>
    <a
      href="https://github.com/IcrusaI/killed-by-yandex/blob/main/LICENSE"
      target="_blank"
      >&copy; 2023 {{ Language.get("app_name") }}</a
    >
    <a href="https://github.com/IcrusaI/killed-by-yandex" target="_blank">
      <img alt="Github" src="@/assets/github.png" />
    </a>
  </footer>
</template>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem 0;
}

footer a {
  color: #fff;
  display: block;
  margin-bottom: 10px;
}
</style>

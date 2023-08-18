<template>
  <HeaderBlock />

  <section class="gallery">
    <div class="product">
      <div class="product-image">
        <img alt="Product Image" src="product1.jpg" />
        <div class="date">Discontinued on March 1, 2022</div>
      </div>
      <div class="product-details">
        <h2>Product Name 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          at tellus nec velit varius aliquet.
        </p>
      </div>
    </div>
  </section>

  <FooterBlock />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import FooterBlock from "@/components/FooterBlock.vue";
import HeaderBlock from "@/components/HeaderBlock.vue";

@Options({
  components: {
    HeaderBlock,
    FooterBlock,
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
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

.gallery {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 2rem;
}

.product {
  border: none;
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  display: flex;
  min-width: 450px;
  max-width: 500px;
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

@media screen and (max-width: 768px) {
  .gallery {
    padding: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .product {
    max-width: 100%;
  }
}
</style>

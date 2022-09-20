<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>

    <router-link to="/products/p2">product 2</router-link>
  </section>
</template>

<script>
import { computed, inject, ref } from 'vue';
import {useRoute} from 'vue-router'

export default {
  props : ['pid'],
  setup() {
    const title = ref('');
    const price = ref(null);
    const description = ref('');
    const products = inject('products');

    const route = useRoute();

    const selectedProduct = computed(() =>{
      return products.value.find(prd => prd.id === route.params.pid)
    });
    
    title.value = computed(()=> {
      return selectedProduct.value.title
    });
    
    price.value = computed(()=>{
      return selectedProduct.value.price
    })
    
    description.value = computed(()=>{
      return selectedProduct.value.description
    });

    return { title, price, description };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>

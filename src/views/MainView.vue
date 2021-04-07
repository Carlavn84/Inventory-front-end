<template>
  <div id="app">
    <ThePage>
        <Products />
    </ThePage>
  </div>
</template>

<script>
import ThePage from '@/components/layout/ThePage.vue';
import Products from '@/components/products/Products.vue';


export default {
  name: 'MainView',

  components: { ThePage, Products },
};
</script>

<style lang="scss">
</style>

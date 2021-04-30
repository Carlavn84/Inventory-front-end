<template>
  <div class="products">
      <div class="top">
      <h1>List of products</h1>
      <button class="add-button" @click="showModal=true">
          <div>Add new product</div>
      </button>
      </div>
     
  <ProductList class="list" v-bind:products="products"
  v-on:delete-product="deleteProduct"/>

  <br> <br>

  <AddProduct v-if="showModal" @close="showModal=false" v-on:add-product="addProduct"   />

     
  </div>
</template>

<script>
import axios from 'axios';

import ProductList from './ProductList.vue';
import AddProduct from './AddProduct.vue';


export default {
    name: 'Products',

    components: {AddProduct, ProductList},

    data() {
        return {
            products: [],
            showModal: false

        };
    },

    mounted(){
      axios
        .get("api/v1/product")
        .then((response) => {this.products = response.data;
        } 
        )
    },

    methods: {
      addProduct(product) {
        if (!product) {
          return;
        }
        axios.post("api/v1/product", product)
      .then((response) => {
        product = response.data;
        console.log(response);
        })
      },

      deleteProduct(id) {
        axios
        .delete("api/v1/product/" + id)
        .then(() => {
          axios.get("api/v1/product")
          .then((res) => {
            this.products = res.data;
          })
      
        })
        .catch((error) => {console.log(error)})
      }
    }
};
</script>

<style>

   .top h1 {
      float: left;
    }

    .top button {
      float: right;
    }

    .list {
      clear: both;
      margin: auto
    }

.add-button {
    border-radius: 30px;
    background: yellow;
    width: 140px;
    height: 30px;
    font-weight: bold;
    /* outline: 0;
    padding: 0; */
    cursor: pointer;
    border: hiden;
}

table {
  border-collapse: collapse;
  border: 1
}



  
</style>

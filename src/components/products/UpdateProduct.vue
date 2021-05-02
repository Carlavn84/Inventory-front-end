<template>
  <div>
    <label>Name:</label> 
    <input type="text" v-model="product.name"><br><br>
          
    <label>Brand:</label>
    <input type="text" v-model="product.brand"><br><br>
            
    <label>Origin:</label>
    <input type="text" v-model="product.origin"><br><br>        
  
    <label>Price:</label>
    <input type="text" v-model="product.price"><br><br>
              
    <button v-on:click="updateProduct()"
            :disabled="isDisable" 
           
            class="button">Update</button> 
    

  </div>
</template>

<script>


export default {
  name: "UpdateProduct",

  props: ["showModal"],

  data() {
    return {
      product: {
      
          name: '',
          brand: '',
          origin: '',
          price: null
      } 
    }
  },
  methods: {
    updateProduct() {

    this.$emit('update-product', this.product);

    // clear these input fields after submitting
    this.product = { };
     
    }
  },

  computed: {
    isDisable(){
      return !this.product.name || 
            !this.product.brand || 
            !this.product.origin ||
            !this.product.price;  
    }
  }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
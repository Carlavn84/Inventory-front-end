<template>
  <div>
    <form @submit.prevent="addProduct"> 
        <div>
            <lable>Name 
                <input type="text" v-model="name">
            </lable>            
        </div>
        <br>
         <div>
            <lable>Brand
                <input type="text" v-model="brand">
            </lable>            
        </div>
        
         <div>
            <lable>Origin
                <input type="text" v-model="origin">
            </lable>            
        </div>

         <div>
            <lable>Price
                <input type="text" v-model="price">
            </lable>            
        </div>
      
      
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>

export default {
  name: "AddProduct",
  data() {
    return {
      name: '',
      brand: '',
      origin: '',
      price: null
    }
  },
  methods: {
    addProduct() {
      const newProduct = {
        name: this.name,
        brand: this.brand,
        origin: this.origin,
        price: this.price
       
      }
      // Send up to parent
      this.$emit('add-todo', newProduct);
      this.name = '';
      this.brand = '';
      this.origin = '';
      this.price = '';
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
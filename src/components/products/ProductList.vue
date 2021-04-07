<template>
  <div class="grid member-list">
            <table class="list" style="width:30%" border="1">
                  <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product name</th>
                            <th>Brand</th>
                            <th>Origin</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody v-for="product in products" :key="product.id">
                        <tr>
                            <td>{{product.id}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.brand}}</td>
                            <td>{{product.origin}}</td>
                            <td>{{product.price}}</td>
                        </tr>      
                    </tbody>                      
            </table> 
  </div>
</template>

<script>
export default {
  name: "ProductList",

  props: ["products"],
};
</script>

<style>

  table {
  border-collapse: collapse;
  border: 1
}
</style>

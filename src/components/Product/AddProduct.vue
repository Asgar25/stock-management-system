<template>
  <v-container class="elevation-12 myform">
    <v-form>
      <v-flex xs12 class="text-center">
        <H3>Add Product</H3>
      </v-flex>

      <v-row no-gutters>
        <v-col lg="6" class="pr-5 m-5">
          <v-text-field
            v-model="productInfo.productName"
            :counter="10"
            label="Product Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="productInfo.productCode"
            :counter="5"
            label="Product Code"
            required
          ></v-text-field>
          <v-select v-model="productInfo.productCategory" :items="items" label="Category"></v-select>
          <v-text-field
            v-model="productInfo.productUnit"
            :counter="10"
            label="Product Unit"
            required
          ></v-text-field>
        </v-col>

        <v-col lg="6" class="pl-5 m-5">
          <v-file-input v-model="productInfo.productImage" label="File input"></v-file-input>
          <v-text-field v-model="productInfo.brand" :counter="10" label="Brand" required></v-text-field>
          <v-text-field
            v-model="productInfo.productPrice"
            :counter="10"
            label="Product Price"
            required
          ></v-text-field>
          <v-text-field
            v-model="productInfo.alertQuantity"
            :counter="5"
            label="Alert Quantity"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
        <v-textarea
          v-model="productInfo.productDescription"
          outlined
          name="input-7-4"
          label="Product Details"
        ></v-textarea>
        <v-btn class="ma-2" @click="submit" outlined color="indigo">Sumbit</v-btn>
      </v-flex>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ["Book", "Electonic", "Grosery"],
      productInfo: [
        { productName: "" },
        { productCode: null },
        { productCategory: null },
        { productUnit: null },
        { productImage: null },
        { brand: null },
        { productPrice: null },
        { alertQuantity: null },
        { productDescription: null }
      ]
    };
  },
  methods: {
    submit() {
      // console.log(this.productInfo);
    }
  }
};
</script>

<style>
.myform {
  margin-top: 20px;
  padding: 10px;
}

v-text-field {
  padding: 20px;
}
</style>
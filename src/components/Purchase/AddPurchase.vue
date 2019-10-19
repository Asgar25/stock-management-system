<template>
  <v-container class="elevation-12 myform">
    <v-form>
      <v-row class="myform">
        <v-col>
          <v-text-field v-model="editedItem.date" label="Date"></v-text-field>
          <v-text-field v-model="editedItem.referenceNo" label="Reference No"></v-text-field>
          <v-text-field v-model="editedItem.supplierName" label="Suppplier Name"></v-text-field>
          <v-text-field v-model="editedItem.items" label="Items"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field v-model="editedItem.quantity" label="Quantity"></v-text-field>
          <v-text-field v-model="editedItem.productCost" label="Product Cost"></v-text-field>
          <v-text-field v-model="editedItem.shippingCost" label="Shipping Cost"></v-text-field>
          <v-text-field v-model="editedItem.grandTotal" label="Grand Total"></v-text-field>
        </v-col>
      </v-row>
      <v-btn class="mybutton ml-4" color="blue darken-1" dark @click="submit">Add Purchase</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      editedItem: {
        date: "",
        referenceNo: "",
        supplierName: "",
        items: "",
        code: 0,
        price: 0,
        quantity: 0,
        productCost: 0,
        shippingCost: 0,
        grandTotal: 0
      }
    };
  },
  methods: {
    // submit() {
    //   console.log(this.editedItem);
    // }
  }
};
</script>

<style>
</style>
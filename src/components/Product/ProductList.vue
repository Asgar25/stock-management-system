<template>
  <div>
    <v-btn class="ma-2" outlined color="indigo">
      <router-link to="/dashboard/AddProduct" tag="div">Add Product</router-link>
    </v-btn>
    <v-btn class="ma-2" outlined color="indigo">Import Product</v-btn>
    <v-data-table
      :headers="headers"
      :items="products"
      class="mytable elevation-12 mt-10"
      :loading="loading"
      loading-text="Loading... Please wait"
      :search="search"
      show-select
      :single-select="singleSelect"
      item-key="name"
      v-model="select"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-text-field
            v-model="search"
            append-icon="fa fa-search"
            label="Search Product"
            class="mx-4"
          ></v-text-field>
          <v-divider class="mx-4" inset vertical></v-divider>
          <div class="flex-grow-1"></div>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }"></template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.image" label="Product Image"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Product Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.brand" label="Brand"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.code" label="Product Code"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.quantity" label="Quantity"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.alert_quantity" label="Alert Quantity"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select v-model="editedItem.productCategory" label="Category"></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">fa fa-pen-square</v-icon>
        <v-icon small @click="deleteItem(item)">fa fa-trash</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: "",
    singleSelect: false,
    loading: false,
    select: [],
    dialog: false,
    headers: [
      { text: "Image", align: "left", value: "image", sortable: false },
      { text: "Name", value: "name" },
      { text: "Brand", value: "brand" },
      { text: "Category", value: "category" },
      { text: "Code", value: "code" },
      { text: "Price", value: "price" },
      { text: "Quantity", value: "quantity" },
      { text: "Alert Quantity", value: "alert_quantity" },
      { text: "Actions", value: "action", sortable: false }
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      image: "",
      name: "",
      brand: "",
      productCategory: "",
      code: 0,
      price: 0,
      quantity: 0,
      alert_quantity: 0
    },
    defaultItem: {
      image: "",
      name: "",
      brand: "",
      productCategory: "",
      code: 0,
      price: 0,
      quantity: 0,
      alert_quantity: 0
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
    // items() {
    //   return ["Book", "Electronic", "Food"];
    // }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.products = [
        {
          image: this.myimg,
          name: "Book",
          category: "Electronic",
          brand: "Sony",
          code: 1234,
          price: "123 USD",
          quantity: 120,
          alert_quantity: 10
        },
        {
          image: this.myimg,
          name: "Book",
          category: "Electronic",
          brand: "Sony",
          code: 1234,
          price: "123 USD",
          quantity: 120,
          alert_quantity: 10
        },
        {
          image: this.myimg,
          name: "Book",
          category: "Electronic",
          brand: "Sony",
          code: 1234,
          price: "123 USD",
          quantity: 120,
          alert_quantity: 10
        }
      ];
    },
    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.products.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.products.splice(index, 1);
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem);
      } else {
        this.products.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
<style  scoped>
</style>
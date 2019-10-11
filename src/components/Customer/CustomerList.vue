<template>
  <div>
    <v-container>
      <v-btn class="ma-2" outlined color="indigo">
        <router-link to="/dashboard/AddCustomer" tag="div">Add Customer</router-link>
      </v-btn>
      <v-row no-gutters>
        <v-col class="mytable">
          <v-data-table
            :loading="loading"
            loading-text="Loading... Please wait"
            :headers="headers"
            :items="customerInfo"
            class="mytable elevation-12"
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
                  label="Search"
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
                          <v-col cols="12" sm="6" md="8">
                            <v-form>
                              <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                              <v-text-field v-model="editedItem.companyName" label="Company Name"></v-text-field>
                              <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                              <v-text-field v-model="editedItem.phoneNumber" label="Phone Number"></v-text-field>
                              <v-overflow-btn
                                class="my-2"
                                :items="type"
                                v-model="editedItem.type"
                                label="Customer Type"
                                editable
                              ></v-overflow-btn>
                            </v-form>
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
              <v-icon md class="mr-5" @click="editItem(item)">fa fa-pen-square</v-icon>
              <v-icon md @click="deleteItem(item)">fa fa-trash</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    type: ["Gold", "Silver"],
    singleSelect: false,
    loading: false,
    select: [],
    search: "",
    dialog: false,
    headers: [
      {
        text: "Name",
        align: "left",
        value: "name"
      },
      {
        text: "Company Name",
        align: "left",
        value: "companyName"
      },
      {
        text: "Address",
        align: "left",
        value: "address"
      },
      {
        text: "Phone Number",
        align: "left",
        value: "phoneNumber"
      },
      {
        text: "Type",
        align: "left",
        value: "type"
      },
      { text: "Actions", value: "action", sortable: false }
    ],
    customerInfo: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      companyName: "",
      address: "",
      phoneNumber: "",
      type: ""
    },
    defaultItem: {
      name: "",
      companyName: "",
      address: "",
      phoneNumber: "",
      type: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    getCustomer() {
      return this.$store.getters.getUser;
    }
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
      this.customerInfo = [
        {
          name: "Piyash",
          companyName: "Python",
          address: "dhaka",
          phoneNumber: "+8801989907590",
          type: "gold"
        },
        {
          name: "Piyash",
          companyName: "Python",
          address: "dhaka",
          phoneNumber: "+8801989907590",
          type: "gold"
        },
        {
          name: "Piyash",
          companyName: "Python",
          address: "dhaka",
          phoneNumber: "+8801989907590",
          type: "gold"
        }
      ];
      // this.userinfo=this.getCustomer
    },

    editItem(item) {
      this.editedIndex = this.customerInfo.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.customerInfo.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.customerInfo.splice(index, 1);
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
        Object.assign(this.customerInfo[this.editedIndex], this.editedItem);
      } else {
        this.customerInfo.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>


<style scoped>
.mytable {
  padding: 30px;
}
</style>
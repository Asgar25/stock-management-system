<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md6>
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title align-center>Customer Information</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="customer.name"
                    :counter="10"
                    label="Name"
                    required
                    outlined
                    append-icon="fa fa-user-alt"
                    autocomplete="User Name"
                  ></v-text-field>
                  <v-text-field
                    v-model="customer.companyName"
                    :counter="10"
                    label="Company Name"
                    required
                    outlined
                    append-icon="fa fa-home"
                    autocomplete="Company Name"
                  ></v-text-field>
                  <v-text-field
                    v-model="customer.address"
                    :counter="10"
                    label="Address"
                    required
                    outlined
                    append-icon="fa fa-map-marker"
                    autocomplete="Address"
                  ></v-text-field>
                  <v-text-field
                    v-model="customer.phoneNumber"
                    label="Phone Number"
                    required
                    outlined
                    append-icon="fa fa-phone"
                    autocomplete="Phone Number"
                  ></v-text-field>
                  <v-overflow-btn
                    class="my-2"
                    :items="type"
                    v-model="customer.type"
                    label="Customer Type"
                    editable
                  ></v-overflow-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="clear" color="primary">Reset</v-btn>
                <v-btn color="primary" @click="addCustomer">Add Customer</v-btn>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    type: ["Gold", "Silver"],
    customer: [
      { name: "" },
      { companyName: "" },
      { address: "" },
      { phoneNumbeqr: "" }
    ],
    show1: false,
    valid: false
  }),
  methods: {
    addCustomer() {
      // var self = this;
      // self.$store.commit("addUser", this.customer);
      // console.log(this.customer);
    },
    submit() {},
    clear() {
      this.name = "";
      this.password = "";
    }
  }
};
</script>

<style>
</style>
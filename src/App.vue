<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>WellCome</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-toolbar-items>
        <v-btn text>
          <router-link to="/" tag="div">DashBoard</router-link>
        </v-btn>
        <v-btn text>Profile</v-btn>
        <v-btn text @click="logout">Sign Out</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-row no-gutters>
      <v-col lg="3">
        <v-card elevation="12" class="side-bar">
          <v-navigation-drawer floating permanent>
            <v-list dense rounded>
              <v-list-item>
                <v-list-item-title>
                  <div v-for="(d, index) in dropdowns" :key="index">
                    <v-overflow-btn
                      @change="selectItems"
                      class="my-2"
                      :items="d.items"
                      v-model="select"
                      :label="d.label"
                      editable
                    ></v-overflow-btn>
                  </div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <v-col lg="9">
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <Login v-if="!login" />
              <router-view v-else></router-view>
            </v-layout>
          </v-container>
        </v-content>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Login from "./components/LogIn";
export default {
  name: "App",
  components: { Login },
  data() {
    return {
      select: "",
      dropdowns: [
        {
          label: "Product",
          items: ["Category", "Product List", "Add Product"]
        },
        {
          label: "Customer",
          items: ["Customer List", "Add Customer"]
        },
        {
          label: "Purchase",
          items: ["Purchase List", "Add Purchase"]
        },
        {
          label: "Sale",
          items: ["Sale List", "Add Sale"]
        },
        {
          label: "Return",
          items: ["Return List", "Add Return"]
        },
        {
          label: "Users",
          items: ["Users List", "Add User"]
        },
        {
          label: "Reports",
          items: [
            "Profit Or Loss",
            "Product Report",
            "Sale Report",
            "Customer Report"
          ]
        }
      ]
    };
  },
  methods: {
    selectItems() {
      this.$router.push({
        path: "/dashboard/" + this.select.replace(/\s/g, "")
      });
    },
    logout() {
      var self = this;
      self.$store.commit("userLogged", false);
    }
  },
  computed: {
    login() {
      var self = this;
      return self.$store.getters.auth;
    }
  }
};
</script>
<style  scoped>
.side-bar {
  margin-top: 56px;
}
</style>

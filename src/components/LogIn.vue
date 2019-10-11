<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Admin Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    :counter="10"
                    label="User Name"
                    required
                    outlined
                    append-icon="fa fa-user-alt"
                    autocomplete="User Name"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    required
                    :append-icon="show1 ? 'fa fa-eye':'fa fa-eye-slash'"
                    autocomplete="current-password"
                    :type="show1 ? 'text' : 'password'"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                    outlined
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="clear" color="primary">Reset</v-btn>
                <v-btn color="primary" @click="login">Login</v-btn>
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
    show1: false,
    valid: false,
    name: "",
    password: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    passwordRules: [
      v => !!v || "Password is required",
      v => v.length >= 8 || "Password must be greater than 8 characters"
    ]
  }),
  methods: {
    login() {
      this.$store.commit("userLogged", true);
    },
    submit() {},
    clear() {
      this.name = "";
      this.password = "";
    }
  },
  computed: {
    
  }
};
</script>

<style>
</style>
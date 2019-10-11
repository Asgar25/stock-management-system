<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col>
          <v-btn class="ma-2" outlined color="indigo">Import Category By CSV</v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col class="mytable">
          <v-data-table
            :loading="loading"
            loading-text="Loading... Please wait"
            :headers="headers"
            :items="category"
            sort-by="calories"
            class="elevation-12"
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
                  <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark class="mb-2" v-on="on">Add Category</v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="8">
                            <v-text-field v-model="editedItem.name" label="Category Name"></v-text-field>
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
    singleSelect: false,
    loading: false,
    select: [],
    search: "",
    dialog: false,
    headers: [
      {
        text: "Category",
        align: "left",
        value: "name"
      },
      { text: "Actions", value: "action", sortable: false }
    ],
    category: [],
    editedIndex: -1,
    editedItem: {
      name: ""
    },
    defaultItem: {
      name: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
      this.category = [
        {
          name: "Book"
        },
        {
          name: "Laptop"
        },
        {
          name: "Dekstop"
        },
        {
          name: "Sound Box"
        },
        {
          name: "Ram"
        },
        {
          name: "Graphics Card"
        },
        {
          name: "Hard Disk"
        },
        {
          name: "Monitor"
        },
        {
          name: "Wifi-Router"
        },
        {
          name: "Mouse && Keyboard"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.category.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.category.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
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
        Object.assign(this.category[this.editedIndex], this.editedItem);
      } else {
        this.category.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>


<style scoped>
.mytable {
  margin-top: 30px;
}
</style>
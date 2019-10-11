import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
//  Customer
import CustomerList from "./components/Customer/CustomerList.vue";
import AddCustomer from "./components/Customer/AddCustomer.vue";
// Product
import Category from "./components/Product/Category.vue";
import ProductList from "./components/Product/ProductList.vue";
import AddProduct from "./components/Product/AddProduct.vue";
// Purchase
import AddPurchase from "./components/Purchase/AddPurchase.vue";
import PurchaseList from "./components/Purchase/PurchaseList.vue";

// Sale
import SaleList from "./components/Sale/SaleList.vue";
import AddSale from "./components/Sale/AddSale.vue";

//Return
import ReturnList from "./components/Return/ReturnList.vue";
import AddReturn from "./components/Return/AddReturn.vue";

// Users
import AddUser from "./components/Users/AddUser.vue";
import UsersList from "./components/Users/UsersList.vue";

// Reports
import ProfitOrLoss from "./components/Reports/ProfitOrLoss.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    // Customer
    {
      path: "/dashboard/AddCustomer",
      name: "add-customer",
      component: AddCustomer
    },
    {
      path: "/dashboard/CustomerList",
      name: "customer-list",
      component: CustomerList
    },

    //Product
    {
      path: "/dashboard/Category",
      name: "Category",
      component: Category
    },
    {
      path: "/dashboard/AddProduct",
      name: "AddProduct",
      component: AddProduct
    },
    {
      path: "/dashboard/ProductList",
      name: "ProductList",
      component: ProductList
    },

    //Purchase
    {
      path: "/dashboard/AddPurchase",
      name: "AddPurchase",
      component: AddPurchase
    },
    {
      path: "/dashboard/PurchaseList",
      name: "PurchaseList",
      component: PurchaseList
    },

    //  Sale
    {
      path: "/dashboard/AddSale",
      name: "AddSale",
      component: AddSale
    },
    {
      path: "/dashboard/SaleList",
      name: "SaleList",
      component: SaleList
    },

    // Users
    {
      path: "/dashboard/AddUser",
      name: "AddUser",
      component: AddUser
    },
    {
      path: "/dashboard/UsersList",
      name: "UsersList",
      component: UsersList
    },

    // Return
    {
      path: "/dashboard/AddReturn",
      name: "AddReturn",
      component: AddReturn
    },
    {
      path: "/dashboard/ReturnList",
      name: "ReturnList",
      component: ReturnList
    },

    // Reports
    {
      path: "/dashboard/ProfitOrLoss",
      name: "ProfitOrLoss",
      component: ProfitOrLoss
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

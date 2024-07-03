import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { ProductsComponent } from "./product/products/products.component";


export const productsRoutes: Routes = [
    {
      path: "products",
      component: ProductsComponent,
      title: "Produtos",
    }
]
import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";


export const productsRoutes: Routes = [
    {
      path: "products",
      component: ProductComponent,
      title: "Produtos",
    }
]
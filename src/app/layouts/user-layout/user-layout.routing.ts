import { Routes } from "@angular/router";
import { HomeComponent } from "src/app/pages/Home/Home.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { ProductDetailComponent } from "src/app/pages/product-detail/product-detail.component";
import { ShopComponent } from "src/app/pages/shop/shop.component";

export const UserLayoutRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product-detail", component: ProductDetailComponent },
  { path: "shop", component: ShopComponent },
  { path: "contact", component: ContactComponent },
];

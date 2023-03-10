import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";
import { ProductComponent } from "src/app/pages/product/product.component";
import { VoucherComponent } from "src/app/pages/voucher/voucher.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "product", component: ProductComponent },
  { path: "voucher", component: VoucherComponent },
];

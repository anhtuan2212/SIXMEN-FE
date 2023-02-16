import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserFooterComponent } from "./user-footer/user-footer.component";
import { UserHeaderComponent } from "./user-header/user-header.component";

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UserFooterComponent,
    UserHeaderComponent,
  ],
  exports: [
    FooterComponent,
    UserFooterComponent,
    UserHeaderComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class ComponentsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListingComponent } from './listing/listing.component';
import { SettingComponent } from './setting/setting.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { BlogPostingComponent } from './blog-posting/blog-posting.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ListingComponent,
    SettingComponent,
    AdminControlComponent,
    BlogPostingComponent,
    SidebarComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

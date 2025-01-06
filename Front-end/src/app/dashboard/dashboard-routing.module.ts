import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { BlogPostingComponent } from './blog-posting/blog-posting.component';
import { ListingComponent } from './listing/listing.component';
import { SettingComponent } from './setting/setting.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'panel',
        pathMatch:'full'
      },
      {
        path:'panel',
        component:PanelComponent,
      },
      {
        path:'admin_control',
        component:AdminControlComponent,
        
      },
      {
        path:'blog_posting',
        component:BlogPostingComponent,
      },
      {
        path: 'listing',
        component:ListingComponent,
      },
      {
        path:'setting',
        component:SettingComponent,
      },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

import { Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LoginComponent} from "./components/login/login.component";
import {DashboardComponent} from "./components/admin/dashboard/dashboard.component";
import {ProductComponent} from "./components/admin/product/product.component";
import {IngredientComponent} from "./components/admin/ingredient/ingredient.component";
import {CustomerComponent} from "./components/admin/customer/customer.component";
import {SalesComponent} from "./components/admin/sales/sales.component";
import {FinanceComponent} from "./components/admin/finance/finance.component";
import {BillReportsComponent} from "./components/admin/bill-reports/bill-reports.component";
import {ProfileComponent} from "./components/admin/profile/profile.component";
import {UserManageComponent} from "./components/admin/user-manage/user-manage.component";

export const routes: Routes = [

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', component: ProductComponent },
      { path: 'ingredients', component: IngredientComponent },
      { path: 'customers', component: CustomerComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'finance', component: FinanceComponent },
      {path:'bill-reports',component:BillReportsComponent},
      { path: 'profile', component: ProfileComponent },
      { path: 'user-management', component: UserManageComponent }
    ]
  },
  {path:'**',component:NotFoundComponent},
];

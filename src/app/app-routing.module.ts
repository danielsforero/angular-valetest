import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormColorComponent } from './pages/form-color/form-color.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'system-config', component: FormColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

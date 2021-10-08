import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { BuildingAreaComponent } from './pages/building-area/building-area.component';

const routes: Routes = [
  { path: 'admin', component:HomeComponent  },
  { path: '',component:ProfilePageComponent},
  { path: 'build',component:BuildingAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
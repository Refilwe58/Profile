
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

const routes: Routes = [
  {path:'view-profile',component:ViewProfileComponent},
{ path:'events',component:EventsComponent},
{path:'gallery',component:GalleryComponent},
{path:'login',component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

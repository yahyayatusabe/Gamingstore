import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationControlsDirective } from 'ngx-pagination';
import { AutorizacionService } from './autorizacion.service';
import { AutorizacionsessionService } from './autorizacionsession.service';
import { CrudComponent } from './crud/crud.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component';
import { VerdatosComponent } from './verdatos/verdatos.component';

const routes: Routes = [
  {path:'session',component:LoginComponent},
  {path:'registrer',component:RegistrerComponent},
  {path:'home',component:HomeComponent},
  {path:'crud',component:CrudComponent,canActivate:[AutorizacionService]},
  {path:'verdatos/:id',component:VerdatosComponent,canActivate:[AutorizacionService]},
  {path:'editarperfil/:id',component:EditarperfilComponent,canActivate:[AutorizacionService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

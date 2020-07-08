// Imports necesarios
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { UserGuard } from './services/user.guard';
import { NoIdentityGuard } from './services/no.identity.guard';

//Importar componentes
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
 
//Definir Rutas
//Aqui se van a cargar los componentes de la ruta que yo les especifique en el navegador
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'login', canActivate: [NoIdentityGuard], component: LoginComponent},
  {path: 'registro', canActivate: [NoIdentityGuard], component: RegisterComponent},
  {path: 'ajustes', canActivate: [UserGuard], component: UserEditComponent},
  {path: 'temas', component: TopicsComponent},
  {path: 'temas/:page', component: TopicsComponent},
  {path: 'tema/:id' , component: TopicDetailComponent},
  {path: 'usuarios', component: UsersComponent},
  {path: 'perfil/:id', component: ProfileComponent},
  {path: 'buscar/:search', component: SearchComponent},
  {path: '**', component: HomeComponent}/*El ** significa que lanzara el error que pusimos anteriormente
  y siempre debe ir al final porque si no el resto de rutas no van a funcionar*/
];

//Exportar configuración
export const appRoutingProviders: any[] = [];//Esto sirve para cargar el router como servicio
/*El routing va a ser el modulo del router que eso una vez que lo carguemos dentro del appmodule
va a permitir que toda la configuración de rutas funcione
*/
//El  modulewithproviders es el tipo de dato que va ser el routing
/*Con el router module estamos pasando el modulo de rutas con el metodo forRoot y le pasamos tambien
las rutas que tenemos en nuestro array de rutas*/
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

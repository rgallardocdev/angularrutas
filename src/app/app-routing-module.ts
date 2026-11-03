import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { HomeComponent } from './components/home-component/home-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { NumerosParesComponent } from './components/numeros-pares-component/numeros-pares-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';

const routes: Routes = [
  {path:"musica", component: MusicaComponent},
  {path:"cine", component: CineComponent},
  {path:"pares", component: NumerosParesComponent},
  {path:"tablaMultiplicar", component: TablaMultiplicarComponent},
  {path:"doble", component: NumeroDobleComponent},
  {path:"doble/:numero", component: NumeroDobleComponent},
  {path:"", component: HomeComponent},
  {path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }

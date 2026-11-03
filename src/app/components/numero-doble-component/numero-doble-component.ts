import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {

  doble: number = 0;
  mensaje: string = "";

  constructor(
    private _active: ActivatedRoute,
    private _change: ChangeDetectorRef,
    private _router: Router
  ) {}

  navegarToCasa(): void {
    this._router.navigate(["/"]); //lo mismo que routerLink="/" pero por codigo.
  }

  goToDoble(numero: number): void {
    this._router.navigate(["/doble", numero]); //lo mismo que routerLink="/doble/numero" pero por codigo.
  }

  ngOnInit(): void {
    this._active.params.subscribe((parametros:Params) => {
      console.log("numero: " + parametros["numero"]);
      if (parametros["numero"]) {
        let numero = parametros["numero"];
        this.doble = numero * 2;
      }else{
        this.mensaje = "No se ha recibido ningún número";
      }
      this._change.detectChanges();
    })
  }
}

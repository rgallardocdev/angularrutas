import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numeros-pares-component',
  standalone: false,
  styleUrl: './numeros-pares-component.css',
  templateUrl: './numeros-pares-component.html',
})
export class NumerosParesComponent {

  @ViewChild("rangoInicial") rangoInicial!: ElementRef;
  @ViewChild("rangoFinal") rangoFinal!: ElementRef;

  arrayNumeros: number[]

  constructor() {
    this.arrayNumeros = [];
  }

  mostrarPares(_rangoFinal: string): void{
    this.arrayNumeros = [];
    let _rangoInicial = parseInt(this.rangoInicial.nativeElement.value);
    if (_rangoInicial > parseInt(_rangoFinal)){
      alert("El rango inicial debe ser menor que el rango final");
    }else{
      for (let i = _rangoInicial; i <= parseInt(_rangoFinal); i++){
        if (i % 2 == 0){
          this.arrayNumeros.push(i);
        }
      }
    }
  }
}

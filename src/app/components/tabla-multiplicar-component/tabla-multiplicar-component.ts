import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent {

  @ViewChild("numero") numero!: ElementRef;

  resultado: string[];

  constructor(){
    this.resultado = [];
  }

  mostrarTabla(): void{
    this.resultado = [];
    if (this.numero.nativeElement.value == ""){
      alert("Debe intruducir un numero");
    }else {
      let _numero = parseInt(this.numero.nativeElement.value);
      this.resultado = [`La tabla de multiplicar del numero ${_numero} es:`]
      for (let i=1; i<=10; i++){
        this.resultado.push(`${_numero} * ${i} = ${_numero*i}`);
      }
    }
  }
}

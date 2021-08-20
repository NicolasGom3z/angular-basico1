import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes : string[] = ['spiderman', 'ironman', 'hulk', 'thor','amaerica'];

  heroeBorrado : String = "";

  borrarHeroe():void {
    
    this.heroeBorrado =this.heroes.pop() || '';
    
  }
}

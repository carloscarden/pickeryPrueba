import { AfterViewInit, Component, ViewChild } from '@angular/core';

declare var Packery: any;
declare var Draggabilly: any;


@Component({
  selector: 'app-tabla-periodica',
  templateUrl: './tabla-periodica.component.html',
  styleUrls: ['./tabla-periodica.component.scss']
})
export class TablaPeriodicaComponent implements AfterViewInit{
  @ViewChild('grid') grid: any;   
  packery: any;

    constructor() {}

  ngAfterViewInit(){
      var packery = new Packery(this.grid.nativeElement, {
        itemSelector: '.grid-item', columnWidth: 100 });

      packery.getItemElements().forEach( function( itemElem: any ) {
        var draggie = new Draggabilly( itemElem );
        packery.bindDraggabillyEvents( draggie );
      });         
  }


}

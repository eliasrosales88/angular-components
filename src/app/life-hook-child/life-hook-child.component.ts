import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-life-hook-child',
  templateUrl: './life-hook-child.component.html',
  styleUrls: ['./life-hook-child.component.css']
})
export class LifeHookChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() elemento: [{name: string, lastname: string}];
  @Input() name: string;
  @ViewChild('text') texto: ElementRef;
  //@ContentChild('contentH3') content: ElementRef;

  constructor() {
    console.log("LifeHook Constructor called from life-hook-child");
  }

  ngOnInit() {
    console.log("ngOnInit called life-hook-child");
    // console.log('ContentChild: ', this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);

    console.log(changes.name.previousValue);  
    if (changes.name.previousValue == 'Gabriel') {
      // this.elemento[0].name = this.elemento[0].name.toUpperCase(); Esto hace que falle el codigo porque asigna un valor despues de que ha verificado un valor previamente. Hay que probar pasarle los cambios directamente desde el padre.
    }
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
    
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
    // console.log('ContentChild: ', this.content);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called!");
    
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
    console.log('Text content:', this.texto.nativeElement.textContent);
    
  }
  
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called");
    
  }
  
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
    
  }
}

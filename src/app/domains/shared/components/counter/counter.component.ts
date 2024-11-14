import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Input, signal, OnInit, OnDestroy, PLATFORM_ID, Inject, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input({required: true}) duration: number = 0; // usar el hardtypo no es obligatorio
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    if (isPlatformBrowser(this.platformId)) { // Esto se va a ejecutar solamente en el navegador
      this.counterRef = window.setInterval(() => {
        console.log('run interval');
        this.counter.update(statePrev => statePrev + 1);
      }, 1000);
    }
  }

  ngAfterViewInit() {
    // after render
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    if (isPlatformBrowser(this.platformId)) {
      window.clearInterval(this.counterRef); // cuando se mate el componente se acaba la tarea
    }
  }

  doSomething() {
    console.log('Change duration');
  }
}

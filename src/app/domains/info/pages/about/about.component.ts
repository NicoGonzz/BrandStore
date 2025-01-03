import { AfterViewInit, Component, signal } from '@angular/core';
import { CounterComponent } from '@shared/components/counter/counter.component';

import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements  AfterViewInit {

    duration = signal(1000);
    message = signal('Hola');

    ngAfterViewInit(){
      console.log('NgAfterview');
      console.log('-'.repeat(10));
    }

    ngOnDestroy(){
      console.log('NgOnDestroy');
    }

    changeDuration(event: Event){
      const input = event.target as HTMLInputElement;
      this.duration.set(input.valueAsNumber)
    }

    changeMessage(event: Event){
      const input = event.target as HTMLInputElement;
      this.message.set(input.value)
    }
}

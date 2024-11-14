import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrls: ['./wave-audio.component.css']
})
export class WaveAudioComponent implements AfterViewInit{

  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;
  private ws!: WaveSurfer;
  isPlaying = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ws = WaveSurfer.create({
        url: this.audioUrl,
        container: this.container.nativeElement
      });
      this.ws.on('play', () => this.isPlaying.set(true));
      this.ws.on('pause', () => this.isPlaying.set(false));
    }
  }

  playPause() {
    if (this.ws) {
      this.ws.playPause();
    }
  }
}

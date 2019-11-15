// =============================================================================
// Audio Component
// (c) Mathigon
// =============================================================================


export class AudioPlayer {
  private el: HTMLAudioElement;

  constructor(url: string) {
    this.el = new Audio(url);
    this.el.preload = 'auto';
  }

  play() {
    this.el.currentTime = 0;
    this.el.play();
  }
}

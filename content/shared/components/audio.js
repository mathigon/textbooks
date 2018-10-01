// =============================================================================
// Audio Component
// (c) Mathigon
// =============================================================================



export class Audio {

  constructor(url) {
    this._el = new window.Audio(url);
    this._el.preload = true;
  }

  play() {
    this._el.currentTime = 0;
    this._el.play();
  }
}

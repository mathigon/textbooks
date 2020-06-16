// ============================================================================
// Audio Utilities
// (c) Mathigon
// ============================================================================


const Context = (window as any).AudioContext || (window as any).webkitAudioContext;

const ctx = Context ? (new Context() as AudioContext) : undefined;
export type Beep = {stop: () => void};

export function beep(duration = 0): Beep {
  if (!ctx) return {stop: () => undefined};

  // TODO Prevent multiple beeps from running at once.
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(1, ctx.currentTime + 0.05);

  osc.type = 'sine';
  osc.start(0);

  const stop = () => {
    // TODO Fix 'click' when stopping...
    gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.stop(ctx.currentTime + 0.05);
  };

  if (duration) setTimeout(stop, duration - 0.1);

  return {stop};
}

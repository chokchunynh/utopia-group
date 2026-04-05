/**
 * AudioWorklet processor that captures mic audio as 16-bit PCM at the
 * AudioContext's sample rate (should be created with 16 kHz).
 * Buffers ~100 ms of audio before posting to the main thread.
 */
class PCMProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this._buffer = new Float32Array(0);
    this._chunkSize = 1600; // 100 ms at 16 kHz
  }

  process(inputs) {
    const input = inputs[0];
    if (!input || input.length === 0 || input[0].length === 0) return true;

    const samples = input[0];

    // Append new samples to buffer
    const next = new Float32Array(this._buffer.length + samples.length);
    next.set(this._buffer);
    next.set(samples, this._buffer.length);
    this._buffer = next;

    // Flush complete chunks
    while (this._buffer.length >= this._chunkSize) {
      const chunk = this._buffer.slice(0, this._chunkSize);
      this._buffer = this._buffer.slice(this._chunkSize);

      // Convert Float32 → Int16
      const int16 = new Int16Array(chunk.length);
      for (let i = 0; i < chunk.length; i++) {
        const s = Math.max(-1, Math.min(1, chunk[i]));
        int16[i] = s < 0 ? s * 32768 : s * 32767;
      }

      this.port.postMessage(int16.buffer, [int16.buffer]);
    }

    return true;
  }
}

registerProcessor("pcm-processor", PCMProcessor);

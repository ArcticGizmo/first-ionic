const NOOP = () => null;

export class Every {
  constructor(duration) {
    this._duration = duration;
    this._callback = NOOP;
  }

  do(callback) {
    this._callback = callback;
    return this;
  }

  start() {
    this.stop();
    this._callback();
    this._interval = setInterval(() => {
      this._callback();
    }, this._duration);
    return this;
  }

  stop() {
    this._interval = clearInterval(this._interval);
    return this;
  }
}

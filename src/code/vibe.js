import { Haptics } from '@capacitor/haptics';

import { isPlatform } from '@ionic/vue';

class VibeWeb {
  constructor() {
    this._timeout = null;
  }

  trigger() {
    const doc = document.documentElement;

    this._timeout = clearTimeout(this._timeout);
    if (!doc.classList.contains('shake')) {
      doc.classList.add('shake');
    }
    this._timeout = setTimeout(() => doc.classList.remove('shake'), 100);
  }
}

class Vibe {
  trigger() {
    Haptics.vibrate();
  }
}

const vibe = isPlatform('desktop') ? new VibeWeb() : Vibe();

export default vibe;

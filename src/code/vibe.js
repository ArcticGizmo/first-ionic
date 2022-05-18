import { Haptics } from '@capacitor/haptics';

class Vibe {
  trigger() {
    Haptics.vibrate();
  }
}

export default new Vibe();

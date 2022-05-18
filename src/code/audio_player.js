import { NativeAudio } from '@capacitor-community/native-audio';

import { isPlatform } from '@ionic/vue';

class AudioPlayer {
  constructor() {
    NativeAudio.preload({
      assetId: 'alarm',
      assetPath: 'chime.wav',
      audioChannelNum: 2,
      isUrl: false,
    });
  }

  alarm() {
    return NativeAudio.play({ assetId: 'alarm' });
  }

  // playUntil(assetId, callback ) {

  // }
}

class AudioPlayerWeb {
  constructor() {
    this._player = new Audio(require('@/assets/sounds/chime.wav'));
  }

  alarm() {
    this._player.play();
    return Promise.resolve();
  }
}

let av = null;

if (isPlatform('desktop')) {
  av = new AudioPlayerWeb();
} else {
  av = new AudioPlayer();
}

export default av;

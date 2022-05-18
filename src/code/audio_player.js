import { NativeAudio } from '@capacitor-community/native-audio';

import { isPlatform } from '@ionic/vue';

const SOUNDS = {
  alarm: {
    web: require('@/assets/sounds/chime.wav'),
    native: {
      assetId: 'alarm',
      assetPath: 'chime.wav',
      audioChannelNum: 2,
      isUrl: false,
    },
  },
};

function loadNative() {
  return Object.values(SOUNDS).forEach(data => {
    NativeAudio.preload(data.native);
  });
}

function loadWeb() {
  return Object.entries(SOUNDS).reduce((acc, [key, data]) => {
    acc[key] = new Audio(data.web);
    return acc;
  }, {});
}

class AudioPlayer {
  constructor() {
    loadNative();
  }

  play(name) {
    return NativeAudio.play({ assetId: name });
  }

  stop() {
    return NativeAudio.stop();
  }

  // playUntil(assetId, callback ) {

  // }
}

class AudioPlayerWeb {
  constructor() {
    this._active = undefined;
    this._cache = loadWeb();
  }

  play(name) {
    this.stop();
    const audio = this._cache[name];
    if (!audio) {
      return false;
    }

    audio.play();
    this._active = audio;
  }

  stop() {
    if (!this._active) {
      return;
    }
    try {
      this._active.pause();
    } catch (error) {
      console.error(error);
      return;
    }

    this._active = undefined;
  }

  // playUntil
}

let av = null;

if (isPlatform('desktop')) {
  av = new AudioPlayerWeb();
} else {
  av = new AudioPlayer();
}

export default av;

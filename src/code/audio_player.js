import { NativeAudio } from '@capacitor-community/native-audio';

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

export default new AudioPlayer();

<template>
  <base-page>
    <ion-button @click="onAlarm">Play Alarm</ion-button>
    <ion-button @click="onVibrate">Vibrate</ion-button>
  </base-page>
</template>

<script>
import BasePage from './BasePage.vue';
import { IonButton } from '@ionic/vue';

import AudioPlayer from '@/code/audio_player';
import Vibe from '@/code/vibe';

export default {
  name: 'TimerPage',
  components: {
    BasePage,
    IonButton,
  },
  methods: {
    onAlarm() {
      AudioPlayer.alarm();
    },
    onVibrate() {
      Vibe.trigger();
    },
  },
};
</script>

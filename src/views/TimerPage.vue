<template>
  <base-page> <ion-button @click="onAlarm">Play Alarm</ion-button> </base-page>
</template>

<script>
import BasePage from './BasePage.vue';
import { IonButton } from '@ionic/vue';

import AudioPlayer from '@/code/audio_player';

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
  },
};
</script>

<template>
  <base-page>
    <CircleProgress :percent="progress" />

    <ion-button @click="onStart">Start</ion-button>
    <ion-button @click="onStop">Stop</ion-button>
    <ion-button @click="onAlarm">Play Alarm</ion-button>
    <ion-button @click="onVibrate">Vibrate</ion-button>
  </base-page>
</template>

<script>
import BasePage from './BasePage.vue';
import { IonButton } from '@ionic/vue';

import 'vue3-circle-progress/dist/circle-progress.css';
import CircleProgress from 'vue3-circle-progress';

import AudioPlayer from '@/code/audio_player';
import Vibe from '@/code/vibe';
import { Every } from '@/code/util';

export default {
  name: 'TimerPage',
  components: {
    BasePage,
    IonButton,
    CircleProgress,
  },
  data() {
    return {
      totalDuration: 5,
      duration: 0,
      interval: null,
      alert: new Every(2000).do(() => {
        Vibe.trigger();
        AudioPlayer.play('alarm');
      }),
    };
  },
  computed: {
    progress() {
      return (this.duration / this.totalDuration) * 100;
    },
  },
  mounted() {},
  methods: {
    stopInterval() {
      this.interval = clearInterval(this.interval);
    },
    startInterval() {
      this.stopInterval();
      this.duration = this.totalDuration;
      this.interval = setInterval(() => {
        this.duration -= 1;
        if (this.duration <= 0) {
          this.complete();
        }
      }, 1000);
    },
    onStart() {
      this.alert.stop();
      this.startInterval();
    },
    onStop() {
      this.alert.stop();
      this.stopInterval();
    },
    complete() {
      this.onStop();
      this.alert.start();
    },
    onAlarm() {
      AudioPlayer.play('alarm');
    },
    onVibrate() {
      Vibe.trigger();
    },
  },
};
</script>

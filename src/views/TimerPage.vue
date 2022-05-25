<template>
  <base-page>
    <div class="container" :style="`height: ${size}; width: ${size}`">
      <div class="graphic">
        <CircleProgress v-if="size" class="progress" :percent="progress" :size="size" />
      </div>
      <div class="text">
        <div v-if="running || duration > 0" class="timer-running">
          <input
            :style="inputStyle"
            class="hours"
            type="number"
            v-model="components.hours"
            disabled
          />
          :
          <input
            :style="inputStyle"
            class="minutes"
            type="number"
            v-model="components.minutes"
            disabled
          />
          :
          <input
            :style="inputStyle"
            class="seconds"
            type="number"
            v-model="components.seconds"
            disabled
          />
        </div>
        <div v-else class="timer">
          <input :style="inputStyle" class="hours" type="number" v-model="hours" />
          :
          <input :style="inputStyle" class="minutes" type="number" v-model="minutes" />
          :
          <input :style="inputStyle" class="seconds" type="number" v-model="seconds" />
        </div>
      </div>
    </div>

    <ion-button @click="onStart" :disabled="!canStart">Start</ion-button>
    <ion-button @click="onStop">Stop</ion-button>
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
      hours: 0,
      minutes: 0,
      seconds: 10,
      size: null,
      duration: 0,
      interval: null,
      cancelled: false,
      running: false,
      alert: new Every(2000).do(() => {
        Vibe.trigger();
        AudioPlayer.play('alarm');
      }),
    };
  },
  computed: {
    totalDuration() {
      return this.hours * 3600 + this.minutes * 60 + this.seconds;
    },
    progress() {
      if (!this.totalDuration) {
        return 0;
      }
      return (this.duration / this.totalDuration) * 100;
    },
    components() {
      if (!this.duration || !this.totalDuration) {
        return {
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      let duration = this.duration;

      const seconds = duration % 60;
      duration = Math.floor(duration / 60);
      const minutes = duration % 60;
      duration = Math.floor(duration / 60);
      const hours = duration % 60;

      return {
        hours,
        minutes,
        seconds,
      };
    },
    canStart() {
      return this.totalDuration > 0 && !this.running;
    },
    inputStyle() {
      const size = this.size || 0;
      return {
        fontSize: `${size / 10}px`,
        width: `${size / 5}px`,
      };
    },
  },
  mounted() {
    this.size = Math.min(window.innerHeight, window.innerWidth) * 0.8;
  },
  beforeUnmount() {
    this.stopCountDown();
  },
  methods: {
    stopCountDown() {
      this.interval = clearInterval(this.interval);
    },
    startCountDown() {
      this.running = true;
      this.interval = setInterval(() => {
        this.duration -= 1;
        if (this.duration <= 0) {
          this.finished();
        }
      }, 1000);
    },
    onStart() {
      if (this.interval) {
        return;
      }
      if (this.duration === 0) {
        this.duration = this.totalDuration;
      }

      this.startCountDown();
    },
    onStop() {
      this.stopCountDown();
      if (this.duration === 0) {
        this.alert.stop();
      }

      if (!this.running) {
        this.duration = 0;
      }

      this.running = false;
    },
    finished() {
      this.stopCountDown();
      this.alert.start();
    },
  },
};
</script>

<style scoped>
.egg {
  width: 100% !important;
}

.container {
  display: grid;
}

.graphic {
  grid-area: 1 / 1;
}

.graphic .progress {
  margin: auto;
}

.text {
  z-index: 2;
  grid-area: 1 / 1;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timer {
  width: 80%;
}

.timer input {
  width: 25%;
}

.timer-running input {
  user-select: none;
}
</style>

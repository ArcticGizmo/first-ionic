<template>
  <base-page>
    <strong class="capitalize">{{ $route.fullPath }} -- {{ $route.meta.title }}</strong>
    <p>
      Explore
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
      >
        UI Components
      </a>
    </p>
    <ion-button @click="onToast">Toast</ion-button>
    <ion-button @click="onRequestPermission">Request</ion-button>
    <ion-button @click="onNotificationOld">Notification Old</ion-button>
    <ion-button @click="onNotificationSimple">Notification Simple</ion-button>
    <ion-button @click="onNotificationActions">Notification Simple</ion-button>
  </base-page>
</template>

<script>
import BasePage from '@/views/BasePage.vue';
import { IonButton, toastController } from '@ionic/vue';
import Notifications from '@/code/notifications';
// https://capacitorjs.com/docs/v2/apis/local-notifications
// https://www.youtube.com/watch?v=bww4a4B43tM&ab_channel=SimonGrimm
import { LocalNotifications } from '@capacitor/local-notifications';

export default {
  name: 'HomePage',
  components: {
    BasePage,
    IonButton,
  },
  methods: {
    onRequestPermission() {
      Notifications.requestPermission().then(() => {});
    },

    async onToast() {
      const toast = await toastController.create({ message: 'This is a toast', duration: 2000 });
      toast.present();
    },
    async onNotificationOld() {
      const notifs = await LocalNotifications.schedule({
        notifications: [
          {
            title: 'Title',
            body: 'Body',
            id: 1,
            schedule: { at: new Date(Date.now() + 1000 * 5) },
            sound: null,
            attachments: null,
            actionTypeId: '',
            extra: null,
          },
        ],
      });
      LocalNotifications.requestPermissions().then(resp => {
        console.dir(resp);
      });
      console.dir(notifs);
      LocalNotifications.checkPermissions().then(a => console.dir(a));
    },
    async onNotificationSimple() {
      Notifications.create({ title: 'This is a simple one', body: 'body', id: 2 });
    },
    async onNotificationActions() {
      Notifications.withActions({ title: 'This is an action one', body: 'body', id: 3 });
    },
  },
};
</script>

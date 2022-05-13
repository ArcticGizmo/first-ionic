<template>
  <ion-app>
    <Layout :routes="routes" />
  </ion-app>
</template>

<script>
import Layout from '@/layout/Layout.vue';

import { IonApp } from '@ionic/vue';
import router from '@/router';

export default {
  name: 'App',
  components: {
    IonApp,
    Layout,
  },
  computed: {
    routes() {
      return router.options.routes.filter(r => r.path && !r.meta.hide);
    },
  },
};
</script>

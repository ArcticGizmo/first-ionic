<template>
  <ion-split-pane content-id="main-content">
    <ion-menu content-id="main-content" type="overlay">
      <ion-content>
        <ion-list>
          <ion-list-header>User Name</ion-list-header>
          <ion-note>Flavour text</ion-note>

          <ion-menu-toggle :auto-hide="false" v-for="(page, index) in routes" :key="index">
            <ion-item
              router-direction="root"
              :router-link="page.path"
              :class="{ selected: page.path === $route.path }"
              lines="none"
              :detail="false"
            >
              <ion-icon
                :ios="page.meta.iosIcon || page.meta.icon"
                :md="page.meta.mdIcon || page.meta.icon"
              />
              <ion-label>{{ page.meta.title }}</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>
      </ion-content>
      <ion-footer>
        <ion-menu-toggle>
          <ion-item router-direction="root" router-link="/settings" lines="none">
            <ion-icon :ios="settingsIcon" :md="settingsIcon" />
            <ion-label>Settings</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-footer>
    </ion-menu>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-split-pane>
</template>

<script>
import {
  IonContent,
  IonIcon,
  IonNote,
  IonFooter,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/vue';

import { settingsSharp } from 'ionicons/icons';

export default {
  name: 'Layout',
  components: {
    IonContent,
    IonIcon,
    IonItem,
    IonNote,
    IonLabel,
    IonList,
    IonFooter,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonRouterOutlet,
    IonSplitPane,
  },
  props: {
    routes: { type: Array, default: () => [] },
  },
  data() {
    return {
      settingsIcon: settingsSharp,
    };
  },
};
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  --padding-start: 8px;
  --padding-end: 8px;
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list ion-list-header {
  font-size: 22px;
  font-weight: 600;
  min-height: 20px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  border-radius: 4px;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  padding-left: 30px;
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}

ion-footer {
  margin-bottom: 10px;
}
</style>

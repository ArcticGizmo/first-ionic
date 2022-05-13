import { LocalNotifications } from '@capacitor/local-notifications';

const ACTION_TYPES = [
  {
    id: 'CHAT_MSG',
    actions: [
      {
        id: 'view',
        title: 'Open Chat',
      },
      {
        id: 'remove',
        title: 'Dismiss',
        destructive: true,
      },
      {
        id: 'respond',
        title: 'Respond',
        input: true,
      },
    ],
  },
];

LocalNotifications.registerActionTypes({ types: ACTION_TYPES });

class Notifications {
  requestPermission() {
    return LocalNotifications.requestPermissions();
  }

  create(opts = {}) {
    return LocalNotifications.schedule({ notifications: [opts] });
  }

  withActions(opts = {}) {
    return this.create({ ...opts, actionTypeId: 'CHAT_MSG' });
  }
}

export default new Notifications();

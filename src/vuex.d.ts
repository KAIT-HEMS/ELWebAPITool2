// vuex.d.ts
// VueX で定義する global な store の TypeScript の type 定義

import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // ストアのステートを宣言する
  interface State {
    serverSelection: string,
    serverUrl: string,
    apiKey: string,
    request: string,
    statusCode: string,
    response: string,
    logId: number,
    logArray: Log[],
    notificationData: NotificationData,
    webSocketIsConnected: boolean,
  }

  // `this.$store` の型付けを提供する
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

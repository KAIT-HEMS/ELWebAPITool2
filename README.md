# EL_WebAPI_Tool2 ユーザーマニュアル

## Abstract

EL_WebAPI_Tool2 は、ECHONET Lite WebAPI で定義された API を利用して Server にアクセスすることができるクライアント側のアプリケーションプログラムです。

エコーネットコンソーシアムが管理している ECHONET Lite WebAPI 実験クラウド(\*1) と、神奈川工科大学スマートハウス研究センターが管理している ECHONET Lite WebAPI 実証システム(\*2) にアクセスすることを想定している。

(\*1) ECHONET Lite WebAPI 実験クラウドは、ECHONET Lite WebAPI のリファレンスサーバーである。ECHONET Lite WebAPI で定義された全ての API を実装している。デバイスはサーバー内で静的にエミュレーションしている。EL_WebAPI_Tool2 は、実験クラウドのデバイス設定機能も備えている。

(\*2) ECHONET Lite WebAPI 実証システムは、ECHONET Lite WebAPI を利用して ECHONET Lite の実機を制御することを目的としたシステムである。ECHONET Lite の実機が接続された LAN 内に、実証システム対応の Gateway 装置(*3) を設置することで、ECHONET Lite WebAPI を利用して インターネット経由でECHONET Lite の実機を制御できる。






実験クラウドにアクセスし、ECHONET Lite WebAPI をあれこれ試すことができるツールである。
EL_WebAPI_Tool2(EWT2) は、EL_WebAPI_Tool を refactoring し、機能追加を行う。

- Refactoring
  - バックエンド
    - プログラム開発は不要
    - serve module を使って、static な folder /dist を公開する
  - フロントエンド
    - 開発環境として Vue CLI, TypeScript を採用
    - サーバーへのアクセスは従来バックエンドでおこなっていた。今回はフロントエンドで行う。
      - fetch を利用する
    - データ保存のために localStorage を使う
    - ログダウンロードは標準機能を使う
- 機能追加
  - EL WebAPI 実証システムに対応する
    - アクセス先のサーバーを切り替えられる様にする
    - サーバーからの通知 (websocket) に対応する


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Readme ELWebAPITool

## 1. Abstract

ELWebAPITool は、エコーネットコンソーシアムが策定した [ECHONET Lite WebAPI](https://echonet.jp/web_api/#guideline) を利用してサーバーにアクセスするクライアント側のアプリケーションプログラムです。Windows または MacOS 上で動作します。

エコーネットコンソーシアムが運用している ECHONET Lite WebAPI 実験サーバーと、神奈川工科大学スマートハウス研究センターが運用している ECHONET Lite WebAPI 実証システムにアクセスすることを想定しています。

ECHONET Lite WebAPI 実験サーバー（以下、実験サーバーと省略します）は、ECHONET Lite WebAPI のリファレンスサーバーです。ECHONET Lite WebAPI で定義された全ての API を実装しています。制御対象デバイスはサーバー内で静的にエミュレーションしています。ELWebAPITool は、実験サーバーのデバイス設定機能も備えています。

実験サーバーは、エコーネットコンソーシアムの会員企業の方が利用できます。[エコーネットコンソーシアムの会員限定ページ](https://echonet.jp/m_only/web_api_cloud/) から実験サーバーのアカウントを作成し、あらかじめAPI キーを取得してください。

ECHONET Lite WebAPI 実証システム（以下、実証システムと省略します）は、ECHONET Lite WebAPI を利用して ECHONET Lite の実機を制御することを目的としたシステムです。ECHONET Lite の実機が接続された LAN 内に、実証システム対応の Gateway 装置を設置することで、ECHONET Lite WebAPI を利用して インターネット経由でECHONET Lite の実機を制御することができます。

実証システムは、神奈川工科大学スマートハウス研究センターとの共同研究で利用することができます。実証システムに関しては[神奈川工科大学スマートハウス研究センター](http://sh-center.org/contactus.html)に問い合わせください。

## 2. Installation & Setup

ELWebAPITool は、Node.js というプログラムと、Web ブラウザーを利用して動作します。

### 2.1 Node.js のインストール

- [Node.js のホームページ](https://nodejs.org/ja) にアクセスし、推奨版をダウンロードします。
- ダウンロードしたインストーラを使って Node.js をインストールします。Node.js のインストール中に、npm と呼ぶツールも自動でイントールされます。

### 2.2 ELWebAPITool のインストール

- ELWebAPITool の zip file をエコーネットコンソーシアムのホームページからダウンロードします。
- zip file を適当なフォルダに移動して、解凍します。
- コマンドプロンプト(PC) またはターミナル(Mac) を起動します。
- このコマンドプロンプトまたはターミナルで CD コマンドを使い、zip fileを解凍したフォルダに移動します。
- 次のコマンドを実行して、必要なモジュールをインストールします。

```shell
npm ci
```

- 次のコマンドを実行して、プログラムをビルドします。しばらくすると、"Build complete. The dist directory is ready to be deployed." というメッセージが表示されます。これで準備は終了です。

```shell
npm run build
```

### 2.3 ELWebAPITool の実行

- 次のコマンドを実行して、本アプリを起動します。

```shell
npm start
```

- Web Browser（Chrome推奨）を起動し、http://localhost:3010 をアクセスします。
- Home 画面が表示されます。
- 画面右上の Setting アイコンをクリックして Setting 画面に移動します。
- 実験サーバーにアクセスする場合は、
  - "API key for 実験サーバー" のテキストフィールドに API key を入力します。
  - 画面右上の Home アイコンをクリックして Home 画面に戻ります。
- 実証システムにアクセスする場合は、
  - "Select a server" で "実証システム" を選択します。
  - "API key for 実証システム" のテキストフィールドに API key を入力します。
  - 画面右上の Home アイコンをクリックして Home 画面に戻ります。
  - Home 画面の "Connect web socket" をクリックします。
  - 以降の操作は、実験サーバーのアクセスと同じです。

<!-- views/AboutView.vue -->
<!-- About page を作成する -->

<template>
  <div class="about">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">ELWebAPITool について</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="about-this-tool">
        <div>
          <p>
            ELWebAPITool は、エコーネットコンソーシアムが策定した
            <a
              href="https://echonet.jp/web_api/#guideline"
              target="_blank"
              rel="noreferrer"
            >
              ECHONET Lite WebAPI
            </a>
            を利用してサーバーにアクセスするクライアント側のアプリケーションプログラムです。
            Windows または MacOS 上で動作します。
          </p>
          <p>
            エコーネットコンソーシアムがサービスを提供している ECHONET Lite
            WebAPI
            実験クラウドと、神奈川工科大学スマートハウス研究センターがサービスを提供している
            ECHONET Lite WebAPI 実証システムにアクセスすることを想定しています。
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">実験クラウドについて</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="about-jikkenn-server">
        <div>
          <p>
            ECHONET Lite WebAPI
            実験クラウド（以下、実験クラウドと省略します）は、 ECHONET Lite
            WebAPI のリファレンスサーバーです。 ECHONET Lite WebAPI
            で定義された全ての API を実装しています。
            制御対象機器はサーバー内で静的にエミュレーションしています。
            ELWebAPITool
            は実験クラウドのデバイスエミュレーション設定機能も備えています。
          </p>
          <p>
            実験クラウドは、エコーネットコンソーシアムの会員企業の方が利用できます。
            エコーネットコンソーシアムの
            <a
              href="https://echonet.jp/m_only/web_api_cloud/"
              target="_blank"
              rel="noreferrer"
            >
              会員限定ページ
            </a>
            から実験クラウドのアカウントを作成し、あらかじめ API
            キーを取得してください。
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">実証システムについて</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="about-jisshou-system">
        <div>
          <p>
            ECHONET Lite WebAPI
            実証システム（以下、実証システムと省略します）は、 ECHONET Lite
            WebAPI を利用して ECHONET Lite 機器を制御するシステムです。ECHONET
            Lite の実機が接続された LAN 内に実証システム対応の Gateway
            装置を設置することで、ECHONET Lite WebAPI を利用して
            インターネット経由でECHONET Lite の実機を制御することができます。
            拡張機能 bulks, groups, histories は対応していません。
          </p>

          <p>
            実証システムに関しては
            <a
              href="http://sh-center.org/contactus.html"
              target="_blank"
              rel="noreferrer"
            >
              神奈川工科大学スマートハウス研究センター
            </a>
            に問い合わせください。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

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
            ELWebAPITool (elwebapitool2)
            は、エコーネットコンソーシアムが策定した
            <a
              href="https://echonet.jp/web_api/#guideline"
              target="_blank"
              rel="noreferrer"
            >
              ECHONET Lite WebAPI
            </a>
            を利用してサーバーにアクセスするクライアント側のアプリケーションプログラムです。Windows
            または MacOS で動作します。
          </p>
          <p>
            エコーネットコンソーシアムが運用している ECHONET Lite WebAPI
            実験サーバーと、神奈川工科大学スマートハウス研究センターが運用している
            ECHONET Lite WebAPI 実証システムにアクセスすることを想定しています。
          </p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-auto h5 mt-2">実験サーバーについて</div>
          <div class="col"></div>
        </div>
      </div>
      <div class="card-body" id="about-jikkenn-server">
        <div>
          <p>
            ECHONET Lite WebAPI
            実験サーバー（以下、実験サーバーと省略します）は、ECHONET Lite
            WebAPI のリファレンスサーバーです。ECHONET Lite WebAPI
            で定義された全ての API
            を実装しています。制御対象デバイスはサーバー内で静的にエミュレーションしています。EL_WebAPI_Tool2
            は、実験サーバーのデバイス設定機能も備えています。
          </p>
          <p>
            実験サーバーは、エコーネットコンソーシアムの会員企業の方が利用できます。エコーネットコンソーシアムの
            <a
              href="https://echonet.jp/m_only/web_api_cloud/"
              target="_blank"
              rel="noreferrer"
            >
              会員限定ページ
            </a>
            から実験サーバーのアカウントを作成し、あらかじめAPI
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
            実証システム（以下、実証システムと省略します）は、ECHONET Lite
            WebAPI を利用して ECHONET Lite
            の実機を制御することを目的としたシステムです。ECHONET Lite
            の実機が接続された LAN 内に、実証システム対応の Gateway
            装置を設置することで、ECHONET Lite WebAPI を利用して
            インターネット経由でECHONET Lite の実機を制御することができます。
          </p>

          <p>
            実証システムは、神奈川工科大学スマートハウス研究センターとの共同研究で利用することができます。実証システムに関しては
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

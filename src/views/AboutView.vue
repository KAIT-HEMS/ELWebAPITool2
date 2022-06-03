<!-- views/AboutView.vue -->
<!-- About page を作成する -->

<template>
  <div class="about">
    <div>
      <h4>ECHONET Lite WebAPI Toolについて</h4>
      <div>
        この Tool は、エコーネットコンソーシアムが策定した
        <a
          href="https://echonet.jp/web_api/#guideline"
          target="_blank"
          rel="noreferrer"
        >
          ECHONET Lite WebAPI
        </a>
        の仕様を理解するためのツールです。<br />
        エコーネットコンソーシアムが会員向けに運用している実験サーバーへのアクセスを想定しています。<br />
        実験サーバーについては
        <a
          href="https://echonet.jp/m_only/web_api_cloud/"
          target="_blank"
          rel="noreferrer"
        >
          こちらの会員限定ページ
        </a>
        を参照ください。
      </div>

      <h4>apiKeyについて</h4>
      <div>
        このツールを使って実験サーバーにアクセスするには、あらかじめユーザー登録を行い、apiKeyの取得が必要です。<br />
        ユーザー登録は、上記の会員限定ページから行うことができます。<br />
        この Tool
        の設定画面でapiKeyを入力したのち、設定保存ボタンをクリックしてください。
      </div>
    </div>
  </div>
</template>

# ReLog website

人との記憶を残すReLogの公式サイト。Astroの静的生成、TypeScript、標準HTML/CSSを使用します。React、クライアントルーター、CSS-in-JS、翻訳ランタイムは不要です。

## 開発・検証

Node.js **22.23.4以上**（`.nvmrc`: 22.23.5）。Node 20では最新Astroを実行できません。

```sh
nvm use
npm ci
npm run dev
```

開発URL: http://127.0.0.1:4321/ReLog-page/

```sh
npm run build
npx playwright install chromium webkit
npm test
npm run preview
```

- `check`: Astro/TypeScript型検査
- `build`: 型検査＋静的HTML/CSS・共有PNG・サイトマップ生成。出力先は `dist/`
- `test`: Chromium・モバイルサイズ・WebKitで、3言語、JS無効時、FAQ、旧URL、リンク、OGP、WCAG AA、横はみ出しを検証
- `preview`: ビルド済みサイトを表示
- `.vscode/tasks.json`: VS Codeから実行できるビルドタスク

テストは最初にビルドしてから実行します。ブラウザテストは外部サービスへ送信を行いません。

## 構成

| 場所 | 役割 |
| --- | --- |
| `src/data/site.ts` | 日本語・英語・繁体字のコンテンツ、外部リンクの正本 |
| `src/layouts/Layout.astro` | 共通ヘッダー・フッター・SEO・言語リンク |
| `src/components/` | ホームと情報ページ。架空UIは使用しない |
| `src/styles/global.css` | デザイントークン、CSS Layers、レスポンシブ、印刷・動きの軽減 |
| `src/pages/` | Astroファイルベースの静的ルーティング |
| `src/assets/social-card.svg` | 共有カードの文字原稿。元ロゴを合成しビルド時だけPNG化 |
| `tests/` | Playwright＋axeによるブラウザテスト |

ルートは日本語。英語は `en/`、繁体字は `zh/`。各言語にホーム・privacy・contactがあります。言語切り替えは現在のページを維持する通常のリンクで、Cookieや自動転送は使いません。HTMLのlang、canonical、hreflang、OGPを生成します。

FAQはネイティブの `details/summary`。ナビゲーションは折り返す常時表示のリンクで、独自のメニュー状態管理はありません。外部フォント・解析・広告・トラッキングCookieは追加していません。

**唯一のクライアントスクリプト**は、日本語ホームの旧HashRouter URL (`#/privacy`, `#/contact`) を静的ページへ移す互換処理です。アプリからの既存リンクを壊さず、通常ページはJavaScript無効でも使えます。

## コンテンツ更新時の注意

- 元のテーマ色 `#FF75B2`（hover `#E55D9A`）と `public/icon_nobg.png` を維持します。新しいロゴ・別のテーマ色には差し替えません。
- 実アプリと違う関係図・架空人物・疑似画面は掲載しません。スクリーンショットは実アプリで撮影したものに限り、未入手の場合はロゴと文章で紹介します。
- ピンク上の文字は濃色にしてコントラストを確保します。テーマ色自体を濃いローズなどへ変更しません。
- App Storeの仮IDは撤去済み。正しいURLを確認できるまで、ダウンロード可能とは案内しません。
- AIは型定義と設計の段階。提供中の機能として掲載しません。通信実装を追加したらプライバシー説明も再確認してください。
- 端末保存とiCloud同期を区別します。「一切の情報を収集しない」「漏洩リスクがない」とは断言しません。
- お問い合わせは既存Googleフォームの `viewform` へ直接移動します。`no-cors` fetchによる偽の送信成功表示はありません。
- Safari/iOSとキーボード操作・拡大表示は、公開前に手動でも確認してください。自動検査は完全な適合認証ではありません。

## 公開

公式URL: https://twsho.github.io/ReLog-page/

GitHub Settings → Pages → Sourceを **GitHub Actions** に設定してください。

`main`へのpushまたはworkflow_dispatchで、型検査・audit・ビルド・ブラウザテスト成功後に公式 `withastro/action` で公開します。PRでは検証だけ実行します。`deploy.sh` はローカルビルドのみで、公開したと誤表示しません。

リポジトリ名やドメインを変える場合は `astro.config.mjs` の `site` / `base` とテストの期待URLを更新してください。base配下の実ファイルを生成するためGitHub PagesでもHashRouterは不要です。

## 方針の根拠

- [Astro: Why Astro](https://docs.astro.build/en/concepts/why-astro/) — コンテンツ中心の静的サイトに必要な分だけ送信
- [Astro: GitHub Pages](https://docs.astro.build/en/guides/deploy/github/) — 公式Action、site/base構成
- [Astro: i18n](https://docs.astro.build/en/guides/internationalization/) — 標準ロケールURLヘルパー
- [MDN: details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) — 標準の開閉UI
- [web.dev: Learn Accessibility](https://web.dev/learn/accessibility) — セマンティックHTML、フォーカス、コントラスト

専門家の個別審査・認証を受けたという意味ではなく、公式ガイドと標準に基づく構成です。
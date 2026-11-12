# ReLog 公式サイト

友達・家族・同僚・恋人。あらゆる人との記憶と関係の変化を残すアプリ「ReLog」の公式サイトです。

## サイトURL

公式サイトは以下のURLでアクセスできます：
[https://twsho.github.io/ReLog-page/](https://twsho.github.io/ReLog-page/)

## プロジェクト構成

- `Doc/` — 実装調査とサイト仕様
- `relog-site/` — Astroで静的生成する3言語サイト
- `.github/workflows/deploy.yml` — 型検査・ブラウザ検証・GitHub Pages公開

## 開発方法

Node.js 22.23.4以降を使用します。バージョン指定は `relog-site/.nvmrc` にあります。

```bash
cd relog-site
npm ci
npm run dev
```

詳細は [relog-site/README.md](./relog-site/README.md) を参照してください。

## 公開

GitHub PagesのSourceは **GitHub Actions** を使用します。mainへのpush後、テストに成功した場合だけデプロイします。

既存アプリが開く `#/privacy` と `#/contact` は、新しい静的ページへ遷移します。

App Storeの既存IDは仮の値だったため撤去しました。正しい配信URLを確認したら掲載してください。AIは現在のiOSコードでは型定義・設計段階のため、提供中とは表記していません。

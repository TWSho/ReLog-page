#!/bin/bash

# ビルドとデプロイを実行するスクリプト
echo "ReLogサイトのGitHub Pagesへのデプロイを開始します..."

# relog-siteディレクトリに移動
cd "$(dirname "$0")/relog-site" || exit

# npmスクリプトを実行
echo "デプロイを実行中..."
npm run deploy

echo "デプロイが完了しました！"
echo "サイトは以下のURLで公開されています："
echo "https://twsho.github.io/ReLog-page/"

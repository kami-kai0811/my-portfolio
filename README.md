my-portfolioのリンク : [my-portfolio](https://my-portfolio-eight-ruby-90.vercel.app/)

<div id="top"></div>

## 使用技術一覧

1. Next.js (App Router) -Web開発向けのReact フレームワーク
2. Tailwind CSS - CSS ユーティリティフレームワーク
3. Google Fonts - パフォーマンス重視のフォント管理
4. nodemailer - 電子メールを送信できる Node.js アプリケーション用のモジュール
5. TypeScript - 静的型付けを付与したJavaScriptのスーパーセット
6. framer-motion - reactに適したモーションライブラリ


※詳細はpackage.jsonをご参照ください

## 目次

1. プロジェクトについて
2. 環境
3. ディレクトリ構成
4. 開発環境構築

<!-- プロジェクトについて -->

## プロジェクトについて

###  私のポートフォリオサイト
このポートフォリオサイトでは、動的なアニメーションや便利な機能を取り入れ、より洗練されたWeb体験を提供しています。

-  Framer Motion を活用し、スムーズなアニメーションを実装  
-  Nodemailer によるメール送信機能を搭載  
-  レスポンシブ対応 で、PC・タブレット・スマートフォンでも快適に閲覧可能 

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン    |
| -------------------- | ------------- |
| React                | 19.0.0        |
| React DOM            | 19.0.0        |
| Next.js              | 15.1.7        |
| nodemailer           | 6.10.0        |
| Prisma               | 6.5.0         |
| framer-motion        | 12.4.7        |
| react-icons          | 5.5.0         |
| TypeScript           | 5.x           |
| Node.js              | 20.x          |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

src 以下のディレクトリ構成

<pre>
└─src
    ├─app
    │  └─api
    │      └─contact
    ├─components
    │  ├─layout
    │  │  ├─Footer
    │  │  └─Header
    │  └─sections
    │      ├─Contact
    │      ├─Hero
    │      ├─Portfolio
    │      └─Skill
    └─config
</pre>


## 🔧 セットアップ方法

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd <repository-directory>


```

### 2. 開発環境構築

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000]を開く

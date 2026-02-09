# ログイン画面 + テトリス

ログイン画面とテトリスのHTML/CSS/JavaScript一式です。

## ファイル構成

- **index.html** - ログイン画面（「テトリスで遊ぶ」リンク付き）
- **tetris.html** - テトリスゲーム
- **styles.css** - スタイル（ダークテーマ・レスポンシブ）
- **script.js** - フォームバリデーション・送信処理
- **README.md** - このファイル

## GitHub Pages で公開する（スマホで友達にURL共有）

1. **GitHub で新しいリポジトリを作成**  
   [github.com/new](https://github.com/new) で、名前を例: `login-screen`、Public、README は追加しなくてOK。

2. **初回だけ** Git に名前とメールを設定していない場合:
   ```bash
   git config --global user.name "あなたの名前"
   git config --global user.email "your@email.com"
   ```

3. **ターミナルで以下を実行**（`YOUR_USERNAME` と `login-screen` を自分のGitHubユーザー名・リポジトリ名に置き換え）:
   ```bash
   cd /Users/sunao.wada/projects/login-screen
   git commit -m "Initial commit: ログイン画面とテトリス"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/login-screen.git
   git push -u origin main
   ```

4. **GitHub のリポジトリ** → **Settings** → **Pages** → Source で **main** ブランチを選んで **Save**。

5. 数分後、`https://YOUR_USERNAME.github.io/login-screen/` で公開されます。このURLを友達に送ればスマホで開けます。

## 使い方

### ブラウザで開く

```bash
# プロジェクトフォルダへ移動
cd /Users/sunao.wada/projects/login-screen

# 簡易サーバーで開く（CORS等を避けたい場合）
python3 -m http.server 8080
# ブラウザで http://localhost:8080 を開く
```

または `index.html` をブラウザで直接開いても動作します。

### バックエンドと連携する場合

`script.js` 内の `setTimeout` 部分を、実際のログインAPI（例: `fetch('/api/login', ...)`）に差し替えてください。

## 機能

- メールアドレス・パスワード入力
- クライアント側バリデーション（必須・形式・8文字以上）
- 「ログイン状態を保持する」チェックボックス
- パスワード忘れ・新規登録のリンク（見た目用）
- 送信時のローディング表示
- 日本語表示・Noto Sans JP フォント
- ダークテーマ・レスポンシブ対応

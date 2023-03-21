# フォルダ構成
デフォルトから変更を加えているものを記載
srcフォルダ配下に、画面に応じてフォルダを生成

- src : 基本コードはこのフォルダ配下に格納
  - core : どのコンポーネントでも使うコンポーネント( ex: Router )
    - sample : サンプルのコンポーネント
      - index.jsx : UIを記述
      - store.js : recoilを用いた状態管理をするところ
      - __ test __ : testファイルを格納
        - index.test.jsx : `../index.jsx`のテスト
        - store.test.js : `../store.js`のテスト
  - home : ホーム画面で使うコンポーネント
- db.json : API(Rails)が完成するまでは、こちらのjsonファイルからデータを読み込む(APIサーバーのモック)
- coverage : テストを実行するとフォルダが生成される(`coverage/lcov-report/index.html`などにアクセスすると、テストの進行具合が見れる)

# front環境の立ち上げ
- `npm run start`でfrontを立ち上げる
- mockサーバーとして、`npm run json`でモック用サーバを立ち上げる
  - モック用がないと社員一覧などが出ない

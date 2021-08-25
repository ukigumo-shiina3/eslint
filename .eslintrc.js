module.exports = { //
    "env": {
        "browser": true, // documentが元々定義されていると認識させる
        "es2021": true, //最新のJSの機能を認識させる
        "node": true // moduleなどのnodeのグローバル変数を認識させる
    },
    "extends": "plugin:react/recomended", // rulesのデフォルトのセットを決める。recommendの場合、パッケージ側が用意しているおすすめの設定を使える
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    }, // parserOptions: 最新の構文を解析できるようになる
    "plugins": [
        "react"
    ], // plugins: rulesに独自の設定を追加する
    "rules": {
        "semi": "error", // "semi": ["error", "always"]でもかける。「"always"」がデフォルトのため省略できる
        "quotes": "error",  // "quotes": ["error", "double"]でもかける。「"double"」がデフォルトのため省略できる
        "react/prop-types": "off", // 「error, warn, off」の中から表記を選択できる
        "no-undef": "error",
        "react/jsx-props-no-spreading": "off",
    }
};

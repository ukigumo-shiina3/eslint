module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error"], // "semi": ["error", "always"]でもかける。「"always"」がデフォルトのため省略できる
        "quotes": ["error"],  // "quotes": ["error", "double"]でもかける。「"double"」がデフォルトのため省略できる
        "react/prop-types": ["off"] // 「error, warn, off」の中から表記を選択できる
    }
};

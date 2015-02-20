titanium/ti 基本コマンド
==========================

## 単一端末でバッグ

sudo npm install -g tishadow --unsafe-perm

### --shadow機能起用
tishadow express

### iosコンパイルとインストールと監視
ti build -p ios -T device --shadow
ti build -p ios -T simulator --retina --shadow

備考:  
ti build -p ios -T device --log-level debug --retina --shadow

### androidコンパイルとインストールと監視
ti build -p android -T device --shadow
ti build -p android -T simulator --shadow

## 複数端末は同時にデバッグ

### shadowサーバー起動
tishadow server

※動作確認  
http://127.0.0.1:3000  

### プロジェクトのフォルダに監視コマンドを起動
tishadow @ run --update


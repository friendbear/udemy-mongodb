
for Windows
##

```
■WindowsへMongoDBをインストール

    インストーラーをダウンロード
    >> MongoDB Enterprise ダウンロード

    インストール
    サービスは登録しないことに注意。

    環境変数の登録
    Path に インストールした MongoDB の bin ディレクトリを追加

    ディレクトリ作成

        C:\MongoDB\server
            │  mongod.cfg
            │  
            ├ data
            └ log

    サービスへ登録

        mongod --config "C:\MongoDB\server\mongod.cfg" --install


■サーバー起動/終了

    サーバー起動

        mongod --config <コンフィグファイルパス>

    または

        mongod --bind_ip <リッスンIP> --port <ポート番号> --dbpath <DBファイル保存先> --logpath <ログファイルパス>

    サーバー終了
    Ctrl + C 


■設定ファイル

    ファイルはYAML形式

    基本設定は以下のような設定ファイル。

        systemLog:
          destination: file
          path: C:\MongoDB\sever\log\mongod.log
          logAppend: true
        storage:
          journal:
            enabled: true
          dbPath: C:\MongoDB\sever\data
        net:
        #  bindIp: 127.0.0.1,192.168.11.100
        #  port: 27017
          bindIpAll: true
```
shutdown
###

* db.adminCommand({shutdown: 1, force: true})

startup
###
* mongod --dbpath <path> --logpath=[full_path]
* mongod --config [config_full_path]

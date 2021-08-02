
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


config
###
```yaml
systemLog:
  destination: file
  path: C:\MongoDB\server\5.0\log\mongod.log
  logAppend: true
storage:
  journal:
    enabled: true
  dbPath: C:\MongoDB\server\5.0\data
net:
  bindIpAll: true
  port: 27017
```

DATA投入
###
* mongo 127.0.0.1:27017/booklog insert.js

DB操作
###
* use <DATABASE>
* db
* show dbs
* db.createCollection("test")
* db.dropDatabase()

コレクション操作
###
* db.createCollection("COLLECTION")
* db."SOURCE".renameCollection("TARGET", "DROP[true|false]")
* db."TARGET".drop()

ドキュメント操作
###
* db."TARGET".insert("DOCUMENT")
* db."TARGET".find("QUERY")
* db."TARGET".update("QUERY", "UPDATE", "OPTION")
  * OPTION {multi: true}
* db."TARGET".remove("QUERY", "JUSTONE")

> document-op1/insert.js, update.js, drop.js

```json
{
  email: "sachiko.sato@sample.co.jp",
  password: "P@ssword",
  name: "佐藤 幸子"
}
```

データ型
###

![img](image/datatype.png)

ドキュメント件数取得
###

* db."TARGET".count("QUERY")
* db."TARGET".find("QUERY").count()

> document-op1/01-counts.js

検索結果のソート
###

カーソル／検索結果セットに対するポインタ
* db."collection".find("QUERY")

* cursor.sort("ORDER")
  * {order: [1| -1]}

検索結果の制限
###

* cursor.skip("OFFSET")
* cursor.limit("LIMIT")


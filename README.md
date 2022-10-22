# 20221021 LT用サンプルソース

## 概要
gRPC接続サンプルです。
BFFアーキテクチャっぽく実装しました。[参考](https://qiita.com/souhei-etou/items/d5de99bb8cba1c59d393)。

フロント-BFFサーバー間はREST APIで通信しています。
BFF-BACKENDサーバー間はgRPCで通信しています。

機能は下記の通りです。
- 注文作成
- 注文一覧取得
## 手順
```
$ cd grpc-ec-sample

# .protoファイルのコンパイル(初回と.proto変更時のみ)
$ make protogen

# docker立ち上げ
$ docker compose up -d
$ docker compose logs -f
```

## リクエストサンプル
### 注文作成API
```
curl --location --request POST 'http://localhost:9000/orders' \
--header 'Content-Type: application/json' \
--data-raw '{
    "customer_id": "1234567890",
    "total": "10000",
    "shipping_address": "東京都新宿区新宿１−１−１"
}'
```
### 注文一覧取得API
```
curl --location --request GET 'http://localhost:9000/customers/1234567890/orders'
```
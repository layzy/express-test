const express = require('express');//expressの読み込み
const app = express();//expressを使用する為の宣言

app.get('/top',(req,res)=> //場所指定してリクエスト&レスポンス
  {res.render('top.ejs');} //指定したファイルを画面に表示
);

app.listen(3000); //localhost:3000でアクセス可能なサーバーを起動【1】$ node app.js
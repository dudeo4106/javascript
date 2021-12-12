# 🔑 Hoisting

## 📌 What is Hoisting

```
num = 1;
var num;

console.log(num) // ---> 1 
```

変数numに1を代入するコードは、以下に宣言しましたが、実行結果が1です。<br>
JSエンジンでは、コードを実行する際にコンパイル過程で全体コードをスキャンし、変数宣言文をコードの最上段に引き上げます。

具体的には、宣言文付きのコードを最上段に載せるのではなく、変数などの宣言文をRecord(Recordは環境レコードで識別子と識別子にバインディングされた値を記録しておくオブジェクト)というところに記録しますが、<br>
この記録された値を使用して、変数宣言文を最上段に引き上げたように実行できます。

<br>

## 📌 Variable Hoisting

```
console.log(num); // ---> undefined

var num = 1;

console.log(num) // ---> 1 
```

JavaScriptエンジンはコードを実行させるときに、全域実行コンテキストの1マスを生成してコールスタックに入れます。<br>
その後、全体のコードをスキャンしながら、実行コンテキストの中にあるEnvironmentRecordの中に変数を記録しておきますが、varキーワードを使って変数を宣言したら、undefinedに初期化しておきます。<br>

整理すると実行コンテキストを作成し、宣言文だけを先に実行してEnvironmentRecordに記録しておく段階を作成段階だといいます。<br>
宣言文以外に、残りのコードを実行するのにこれを実行段階といい、生成段階で情報を参考にしたりアップデートしたりします。

もし、varの代わりにconstを使うなら、値をundefinedとして初期化しないので、ReferenceErrorが発生します。

ES6からconst, letが追加されていますが、JSにおいても宣言ライン以前の変数を参照できないようにしていることから、一般的なプログラミング方式を追求することも補完されています。

## 📌 Function Hoisting

宣言と同時に関数が生成され、宣言前にも関数を使用することができます。<br>
具体的には、関数宣言文は宣言と同時に関数生成を完全にEnvironment Recordに保存しておくので、上記のように宣言前にも関数を使用することができます。

下のコードを見ると、Hoisting を呼び出すコードの位置が関数宣言より先に実行される位置にあります。<br>
しかし、宣言したコード順序とは異なり、関数宣言文が先に実行されることが分かります。

```
Hoisting() // call Hoisting

var Hoisting

function Hoisting() { // declare function
    console.log(1);
}

Hoisting = function () {
    console.log(2);
}
```

<br>

---

📚 参考 : <br>
[https://www.youtube.com/watch?v=EWfujNzSUmw&t=423s](https://www.youtube.com/watch?v=EWfujNzSUmw&t=423s)
<br>
[https://blog.naver.com/sinjoker/221507371077](https://blog.naver.com/sinjoker/221507371077)
<br>
[https://lamarr.dev/javascript/2020/04/07/02.html](https://lamarr.dev/javascript/2020/04/07/02.html)
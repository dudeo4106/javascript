# 🔑 Closure

## 📌　What is Closure

内部関数が外部関数のcontext にアクセスできることを指します。<br>

```
function outter() {
    function inner() {
        const message = 'hello world';
        alert(message);
    }
    inner();
}
outter();
```

内部関数は、外部関数の地域変数にアクセスすることができるが、外部関数の実行が終わって外部関数が消滅した後も内部関数が外部関数の変数にアクセスすることができ、これをclosureといいます。

```
function outter() {
    const message = 'hello world';
    return function() {        
        alert(message);
    }
}
const inner = outter();
inner();
```

outterという関数は、内部関数function(){alert(message)}をreturnして消滅したが、それにもかかわらずinner()呼び出した瞬間、outterの内部関数であるalert(message)を実行します。<br>
messageは、外部関数に存在する値であるにもかかわらず、消えた外部関数の値をアクセスできます。<br>

つまり、closureとは、内部関数が外部関数の地域変数にアクセスでき、外部関数は外部関数の地域変数を使用する内部関数が消滅するまで消滅しない特性を意味します。

```
function factoryPerson(age){
    return {
        getAge : function (){
            return age;
        },
        setAge : function(_age){
            age = _age
        }
    }
}
a = factoryPerson(10);
b = factoryPerson(20);

console.log(a.getAge()); // 10
console.log(b.getAge()); // 20

b.setAge(100);

console.log(a.getAge()); // 10
console.log(b.getAge()); // 100
```

factory Personを共有しているa、bのgetAgeの結果は異なります。<br>
理由は、外部関数が実行されるたびに新しい地域変数を含むclosure が生成されるため、互いに独立したオブジェクトとなります。<br>

結局、ageを読んで修正できるのはfactoryPersonメソッドによって作られたオブジェクトだけです。
privateなプロパティをサポートしないjsのclosure特性で、privateなプロパティが使用できます。<br>

<br>

## 📌 Closure 長所

メリット1. カプセル化

メリット2. データを保存できます。<br>

- 外部関数の実行が終わっても、外部関数の中に変数を使用することができます。<br>
  このように、特定のデータをスコープ内に格納し継続使用できる閉鎖性を持ちます。

メリット3. モジュール化に有利

- closure 関数をそれぞれの変数に割り当てると、それぞれ独立的に値を保存·使用できます。<br>
  closureを通してデータとメソッドを結ぶことができるため、モジュール化に有利です。

<br>

---

📚 参考 : <br>
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
<br>
[https://opentutorials.org/course/743/6544](https://opentutorials.org/course/743/6544)
<br>
[https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1](https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1)
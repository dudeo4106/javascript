# 🔑 Hoisting

## 📌 What is Hoisting

```
num = 1;
var num;

console.log(num) // ---> 1 
```

변수 num에 1을 대입하는 코드는 아래에 선언되었는데도 실행결과가 1이다.<br>
JS엔진에서는 코드를 실행할 때 컴파일 과정에서 전체 코드를 스캔해서, 변수 선언문을 코드의 최상단으로 끌어올린다.

구체적으로는 선언문이 있는 코드를 최상단으로 올리는 것이 아니라 변수 같은 선언문을 Record(Record는 환경 레코드로 식별자와 식별자에 바인딩된 값을 기록해두는 객체)라는 곳에 기록하는데,<br>
이 기록된 값을 사용하여 변수 선언문을 최상단으로 끌어올린 것처럼 실행이 가능하다.

## 📌 Variable Hoisting

```
console.log(num); // ---> undefined

var num = 1;

console.log(num) // ---> 1 
```

자바스크립트 엔진은 코드를 실행시킬 때 전역 실행 컨텍스트 한 칸을 생성해서 콜스택에 넣는다.<br>
그 후, 전체 코드를 스캔하면서 실행컨텍스트 안에 있는 EnvironmentRecord 안에 변수를 기록해두는데, var 키워드를 사용해서 변수를 선언하면 undefined로 초기화해서 넣어둔다.<br>

정리하면 실행컨텍스트를 생성하고, 선언문만 먼저 실행해서 EnvironmentRecord에 기록해두는 단계를 생성 단계라고 한다.<br>
선언문 외에 나머지 코드를 실행하는데 이것을 실행단계라고 하며 생성단계에서 정보를 참고하거나 업데이트한다.

만약 var 대신 const를 사용한다면 이때는 값을 undefined로 초기해 해두지 않기 때문에 Reference Error가 발생한다.

ES6부터 const, let이 추가되었는데 JS에서도 선언 라인 이전에 변수를 참조할 수 없도록 하여 일반적인 프로그래밍 방식을 추구할 수 있도 보완되었다라고도 볼 수 있다.

## 📌 Function Hoisting

```
Hoisting()
var Hoisting

function Hoisting() {
    console.log(1);
}

Hoisting = function () {
    console.log(2);
}
```



<br>

---

📚 참고 : <br>
[https://www.youtube.com/watch?v=EWfujNzSUmw&t=423s](https://www.youtube.com/watch?v=EWfujNzSUmw&t=423s)
<br>
[https://blog.naver.com/sinjoker/221507371077](https://blog.naver.com/sinjoker/221507371077)
<br>
[https://lamarr.dev/javascript/2020/04/07/02.html](https://lamarr.dev/javascript/2020/04/07/02.html)
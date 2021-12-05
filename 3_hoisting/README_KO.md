# 🔑 Hoisting

## 📌 What is Hoisting

```
num = 1;
var num;

console.log(num) // ---> 1 
```

변수 num에 1을 대입하는 코드는 아래에 선언되었는데도 실행결과가 1이다.<br>
JS엔진에서는 코드를 실행할 때 컴파일 과정에서 변수 선언문을 코드의 최상단으로 끌어올리는 기능이 있다.

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
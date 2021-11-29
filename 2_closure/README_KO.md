# 🔑 Closure

내부함수가 외부함수의 context에 접근할 수 있는 것을 가르킨다.<br>

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

내부함수는 외부함수의 지역변수에 접근 할 수 있는데 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있는데 이것을 closure라고 한다.

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

outter라는 함수는 내부함수 function() { alert(message) }를 return해서 소멸되었지만 그럼에도 불구하고 inner() 호출한 순간, outter의 내부함수 인 alert(message)를 실행한다.<br>
message는 외부함수에 존재하는 값임에도 불구하고, 사라진 외부 함수의 값을 접근 할 수 있다.<br>

즉 closure란 내부함수가 외부함수의 지역변수에 접근 할 수 있고, 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는 특성을 의미한다.

<br>

---

📚 참고 : <br>
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
<br>
[https://opentutorials.org/course/743/6544](https://opentutorials.org/course/743/6544)
<br>
[https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1](https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1)
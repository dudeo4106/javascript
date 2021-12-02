# 🔑 Closure

## 📌 What is Closure

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

factoryPerson를 공유하고 있는 a, b의 getAge의 결과는 서로 다르다.<br>
이유는 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 closure가 생성되기 때문에 서로 독립된 객체가 된다.<br>

결국 age를 읽고 수정 할 수 있는 것은 factoryPerson 메소드를 통해서 만들어진 객체뿐이고,
private한 속성을 지원하지 않는 js의 closure특성으로 private한 속성을 사용할 수 있게 된다.<br>

<br>

## 📌 Closure 장점

장점1. 캡슐화

장점2. 데이터를 보존할 수 있다.<br>

- 외부함수의 실행이 끝나더라도 외부 함수 안에 변수를 사용할 수 있다<br>
  이처럼 특정 데이터를 스코프안에 격납하여 계속 사용할 수 있는 폐쇄성을 갖는다.

장점3. 모듈화에 유리하다.

- closure 함수를 각각의 변수에 할당하면 각자 독립적으로 값을 보존 및 사용이 가능하다.<br>
  closure를 통해 데이터와 메소드를 묶을수 있기 때문에 모듈화에 유리

<br>

---

📚 참고 : <br>
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
<br>
[https://opentutorials.org/course/743/6544](https://opentutorials.org/course/743/6544)
<br>
[https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1](https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1)
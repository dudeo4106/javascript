# ๐ Closure

## ๐ What is Closure

๋ด๋ถํจ์๊ฐ ์ธ๋ถํจ์์ context์ ์ ๊ทผํ  ์ ์๋ ๊ฒ์ ๊ฐ๋ฅดํจ๋ค.<br>

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

๋ด๋ถํจ์๋ ์ธ๋ถํจ์์ ์ง์ญ๋ณ์์ ์ ๊ทผ ํ  ์ ์๋๋ฐ ์ธ๋ถํจ์์ ์คํ์ด ๋๋์ ์ธ๋ถํจ์๊ฐ ์๋ฉธ๋ ์ดํ์๋ ๋ด๋ถํจ์๊ฐ ์ธ๋ถํจ์์ ๋ณ์์ ์ ๊ทผ ํ  ์ ์๋๋ฐ ์ด๊ฒ์ closure๋ผ๊ณ  ํ๋ค.

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

outter๋ผ๋ ํจ์๋ ๋ด๋ถํจ์ function() { alert(message) }๋ฅผ returnํด์ ์๋ฉธ๋์์ง๋ง ๊ทธ๋ผ์๋ ๋ถ๊ตฌํ๊ณ  inner() ํธ์ถํ ์๊ฐ, outter์ ๋ด๋ถํจ์ ์ธ alert(message)๋ฅผ ์คํํ๋ค.<br>
message๋ ์ธ๋ถํจ์์ ์กด์ฌํ๋ ๊ฐ์์๋ ๋ถ๊ตฌํ๊ณ , ์ฌ๋ผ์ง ์ธ๋ถ ํจ์์ ๊ฐ์ ์ ๊ทผ ํ  ์ ์๋ค.<br>

์ฆ closure๋ ๋ด๋ถํจ์๊ฐ ์ธ๋ถํจ์์ ์ง์ญ๋ณ์์ ์ ๊ทผ ํ  ์ ์๊ณ , ์ธ๋ถํจ์๋ ์ธ๋ถํจ์์ ์ง์ญ๋ณ์๋ฅผ ์ฌ์ฉํ๋ ๋ด๋ถํจ์๊ฐ ์๋ฉธ๋  ๋๊น์ง ์๋ฉธ๋์ง ์๋ ํน์ฑ์ ์๋ฏธํ๋ค.

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

factoryPerson๋ฅผ ๊ณต์ ํ๊ณ  ์๋ a, b์ getAge์ ๊ฒฐ๊ณผ๋ ์๋ก ๋ค๋ฅด๋ค.<br>
์ด์ ๋ ์ธ๋ถํจ์๊ฐ ์คํ๋  ๋๋ง๋ค ์๋ก์ด ์ง์ญ๋ณ์๋ฅผ ํฌํจํ๋ closure๊ฐ ์์ฑ๋๊ธฐ ๋๋ฌธ์ ์๋ก ๋๋ฆฝ๋ ๊ฐ์ฒด๊ฐ ๋๋ค.<br>

๊ฒฐ๊ตญ age๋ฅผ ์ฝ๊ณ  ์์  ํ  ์ ์๋ ๊ฒ์ factoryPerson ๋ฉ์๋๋ฅผ ํตํด์ ๋ง๋ค์ด์ง ๊ฐ์ฒด๋ฟ์ด๊ณ ,
privateํ ์์ฑ์ ์ง์ํ์ง ์๋ js์ closureํน์ฑ์ผ๋ก privateํ ์์ฑ์ ์ฌ์ฉํ  ์ ์๊ฒ ๋๋ค.<br>

<br>

## ๐ Closure ์ฅ์ 

์ฅ์ 1. ์บก์ํ

์ฅ์ 2. ๋ฐ์ดํฐ๋ฅผ ๋ณด์กดํ  ์ ์๋ค.<br>

- ์ธ๋ถํจ์์ ์คํ์ด ๋๋๋๋ผ๋ ์ธ๋ถ ํจ์ ์์ ๋ณ์๋ฅผ ์ฌ์ฉํ  ์ ์๋ค<br>
  ์ด์ฒ๋ผ ํน์  ๋ฐ์ดํฐ๋ฅผ ์ค์ฝํ์์ ๊ฒฉ๋ฉํ์ฌ ๊ณ์ ์ฌ์ฉํ  ์ ์๋ ํ์์ฑ์ ๊ฐ๋๋ค.

์ฅ์ 3. ๋ชจ๋ํ์ ์ ๋ฆฌํ๋ค.

- closure ํจ์๋ฅผ ๊ฐ๊ฐ์ ๋ณ์์ ํ ๋นํ๋ฉด ๊ฐ์ ๋๋ฆฝ์ ์ผ๋ก ๊ฐ์ ๋ณด์กด ๋ฐ ์ฌ์ฉ์ด ๊ฐ๋ฅํ๋ค.<br>
  closure๋ฅผ ํตํด ๋ฐ์ดํฐ์ ๋ฉ์๋๋ฅผ ๋ฌถ์์ ์๊ธฐ ๋๋ฌธ์ ๋ชจ๋ํ์ ์ ๋ฆฌ

<br>

---

๐ ์ฐธ๊ณ  : <br>
[https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
<br>
[https://opentutorials.org/course/743/6544](https://opentutorials.org/course/743/6544)
<br>
[https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1](https://hanamon.kr/javascript-%ED%81%B4%EB%A1%9C%EC%A0%80/?ckattempt=1)
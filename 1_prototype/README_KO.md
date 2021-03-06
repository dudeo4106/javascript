# ๐ Prototype

## ๐ What is Prototype

์๋ฐ์คํฌ๋ฆฝํธ์์๋ ๊ฐ์ฒด์ ์ํ์ธ ํ๋กํ ํ์์ ์ด์ฉํ Cloning๊ณผ ๊ฐ์ฒดํน์ฑ์ ํ์ฅํด ๋๊ฐ๋ ๋ฐฉ์์ ํตํด ์๋ก์ด ๊ฐ์ฒด๋ฅผ ์์ฑํ๋ค.<br>
ํ๋กํ ํ์์ ๋ง๋ค์ด์ ์๋ก์ด ๊ฐ์ฒด๋ฅผ ๋ง๋ค๊ณ  ์ด๋ ๊ฒ ์์ฑ๋ ๊ฐ์ฒด ์ญ์ ๋ ๋ค๋ฅธ ๊ฐ์ฒด์ ์ํ์ด ๋  ์ ์๋ค.<br>

```
function Car() {
    this.door = 4;
    this.handle = 1;
}
const carA  = new Car();
const carB = new Car();
console.log(carA.door);  // => 4
console.log(carA.handle);  // => 1
console.log(carB.door); // => 4
console.log(carB.handle); // => 1 
```

carA์ carB๋ door์ handle๋ฅผ ๊ณตํต์ ์ผ๋ก ๊ฐ๊ณ  ์๋๋ฐ ๋ฉ๋ชจ๋ฆฌ์๋ door/handle์ด ๊ฐ๊ฐ 2๊ฐ์ฉ ํ ๋น๋๋ค.
๊ทธ๋ ๊ธฐ์ ์์ฒ๋ผ ํ๋กํ ํ์์ผ๋ก ๋ง๋๋ ๊ฒ์ด ์ข๋ค.

Car.prototype์ด๋ผ๋ ๋น Object๊ฐ ์ด๋๊ฐ ์กด์ฌํ๊ณ , Car ํจ์๋ก๋ถํฐ ์์ฑ๋ ๊ฐ์ฒด๋ค์ ์ด๋๊ฐ์ ์กด์ฌํ๋ Object์ ๊ฐ์ ์ฌ์ฉํ  ์ ์๋ค.<br>
๊ตฌ์ฒด์ ์ผ๋ก๋ ์์ฑ์ด ํ๋๋ ์๋ Car๋ผ๋ ํจ์๊ฐ ์ ์๋๊ณ , ํ์ฑ๋จ๊ณ์ ๋ค์ด๊ฐ๋ฉด, Carํจ์์ prototype์์ฑ์ prototype๊ฐ์ฒด๋ฅผ ์ฐธ์กฐํ๋ฉฐ,<br>
prototype ๊ฐ์ฒด ๋ฉค๋ฒ์ธ constructor ์์ฑ์ Car ํจ์๋ฅผ ์ฐธ์กฐํ๋ ๊ตฌ์กฐ๋ฅผ ๊ฐ๋๋ค.

<br>

## ๐ Prototype Object

Prototype Link๊ณผ Prototype Object๋ฅผ ํตํ์ด์ Prototype๋ผ๊ณ  ํ๋ค.<br>

JS์ ๊ฐ์ฒด๋ Function์ผ๋ก ์์ฑ๋๋ค.<br>
ํด๋น ํจ์์ Constructor ์๊ฒฉ์ ๋ถ์ฌํ์ฌ new๋ฅผ ํตํด ๊ฐ์ฒด๋ฅผ ๋ง๋ค์ ์๊ฒ ๋๋ฉฐ, ํจ์๋ง ์์ฑ๋๋ ๊ฒ์ด ์๋๋ผ Prototype Object๋ฅผ ์์ฑ ๋ฐ ์ฐ๊ฒฐํ๋ค.<br>
์์ฑ๋ ํจ์๋ prototype์ด๋ผ๋ ์์ฑ์ ํตํด Prototype Object์ ์ ๊ทผํ  ์ ์๊ณ , ๊ธฐ๋ณธ ์์ฑ์ผ๋ก constructor๊ณผ __proto__๋ฅผ ๊ฐ์ง๊ณ  ์๋ค.<br>

```
constructor: Prototype Object์ ๊ฐ์ด ์์ฑ๋ ํจ์
__proto__: Prototype Link
```

![prototype](./image/prototype.png)

Prototype Object๋ ์ผ๋ฐ์ ์ธ ๊ฐ์ฒด์ด๋ฏ๋ก ์์ฑ์ ๋ง์๋๋ก ์ถ๊ฐ/์ญ์  ๊ฐ๋ฅํ๋ฉฐ,<br>
CarA, CarB๋ Carํจ์๋ก ์์ฑ๋์๊ธฐ๋๋ฌธ์ Car.prototype ์ฐธ์กฐํ  ์ ์๊ฒ ๋๋ค.

<br>

## ๐ Prototype Link

```
function Car() {}

Car.prototype.door = 4;

const carA  = new Car();
console.log(carA.door);  // => 4
```

carA์๋ door๋ผ๋ ์์ฑ์ด ์๋๋ฐ๋ 4๋ผ๋ ๊ฐ์ด ํ๋ฉด์ ๋์จ๋ค.<br>
์ด ์ด์ ๋ __proto__๊ฐ ๊ทธ๊ฒ์ ๊ฐ๋ฅํ๊ฒ ํด์ค๋ค.

prototype์์ฑ์ ํจ์๋ง ๊ฐ์ง๊ณ  ์๋ ๊ฒ๊ณผ๋ ๋ฌ๋ฆฌ __proto__ ์์ฑ์ ๋ชจ๋  ๊ฐ์ฒด๊ฐ ๋น ์ง ์์ด ๊ฐ์ง๊ณ  ์๋ ์์ฑ์ด๋ค.<br>
carA๋ผ๋ ๊ฐ์ฒด๋ door๋ฅผ ๊ฐ๊ณ  ์์ง ์๊ธฐ ๋๋ฌธ์ ํด๋น ์์ฑ์ ์ฐพ์ ๋ ๊น์ง ์์ prototype์ ํ์ ํ๊ณ  ๋ชป ์ฐพ์์ ๊ฒฝ์ฐ์๋ undefined๋ฅผ ๋ฆฌํดํ๋ค.<br>
์ด๊ฒ์ ํ๋กํ ํ์ ์ฒด์ธ์ด๋ผ๊ณ  ํ๋ค.

<br>

---

๐ ์ฐธ๊ณ  : <br>
[https://www.nextree.co.kr/p7323/](https://www.nextree.co.kr/p7323/)
<br>
[https://www.nextree.co.kr/p4150/](https://www.nextree.co.kr/p4150/)
<br>
[http://insanehong.kr/post/javascript-prototype/](http://insanehong.kr/post/javascript-prototype/)
<br>
[https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)
<br>
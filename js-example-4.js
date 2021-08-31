import {capitalizeString} from "/.js-example-export.js";

// 119. destructuring nested object(객체 안의 객체)
/*
118번과 같은 방법을 객체 안의 객체에도 사용할 수 있다.
[var/let/const] {바깥_객체_이름 { 안쪽_객체_이름 : 할당할_변수 } };  <- 이렇게 할당한다.
=> 확장: 객체 안의 객체 안의 객체일 때는? {{{}}} 이렇게 세 쌍의 {} 으로 처리하면 된다.
*/
const programLang = {
  "frontend" : {"basic" : "JavaScript", "advanced" : "React"},
  "backend" : {"basic" : "Java", "advanced" : "Spring"}
}
const {frontend : {basic : myFrontBasic, advanced : myFrontAdvanced}, backend : {basic : myBackBasic, advanced : myBackAdvanced}} = programLang;
console.log(myFrontBasic);
console.log(myFrontAdvanced);
console.log(myBackBasic);
console.log(myBackAdvanced);


// 120. destructuring assignment 사용해서 배열1에다가 배열2 안의 원소들 할당하기
/*
객체의 destructuring과는 달리, 배열에서는 속성의 이름 같은 게 없으므로 어떤 원소를 할당할지 직접적으로 명시할 수 없다.
배열에선 원소가 기본적으로 순서대로 할당된다.
ex) const [var1, var2] = [elem1, elem2, elem3, elem4] 인 경우, var1=elem1, var2=elem2가 자동적으로 할당된다.
* 만약 3번째 원소는 넣지 않고, 4번째 원소는 포함하고 싶다면 어떻게 할까? => , 을 이용한다.
: const [var1, var2, , var3] = [elem1, elem2, elem3, elem4]  => 이러면 elem3은 건너뛰고 var3=elem4 로 할당된다.
*/
const [var1, var2] = [24, 21, 42, 6, 3, 8];
console.log(var1, var2);
const [,,var3,,var4] = [24, 21, 42, 6, 3, 8];
console.log(var3, var4);


// + 다른 배열에다 말고, 여러 변수를 익명함수를 통해 배열로 묶어서, 위치를 바꾸는 것도 가능. = 각 변수에 할당된 값이 서로 바뀜.
let a = 5, b = 7, c = 2, d = 4;
(()=>{  // 익명 함수 선언
  [a, b, c, d] = [b, d, a, c]
})();

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// 121. rest operator`를 사용해서 배열의 일부 원소만 가져오기
/*
rest operator는 '...'으로 배웠는데, rest operator가 꼭 배열의 모든 원소를 가져와야 하는 건 아니다.
120번에서 나온 , 연산자와 결합하면, 배열의 일부만 가져올 수 있다.
ex) const [, , , ...arr] = variable1  => 앞의 3개의 원소를 제외하고 나머지 배열을 variable1에 할당
*/
const arr1 = [1,3,5,7,9,11,13,15,17,19];

function removeFirstTwo(list){
  const [, , ...arr] = list;

  return arr;
}
const arr2 = removeFirstTwo(arr1);
const arr3 = removeFirstTwo(arr2);
console.log(arr2);
console.log(arr3);


// 122. destructuring assignment 사용해서, 객체 중 일부의 속성만 받아서 함수의 매개변수로 사용하기
/*
API로 요청을 받을 때 많이 사용하는 방법.
: API를 통째로 받으면 내가 필요한 정보보다 훨씬 많은 걸 받는데, 이때 destructuring을 이용하면 필요한 정보만 간략히 받을 수 있다.
방법) 매개변수를 받는 () 안에다가, ({받을속성1, 받을속성2, ... }) 이렇게 필요한 속성의 이름을 제시하고 그 이름을 사용하면 된다.
*/
const stats = {
  max : 56.78, standard_deviation : 4.34, median : 34.54, mode : 23.87, min : -0.75, average : 35.85
};

// 사용하지 않은 경우 (객체를 전체로 받아 옴)
const half1 = (function(){
  return function half1(stats){
    return (stats.max + stats.min) / 2.0;
  }
})();

// 사용한 경우(객체 중 필요한 속성만 받음)
const half2 = (function(){
  return function half2({max, min}){
    return (max + min)/2.0;
  }
})();

console.log(half1(stats));
console.log(half2(stats));


// 123. template literal(``)을 통해서 문자열 쉽게 만들기
/*
``(backtick)을 통해서 문자열을 쉽게 만들 수 있다.
장점 3가지:
1. '' 안의 문자열은 줄바꿈을 하거나 여러 줄을 띄어써도 에러가 나지 않는다. (줄바꿈이 자유롭다)
2. `` 안의 문자열에서 "" 나 ''을 써도, escape 할 필요가 없다.
3. ${} 문법을 쓸 수 있는데, ${} 안에 들어가는 내용은 js 문법을 따른다. 즉 js 안에서 선언한 다른 변수 등을 가져다 쓸 수 있다!
*/
const person = {name : "Fuluson Zandi", age : "31"};
const personIntro = `Hello, my name is ${person.name}.
I am ${person.age} years old. Nice to meet you!`;
console.log(personIntro);


// + coding challenge
const result = {
  success : ["max-length", "no=amd", "prefer-arrow-functions"],
  failure : ["no-var", "var-on-top", "linebreak"],
  skipped : ["id-blacklist", "no-dup-keys"]
};

function makeList(arr){
  const resultDisplayArray = [];
  let i=0;
  for(i=0 ; i<arr.length ; i++){
    resultDisplayArray.push(`<li class = "text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultArr = makeList(result.failure);


// 124. simple fields를 이용해서 간결한 object literal declarations 작성해 보기
/*
무슨 뜻? 여러 개의 매개변수를 받아서, 그것들을 속성으로 가진 object를 만드는 간단한 방법을 의미한다.
기존의 방법과 간단한 방법을 비교해 보자.
*/
// 기존 방법
const createObj1 = (name, age, gender) => {
  return {
    name : name,
    age : age,
    gender : gender   // <= 코드가 반복적이다.
  }
}

// 간단한 방법
const createObj2 = (name, age, gender) => ({ name, age, gender });

console.log(createObj1("nemonemo", 23, "F"));
console.log(createObj2("nemonemo", 23, "F"));


// 125, 간결한 declarative function 작성하기
/*
무슨 말인가? : 객체 안에 함수를 포함할 수 있고, 그 함수를 훨씬 더 간단하게 나타낼 수 있다는 말이다.
기존 방법과 간단한 방법을 비교해 보자.
: 함수이름(매개변수이름){실행문} <- 이렇게 바로 나타낼 수 있다.
*/
// 기존 방법
const obj1 = {
  id = 2,
  setId : function(newId){
    "use strict";
    this.id = newId;
  }
};

// 간단한 방법
const obj2 = {
  id = 2,
  setId(newId){
    "use strict";
    this.id = newId;
  }
}


// 126. class 문법을 사용해서, constructor 함수 정의하기
/*
지금까지는 모든 변수를 var/let/const 로 선언했다.
하지만 class 타입의 변수도 있다.
기존 변수와의 차이점 : new 생성자를 이용해서 같은 구조를 가진 여러 객체들을 생성할 수 있다!

+ 함수 안에 class를 선언할 수 있다. 이 경우, 만약 어떤 변수가 해당 함수를 할당받는다면, 그 함수는 그 안의 class를 할당받은 것과도 같다.
*/
class train{
  //  speed;  : js class 안에는 필드(속성)을 정의할 수 없고, 함수(메소드)만 정의할 수 있다.
  constructor(newSpeed){
    this.speed = newSpeed;
  }
  /*  constructor는 하나만 정의할 수 있다.
  constructor(){
    this.speed = 100;
  }
  */
}
const trainThomas = new train(250);
console.log(trainThomas.speed);


// coding challenge`

function makeClass(){
  class Vegetable{
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);


// 127. 외부에서 객체에 접근을 제한하도록 하는 Getter, Setter function 사용하기
/*
1. private로 선언하고 싶은 변수는 변수이름 앞에 _을 붙여서 나타낸다. ex) _id
2. getter, setter는 class의 함수와 달리, 변수들처럼 ()을 사용하지 않고 나타낸다.
*/
function function1(){
  class Thermometer{
    constructor(temp){
      this._temp = 5/9 * (temp-32);
    }
    get temperature(){
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermometer;
}

const var5 = function1();
const var6 = new var5(122);
let var7 = var6.temperature;
var6.temperature = 25;
var7 = var6.temperature;
console.log(var7);


// 128. import와 require의 차이점 이해하기
/*
require : 기존에 사용하던 "다른 파일에서 코드를 가져오는 방법". import와 문법적 차이만 있고 기능적인 차이는 없다.
import : require와 같이, "다른 파일에서 코드를 가져오는 방법" 이지만, 다른 파일에서 export가 선언된 코드만 가져올 수 있다.
export : 현재 파일에서 갖고 있는 코드를 외부의 다른 파일로 보낸다고 선언하는 것.

차이점
1. 문법 : import {가져올 코드/내용} from "export한 파일의 경로"  <- 이때, "./"라고 시작하면 "./"는 현재 파일의 디렉토리를 의미.
2. require는 필요할 때 선언, import는 파일 상단에만 선언.
3. 아직 import를 지원하지 않는 부분들이 있음.
*/

//  const var8 =capitalizeString("hello!");
//  console.log(cap); <- 해당 browser에서는 import가 실행을 안 해서, 일단 주석처리함!


// 129. export를 사용해서 코드 블럭을 재사용하기
/*
(js-example-export.js 파일 참조)
해당 파일에서 다른 파일로 보내고 싶은 코드가 있다면, 그 코드블럭의 맨 앞에 export만 선언하면 된다.
함수도, 변수도 모두 보낼 수 있다.
*/


// 130. * 을 이용해서 특정 파일의 모든 코드 가져오기(import하기)
/*
한 파일의 거의 대부분의 내용을 가져온다면, 일일이 export를 붙이는 것은 너무 번거롭다.
=> import * as 변수1 from "파일1";
: 파일1에서 export한 모든 내용을 변수1에다가 저장하겠다는 것. 꺼내쓸 때에는 변수1을 사용하면 된다.
*/


// 131. export default 설정하기
/*
export default는 한 파일에서 하나만을 export할 때 사용한다.
** 중요! default export를 하면 {변수이름1} 하지 않고, 즉 {}를 사용하지 않아도 된다!
Q. fallback 용어설명이 없어서, 정확한 의미를 모르겠다...!!
*/


// 132. default export를 import하기
/*
131번의 default export를 import하는 방법
import 변수이름1 from "default export를 한 파일이름1"
** 중요! default export를 하면 {변수이름1} 하지 않고, 즉 {}를 사용하지 않아도 된다!
  <-> default export가 아니라면 {}를 반드시 사용해야 함.
*/


//

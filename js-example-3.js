// 90. nested object에 접근하기
/*
- 다음과 같이 객체 안의 또 다른 객체가 있는 경우, 그 안의 객체의 개별 속성에 접근하는 방법
: 바깥_객체_이름.내부_객체_이름["속성_이름"]; <- 이렇게!
*/
var playList = {
    "owner" : "earthyoung",
    "pop" : {
        "ariana grande" : "santa tell me",
        "shawn mendes" : "there's nothing holding me back",
        "ed sheeran" : "shape of you"
    },
    "idol" : [
        "shinee", "txt", "ohmygirl"
    ]
}

var var1 = playList.pop["shawn mendes"];
console.log(var1);


// 91. 배열 안에 객체가 있을 때, 그 객체에 접근하기
/*
- 90번과 비슷하지만, [] 안에 "속성 이름"이 아니라 숫자를 넣음.
배열 안의 속성 : 배열_이름.[객체_몇_번째인지].속성_이름;
배열 안의 배열 : 배열_이름.[객체_몇_번째인지].[배열_몇_번째인지]
*/
var favoriteFood = [
    {
        "type" : "Korean",
        "list" : [
        "kimchi_bokeumbap", "miyeokguk"
        ]
    },
    {
        "type" : "Italian",
        "list" : [
            "risotto", "spaghetti"
        ]
    }
];

var var2 = favoriteFood[0].type;
var var3 = favoriteFood[0].list[0];
console.log(var2);
console.log(var3);


// 92. Record Collection
/*
- coding challenge임.
- 보기와 같은 데이터/객체가 있을 때, id, 속성, 속성값을 매개변수로 주면 update를 시켜주는 function을 만들 것임.

+ js에서 객체 복사하는 방법 :
1. JSON.stringify() 를 통해서 객체를 json 문자열 형식으로 만든다.
2. JSON.parse() 안에 JSON 형식의 문자열을 넣으면 그 문자열을 복사해 준다.
*/
var collection = {
    "2548" : {
        "album" : "Slippery When Wet",
        "artist" : "Bon Jovi",
        "tracks" : [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468" : {
        "album" : "1999",
        "artist" : "Prince",
        "tracks" : [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245" : {
        "artist" : "Robert Palmer",
        "tracks" : [ ]
    },
    "5439" : {
        "album" : "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){

    if(value===""){
        delete collection[id][prop];
    }else if(prop==="tracks"){
        collection[id][prop] = collection[id][prop] || [];
        // 왼쪽의 값이 존재하면, 오른쪽의 첫 번째 값으로 할당하고, 존재하지 않으면 두 번째 값으로 할당한단다. 신기!
        collection[id][prop].push(value);
    }else{
        collection[id][prop] = value;
    }

    return collection;
}

var changedCollection = updateRecords(5439, "tracks", "19warriors");
var changedCollection2 = updateRecords(5439, "tracks", "19248");
console.log(changedCollection2);


// 92. while loop(반복문 1)
/*
- while(조건){실행문} : 조건이 true일 때까지 실행문이 반복 실행된다.
*/
var total = 0;
function sum(limit){
    var i=0;
    while(i<10){
        total += i;
    }
}
sum(10);
console.log(total);


// 93. For loop(반복문 2)
/*
- 형식은 java와 같다 : for(증가/감소시킬 값, 증가/감소할 조건, 증가/감소/얼마나 증감할지){실행문}
*/
var arr1 = [];
for(var i=0 ; i<10 ; i++){
    arr1.push(i);
}
console.log(arr1);


// 94. For Loop : 하나씩 말고, 여러 개 증가하기 - ex. 홀수만 넣기
var arr2 = [];
var arr3 = [];
for(var i=0 ; i<10 ; i+=2){
    arr2.push(i);
}
console.log(arr2);

for(var i=1 ; i<10 ; i+=2){
    arr3.push(i);
}
console.log(arr3);


// 95. For Loop : 숫자 감소시키기
var arr4 = [];
for(var i=31 ; i>0 ; i-=3){
    arr4.push(i);
}
console.log(arr4);


// 96. loop를 사용해서 배열 안의 모든 원소들에 접근하기
/*
- for, while loop 둘 다 가능.
- 배열.length 속성을 이용해서 가능한 것.
*/
var arr5 = [1,5,34,7,2,15,9,4];
var var4 = 0;
for(var i=0 ; i<arr5.length ; i++){
    var4 += i;
}
console.log(var4);


// 97. 중첩 For문(nested for loops)
/*
- for문 안에 또 다른 for문을 사용하는 것을 의미한다.
- while 문으로도 가능. loop 문이면 가능하다.
- 안의 for문을 다 돌면, 바깥 for문의 i가 한 번 증가/감소한다, 그리고 또 안의 걸 다 돌면 바깥 변수가 한 번(1이 아닐수도 있으므로) 변화하고... 이런 식
* 중첩된 반복문일수록, time complexity가 증가한다.
*/
for(var i=0 ; i<10 ; i++){
  for(var j=0 ; j<10 ; j++){
    console.log(i + ' ' + j + ' = ' + (i*j));
  }
}


// 98. Do-While Loop(반복문 3)
/*
- 새로운 반복문!
- while loop와는 다르다.
- 차이 : while문은 코드를 실행하기 전에 조건 확인 <-> do-while는 코드를 실행하고 나서 조건 확인 후 break or not 결정
- 정확히는, do{실행문 1}while(조건)  이고, -> 실행문 1 실행 -> 조건 확인(이때 break결정). 이렇게 결정된다.
*/
// original while loop
var arr6 = [];
var elem1 = 30;
while(i>10){
  arr6.push(elem1);
  i--;
}

// do-while loop
var arr7 = [];
var elem2 = 30;
do{
  arr7.push(elem2);
  i--
} while(i>10)
console.log(arr7);


// 99. profile lookup(코딩 챌린지)
/*
- 여러 프로필이 포함된 배열에서, firstName과 property name을 넣으면 그 value 반환하는 function 만들기!
*/
var contacts = [
  {
      "firstName" : "Akira",
      "lastName" : "Laine",
      "number" : "0543236543",
      "likes" : ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName" : "Harry",
    "lastName" : "Potter",
    "number" : "0994372684",
    "likes" : ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName" : "Sherlock",
    "lastName" : "Holmes",
    "number" : "0487345643",
    "likes" : ["Intriguing Cases", "Violin",]
  },
  {
    "firstName" : "Kristian",
    "lastName" : "Vos",
    "number" : "unknown",
    "likes" : ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookupProfile(name, prop){
  var index=0;
  var found = false;
  var result;
  if(prop!=="lastName" && prop!=="number" && prop!=="likes"){
    return 'property does not exist.';
  }
  while(index<contacts.length){
    if(contacts[index][firstName]===name){
      found = true;
      result = contacts[index][prop];
      break;
    }
    i++;
  }
  if(found===false){
      return 'name does not exist.';
  }else{
    return result;
  }
}
var data1 = lookupProfile("Akira", "likes");
console.log(data1);


// 100. Random function : 무작위로 분수 만들기(generate random decimal numbers)
/*
- Math 클래스의 random 이라는 함수를 사용하면 된다.
- Math.random() 의 값은 항상 0 이상과 1의 무작위 소수가 나온다.
*/


// 101. Random function : 무작위의 수(소수 아님) 만들기
/*
- Math.random에 어떤 수를 곱하거나 더하면, 소수가 아니라 정수 범위에서 랜덤한 숫자를 리턴하게 할 수도 있다!
- 이때 Math.random() 이 0은 포함하고, 1은 포함하지 않는다는 것을 주의해야 한다!!
+ Math 클래스에는 또 다른 function들이 있다.
ex) Math.floor() -> 주어진 값의 소수점 내림
*/
// 로또 번호 만들기
var lottoNum;
function lottoGenerator(){
  var lotto = Math.floor((Math.random() * 45) + 1);
  return lotto;
}
lottoNum = lottoGenerator();
console.log(lottoNum);
// 실행 시마다 다른 수가 나온다.


// 102. 원하는 범위 안에서의 random number generation
/*
- a부터 b까지의(편의상 a, b는 모두 자연수) 범위 내 정수를 무작위로 리턴하고 싶다면?
: Math.floor((Math.random() * (b-a+1) + a);
*/
function randomNumber(a, b){
  var result = Math.floor((Math.random() * (b-a+1)) + a);
  return result;
}
console.log(1, 45);


// 103. parseInt 함수 사용하기
/*
- 문자를 받아서 integer를 리턴해 주는 함수.
- parseInt(문자열) <- 이렇게 사용.
- 만약 문자를 숫자로 반환할 수 없다면, "NAN"을 반환한다. (not an integer)
*/
var var5 = "148";
var var6 = parseInt(var5)
// 문자와 숫자는 다르기 때문에 false가 나온다.;
console.log(var5===var6);


// 104. Radix(N진수)에 parseInt 사용하기 : 문자열을 10진수가 아닌 N진수 숫자로 변환하기
/*
- parseInt(문자열, N진수의 N);  <- 이렇게 사용
ex) parseInt("21", 2); : "21" 이라는 문자열을 2진수 숫자로 변환해 줌.
*/
console.log(parseInt("21", 2)); // 21 아닌 다른 2진수 숫자가 나옴!


// 105. ternary operator(삼항 연산자) 사용하기
/*
- (논리식/조건(값이 true나 false인 것) ? true일 때의 값 : false일 때의 값)
- 각각을 1번, 2번, 3번이라고 치면
: 1번이 true이면 1번에 2번 값을 할당 <-> 1번이 false이면 1번에 3번 값을 할당.
*/
function ssnGenerator(gender, birthyear){
  var ssn;
  (gender==="M" ? "10" : "20");
  var randomNum = randomNumber(10, 99);
  ssn = gender + birthyear + randomNum;
  return ssn;
}
console.log(ssnGenerator("F", 99));


// 106. 삼항 연산자 중첩해서 사용하기
/*
- 중첩 if문과 똑같이, 삼항 연산자 안에 또 다른 삼항 연산자를 넣을 수 있다.
=> 삼항 연산자로 3개 이상의 결과값을 할당할 수 있음.
: ([조건1] ? [값1] : ([조건2] ? [값2] : [값3]))
*/
function checkSign(num){
  return (num>0 ? "positive" : (num<0 ? "negative" : "zero"));
}
console.log(checkSign(10));


// 107. var 과 let 의 차이점 1 : 변수의 재선언 가능 vs 불가능
/*
- 변수의 앞에는 3가지 중 하나의 키워드를 선언할 수 있다 : var, let, const.
- const는 '상수'로써, 한번 할당한 값을 바꿀 수 없다. <-> var, Let
- var은 같은 이름의 변수를 var 키워드를 사용해서 여러 번 재선언할 수 있다.
- let도 변수의 값을 바꿀 수 있지만, let 키워드를 사용해서 같은 이름의 변수를 재선언하면 오류가 난다.
=> 사실 let이 맞는 코딩 방식이다... 그래서 요즘은 var 키워드를 사용해서 코딩을 거의 하지 않는다고 한다.
Q. 그럼 var 키워드는 왜 존재하는 건가?
*/
// var
var cat = "yaong";
var cat = "meow"; // var로 같은 이름의 변수를 여러 번 선언해도 오류가 나지 않음.
console.log(cat);

let dog = "meongmeong";
dog = "bowwow"; // let 키워드를 붙여서 같은 변수를 재선언하면 오류가 남!


// 108. var 과 let 의 차이점 2 : 두 키워드 변수의 범위(scope)
/*
- var : globally하게 선언된다. (block-statement, function 내부에 선언해도, function 밖에서 불러낼 수 있다.)
* var 변수는 어디에서 선언하건 global한 변수가 된다. -> 일반적이지는 않음.
- let : 선언한 위치에 따라 범위가 달라진다. (대부분의 변수들이 let과 같음)
(함수 밖에서 선언하면 global, 함수 안에서 선언하면 local한 범위를 가진다.)
*/
// 그런데 jsFiddle에서 실행해 보니, var도 let과 마찬가지로 함수 안에서 생성하고 함수 밖에서 불러오면 불러올 수 없다고 나왔다... 뭐지
// 암튼 이론상은 이렇다 : ↓
function globalLocal(){
  var variable1 = 'LOCAL';
  let variable2 = 'local';
}
console.log('global : ' + variable1); // 얘는 실행 가능
//console.log('local : ' + variable2);  // 얘는 실행 불가능


// 109. const : 읽을 수만 있는(read-only) 변수 생성하기
/*
- let과 다른 모든 속성이 똑같다.
- 다만 let은 재할당이 가능, const는 한번 선언된 값 이후엔 재할당을 할 수 없다.
- 그러므로 변수를 반드시 선언과 동시에 초기화해야 한다.
ex) const 변수이름; <- 이렇게 하는 거 안됨.
  => 반드시 -> const 변수이름 = 값;  <- 이렇게 바로 할당해야 함.
- const 변수는 모두 대문자로 선언하는 것이 관례.
- java의 final과 똑같음.
*/
const PI = 3.14;
//  PI = 3.141592;  // 재할당할 수 없음. 한번 하면 끝!


// 110. const 키워드로 생성된 "배열"은 []를 이용해서 개별 원소의 값을 바꿀 수 있다!
/*
- 즉 const 타입의 변수를 전체로 reassign 하는 것은 안 됨.
- but const가 배열일 경우, 배열의 일부(즉 원소)를 reassign하는 것은 가능.
Q. 왜일까?
*/
const LOTTONUMBER = [30, 19, 43, 22, 7, 3];
//  LOTTONUMBER = [31, 20, 44, 23, 8, 4]    //  <- 이렇게는 안 됨!

// 이건 가능.
LOTTONUMBER[0] = [31];
LOTTONUMBER[1] = [20];
LOTTONUMBER[2] = [44];
LOTTONUMBER[3] = [23];
LOTTONUMBER[4] = [8];
LOTTONUMBER[5] = [4];
console.log(JSON.stringify(LOTTONUMBER));


// 111. 객체 값의 변경 막기
/*
- 110번에서 볼 수 있듯이, const를 사용해도 객체나 배열의 변경을 항상 막을 수가 없다.
- 하지만 const를 넘어서, 특히 "객체"의 값을 보존할 수 있는 방법이 있다.
: Object.freeze(객체이름);  -> 해당 객체의 값을 고정시키고, 값을 변경시키려는 접근, 코드가 있으면 변경시키지 않고 에러를 리턴한다.
- 단, 객체에만 사용할 수 있다. Object.freeze() 안에는 객체만! 넣을 수 있다!
*/
function freezeObj(){
  const PERSONALINFO = {
    SSN : 9905232194013;
  };
  Object.freeze(PERSONALINFO);

  try{
    PERSONALINFO.SSN = "2918309929123";
  }catch(err){
    console.log(err);
  }
  return PERSONALINFO.SSN;
}
console.log(freezeObj());
// 바꾸기 시도한 값이 아니라, 초기 값이 나온다. 성공!


// 112. arrow function을 사용해서 anonymous function(익명 함수)를 만들자.
/*
익명 함수 : function 키워드를 사용하지 않는 함수.
java의 람다식과 매우 비슷(어쩌면 같을 수도 있음)
실행문이 한 줄이면 {}안에 안 넣어도 됨. 그러나 두 줄 이상이면 무조건 {} 안에 넣어야 함!
선언 방법 : [var/let/const] [함수이름] = (매개변수) => [실행문];
매개변수가 없어도 됨!
*/
// 근데 jsFiddle에서 입력하면 결과값은 안 나오고 '=' 뒤의 문자가 그대로 나온다...ㅡㅡ 뭐가 문제인것인가
var magic = () => new Date().toString();


// 113. 매개변수 넣어서 익명함수 사용하기
/*
+ concat() function : 두 문자열을 이어 주는 함수
: 문자열1.concat(문자열2) => '문자열1' + '문자열2' 와 같은 결과!
*/
// 이 예제는 jsFiddle에서 잘 나온다. 출력되는 게 있어서 그런가 싶다.
const magic22 = (str1, str2) => str1.concat(str2);
console.log(magic22("[1, 2, ", "3, 4, 5]"));


// 114. Higher Order Arrow Function 사용하기
/*
정의 : 다른 arrow function을 자신의 실행문 중 일부로 사용하는 바깥의 arrow function을 의미한다.
=> 얘도 arrow function이다.
*/
// 이 함수 부연설명:
/*
- 매개변수로 array를 받을 것이다. array 변수가 사용할 수 있는 정적 함수(java에선 그렇게 부름)중 하나가 fliter()과 map()이다.
- 이런 함수들은 array같은 특정 클래스에 속하는 함수들이며, "arrow function을 실행문으로 받는다!"
* 즉 이런 함수의 () 안에는 일반적인 js문법을 쓰지 않고, arrow function의 형식으로 실행문을 채워 넣어야 한다.
Q. 이해 안 되는 것 : filter()에서 매개변수를 뭘 넣는다는 것인지?
A. 이해함 : filter() 안의 매개변수로 사용되는 num은 array 각각의 원소를 의미한다.
: filter([배열에 속한 각각의 원소] => filter할 조건);
*/
const higherArrowFunct = (arr) => {
  const result = arr.filter(num => Number.isInteger(num) && num>0).map(elem => elem * elem);
  // 정수이고 0보다 큰, 즉 자연수만을 필터링해서 result에 할당한다.
  return result;
};
const arr8 = [1, 49, -100, 0.8, -3.7];
const result1 = higherArrowFunct(arr8);
console.log(result1); // 자연수인 1과 49만 나온다.


// 115. Higher Order Arrow Function을 직접 만들어보자!
/*
- arrow function에서, 꼭 ()에서 지정한 매개변수만큼을 넣어야 하는 것은 아니다. 이것보다 적은 수를 넣을 수도 있다.
* 이 경우, default parameter를 사용해서, 지정하지 않은 값은 기본적으로 어떤 값으로 처리할지를 명시해 주면 된다.

+ higher order arrow function 식 추상화:
[var/let/const] 함수이름 = (function(){
  return function 함수이름(매개변수){
  -실행문 + return 문-
}
})();

*/
const defaultParamFunct = (function() {
  return function defaultParamFunct(num1 = 1, num2 = 1){  // num1과 num2가 각각 지정되지 않을 경우, 각각을 1로 간주.
    return num1*num2;
  };
})();
console.log(defaultParamFunct(4, 6));
console.log(defaultParamFunct(5));
console.log(defaultParamFunct());


// 116. Rest 연산자를 function의 매개변수와 같이 사용하기
/*
  - 115번처럼 기존의 arrow function만을 이용한 함수식을, rest operator를 사용한 식으로 바꿔 볼 것이다.
  - rest operator이란? 매개변수의 개수를 제한 없이 받을 수 있게끔 하는 연산자.
  ex) 보통은 매개변수를 n개 선언하면 n개 이상은 받지 못한다. limit이 존재. 그런데 rest는 받을 수 있는 매개변수의 수에 제약이 없다!

  + reduce() 함수 : 배열의 각 원소를 모두 순회하면서 () 안에 정의된 함수를 실행하도록 함. 함수는 직접 정의하거나 외부 것을 호출도 가능
*/
// 일반 arrow function
const arrowFunct = (function()  {
  return function arrowFunct(num1, num2, num3)  {
    const array1 = [num1, num2, num3];
    return array1.reduce((a, b) => a+b, 0);
  };
})();
console.log(arrowFunct(14, 63, 74));

// rest operator를 사용한 같은 기능의 function
const restFunct = (function(){  // 위 함수는 3개까지의 매개변수만 받을 수 있지만, 이 함수는 매개변수의 개수 제한이 없다.
  return function restFunct(...array2)  {
    return array2.reduce((a, b) => a+b, 0);
  };
})();
console.log(restFunct(43,62,75,23));


// 117. spread operator를 사용해서, 배열 "진짜로" 복사하기
/*
그냥 '='을 통해서 할당하는 것과, 복사하는 것은 js에서 엄연히 다르다.
배열1 = 배열2 <- 배열2의 값의 '주소'를 배열1에 할당해 주는 것이다. -> 배열2의 값이 바뀌면 배열1의 값도 바뀐다.
but 때때로 작업을 하기 전, 원본을 복제해 놓으려는 용도로 복사를 하려고 할 때, 이 방법은 적절하지 않다.
  (b/c 하나의 값이 바뀌면 다른 값도 바뀐다.)
  * 이때 하나의 값(배열)에 통으로 다른 배열[]을 할당하면 다른 값이 영향을 받지 않지만, 하나의 배열의 알부 원소만을 바꾸면 다른 배열의 원소도 영향을 받는다.
  => 아마 새 배열을 할당하면 주소 자체가 바뀌고, 원소의 값만 바꿔서 할당하면 주소는 안 바뀌어서 그런 것 같다.
=> 배열1 = [...배열2]; <- 이렇게 복사하면, 한 쪽의 값이 바뀌어도 다른 쪽의 값이 같이 영향을 받지 않고, 바뀌지 않는다.
  (b/c 주소를 복사한 것이 아니라, 값 내용 자체를 복사한 것이므로.)
*/
let array3 = [2021, 08, 24, 11, 16];
let array4 = array3;
let array5 = [...array3];
array3[4] = 18;
console.log(array4);
console.log(array5);


// 118. 객체로부터 변수를 할당하기 위해서, destructuring argument 사용하기...  <- 무슨 말?
/*
destructuring argument : 객체에서 꺼내진 값을 직접적으로 변수에 할당하는 방법이나 식.
그 동안은 객체의 개별 속성을 . 이나 [] 으로 꺼내올 수 있었는데, 이것보다 더 간단한 방법이다.
아래의 {} 안에서, 따로 변수에 할당하고 싶은 속성들만 나열한다. 이때 속성도 변수도 "" 은 쓰지 않는다!
방법) [var/let/const] { 속성1 : 변수1, 속성2 : 변수2, ... }  => 이때 할당되는 변수들은 모두 다 var/let/const 중 같은 키워드 값을 가진다.
*/
const frontend = {"HTML" : ".html", "CSS" : ".css", "JavaScript" : ".js"};

// 기존 할당 방법
const html = frontend.HTML;
const css = frontend.CSS;
const javascript = frontend.JavaScript;

// destructuring argument 사용한 방법
const {HTML : beginner, CSS : intermediate, JavaScript : advanced} = frontend;
// 각각의 값이 모두 같다!
console.log(html + ' ' + beginner);
console.log(css + ' ' + intermediate);
console.log(javascript + ' ' + advanced);

// 예시2
const avgTempSummer = {today : 77.5, tomorrow : 79.0};  // 미국은 화씨(Fahrenheit)를 쓴다.
const avgTempWinter = {today : 45.1, tomorrow : 48.2};

function tempTomorrow(avgTemperature){
  const {tomorrow : tomorrowTemp} = avgTemperature;
  return tomorrowTemp;
}
console.log(tempTomorrow(avgTempSummer));
console.log(tempTomorrow(avgTempWinter));

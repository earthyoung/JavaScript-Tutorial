/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/

// 위처럼 선언했더니 console.log 에서 나온 'console is not defined' 에러가 사라졌다!

// 53. Return a value from a function
/*
- return 다음에 오는 값을 내보낸다.
- return 문 다음에는 내용을 입력할 수 없다.
- java와 달리, return type을 따로 지정하지 않아도 된다.
*/

function squared(num){
    return (num*num);
}

console.log(squared(8))


// 54. function에서 return 된 undefined value 이해하기
/*
- return 문이 없는 function의 경우, 이때의 return value를 undefined value라고 한다.
- java의 void type method와 형식이 같다.
*/

var sum = 10;
function function1(){
    sum += 50;
    console.log('sum is ' + sum)
}
function1();
console.log('sum is ' + sum)


// 55. function의 return value를 다른 변수에 할당하기
/*
- 리턴값은 console.log를 사용하지 않으면 출력되지 않는다.
- 그러므로 function의 어떤 결과값을 계속 사용하고 싶다면 변수에 할당하면 된다.
- 후에 사용할 때 그 변수를 사용할 수 있다.
*/

function birthMonth(age){
    return (age*12)-12+8;
}
var birthmonth = birthMonth(23);
console.log('my birthmonth is ' + birthmonth)


// 56. Stand in Line
/*
- function으로 queue 구조를 구현해 볼 것이다.
- JSON 클래스(?)에 있는 stringify function은 배열을 매개변수로 받아서 json 형식의 텍스트로 나타내 준다.
*/

// Queue 구조를 구현. 맨 뒤에 elem이 하나 들어오면 맨 앞에 있는 elem은 자동으로 제거됨
function nextInLine(arr, item){

    arr.push(item);
    return arr.shift();
}
var testArr = [1,3,5,7,9];

console.log("Before : " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 11));
console.log("After : " + JSON.stringify(testArr));


// 57. Boolean values
/*
- true 또는 false의 값만 존재한다.
*/

function booleanType(){
    return true;
}
console.log(booleanType())


// 58. If를 이용해서 조건문 만들기
/*
- if(logic){실행문}    이런 형식으로 쓰여진다.
- logic은 반드시 boolean 값이나 식이 와야 한다.
- logic이 true이면 실행문 실행, false이면 실행하지 않는다.
- logic 양쪽의 ()는 꼭 있어야 한다.
*/

function function3(logic){
    if(logic){
        console.log("TRUE");
    }else if(!logic){
        console.log("FALSE");
    }
}
function3(true);
function3(false);


// 59. '=='으로 양쪽의 값 비교하기
/*
- boolean type을 리턴하는 연산자를 comparison operator이라고 한다.
- '==' 도 그중 하나이며, equality operator 라고 한다.
- 양쪽에 있는 값이 서로 같으면 true, 아니면 false를 리턴한다.
- '='은 왼쪽 값에다가 오른쪽 값을 할당하는 것으로, comparison operator가 아니다.
*/

function isEqualToTwenty(age){
    if(age==20){
        console.log("YOU ARE TWENTY");
    }else{
        console.log("YOU ARE NOT TWENTY");
    }
}
isEqualToTwenty(30);
isEqualToTwenty(20);


// 60. 더 엄격한 strict equality operator : ===
/*
- '=='은 양쪽의 type이 달라도 값이 같으면 true를 리턴
- '==='은 양쪽의 type과 값이 모두 같아야 true를 리턴
- '==='가 더 엄격한 기준을 적용하고, type conversion을 하지 않는다.(type을 자동으로 같게 만들어 주지 않는다.)
*/
function isEqual(num1, num2){
    if(num1===num2){
        return num1 + ' and ' + num2 + ' are equal';
    }else{
        return num1 + ' and ' + num2 + ' are not equal';
    }
}
// 값만 같고 type은 다른 경우
console.log(isEqual(7, '7'));

// 값과 type이 모두 같은 경우
console.log(isEqual(12, 12));


// 61. REVIEW : equality operators 사용하기


// 62. inequality operator로 비교하기
/*
- '!=' 라고 표기한다.
- '=='와 마찬가지로, type conversion을 한다.
- 두 값이 같지 않으면 true를 리턴한다.
- 다만 여기선 type conversion을 하므로, 'a'와 a를 비교하면 값이 같으므로 같다고 처리할 것이다.
*/
function notStrictUnequal(num1, num2){
    if(num1!=num2){
        return 'not equal value, but does not know whether their types are equal or not.';
    }else if(num1==num2){
        return 'equal.';
    }
}
console.log(notStrictUnequal(6, '6'));


// 63. strict inequality operator : !==
/*
- '==='와 정확히 반대 역할을 하는 연산자
- 타입과 값 중 하나만 달라도 둘은 같지 않다고 처리한다.
*/
function strictUnequal(num1, num2){
    if(num1!==num2){
        return 'not equal type and not equal value.'
    }else if(num1===num2){
        return 'equal type and equal value.'
    }
}
console.log(strictUnequal(5, '5'));
console.log(strictUnequal(16, 16));


// 64. 대소 비교 연산자 : greater than operator : >
/*
- 대소비교 연산자는 늘 "왼쪽 값을 기준으로, 오른쪽 값을 비교"한다!
- "초과"의 의미.
- num1>num2 이면, num1이 num2보다 큰지(크거나 같은지:X) 확인하는 연산자이다.
*/
function isGreater(num1, num2){
    if(num1>num2){
        return num1+' is greater than '+num2;
    }
}
console.log(isGreater(13, 10));


// 65. 대소 비교 연산자 : greater than or equal operator : >=
/*
- '>'와 '='가 합쳐진 연산자. "이상"의 의미.
- num1>=num2 이라면, num1이 num2보다 크거나, 또는 num1과 num2가 같을 때에도 true를 리턴한다.
*/
function isGreaterOrEqual(num1, num2){
    if(num1>=num2){
        return num1+' is greater than or equal to '+num2;
    }
}
console.log(isGreaterOrEqual(10.1, 10));


// 66. 대소 비교 연산자 : less than operator : <
/*
- "미만"의 의미.
- num1<num2 이라면, num1이 num2보다 작을 때만 true를 리턴한다.
*/
function isLess(num1, num2){
    if(num1<num2){
        return num1+' is less than '+num2;
    }
}
console.log(isLess(7, 9));


// 67. 대소 비교 연산자 : less than or equal opeartor : <=
/*
- "이하"의 의미.
- num1<=num2일 때, num1이 num2보다 작거나, 또는 num1과 num2가 같을 때에도 true를 리턴한다.
*/
function isLessOrEqual(num1, num2){
    if(num1<=num2){
        return num1+' is less than or equal to '+num2;
    }
}
console.log(isLessOrEqual(6.9, 7));


// 68. 논리 연산자 : logical operator -> and(&&)
/*
- 여러 개의 조건이 모두 참일 때만 true를 리턴하는 연산자
- if문을 중복으로 설계하는 것과 같다.
- '&&'로 표기한다.
*/
function and(cond1, cond2){
    if(cond1 && cond2){
        return 'both statements are true!';
    }else{
        return 'at least one of them is false!';
    }
}
var cond1 = 12>13;
var cond2 = 14<15;
var cond3 = 16>10;
console.log(and(cond1, cond2));
console.log(and(cond2, cond3));


// 69. 논리 연산자 : or(||)
/*
- 여러 개의 조건 중 하나만 참이어도 true를 리턴하는 연산자
- '||' 로 표기한다.
*/
function isBacteriaAlive(temp){
    if(temp>70 || temp<-10){
        return 'bacteria can not live in this temperature~~';
    }else{
        return 'bacteria can live in this temperature...!'
    }
}
console.log(isBacteriaAlive(50));
console.log(isBacteriaAlive(-20));


// 70. else문 ~ 71. else if문
/*
- if문의 조건이 사실이 아닐 때도 실행문을 만들어 주고 싶다면 사용하는 구문.
- 또는 여러 개의 else if 구문을 지나서, "모든 조건에 해당하지 않는 나머지의 경우"에 실행할 실행문을 만들 때에도 사용함
*/
function updownNumber(num1, num2){
    if(num1>num2){
        return 'your number is above '+num2;
    }else if(num1<num2){
        return 'your number is below '+num2;
    }else{
        return 'your number is '+num2;
    }
}
console.log(updownNumber(45, 100));


// 71. if else문에서의 논리연산 처리 순서
/*
- 쓰여진 순서대로 처리한다!
- if문을 먼저, 아래의 else if문은 맨 위에서부터, 그리고 이에 모두 해당하지 않으면 else문을 검사하게 된다.
- 각 if와 else if문의 조건이 배타적인 경우는 문제가 없지만, 배타적이지 않고 겹치는 부분이 있다면 주의해야 한다.
- 조건이 겹칠 경우, "상위 조건이 하위 조건을 완전히 포함하지 않는 것"이 제일 중요하다!
- 그러면 하위 실행문에도 해당되는 경우지만 상위 조건에 걸려서 모두 상위 실행문에서만 실행되기 때문이다.
*/
// 올바른 예
function function2(num){
    if(num<0){
        return 'less than 0'
    }else if(num<10){
        // 상위 조건인 num<0은 하위 조건인 num<10을 완전히 포함하지 않는다!
        return 'less than 10'
    }else{
        return 'greater than or equal to 10'
    }
}
console.log(function2(5));


// 72. chain if-else statements
/*
- chained if-else 문이란? : if else문을 여러 개 사용하는 것.
- 그러나 항상 사용을 권장하는 건 아니다.
- else if문이 너무 많다면 조건을 검사(?)하는 효율이 떨어진다.
- 위 경우에는 divide and conquer 알고리즘을 사용하기도 한다.
*/
// 예시 넘 길어서 생략


// 73. Golf Code : review session. 넘 길어서 보기만 함.


// 74. switch문 ~ 75. switch문의 default 옵션

/*
- if문과 비슷한 구문이나, if문의 ()에는 논리식이 들어가지만 switch문의 ()에는 값이 들어간다.
- 값이 a일때, b일때, c일때, ... 에 따라 각각에 해당하는 실행문이 실행된다.
- 맨 마지막엔 if구문의 else처럼, 위의 어떤 값에도 해당되지 않을 때 실행하는 default 구문이 있다.
- 반드시 각 값의 실행문 끝에는 break; 를 넣어 줘야 한다. 안 그러면 아래에 있는 다른 값의 실행문들까지 전부 실행된다.
*/
function switchTest(num){
    var msg = "";
    var mod = num%4;
    switch(mod){
        case 0:
            msg = "alpha";
            break;
        case 1:
            msg = "beta";
            break;
        case 2:
            msg = "gamma";
            break;
        default:
            msg = "delta"
            break;
    }
    return msg;
}

console.log(switchTest(47));


// 76. switch문의 multiple identical options
/*
- 여러 개의 값이 똑같은 실행문을 실행했으면 하는 상황이라면?
ex) 1~3까지는 A 출력, 4~6까지는 B 출력, ... 이런 식
=> 각 case문 사이의 break 문을 없애고, 구별하고 싶은 case들의 사이에만 break를 넣으면 된다.
*/
function function4(score){
    var grade;
    switch(score){
    case 1:
    case 2:
        grade = "F";
        break;
    case 3:
        grade = "D";
        break;
    case 4:
    case 5:
        grade = "C";
        break;
    case 6:
    case 7:
    case 8:
        grade = "B";
        break;
    case 9:
    case 10:
        grade = "A";
        break;
    }

    return grade;
}
console.log(function4(9));


// 77. if-else문을 switch문으로 바꾸기
/*
- 항상 가능한 것은 아니다.
b/c if-else는 안에 조건, switch는 안에 값이 들어가므로.
- switch문은 항상 if-else문으로 바꿀 수 있다.
*/

// 앞 function과 뒤 function은 같다. 사용한 구문만 다를 뿐!
function function5(val){
    var result;
    if(val%3===0){
        result = "Pint";
    }else if(val%3===1){
        result = "Quarter";
    }else{
        result = "Family";
    }
    return result;
}
console.log(function5(29));

function function6(val){
    var mod = val%3;
    var result;
    switch(mod){
        case 0:
            result = "Pint";
            break;
        case 1:
            result = "Quarter";
            break;
        case 2:
            result = "Family";
            break;
    }
    return result;
}
console.log(function6(29));


// 78. function에서 boolean value 리턴하기
/*
- 논리식 자체를 리턴하면 논리식의 T/F 여부가 리턴된다.
- 또는 값 자체로 true, false를 리턴할 수도 있다.
*/

function isBig(a, b){
    return (a>b);
}
console.log(isBig(2,5));


// 79. function으로부터 early pattern 리턴받기
/*
- 무슨 말인가? : java에서 함수를 끝내기 위해 리턴 문을 쓰는 것과 같은 원리이다.
- 즉 '~이런 조건에서는 그냥 function을 종료한다' 는 의미.
- 사용 방식은 java와 조금 다르다.
java : return;
js : return undefined;
- 그러면 null 이라고 나오거나, undefined 라고 나오기도 한다. (작업환경에 따라 차이가 있는 듯 하다.)
*/
function function8(a, b){
    if(b===0){
        return undefined;
    }
    return (a/b);
}
console.log(function8(2,0));


// 80. counting cards -> Blackjack game
/*
- 블랙잭 게임 따라하기. 내 카드의 값이 어느 범위이면 count 증가, 어느 범위이면 유지, 어느 범위이면 감소인데 이 작업을 처리하는 함수를 만들 것임.
- 삼항 연산자(ternary operator)를 안 배웠지만 써 보자.
*/
var count = 0;
function countCard(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }
     return (count>0 ? "Bet" : "Hold"); // 삼항 연산자
}
console.log(countCard(7));


// 81. js 언어로 Object 생성하기
/*
- object는 배열과 비슷하지만, 각 elem에 접근하기 위해서 index를 쓰지 않고, property를 쓴다.(java의 필드명 같은 것)
- 배열은 [], object는 {} 안에 선언한다.
- js는 object와 property를 만들 때 type을 선언하지 않는다.
- "property이름" : (property의 값) <- 이런 식으로 선언한다.
*/
var myHouse = {
    "living room" : 2,
    "kitchen" : 3,
    "garden" : 2,
    "bathroom" : 4,
    "garage" : 1,
    "balcony" : 3,
    "extra" : ["Holy", "Moly"]
}
// JSON의 stringify function은 배열뿐만 아니라 객체를 넣어도 json 타입의 문자열로 바꿔 준다!
console.log(JSON.stringify(myHouse));


// 82. dot notation으로 object의 property에 접근하기
/*
- java와 같은 방법이다.
- 객체이름.속성이름 <- 이렇게 개별 속성에 접근할 수 있다.
*/
var cafeBlue = {
    "Americano" : 2500,
    "Latte" : 3000,
    "Vanilla Latte" : 3500,
    "Caramel Macchiato" : 4000,
    "Cafe Mocha" : 4500
}
var myMenu = cafeBlue.Americano;
console.log('my coffee price : ' + myMenu);


// 83. []으로 object property에 접근하기
/*
- .점 찍는거랑 같은데, []은 property 이름에 space가 포함될 때 사용한다.
- 물론 space가 없어도 사용할 수 있다! 단지 space가 있으면 이 방법만 사용할 수 있다는 뜻이다.
- 객체이름["속성이름"] <- 이렇게 접근할 수 있다.
- [] 안에는 ""를 써도 되고, ''를 써도 된다.
- java도 되는지 확인해야겠다.
*/

myMenu = cafeBlue["Vanilla Latte"];
console.log('I changed my menu. changed price is : ' + myMenu);
myMenu = cafeBlue['Cafe Mocha'];
console.log('my last menu`s price :' + myMenu);


// 84. 변수를 이용해서 객체 속성에 접근하기
/*
- 83번과 똑같다. 다만 [] 안에 변수를 넣는다는 얘기.
*/
var var1 = 2;
var obj1 = {
    0 : "LA",
    1 : "California",
    2 : "San Francisco"
}
console.log(obj1[var1]);


// 85. 객체 속성 업데이트하기(= 객체의 속성 값 바꾸기)
/*
- 대입 연산자 = 를 이용해서 그냥 새 값을 할당해 주면 된다. 매우 간단!
*/

obj1[1] = "Nevada";
console.log(obj1[1]);


// 86. 객체에 새 속성 추가하기
/*
- . 이나 []를 이용해서 추가할 수 있다.
- 위와 똑같은 방법이다. 객체이름[새로운 속성 이름] = 새 값; <- 이렇게 할당하면 된다.
*/
// console.log(obj1[3]);   // 없다고 나옴. undefined

obj1[3] = "Arizona";
console.log(obj1[3]);   // 값 나옴!


// 87. 객체에서 속성 제거하기
/*
- delete 명령어를 사용한다.
- delete 객체이름[속성이름];<- 이러면 이 속성이 아예 없어진다.
*/

delete obj1[3];
console.log(JSON.stringify(obj1)); // property 3이 없다.


// 88. 객체를 Lookup(탐색)의 용도로 사용하기
/*
- switch문에서 주로 탐색이 이뤄지는데,(주어진 값에 대한 결과 탐색을 의미) 이를 객체를 이용해서도 할 수 있다.
- 물론 객체에선 switch문의 default 속성 등은 사용할 수 없다.
- 정확히는 객체 안의 각 속성과 그 속성값을 이용하는 것이다.
*/

// 대상1. switch문

function function9(val){
    var result;
    switch(val){
        case "A":
            result = "Alabama";
            break;
        case "C":
            result = "California";
            break;
        case "D":
            result = "Delaware";
            break;
        default:
            result = "Washington";
            break;
    }
    return result;
}
console.log(function9("D"));

var var2 = {
    "A" : "Alabama",
    "C" : "California",
    "D" : "Delaware",
}
console.log(var2["D"]);


// 88. 객체의 속성 테스트하기.
/*
- 객체가 특정 속성이 있는지를 확인할 수 있다.
- hasOwnProperty() function을 이용한다.
- 객체이름.hasOwnProperty(속성이름) <- 이렇게 사용한다.
*/
function function10(prop){
    if(var2.hasOwnProperty(prop)){
        return true;
    }
    return false;
}
console.log(function10("A"));
console.log(function10("Z"));


// 89. 복잡한 객체 다루기
/*
- js에서는 객체를 여러 종류의 데이터를 저장하는 용도로도 활용하는 것 같다.
- 복잡한 객체란? 구조 자체가 복잡한 것!
ex) 객체 안에 또 다른 객체{ }를 저장할 수도 있다!
- java는 가능하지만 class로 만들어서 복잡해 보이지는 않았는데, js는 json 형식으로 만드니까 훨씬 복잡해 보이는 것 같다.
*/

var playList = {
    "owner" : "earthyoung",
    "pop" : {
        "ariana grande" : "santa tell me",
        "shwan mendes" : "there's nothing holding me back",
        "ed sheeran" : "shape of you"
    },
    "idol" : [
        "shinee", "txt", "ohmygirl"
    ]
}
console.log(JSON.stringify(playList));

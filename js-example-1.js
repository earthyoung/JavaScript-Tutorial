// 25. Quoting Strings with Single Quotes
            
/*
- "" 안에서 다양한 문자열 표시하는 방법 1
- 문자열을 ""로 둘러싸고, 그 안에 "을 표시하기 위해서 \" 로 표시.
- console.log 뒤에는 ; 을 붙이지 않나보다.
*/
            
var str1 = "I am a \"double quoted\" string inside \"double quotes\"";
            
console.log('my js');
console.log(str1)
            
/*
- "" 안에서 다양한 문자열 표시하는 방법 2
- 문자열을'' 로 둘러싸고, 그 안에 "를 넣으면 문자 그대로 표시됨
*/
            
var str2 = 'I am a "double quoted" string inside "double quotes"';
console.log(str2)
            
/*
- "" 안에서 다양한 문자열 표시하는 방법 3
- 문자열을 `으로 감싸면, 그 안에 ""와 ''를 모두 넣을 수 있음!
*/
            
var str3 = `I am a "double quoted" string inside 'single quotes'`;
console.log(str3)
            
            
// 26. 문자열이 아닌 것들 문자열로 나타내기
// \n, \t, \r, \\, \" 등등 매우매우 다양함!
            
str1 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(str1)
            
str1 = "First\tSecond\tThird";
console.log(str1)
            
            
// 27. +을 사용해서 문자열 잇기
            
str1 = "This is the start. \n" + "This is the end!";           
console.log(str1)
            
            
            // 28. +=를 사용해서 문자열 잇기
            // 해당 문자열 변수의 바로 뒤에 문자열을 잇는다.
            str2 = "He was a boy, ";
            str2 += "She was a girl. " // 뒤에 이어짐!
            console.log(str2)
            
            
            // 29. 변수로 문자열 이어보기
            // 중간에 삽입하는 것도 매우 가능하다.
            
            var name = "earthyoung";
            var msg = "Hello. My name is " + name + ". nice to meet you!";
            console.log(msg);
            
            
            // 30. 문자열 뒤에 변수 이어붙이기
            // 28번의 과정을 변수로 할 수 있다는 얘기이다.
            
            var food = "Hamburger";
            msg = "My favorite food is ";
            msg += food;
            console.log(msg);
            
            
            // 31. 문자열의 길이 출력하기(찾기)
            
            var sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
            var sentenceLength = sentence.length;
            console.log(sentence);
            console.log('its length is ' + sentenceLength)
            
            
            // 32. [] 으로 문자열의 n번째 문자 추출
            // 마찬가지로 가장 첫 번째 elem = 0번째.
            
            var january = "JANUARY";
            console.log(january[0])
            console.log(january[1])
            console.log(january[2])
            
            
            // 33. String은 한번 생성되면 바뀌지 않음.
            /*
            : String의 값을 바꿀 수 없다(X)
            : String의 문자열 중 일부만 바꿀 순 없다(O)
            */
            
            /*  이런 게 안 된다는 말이다:
            
            var myStr = "Helcome"
            
            myStr[0] = "W";
            -> 이렇게 String 값 중 일부만 바꿀            -> 아래처럼 값을 통째로 바꾸는 것만 가능하다.
            */
            
            var msg = "Helcome";
            msg = "Welcome";
            
            
            // 34~36. : 32번과 같은 내용. PASS
            
            
            // 37. 문자열 사용해서 word game 만들기
            // 여기서 method와 같은 function 나옴!
            
            function s_v(noun, adj, verb, adverb){
                var result = "";
                result = adj + " " + noun + " " + verb + " " + adverb + ".";
                return result;
                // 리턴 타입을 미리 선언하지 않는다!
            }
            
            /*
            - 출력문이 console.log이다.
            - 이 안에서 function 사용 가능하다!
            */
            
            function s_v_o(subject, verb, object){
                var result = "";
                result = subject + " " + verb + " " + object + ".";
                return result;
            }
            
            console.log(
                s_v("cat", "white", "smiles", "cutely")
            )
            
            console.log(s_v_o("Yumi", "ate", "chocolate"));
            
            
            // 38. 배열을 사용해서 여러 개의 값 저장하기
            // 서로 type이 다른 elem도 같은 array에 넣을 수 있다.
            
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November"];
            
            var John = ["John", 23, true];
            
            console.log(month)
            console.log(John)
            // array를 바로 출력할 수 있다.
            
            
            // 39. 다중 배열(이중, 삼중 배열)
            // array가 다른 array 안에 있을 때를 의미.
            
            var redpepper = [["Amy", 34, "guitarlist"], ["Babyln", 32, "vocalist"], ["Catherine", 29, "drummer"]];
            console.log(redpepper);
            // 다중 배열은 원소들이 그대로 다 나오지 않고, 가장 바깥 array에 있는 원소들의 array가 나온다.
            
            // + 불규칙 다중 배열은 어떨까?
            
            var menu = [[["A"],[["B"],["C"]]],[[[[["D"]]]]],["E"]];
            console.log(menu)
            // 가장 바깥 쪽의 array가 몇 개의 elem을 갖고 있는지만 출력된다. 몇 겹인지는 나오지 않는다.
            
            
            // 40. 인덱스로 array 원소에 접근하기
            
            var allowance = [50000, 40000, 70000];
            var total = allowance[0] + allowance[1] + allowance[2];
            console.log(total)
            /*
            - 콘솔에서 string 문자열은 파란색,
            - 다른 기본 타입(숫자,t/f..)은 보라색으로 나온다.
            */
            
            // 41. 배열의 원소 수정하기(바꾸기)
            /*
            - String에도 index를 사용했지만, String은 일부 문자만 바꿀 수 없었다!
            - 그러나 array는 일부 원소만 바꾸는 게 가능하다.
            */
            
            allowance[0] = 100000;
            total = allowance[0] + allowance[1] + allowance[2];
            console.log(total)
            
            
            // 42. 다중배열 안의 원소를 인덱스를 통해 접근하기
            
            console.log(redpepper[1][0])
            console.log(redpepper[2][1])
            console.log(redpepper[0][2])
            
            
            // 43. push()로 배열에 elem 추가하기
            /*
            - 기존은 수정이고, 이번엔 기존 것은 그대로 있고 새 원소를 추가하는 것. 둘이 다름!
            */
            
            // 1차원
            month.push("December");
            month.push("Undecimber")
            console.log(month);
            
            // 2차원
            redpepper.push(["Dean", 36, "keyboard"]);
            console.log(redpepper);
            
            // js의 array는 여러 원소의 타입과 차원(깊이?)이 같지 않아도 된다.
            John.push(["laptop", "screen TV"]);
            console.log(John)
            
            
            // 44. pop()으로 배열에서 elem 제거하기
            /*
            - push()와 반대되는 역할을 함
            - array의 "맨 마지막" elem을 빼냄
            - 그러므로 매개변수를 받지 않음.
            - 계속 빼낼 때마다, 그 안에서 가장 맨 뒤에 있는 elem이 계속 지워짐.
            */
            
            var removedMonth = month.pop();
            console.log('removed month is ' + removedMonth)
            
            
            // 45. shift()로 배열에서 elem 제거하기
            /* 
            - pop()과 다르게 array의 "첫 번째" elem을 빼냄
            마찬가지로 매개변수 없음.
            - 계속 빼낼 때마다, 그 안에서 가장 맨 앞에 있는 elem이 계속 지워짐.
            */
            
            var removedMember1 = redpepper.shift();
            var removedMember2 = redpepper.shift();
            console.log('removed member is ' + removedMember1)
            console.log('removed member is ' + removedMember2)
            console.log(redpepper)
            
            
            // 46. unshift()로 배열에서 elem 추가하기!
            /*
            - push()와 달리 배열의 맨 앞에 elem을 추가한다.
            - shift()는 맨 앞에서부터 elem "제거",
            - unshift()는 맨 앞에서부터 elem "추가"한다.
            */
            
            var newMember = ["Emma", 30, "base"];
            redpepper.unshift(newMember);
            console.log(redpepper);
            
            
            // 47. Shopping List <Project>
            /*
            - nested array의 한 예시이다.
            */
            
            var shoppingList = [["egg", 30],["onion", 10],["cheese", 10],["hashbrown", 5]];
            
            function buy(food){
                shoppingList.unshift(food);
            }
            
            function unbuy(num){
                var unbuyItem = null;
                if(num%2==0){
                    unbuyItem = shoppingList.pop();
                }else{
                    unbuyItem = shoppingList.shift();
                }
                return unbuyItem;
            }
            
            var newItem = ["bacon", 7];
            buy(newItem);
            console.log(shoppingList)
            var droppedItem = unbuy(5);
            console.log(shoppingList)
            
            
            // 48. function으로 코드 재활용하기
            
            /*
            - 자주 사용하는 code set을 function에 넣으면, 간단히 function만 호출함으로써 긴 코드를 효과적으로 재활용할 수 있다.
            */
            
            function intro(name){
                var msg = "Hello My name is " + name + ".\nNice to meet you!"
                return msg;
            }
            
            console.log(intro("earth"))
            console.log(intro("Johnson"))
            
            
            // 49. argument를 통해서 function에 값 넘겨주기
            /*
            - parameter : 대체제(placeholder). function 안에서 필요한 값을 대신하여 외부에서 주입되는 값.
            */
            
            function arithmetic(a, b, c){
                var error = -999999;
                if(c%4===0){
                    return (a+b);
                }else if(c%4===1){
                    return (a-b);
                }else if(c%4===2){
                    return (a*b);
                }else if(c%4===3){
                    if(b===0){
                        return error;
                    }
                    return (a/b);
                }
            }
            
            console.log(arithmetic(1,7,6))
            
            
            // 50. global scope
            /*
            <local vs global variable>
            - 변수는 어디에 선언되는지에 따라서 사용 가능한 범위(scope)가 달라진다.
            - 프로그램은 여러 ((())(())()()) 처럼 여러 메소드들의 복잡한 포함관계로 이루어져 있는데, 이와 마찬가지로 변수도 자신이 선언된 범위 내에서만 사용할 수 있다.
            - global variable : 함수 바깥에서 정의된 변수
            - local variable : 함수 내부에서 정의된 변수
            - 하지만 특이 케이스가 있다: ↓
            - 지금까지는 변수 앞에 var 이라는 키워드를 항상 붙여 왔는데, 이 키워드를 붙이지 않는다면 local이 아닌 global variable이 될 수 있다.
            - 다만 많은 콘솔/에디터에서는 var 키워드를 사용하도록 강제하고 있어서 어느 환경에서나 global variable을 만들 수 있는 것은 아니다.
            - 그러나 browser의 경우는 그러한 강제사항이 없으므로, 이에 대한 차이를 볼 수 있다.
            - global 변수는, 선언 이후 시점이라면 어디에서든지 호출되어도 사용할 수 있다.
            
            <typeof 연산자>
            - 세세한 종류는 모르지만,
            - defined : 프로그램이 알고 있는, var 키워드를 사용해서 정의된 변수
            - undefined : 존재하지 않거나, 프로그램이 모르는 변수.
            */
            
            var localVar = 10;
            globalVar = 5;
            
            function function1(){
                var output = "";
                if(typeof localVar != "undefined"){
                    output += "local variable" + localVar;
                }
                if(typeof globalVar != undefined){
                    output += "\nglobal variable" + globalVar;
                }
                return output;
            }
            
            console.log(function1());
            
            
            // 51. local scope and functions
            /*
            - 함수 내부에서 정의된 변수나, 함수의 매개변수는 그 함수 안에서나, 그 함수를 통해서만 사용할 수 있다.
            */
            
            // 이런 경우는 에러가 난다는 소리다.
            
            function localFunction(param){
                var localVarr = 50;
                console.log(localVarr + param);
            }
            localFunction(7);
            // console.log(localVarr);
            // 에러 남 b/c localVar는 localFunction 안에서만 사용 가능한 지역변수이므로 밖에서 사용할 수 없다.
            
            
            // 52. Global scope vs Local scope
            /*
            - local 변수와, global 변수를 같은 이름으로 설정하는 게 가능하다!
            - global 변수만 사용 가능할 때는 global 변수가 호출된다.
            - 둘 다 사용 가능할 때는, local 변수가 우선적으로 사용된다.
            */
            
            var variable = "GLOBAL";
            
            function function3(){
                var variable = "LOCAL";
                
                return variable;
            }
            
            console.log(function3())
            // local. global 둘 다 사용 가능하므로 local이 더 우선으로 사용됨
            
            console.log(variable)
            // global만 사용 가능하므로 global이 출력됨
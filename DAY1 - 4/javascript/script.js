var a;//global scope
a=10;
var a=20;

let b;//block scope
b =10;
b=20;

const c = 10;//block scope with constant value

var p =20;//number
var q = "hello";//string
var bool = true;//boolean
var r;//undefined
var n = null;//null
var undef = undefined;//undefined
var big =1067543789463789463789463789n;//bigint
var sym = Symbol("id");//symbol

console.log(typeof p);
console.log(typeof q);
console.log(typeof bool);
console.log(typeof r);
console.log(typeof n);
console.log(typeof undef);
console.log(typeof big);
console.log(typeof sym);

var arr = [1,2,3,4,5];//array
console.log(arr);

 arr = [1,2,3,4,5];//array
console.log(arr);
console.log(typeof arr);

var object = {
    name: "Dharani",
    age: 18,
    city: "Coimbatore"
};//object
console.log(object);
console.log(typeof object);

//arthmetic operators(+,-,*,/,%)
var x = 10;
var y = "5";
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);

//relational operators(>,<,>=,<=,==,===,!=,!==)
var x=10;
var y="5";
console.log("Greater than:", x > y);
console.log("Less than:", x < y);
console.log("Greater than or equal to:", x >= y);
console.log("Less than or equal to:", x <= y);
console.log("Equal to:", x == y);
console.log("Strict equal to:", x === y);
console.log("Not equal to:", x != y);
console.log("Strict not equal to:", x !== y);

//Assignment operators(=,+=,-=,*=,/=,%=)
a =10;
console.log(a);
a+=10;
console.log(a);
a-=10;
console.log(a);
a*=2;
console.log(a);
a/=4;
console.log(a);
a%=3;
console.log(a);

//logical operators(&&,||,!)
a = true;
b= false;
console.log(a&&b);
console.log(a||b);
console.log(!a);

//ternary operator(condition ? value1 : value2)

a=10;
var result = (a%2===0) ? "Even number" : "Odd number";
console.log(result);

mark=10;
var result =(mark>=90) ? "grade A": (mark>=80) ? "grade b" : (mark>=70) ?  "grade c": "fail" ;
console.log(result);

function add(){
    console.log(10+20);
}
add();

function addparam(a,b){
    console.log(a+b);
}
addparam(10,20);

//arrow function
var addparam = (a,b) =>{    
    console.log(a+b);
}
addparam(20,30);
console.log(typeof addparam);

const a =[1,2,3,4,5];
const f = [...a,6,7,8,9,10];
console.log(a);
console.log(f);

//destrucituring
var arr = [1,2,3,4,5];
var [a,h,g,d,e] = arr;
console.log(a,b,c,d,e); 
//object destructuring  
var obj = {
    "name": "Dharani",
    "age": 18,
    "city": "Coimbatore"
}
var {name,age,city} = obj;
console.log(name,age,city);

//class and object
class Person{
    name;
    age;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

var person1 = new Person("Dharani",18);
person1.display();
//check prime number
function isPrime(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
}

console.log(isPrime(11));

var a =10;
var flag = true;
if(a<=1)flag = false;
else{
    for(let i = 2; i <=a/2;i++){
        if(a%i===0){
            flag = false;
            break;
        }
    }
}
const result = flag ? "Prime number" : "Not a prime number";
console.log(result);

//palindrome USING IF ELSE
var a = 121;
b = a;
var rev=0;
while(a!==0){
     rev = rev*10 + a%10;
     a/=10;
}
if(b===rev){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}


if(rev==b){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}

var a =10;//global scope
if(true){
    var b=20;//let block scope
    console.log(a);
}
console.log(a,b);

//hoisting
var a;//by javascript
console.log(a);
var a=10;

add();
function add(){
    console.log(10+20); 
}

//callback function
var demo = ()=>{
    console.log("Demo function");
}
var main = (callback)=>{
    console.log("Main function");
    callback();
}
main(demo);

var main = (callback)=>{    
    console.log("Main function");
    callback();
}
main(()=>{
    console.log("Demo function");
});

//callback function
var demo=()=>{
    console.log("hello world!")
}

var main=(callback)=>{// callback is not keyword function - any name eg: cb ,call
    console.log("main called")
    callback();

}
main(demo)

var main1=(callback)=>{// callback is not keyword function - any name eg: cb ,call
    console.log("main called")
    callback();

}
main1(()=>{
    console.log("hello world!")
});

//with parameter use callback
var add=(a, b,callback)=>{
    var result=a+b;
    callback(result)
}   
add(10, 20, (res)=>{
    console.log(res)
})


console.log("Start")
var Demo=()=>{
    setTimeout(()=>{
        console.log("processing...")
    }, 2000)
}
Demo()



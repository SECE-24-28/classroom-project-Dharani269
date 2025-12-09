//Templates Literals
var name="John"
var age=30
var str =`My name is ${name} and I am ${age} years old.`
console.log(str);
console.log( '${ name} age is ${age} ');
console.log(name + ' age is ' + age);

//Map
var arr =[1,2,3,4,5];
var double = arr.map(num=>num*2);
console.log(double);

//Filter
var arr =[1,2,3,4,5,6];
var even = arr.filter(num=>num%2===0);
console.log(even);

//Reduce
var arr =[1,2,3,4,5];
var sum = arr.reduce((acc,num)=>acc+num,0);
console.log(sum);

var arr =[10,20,30,40,50];
var evencount =arr.map(num=>num**3).filter(num=>num%2===0).reduce((acc,num)=>acc+1,0);
console.log(evencount);

var student ={
    {name:"Alice", age:22, marks:85},
    {name:"Bob", age:20, marks:90},
    {name:"Charlie", age:23,marks:78},
}
var studentNameAge =student.filter(s => s.age >21).map(s => s.name);
console.log(studentNameAge);
var totalMarks = student.reduce((acc,s) => acc + s.marks,0);
console.log(totalMarks);
var avgMarks = totalMarks / student.length;
console.log(avgMarks);

//promise
const promise = new Promise((resolve,reject)=>{
    var success = true;
    if(success){
        resolve("success");
    }else{
        reject("Failed");
    }
})
promise.then((msg) => console.log(msg))
    .catch((err) => console.log(err))
 
    //promise
const Promise = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve("success")
   },2000)
})
promise.then((msg) => console.log(msg))
    .catch((err) => console.log(err))


const getData = ()=> {
    return fetch('https://jsonplaceholder.typicode.com/posts');
}
getData().then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

//async await
const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();

//async await
const getData = async (req,response)=> {
    var response = await fetch('https://jsonplaceholder.typicode.com/posts');
    var data =  await response.json();
    console.log(data);
}
getData();
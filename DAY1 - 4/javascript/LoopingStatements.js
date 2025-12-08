obj = {
    "name": "Dharani",
    "age": 18,
    "city": "Coimbatore"
}

for(let i=0;i<Object.keys(obj).length;i++){
     console.log(i,obj[i]);
     console.log(i,Object.keys(obj)[i]);
}

for(let i of Object.entries(obj)){ //keys
    console.log(i," is", obj[i])
}

//for loop

//for(initialization,condition,increment/decrement){
    //statement
//}

for(let i=1;i<=10;i++){
    console.log(i);
}
//while loop
//while(condition){
    //statement
//}

let i=0;
while(i < 10){
console.log(i);
i++;
}

//do while loop
//do{
    //statement
//}while(condition);

a =0;
do{
    console.log(a);
}while(a === 1 );

//for..in
var arr =[10,20,30,40,50];
for(let i in arr){
    console.log(i);
}
//for..of
for(let j of arr){
    console.log(j);
}

//forEach

arr.forEach(val,index) => {
    console.log(val,index);
}

//for...in for objects
var obj = {
    "name": "Dharani",
    "age": 18,
    "city": "Coimbatore"
}

for(let key in obj){
    console.log(key, obj[key]);
}


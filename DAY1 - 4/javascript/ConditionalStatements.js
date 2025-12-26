 a=7;
if(a %2 == 1){
    console.log("ODD number") ; 
}
else{
     console.log("Even number");
}

//conditional statements
//if
a=10;
if(a%2===0){
    console.log("Even number");
}
//if else
    if(a%2===0){
        console.log("Even number");
    }
    else{
        console.log("Odd number");
    }
    //else ..if
    var mark = 85;
    if(mark=>90){
        console.log("A grade");
    }
    else if(mark>=80){
        console.log("B grade");         
    }
    else if(mark>=70){
        console.log("C grade");
    }
    else{
        console.log("Fail");
    }

    //switch case
    var day = 2;
    switch(day){
        case 1:
            {
            console.log("Monday");
            break; 
            }    

        case 2:{
            console.log("Tuesday");
            break;
        }

        case 3:{
            console.log("Wednesday");
            break;
        }

        case 4:{
            console.log("Thursday");
            break;
        }
        case 5:{
            console.log("Friday");
            break;
        }
        case 6:{
            console.log("Saturday");
            break;  
        }
        case 7:{
            console.log("Sunday");
            break;  
        }
        default:{
            console.log("Invalid day");
            break; 
        }     
    }

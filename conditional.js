var price=40


if(price=40){
    console.log("I will eat")
}
else{
    console.log("No")
}

var nameN= ['sharif', 'korim', 'hello']

var num1=0;
while(num1<15){
    console.log(num1)
    num1++
}

for(var i=0;i<10;i++){
    console.log(i)
}

for(var i=0; i<nameN.length; i++){
    var n=nameN[i];
    console.log(n);
}

class student{
    constructor(name, roll_no){
        this.name= name;
        this.roll_no= roll_no;
    }
    getDetails(){
        return 'Name: ' + this.name+ '\nRoll ' + this.roll_no;
    }
}

var s1= new student('Emon', 61);
var result=s1.getDetails();
console.log("🚀 ~ result:", result)

var s2= new student('tonmoy', 26);
var result=s2.getDetails();
console.log("🚀 ~ result:", result)

// new
num=1000
switch(num){
    case 1000:
        console.log('I am a 1000');
        
    case 100:
        console.log("100");
        break;
        
    case 5:
        console.log(' i am 5');
        break

    default:
        console.log('No');
}

var nameN= ['sharif', 'korim', 'hello','sharif','rafin','korim'];
var uniqueName=[];

i=0;
for(i=0; i< nameN.length;i++){
    var element=nameN[i];
    var index= uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
    
}
console.log("🚀 ~ uniqueName:", uniqueName)

//word count

var speech='awesome day it was awesome day it was       ';
console.log("🚀 ~ speech:", speech.length)
 
var tw=1;
for(i=0;i<speech.length;i++){
    var char=speech[i];
    if(char==' ' && speech[i-1] !=' ' &&speech[i+1] !=' '){
        tw++;
    }
}
console.log(tw)

function factoria(num){
    var fact=1;
    for(i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact
}
var res=factoria(5);
console.log("🚀 ~ res:", res)






console.log(5)

console.log("Goodm Morning")

var price=12;
console.log("🚀 ~ price:", price)
console.log(price)

var orange= "apple"
console.log("🚀 ~ orange:", orange)
console.log(typeof orange)

var promise="Hello Java"
console.log("🚀 ~ promise:", promise.indexOf("Java"))
console.log("🚀 ~ promise:", promise.toLocaleLowerCase())

promise.indexOf("Hello")

var n1= 45;
var n2=5.4
var result= Math.random()*100
console.log("🚀 ~ result:", result)
n2= parseFloat(n2);

console.log(n1+n2)

var total= n1+n2;


total=total.toFixed(3);
console.log("🚀 ~ total:", total)

var arr1=['shorif', 'akib', 'asif']

arr1.push('noman')
console.log("🚀 ~ arr1:", arr1)

var is_array= function(input){
    if(toString.call(input)==="[object Array]")
        return true;
     return false;

};

console.log(is_array([1,2,3,5]))

arr1.pop();
console.log("🚀 ~ arr1:", arr1)
arr1.shift();
console.log("🚀 ~ arr1:", arr1)
arr1.unshift('emon');
console.log("🚀 ~ arr1:", arr1)

arr1.push('sayem','karim','mamun')
console.log("🚀 ~ arr1:", arr1)

console.log(arr1.includes('sayem'))

var arr2=['ger','ban']

var new_arr= arr1.concat(arr2)
console.log("🚀 ~ new_arr:", new_arr)

arr1.forEach(function (element){
    console.log(element)
});


arr1.sort();
console.log(arr1)

var num1= [1,5,6,8];
console.log(num1);
var num5= num1.map(function(element){
    return element*5;
});

console.log(num5);

var sumOfElements= num5.reduce(
    function(accumulator,element){
        return accumulator+element;
    }
);

console.log(sumOfElements);

var evenNum=num5.filter(function(element){
    return element%2===0;

})

console.log(evenNum);

var find_val= num1.find(function(element){
    return element >6
});
console.log("🚀 ~ varfind_val=num1.find ~ find_val:", find_val)

var find_ind= num1.findIndex(function(element){
    return element>=4
});
console.log("🚀 ~ varfind_ind=num1.findIndex ~ find_ind:", find_ind)

var sla=[5,6,8,3,5];

var sliceArr= sla.slice(0,2);
console.log("🚀 ~ sliceArr:", sliceArr);

console.log(sliceArr);






























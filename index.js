//datatypes
//string, number, boolean, undefined ,null,bigint
//array ,object
/*let name="ishu";
let age=20;
let isActive=true;
let address=null;
let city;
//console.log(city);
let student={
    name: "ishu",
    rollno: '2'
}

let person=["ishu","mahak"];
//console.log(typeof person);
let num=12897864589275274294838n;
console.log(num);

console.log(typeof name);
console.log(typeof age);
console.log(typeof isActive);
console.log(typeof address);
console.log(typeof city);
console.log(typeof student.name);
console.log(typeof student.rollno);
console.log(typeof person);
console.log(typeof num);

a=5,b=10;
console.log(a+b);
*/
  
//operators
//arithmetic operator
// let a=10;
// let b=5;
// console.log(a+b);//15
// console.log(a-b);//5
// console.log(a*b);//50
// console.log(a%b);//0
// console.log(a/b);//2


//assignment operator
/*let x=10;
x+=10;//x=x+10
console.log(x);//20

x-=10;//x=x-10
console.log(x);//10

x*=10;//x=x*10
console.log(x);//100

x/=10;//x=x/10
console.log(x);//10
*/

//comparison operator
/*let a=5;
let b=6
let c='3';
console.log(a==b);
console.log(a==c);
console.log(a===c);
console.log(a<b);
console.log(a<c);
console.log(c<b);
*/

//logical operator
/*let a=3;
let b=10;
let c=8;
console.log(a<b && b<c);//false
console.log(a<b && c<b);//true
console.log(a<b || b<c);//true
*/ 

//ternary operator ? case1: case2
/*let age=20;
age>18?
console.log("voting"):console.log("can't vote");
*/

//loop
/*for(i=1;i<=10;i++)
{
    console.log(i);
}

let i=1;
while(i<=10)
{
    console.log(i);
    i++;
}

let i=1;
do{
    console.log(i);
    i++;
}
while(i<=10);
*/

//write a program to print odd and even number
/*for(i=1;i<=10;i++)
if(i%2==0){
    console.log("even number",i);
}
else{
    console.log("odd number",i);
}
  */ 

//write a program to print even number
/*for(i=1;i<=10;i++)
    if(i%2==0)
    {
        console.log(i);
    }
 */
//write a program to print od number
/*for(i=1;i<=10;i++)
    if(i%2!=0)
    {
        console.log(i);
    }
*/


//write a program to print number which are divisible by 2 and 3
/*for(i=1;i<=30;i++)
    if(i%2==0 && i%3==0)
    {
        console.log(i);
    }
*/

//write a program to print number which are divisible by 2 or 3
/*for(i=1;i<=30;i++)
    if(i%2==0 || i%3==0)
    {
        console.log(i);
    }
*/

//write a program to print table of 13
/*let n=13;
for(let i=1;i<=10;i++)
{
    x=n*i;
    console.log(13,"*",i,"=",x);
}
*/

//write a program in js to print days 
/*let x=2;

switch(x){
    case 1:
    console.log("monday");
    break;
    case 2:
    console.log("tuesday");
    break;
    case 3:
    console.log("wednesday");
    break;
    case 4:
    console.log("thursday");
    break;
    case 5:
    console.log("friday");
    break;
    case 6:
    console.log("saturday");
    break;
    case 7:
    console.log("sunday");
    break;
    default:
    console.log("invalid number");
}
*/
//write a program to print result of student in grades
/*let marks=100;
if(marks==100)
{
    console.log("grade o");
}
else if(marks>=95)
{
    console.log("grade A+");
}
else if(marks>=90)
{
    console.log("grade A");
}
else if(marks>=85)
{
    console.log("grade B+");
}
else if(marks>=80)
{
    console.log("grade B");
}
else if(marks>=75)
{
    console.log("grade C+");
}
else if(marks>=70)
{
    console.log("grade C");
}
else if(marks>=60)
{
    console.log("grade D");
}
else 
{
    console.log("grade F");
}
    */



/*const vehicle=['car','bus','bike'];
for(let i=vehicle.length-1;i>=0;i--){
    console.log(vehicle[i]);
}
    */

// for(i=1;i<=5;i++){
//     let str='';
//     for(j=1;j<=3;j++)
//         if(j==1 || i==5)
//          str+='*';
//     {
//         console.log(str);
//     }
// }

/*for(i=1;i<=5;i++){
    let str='';
    for(j=1;j<=3;j++)
        if(i==1 || j==3)
         str+='*';
        else{
        str+=' ';
    }
    {
        console.log(str);
    }
    
}
*/
/*
for(let i=1;i<=3;i++){
    let str='';
    for(j=3;j>=i;j--)
        str+=j;
    {
        console.log(str);
    }
}
    */
/*for(let i=1;i<=5;i++){
    let str='';
    for(j=1;j<=5;j++)
        if(i==1 || j==1 || i==5 ||j==5)
        str+='*';
    else {
        str+=' ';
    }
    {
        console.log(str);
    }
}
    */
// function myself(name,age){
//     console.log(name,",i am year old",age);
// }
// myself("ishu",21);

// function sqroot(x){
//     console.log(x**0.5);
// }
// sqroot(125);

// function checkmygrade(marks){
//     if(marks==100){
//         console.log("grade O");
//     }
//     else if(marks>91 && marks<100)
//     {
//         console.log("grade A");
//     }
//     else if(marks>81 && marks<=90)
//     {
//         console.log("grade B");
//     }
//     else if(marks>71 && marks<=80)
//     {
//         console.log("grade C");
//     }
//     else if(marks>61 && marks<=70)
//     {
//         console.log("grade D");
//     }
//     else{
//         console.log("grade F");
//     }
// }
// checkmygrade(92);

// function table(n){
//     for(let i=1;i<=10;i++)
//     console.log(n,"*",i,"=",n*i);
// }
// table(12);

// const checkNumberIsEvenOrOdd = x => x%2==0
// console.log(checkNumberIsEvenOrOdd(56));

//arrow function
/*const checkNumber=(x)=>
    {console.log(x*x);
}
checkNumber(6);
*/


// arr=[1,2,4,2,6,4,2,6,8,9,5,2,4,6]
// const getHighestValue=(arr) =>{
// let max=arr[0];
// for(let i=0;i<=arr.length;i++)
// if(max<arr[i]){
//     max=arr[i];
// }
//    console.log(max); 
// }
// getHighestValue(arr);

// arr=[1,2,4,2,6,4,2,6,8,9,5,2,4,6]
// let sum=0;
// arr.forEach((item)=>{
//     sum+=item;
// })
// console.log(sum);


// let arr=[4,6,4,2,22,3,4];
// let sum=0;
// arr.forEach((item)=>{
//     sum+=item;//sum=sum+item
// })
// console.log(sum);

//iief
/*((name)=>
    console.log("hello",name)
)
("ishu");

((name)=>
    console.log("hello",name)
)
("ishu");
*/

//array push=add new element at the end of the array, pop=remove last element from the array
/*arr=[1,2,3,4,5];
arr.pop();
arr.push(6);
{
    console.log(arr);
}
*/
//array unshift=add new element at the start of the array, shift=remove first element from the array
// arr=[6,7,8,9];
// arr.unshift(5);
// {
//     console.log(arr);
// }

// arr=[6,7,8,9];
// arr.shift();
// {
//     console.log(arr);
// }

// for(let i=1;i<=3;i++){
//     let str='';
//     for(j=1;j<=i;j++)
//         str+='+';
//     {
//         console.log(str);
//     }
// }

// let arr=[1,2,3,5,42,5,4,2,4,566,6,8,5,3,2]
// const numarr=arr.filter((num)=>num%2==0 && num%3==0 && num%7==0)
//     console.log(numarr);



// array method splice:
//let arr=[2,4,5,6,8];
// arr.splice(2,0,0,9);
// console.log(arr);
// arr.splice(3,1);
// console.log(arr);
// arr.splice(2,1,7);
// console.log(arr);

//let fruits=['pineapple','orange','mango'];
// fruits.splice(1,1,'papaya');
// console.log(fruits);

//slice:it doesn't change in original array , it gives the new array
// let arr=[2,3,4,5,8];
// const newArr=arr.slice(1,3);
// console.log(newArr);

//sort and reverse
// let arr=[2,5,3,7,8,6];
// arr.sort();
// console.log(arr);
// arr.reverse();
// console.log(arr);

//concate method
// let arr1=[2,5,3];
// let arr2=[4,7,8];
// const arr=arr1.concat(arr2);
// console.log(arr);

// let arr1=[2,5,3];
// let arr2=[4,7,8];
// const arr=arr1.concat(arr2,arr3=[8,9,6,3]);
// console.log(arr);

//find,include
//arr=[3,4,6,8,3,2,5];
// console.log(arr.find((item)=>(item>6)));
//console.log(arr.includes(6));

//filter
//let arr=[3,4,6,8,42,3,2,5];
//console.log(arr.filter((item)=>item%2==0));
//console.log(arr.filter((item)=>item%2==0 &&item%3==0 &&item%7==0));

// const obj=[    
//     {name:'abc',age:17},
//     {name:'abc',age:25},
//     {name:'abc',age:56},
//     {name:'abc',age:30}
// ]
// const newObj=obj.filter(item=> item.age>20 && item.age<30).map((item)=>{
//     return item.name});
// console.log(newObj);

//reduce
// let arr=[4,2,6,5,7,9];
// let newArr=arr.reduce((previous,current)=>(previous+current));
// console.log(newArr);

// let arr=[2,4,3,7,5,3,9];
// const newArr=arr.filter(item=>item%2==0).map((item)=>(item**2)) .reduce((previous,current)=>(previous+current));
// console.log(newArr);

//string
//let name="ishu rulhan";
//console.log(name.length);
//console.log(name.includes("i"));
//let str="hello ishu";
// console.log(str.toLocaleUpperCase());
// console.log(str.toLocaleLowerCase());
//console.log(str.replace("ishu","world"));
//console.log(name.trim());
//let str="hello ishu, how are you";
//let searchTerm="how";
//console.log(str.indexOf(searchTerm));
//console.log(str.indexOf("ishu"));
//console.log(name.concat(str));
// let joins=['i','s','h','u'].join(' ');
// console.log(joins);
//console.log(str.slice(3,17));
//let words=str.split(" ");
//console.log(words[3]);
//let chars=str.split("");
//console.log(chars[3]);
// let strcopy=str.split();
// console.log(strcopy);
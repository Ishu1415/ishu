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


// home work
const fruits = [
    { Name: "Apple", count: 3},
    { Name: "grapes", count: 8},
    { Name: "Mango", count: 8},
     {Name:"Apple",count:1}]
console.log("Simple Array :", fruits)

function addfruits(FruitAdd) {
    const fruitfind = fruits.find(item => item.Name === FruitAdd.Name);
    if (fruitfind) {
        fruitfind.count += 1
    }
    else {
        fruits.push(FruitAdd)
    }
}
addfruits({ Name: "orange", count: 1 })
addfruits({ Name: "Watermelon", count: 1 })
addfruits({ Name: "Apple", count: 1 })
addfruits({ Name: "grapes", count: 1 })
console.log( fruits);
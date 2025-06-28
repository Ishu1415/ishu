// const target = {a:1, b:2};
// const source = {b:4, c:5};
// console.log(Object.assign(target,source));

// const obj={ props:23};
// Object.freeze(obj);
// console.log(obj.props);
// obj.props= 27;
// console.log(obj.props);

// const obj={rollNo:101};
// console.log(Object.isFrozen(obj));
// Object.freeze(obj);
// console.log(Object.isFrozen(obj));

// const obj={
//     a:"ishu",
//     b:17,
//     c:87346
// };
// console.log(obj);
// console.log(Object.values(obj));

const variety = 
[
   { name:"tamota" , type: "vegetable", quantity: 23},
    { name:"apple" , type: "fruits", quantity: 18},
    { name:"fish" , type: "meat", quantity: 10},
    { name:"grapes" , type: "fruits", quantity: 28},
];
const result = Object.groupBy(variety,({type})=>type);
console.log(result);
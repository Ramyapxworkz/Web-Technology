// let var const
var ref;
var ref;
var ref;
var ref;
let ref1;

const ref2 = "txt";

//three types of function
//named Finction
//anonymous function self-invoking Function
//arrow Function

function getName(a, b) {
    console.log(a + b)
    console.log("Named Function", ref2)
}
getName(3, 5);

(function (a, b) {
    console.log(a + b)
    console.log("selfInvoking Function")
})
    (2, 4);
const arrowFunction = (a, b) => {
    console.log(a + b)
    console.log("Running Arraow Function")
}
arrowFunction(5, 8);

var exe = "'text'";

var array = [1, 5, 7, 9, 0, "bhnhb"];
console.log(array)
console.log(array.length)


var object = { location: 'bengaluru', pincode: '577510' };
let object1 = { location: 'Chikkamagaluru', pincode: '566071' };
console.log(object.pincode)
let listObobject=[object,object1]
console.log(listObobject)
for(let i=0;i<listObobject.length;i++)
{
console.log(listObobject[i].location)

}






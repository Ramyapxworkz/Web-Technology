let number=[1,2,3,4,4,5,6,7,8,8,9,9,9,0,9,8];
//arraytask.html
number.push(10);
console.log(number.push(10));//push is used add the element
number.pop();
console.log(number.pop())//delete the last elemet in the array
number.shift();
console.log(number.shift());//shift is used  delete first element in the array
number.unshift(12);
console.log('Unshift:',number.unshift(12));//unshift is used to add 0th in the array
console.log(number)
let names=['Ramya','varun','Sharanamma','palakshappa','appa','amma','anna'];
console.log('Names total length',names.length);
console.log(names.push('magu'));
console.log(names.pop());
console.log(names);
console.log(names.shift());
console.log(names);
console.log(names.unshift('Paapu'));
console.log(names);
let laptopNames=['HP','Lenovo','Dell','asus','acer','MacBook'];
console.log(laptopNames.length);
console.log(laptopNames.push(20));
console.log(laptopNames.unshift('HO pavilion'));
console.log(laptopNames.shift());
console.log(laptopNames.pop());
let places=['DAvanagere','Mysore','Durga','Bangalore','Tumkur'];
console.log(places.length);
console.log(places.push(30));
console.log(places.unshift(20));
console.log(places.shift());
console.log(places.pop());




function arraydeclaration1(b,c){
  let a=b+c;
   console.log('Values of A',a);
}arraydeclaration1(5,6);
function arraydeclaration2(d,e){
    let g=d/e;
     console.log('values of g is',g); 
  }arraydeclaration2(4,2);
 function arraydeclaration3(f,e){
    let k=f*e;
  console.log('values of k is',k); 
  }arraydeclaration3(4,2);

(function(){
    let name='Ramya';
    console.log(name); 
}
());
(function(a,b){
    let c=a+b;
    console.log(c);
}
(7,8));

(function(a,b){
    let c=a/b;
    console.log(c);
}
(8,2));

(function(a,b){
    let c=a*b;
    console.log(c);
}
(7,8));

(function(a,b){
    let c=a+b;
    console.log(c);
}
(8,5));



const arrayDeclaration=()=>{
    let laptopDetailes={name:'hp',Price:20000,RAM:'8GB',Generation:11};
    console.log(laptopDetailes);
    console.log(laptopDetailes.name)
}
arrayDeclaration();

const arrayDeclaration1=(a,c)=>{
    var b=a+c;
    console.log(b);
}
arrayDeclaration(2,8);

const arrayDeclaration2=(a,c)=>{
    var b=a*c;
    console.log('Multiplication',b);
}
arrayDeclaration(2,8);

const arrayDeclaration3=(a,c)=>{
    var b=a/c;
    console.log('Multiplication',b);
}
arrayDeclaration(8,2);

const arrayDeclaration4=(a,c)=>{
    var b=a-c;
    console.log('Multiplication',b);
}
arrayDeclaration(8,2);




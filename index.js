// javascript code (PRIMITIVE JS DATATYPES)
console.log('hello world')
let name= 'fave';
let firstName= undefined;
let selectedColor=null;//clear values of a variable till the user input a value or you want to make the value null
let age=30;
let isApproved=false;

//REFERENCE JS DATATYPES("object, array and fuction")
//object
let person = {
    lastName:'lamja',
    age:30
};
person.name ='favour';
person['name']='mary';

//arrays
let selectColor = ['red','blue'];
console.log('selectColor');
selectColor[2]=['green'];
console.log(selectColor);
console.log(selectColor.length);

//functions
function greet(name){
    console.log('helo world' + name +'' + lastName); 
}

greet('john','mark');//name is parameter while john is the argument

function square(number){
    return number*number;

}
console.log(square(2));
//The real world application is the collection of hundreds and thousands of funtions to provide and run the functionality of the whole application.
 
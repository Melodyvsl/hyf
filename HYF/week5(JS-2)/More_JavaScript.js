//https://github.com/HackYourFuture/JavaScript1/blob/master/Week3/MAKEME.md

//1 
function sum(a, b, c){
    let sumArguments = a + b + c;
    console.log(sumArguments);
}

sum(4,6,8);


//2
function colorCar (Color) {
    console.log("my car is " + Color);
}

colorCar("red");


//3
const itsMe = {      
    firstname: "Melody",
    lastname: "Vesal",
    age: 28,
    height: 165,
}

function printMe(object){
    console.log(object);
}

printMe(itsMe);

//4
function vehicleType(color,code){
  if (code==1){
      console.log('A ' + color + ' car.');
    } else if (code==2){
        console.log('A ' + color + ' motorbike.');
    }
}
vehicleType('white',1);


//5
(3 === 3) ? console.log("yes") : console.log("no");


//6
function vehicle (color,code,age){
    if (code==1){ 
        if(age > 3) { 
            console.log('a ' + color + ' used car')
        } else if( age>0 && age<3) {
            console.log('a ' + color + ' new car')
        } 
      } else if (code==2){
        if(age > 3) { 
            console.log('a ' + color + ' used motorbike')
        } else if( age>0 && age<3) {
            console.log('a ' + color + ' new motorbike')
        } 
    }
}

vehicle("blue", 1, 5);
vehicle("black", 2, 2);


//7
let vehiclesList = ["motorbike", "caravan", "bike", "car", "bus"];


//8
console.log(vehiclesList[2]);


//9(*)
function vehicle(color,code,age){
for(i = 0; i<=vehiclesList.length; i++){
if (code==i){ 
    if(age > 3) {
        console.log('a ' + color + ' used' + vehiclesList[i])
    } else if( age>0 && age<3) {
        console.log('a ' + color + ' new' + vehiclesList[i])
    } 
} 
}
}

  vehicle("green", 3, 1);


  //10(*)
  let vehiclesList = ["motorbike", "caravan", "bike", "car", "bus"];
  function vehiclee(){
    let advertisement = "Amazing Joe's Garage, we service ";    
    for (i = 0; i < vehiclesList.length; i++) {
         if (i == vehiclesList.length - 1) {
            advertisement += "and " + vehiclesList[i] + "s.";
            } else {
                advertisement += vehiclesList[i] + "s, ";
                }
        }
        return advertisement;
    }
    vehiclee();


//11
vehiclesList.push("truck");
console.log(vehiclee());


//12
let myObject = {};


//13
let teacherObj = {
    teachers : ["tomy" ,"rasmus", "mike", "viktor"],
}
console.log(teacherObj);


//14
teacherObj.languages = ["HTML", "CSS", "Javascript"];
console.log(teacherObj);


//15
let x = [1,2,3];
let y = [1,2,3];
let z = y;
x == y ? console.log("they are equal") : console.log("they are not equal!"); //tehy are not equal
x === y ? console.log("they are equal") : console.log("they are not equal!");//tehy are not equal
z == x ? console.log("they are equal") : console.log("they are not equal!");//tehy are not equal
z === x ? console.log("they are equal") : console.log("they are not equal!");//tehy are not equal
z == y ? console.log("they are equal") : console.log("they are not equal!");//tehy are equal
z === y ? console.log("they are equal") : console.log("they are not equal!");//tehy are equal


//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);

o1.foo = "black"
console.log(o1);
console.log(o2); //changing o1 will not change o2
console.log(o3); //changing o1 will not change o3
console.log("changing o1 will not change o3");
console.log("changing o1 will not change o2");

o2.foo = "white"
console.log(o1); //changing o2 will not change o1
console.log(o2); 
console.log(o3); //changing o2 will change o3 
console.log("changing o2 will change o3");

o3.foo = "pink";
console.log(o1); //changing o3 will not change o1
console.log(o2); //changing o3 will not change o2
console.log(o3);
console.log("changing o3 will change 02");


//17
let bar = 42;
console.log (typeof typeof bar); // using 2 typeof, will print string 
console.log (typeof bar); // using 1 typeof, will print number


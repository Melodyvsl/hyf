//javascript week2

//String
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let myNewString=myString.replace(/,/g," ");
console.log(myNewString);

//Array
 favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,'meerkat');
console.log(' I think the new value of the array is between blowfish and capricon.');
console.log(favoriteAnimals);
console.log('Array has the length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3,1);
console.log(favoriteAnimals);
var faIndex=favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at Index: ' + faIndex);
favoriteAnimals.splice(faIndex,1);
console.log(favoriteAnimals);




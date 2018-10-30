const numbers = [1, 2, 3, 4];

const odd = numbers.filter(i => i % 2 !== 0);

const newNumbers = odd.map(i => {
  if (odd===false) { 
    return i; 
  } else { 
    return i * 2;}
});


console.log('The doubled numbers are', newNumbers); // ==> [2, 6]

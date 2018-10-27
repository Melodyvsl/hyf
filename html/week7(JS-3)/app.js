
let myFavoritBooks = 
["the_alchemist",//Paulo Coelho
"forty_rules_of_love",//Elif Shafak
"journey_to_a_better_you",//Joel Osteen
"eat_that_frog",//Brian Tracy
"by_the_river_piedra_i_sat_down_and_wept",//Paulo Coelho
"the_power_of_i_am",//Joel Osteen
"the_secret",//Rhonda Byrne
"one_hundred_years_of_solitude",//Gabriel Garcia Marquez
"the_right_questiones",//Debbie Ford
"someone_i_loved"//Anna Gavalda
];

// console.log(myFavoritBooks);


//write books id on HTML from an array
function createUl(arr){
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'myFavoritBooks');
    document.body.appendChild(ul)
    for (let i=0; i<arr.length; i++){
      let li = document.createElement('li');
      li.setAttribute('id', i);
      li.innerHTML = arr[i];
      ul.appendChild(li);
    }
  }
  //createUl(myFavoritBooks);

  //books object
  let books = {
    the_alchemist:
    {
        title: "The Alchemist",
        language: "english",
        author: "Paulo Coelho"
    },
    forty_rules_of_love:
    {
        title: "Forty Rules Of Love",
        language: "english",
        author: "Elif Shafak"
    },
    
    journey_to_a_better_you:
    {
        title: "Journey To a Better You",
        language: "english",
        author: "Joel Osteen"
    },
    eat_that_frog:
    {
        title: "Eat That Frog",
        language: "english",
        author: "Brian Tracy"
    },

    by_the_river_piedra_i_sat_down_and_wept:
    {
        title: "By The River Piedra I Sat Down And Wept",
        language: "english",
        author: "Paulo Coelho"
    },

    the_power_of_i_am:
    {
        title: "The Power Of I Am",
        language: "english",
        author: "Joel Osteen"
    },

    the_secret:
    {
        title: "The Secret",
        language: "english",
        author: "Rhonda Byrne"
    },

    one_hundred_years_of_solitude:
    {
        title: "One Hundred Years Of Solitude",
        language: "english",
        author: "Gabriel Garcia Marquez"
    },

    the_right_questiones:
    {
        title: "The Right Questions",
        language: "english",
        author: "Debbie Ford"
    },
                
                
    someone_i_loved:
    {
        title: "Someone I Loved",
        language: "english",
        author: "Anna Gavalda"
    }
}

// write books object on HTML
  function viewBooks(obj) {
    let booksUl = document.createElement('ul');
    document.body.appendChild(booksUl)
      for (let i=0; i<Object.keys(obj).length; i++){
        let book_li = document.createElement('li');
        book_li.setAttribute('id', Object.keys(obj)[i]);
        booksUl.appendChild(book_li);
  
        let title = document.createElement('h1');
        title.innerHTML = obj[Object.keys(obj)[i]].title;
  
        let language = document.createElement('h2');
        language.innerHTML = obj[Object.keys(obj)[i]].language;
  
        let author = document.createElement('h2');
        author.innerHTML = obj[Object.keys(obj)[i]].author;
        book_li.appendChild(title);
        book_li.appendChild(language);
        book_li.appendChild(author);
    }
}

// viewBooks(books);

let booksCover = { 
    the_alchemist:"./img/TheAlchemist.jpg",

    forty_rules_of_love:"./img/FortyRulesOfLove.jpg",
    
    journey_to_a_better_you:"./img/JourneyToBetterYou.jpg",

    eat_that_frog:"./img/EatThatFrog.jpg",

    by_the_river_piedra_i_sat_down_and_wept:"./img/Piedra.jpg",

    the_power_of_i_am:"./img/ThePower.jpg",

    the_secret:"./img/SEcret.jpg",

    one_hundred_years_of_solitude:"./img/OneHundred.jpg",

    the_right_questiones:"./img/RightQ.jpg",          
                
    someone_i_loved:"./img/someone_loved.jpg",
}

//To view book image at the appropriate li
function viewImages(obj){
//   console.log("calling viewImages function ");
//   console.log(obj);
  for (let i=0; i<Object.keys(obj).length; i++){
    let li = document.getElementById(Object.keys(obj)[i]);
    let img = document.createElement('img');
    let key = Object.keys(obj)[i];
    img.setAttribute("src", obj[key]);
    img.setAttribute("alt", "books cover");
    li.appendChild(img);
    }
  }

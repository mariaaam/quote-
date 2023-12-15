var checkbtn=document.getElementById("check");
var quoteAuthor=document.getElementById("quoteAuthor");
var quoteOutPut=document.getElementById("quoteOutPut");



function generat(){
  var arrayOfQuotes = [
    {
      author: ' <q>Oscar Wilde </q>', 
      quote: ' <q> Be yourself; everyone else is already taken.</q>'
  },



  {
    author: ' <q>Albert Einstein </q>', 
    quote: ' <q> Two things are infinite:; and Im not sure about the universe</q>'
},


{
  author: ' <q> Marcus Tullius Cicero </q>', 
  quote: ' <q> A room without books is like a body without a soul.</q>'
},
    
    {

    'author': ' <q>Jim Rohn</q>',
    'quote': ' <q> Beware of what you become in pursuit of what you want.</q>'
},{
    author: ' <q> Epictetus</q>', 
    quote: ' <q> Its not what happens to you, but how you react to it .</q>'
},{
    author: ' <q> Frank Sinatra</q>', 
    quote: ' <q> The best revenge is massive success.</q>'
}, {
    author: ' <q> Wayne Gretzy</q>', 
    quote: ' <q> You miss 100% of the shots you dont take.</q>'
},{
    author: ' <q> Nelson Mandela </q>', 
    quote: ' <q> Resentment is like drinking poison and waiting . </q>'
},{
    author: ' <q> Elbert Hubbard </q>', 
    quote: ' <q> Do not take life too seriously. You will. </q>'}]

var result = arrayOfQuotes[Math.trunc(Math.random()*arrayOfQuotes.length)];

quoteOutPut.innerHTML=result.quote ;

quoteAuthor.innerHTML=result.author;


console.log(result.author);

}

generat();

checkbtn.onclick=generat;








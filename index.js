const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
return tutorials.map(tutorial => {
const string = tutorial.split(' ')
console.log(string)
const word = string.map(letter => letter.charAt(0).toUpperCase()+letter.slice(1)).join(' ') 
            return word
})
}
//for (let i =0 ; i < string.length; i++){
  //console.log(string.charAt(i))

titleCased()

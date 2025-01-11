let date = new Date();
let hour = date.getHours();

console.log(date)
console.log(hour)

alert(hour);
console.log(hour)

let greet = document.getElementById('greet')
let talk = prompt('What is your name?', 'Enter your name here')


if(hour < 12){
   greet.innerHTML = 'Good Morning ' + talk 
}else if(hour <= 16){
    greet.innerHTML = 'Good Afternoon ' + talk + ', How are you?'
}else{
    greet.innerHTML = 'Good Evening ' + talk
}

console.log(talk)

const h1 = document.querySelector('h1')
h1.textContent = "Anna's Adventures"

const me = document.querySelector('.active')
me.style.color = "#000"
me.style.textDecoration = "underline"

const contactLink = document.querySelector('#contact')
contactLink.style.fontWeight = "bold"

const links = document.querySelectorAll('nav a')
links.forEach(link => link.style.display = 'bold')


const name = 'Anna'
const age = 21

console.log(name + " is " + age + " years old")


const message = document.getElementById("message")
const hours = new Date().getHours()
let timeOfDay =""

if  (hours >=4 & hours <12) timeOfDay = "It is Morning"
else if (hours >= 12 && hours >17) timeOfDay = "It is Afternoon"
else if (hours >= 17 || hours <4) timeOfDay = "It is Evening"

message.innerHTML = timeOfDay

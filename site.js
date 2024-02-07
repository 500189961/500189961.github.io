const h1 = document.querySelector('h1')
h1.textContent = "Anna's Adventures"

const me = document.querySelector('.active')
me.style.color = "#000"
me.style.textDecoration = "underline"

const contactLink = document.querySelector('#contact')
contactLink.style.fontWeight = "bold"

const links = document.querySelectorAll('nav a')
links.forEach(link => link.style.display = 'bold')
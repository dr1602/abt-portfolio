let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

menu.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

/*
https://www.youtube.com/watch?v=eQH7WbM3QIg&list=PLd9t-kSer9IKoDYe6np_pegcrMkfX9N5U&index=108
*/
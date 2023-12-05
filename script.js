const togglebutton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("nav-links")[0];

togglebutton.addEventListener( "click", ()=> {
    navbarlinks.classList.toogle('active')
} )
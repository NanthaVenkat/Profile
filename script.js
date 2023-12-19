// toggle bar 
const togglebutton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("nav-links")[0];

togglebutton.addEventListener( "click", ()=> {
    navbarlinks.classList.toggle('active')
} )

// nav color change by scrolling.

const navbar = document.querySelector(".navbar");
const navLink = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".toggle-button")

window.addEventListener( 'scroll', ()=> {
    const scrollPos = window.scrollY;

    if (scrollPos > 0) {
        navbar.classList.add("scroll");
        navLink.classList.add("scroll");
        toggleButton.classList.add("scroll");
    }
    else {
        navbar.style.backgroundColor = "##2b7a78";
        navbar.classList.remove("scroll");
        navLink.classList.remove("scroll");
        toggleButton.classList.remove("scroll");
    }
})

function downloadPDF() {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file.
    const pdfPath = 'resume/resume.pdf';

    // Create an anchor element
    const anchor = document.createElement('a');

    // Set the href attribute to the PDF file path
    anchor.href = pdfPath;

    // Set the download attribute with the desired file name
    anchor.download = 'Nkresume.pdf';

    // Append the anchor to the body
    document.body.appendChild(anchor);

    // Trigger a click event on the anchor
    anchor.click();

    // Remove the anchor from the body
    document.body.removeChild(anchor);
}
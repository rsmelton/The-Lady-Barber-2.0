// Get the height of the navbar along with the page content
var navbarHeight = document.getElementById('navbar').offsetHeight;
var pageContent = document.getElementById('page_content');

// Make sure to calculate the height of the content when loading the page
// and when resizing the page
window.addEventListener('load', () => {
    pageContent.style.height = (window.innerHeight - navbarHeight) + 'px';
});

window.addEventListener('resize', () => {
    pageContent.style.height = (window.innerHeight - navbarHeight) + 'px';
});
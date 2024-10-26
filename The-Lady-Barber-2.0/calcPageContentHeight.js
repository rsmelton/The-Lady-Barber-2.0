// Get the height of the navbar along with the page content
var navbarHeight = document.getElementById('navbar').offsetHeight;
var pageContent = document.getElementById('page_content');
pageContent.style.height = (window.innerHeight - navbarHeight) + 'px';

// Make sure to calculate the height of the content when loading the page
// and when resizing the page
// window.addEventListener('DOMContentLoaded', () => {
//     pageContent.style.height = (window.innerHeight - navbarHeight) + 'px';
// });

window.onload = () => {
    pageContent.style.height = (window.innerHeight - navbarHeight) + 'px';
};

window.addEventListener('resize', () => {
    pageContent.style.height = (window.innerHeight - navbarHeight) + 'px';
});
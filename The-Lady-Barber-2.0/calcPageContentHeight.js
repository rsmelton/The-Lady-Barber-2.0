// Get the height of the navbar along with the page content
let navbarHeight = document.getElementById('navbar').offsetHeight;
let pageContent = document.getElementById('page_content');

// set the page contents height based off the windows height - navbar height;
pageContent.style.height = (window.innerHeight - navbarHeight) + 'px';
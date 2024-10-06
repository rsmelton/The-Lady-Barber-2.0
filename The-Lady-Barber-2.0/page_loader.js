// This loads the home page when first loading the page
// since we are loading pages dynamically
// window.onload = async function() {
//     const navbarHeight = document.getElementById('navbar').offsetHeight;
//     console.log(`Navbar Height: ${navbarHeight}`);
//     var page_content = document.getElementById('page_content');
//     page_content.innerHTML = await (await fetch('home.html')).text();
// }

// This loads the home page when first loading the page
// since we are loading pages dynamically
// document.addEventListener('DOMContentLoaded', function() {
//     fetch('home.html')
//         .then(response => response.text())
//         .then(html => document.getElementById('page_content').innerHTML = html);
// });

document.addEventListener('DOMContentLoaded', function() {
    // we set this to 'about since when loading the page it will be at the top of the home page anyways'
    load_home_page('about');
});

// Home page loader with scroll functionality for different sections.
async function load_home_page(section) {
    // first we load the home page
    var page_content = document.getElementById('page_content');
    var page_html = await ((await fetch('home.html')).text());
    page_content.innerHTML = page_html;

    // then depending on the section we want, we then scroll to that section.
    setTimeout(function() {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }, 200);
}

// Gallery page loader
async function load_gallery_page() {
    var page_content = document.getElementById('page_content');
    page_content.innerHTML = await (await fetch('gallery.html')).text();
    window.scrollTo(0,0);
}
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
    load_home_page();
});

// Home page loader with scroll functionality for different sections.
function load_home_page(section) {
    // first we load the home page
    fetch('home.html')
        .then(response => response.text())
        .then(html => document.getElementById('page_content').innerHTML = html);

    // then depending on the section we want, we then scroll to that section.
    // if (section === 'about') {
    //     var about_content = document.getElementById('about');
    //     about_content.scrollIntoView({ behavior: 'smooth' });
    // } else if (section === 'services') {
    //     var services_content = document.getElementById('services');
    //     services_content.scrollIntoView({ behavior: 'smooth' });
    // } else if (section === 'hours-location') {
    //     var hours_location_content = document.getElementById('hours-location');
    //     hours_location_content.scrollIntoView({ behavior: 'smooth' });
    // }

    // if      (section === '')               return;
    // else if (section === 'about')          var content = document.getElementById('about');
    // else if (section === 'services')       var content = document.getElementById('services');
    // else if (section === 'hours-location') var content = document.getElementById('hours-location');
    // content.scrollIntoView({ behavior: 'smooth' });

    if      (section === 'about')          document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    else if (section === 'services')       document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    else if (section === 'hours-location') document.getElementById('hours-location').scrollIntoView({ behavior: 'smooth' });
}

// Gallery page loader
async function load_gallery_page() {
    var page_content = document.getElementById('page_content');
    page_content.innerHTML = await (await fetch('gallery.html')).text();
}
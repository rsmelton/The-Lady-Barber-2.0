// This loads the home page when first loading the page
// since we are loading pages dynamically
window.onload = async function() {
    var page_content = document.getElementById('page_content');
    page_content.innerHTML = await (await fetch('home.html')).text();
}

// Home page loader with scroll functionality for different sections.
async function load_home_page(section) {
    // first we load the home page
    var page_content = document.getElementById('page_content');
    page_content.innerHTML = await (await fetch('home.html')).text();

    // then depending on the section we want, we then scroll to that section.
    if (section === 'about') {
        var about_content = document.getElementById('about');
        about_content.scrollIntoView({ behavior: 'auto' });
    } else if (section === 'services') {
        var services_content = document.getElementById('services');
        services_content.scrollIntoView({ behavior: 'auto' });
    } else if (section === 'hours-location') {
        var hours_location_content = document.getElementById('hours-location');
        hours_location_content.scrollIntoView({ behavior: 'auto' });
    }
}

// Gallery page loader
async function load_gallery_page() {
    var page_content = document.getElementById('page_content');
    page_content.innerHTML = await (await fetch('gallery.html')).text();
}
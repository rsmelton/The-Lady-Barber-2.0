function scrollToSection(event, sectionId) {

    event.preventDefault();

    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // let sectionYOffset = document.getElementById(sectionId).offsetTop;
    // window.scrollTo(0, sectionYOffset);
    // document.getElementById(section).scrollTop(sectionYOffset);
}


// Old Code for fetching pages dynamically

// var page_content = document.getElementById('page_content');
// var home_page;
// var gallery_page;

// document.addEventListener('DOMContentLoaded', async function() {
//     // We fetch the home page and after we get the html back we can then load the page
//     // by default since we are loading content dynamically and the home page would be our default page
//     home_page = await (await fetch('home.html')).text();
//     gallery_page = await (await fetch('gallery.html')).text();
//     load_home_page();
// });

// function load_home_page(section) {
//     page_content.innerHTML = home_page;
//     // document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    // let sectionYOffset = document.getElementById(section).offsetTop;
    // document.getElementById(section).scrollTop(sectionYOffset);
//     // window.scrollTo(0, sectionYOffset);
// }

// function load_gallery_page() {
//     page_content.innerHTML = gallery_page;
//     window.scrollTo(0,0);
// }
var mainPhoto = document.getElementById('main-photo');
var thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // create temp variable to hold old main photo
        let tempSrc = mainPhoto.src;
        let tempAlt = mainPhoto.alt;

        // set new mainPhoto with thumbnail that was clicked
        mainPhoto.src = thumbnail.src;
        mainPhoto.alt = thumbnail.alt;

        // replace thumbnail that was clicked with old photo
        thumbnail.src = tempSrc;
        thumbnail.alt = tempAlt;
    });
});
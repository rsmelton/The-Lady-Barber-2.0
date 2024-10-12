// Grab the main photo so we can change it when the user clicks on a thumbnail
let main_photo = document.getElementById('main-photo');

// Grab all the thumbnails and throw them into the thumbnail_container
let thumbnail_container = Array.from(document.getElementById('thumbnail-container').children);

// Set intial thumbnail to have the current-thumbnail class by default.
let initial_thumbnail = thumbnail_container[0];
initial_thumbnail.classList.add('current-thumbnail');

function replaceMainPhotoWithThumbnail(thumbnail) {
    thumbnail.classList.add('current-thumbnail');
    main_photo.setAttribute('src', thumbnail.src);
    main_photo.setAttribute('alt', thumbnail.alt);
    main_photo.setAttribute('data-index', thumbnail.dataset.index);
}

// When the user clicks on random thumbnail
function onThumbnailClick(thumbnail) {
    let photo_index = Number(main_photo.getAttribute('data-index'));
    let prevThumbnail = thumbnail_container[photo_index];
    prevThumbnail.classList.remove('current-thumbnail');

    replaceMainPhotoWithThumbnail(thumbnail);
}

// When the user clicks the left arrow
function onGalleryLeftArrowClick() {
    let photo_index = Number(main_photo.getAttribute('data-index'));
    let prevThumbnail = thumbnail_container[photo_index];
    prevThumbnail.classList.remove('current-thumbnail');

    // We want to avoid going out of bounds so we check to make sure we don't go past 0
    // Then we set the main photo fields to be the last thumbnail in the arrays fields
    if (photo_index - 1 < 0) {
        // Grab the last thumbnail in the container
        var thumbnail = thumbnail_container[thumbnail_container.length - 1];
    } else {
        // Just grab the thumbnail before the main photo
        var thumbnail = thumbnail_container[photo_index - 1];
    }

    replaceMainPhotoWithThumbnail(thumbnail);
}

// When the user clicks the right arrow
function onGalleryRightArrowClick() {
    let photo_index = Number(main_photo.getAttribute('data-index'));
    let prevThumbnail = thumbnail_container[photo_index];
    prevThumbnail.classList.remove('current-thumbnail');

    // We want to avoid going out of bounds so we check to make sure we don't go past 
    // length of the container - 1
    // Then we set the main photo fields to be the first thumbnail in the arrays fields
    if (photo_index + 1 > thumbnail_container.length - 1) {
        // Grab the first thumbnail in the container
        var thumbnail = thumbnail_container[0];
    } else {
        // Just grab the thumbnail after the main photo
        var thumbnail = thumbnail_container[photo_index + 1];
    }

    replaceMainPhotoWithThumbnail(thumbnail);
}

// function replaceMainPhotoWithThumbnail(thumbnail) {
//     thumbnail.classList.add('current-thumbnail');
//     main_photo.setAttribute('src', thumbnail.src);
//     main_photo.setAttribute('alt', thumbnail.alt);
//     main_photo.setAttribute('data-index', thumbnail.dataset.index);
// }


// Old way
// // Grab the main photo so we can change it when the user clicks on a thumbnail
// let main_photo = document.getElementById('main-photo');

// // Grab all the thumbnails and throw them into the thumbnail_container
// let thumbnail_container = Array.from(document.getElementById('thumbnail-container').children);

// // Set first thumbnail to have the current-thumbnail class by default.
// let thumbnail = thumbnail_container[0];
// thumbnail.classList.add('current-thumbnail');


// // Fix later to be an onclick inside of the html instead, but take the inner code and use for the onclick function.
// thumbnail_container.forEach(thumbnail => {
//     thumbnail.addEventListener('click', () => {
//         let photo_index = Number(main_photo.getAttribute('data-index'));
//         let prevThumbnail = thumbnail_container[photo_index];

//         prevThumbnail.classList.remove('current-thumbnail');
//         thumbnail.classList.add('current-thumbnail');

//         main_photo.setAttribute('src', thumbnail.src);
//         main_photo.setAttribute('alt', thumbnail.alt);
//         main_photo.setAttribute('data-index', thumbnail.dataset.index);
//     });
// });

// document.getElementById('gallery-left-arrow-button').addEventListener('click', () => {
//     let photo_index = Number(main_photo.getAttribute('data-index'));
//     let prevThumbnail = thumbnail_container[photo_index];
//     prevThumbnail.classList.remove('current-thumbnail');

//     // We want to avoid going out of bounds so we check to make sure we don't go past 0
//     // Then we set the main photo fields to be the last thumbnail in the arrays fields
//     if (photo_index - 1 < 0) {
//         // Grab the last thumbnail in the container
//         var thumbnail = thumbnail_container[thumbnail_container.length - 1];
//     } else {
//         // Just grab the thumbnail before the main photo
//         var thumbnail = thumbnail_container[photo_index - 1];
//     }
//     thumbnail.classList.add('current-thumbnail');
//     main_photo.setAttribute('src', thumbnail.src);
//     main_photo.setAttribute('alt', thumbnail.alt);
//     main_photo.setAttribute('data-index', thumbnail.dataset.index);
// });

// document.getElementById('gallery-right-arrow-button').addEventListener('click', () => {
//     let photo_index = Number(main_photo.getAttribute('data-index'));
//     let prevThumbnail = thumbnail_container[photo_index];
//     prevThumbnail.classList.remove('current-thumbnail');

//     // We want to avoid going out of bounds so we check to make sure we don't go past 0
//     // Then we set the main photo fields to be the last thumbnail in the arrays fields
//     if (photo_index + 1 > thumbnail_container.length - 1) {
//         // Grab the last thumbnail in the container
//         var thumbnail = thumbnail_container[0];
//     } else {
//         // Just grab the thumbnail before the main photo
//         var thumbnail = thumbnail_container[photo_index + 1];
//     }
//     thumbnail.classList.add('current-thumbnail');
//     main_photo.setAttribute('src', thumbnail.src);
//     main_photo.setAttribute('alt', thumbnail.alt);
//     main_photo.setAttribute('data-index', thumbnail.dataset.index);
// });
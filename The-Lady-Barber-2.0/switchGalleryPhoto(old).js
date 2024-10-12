// New way
let gallery = [
    { src: './images/gallery-images/DeonnaWSign.png',       alt: 'Deonna w/ Business Sign' },
    { src: './images/gallery-images/TheLadyBarberShop.png', alt: 'Outside of Shop'         },
    { src: './images/gallery-images/LadyBarberHours.png',   alt: 'Hours of Operation'      },
    { src: './images/gallery-images/WaitingRoomAngle1.png', alt: 'Waiting Room Angle 1'    },
    { src: './images/gallery-images/WaitingRoomAngle2.png', alt: 'Waiting Room Angle 2'    },
    { src: './images/gallery-images/GuestChair.png',        alt: 'Guest Chair'             },
    { src: './images/gallery-images/BarberChair.png',       alt: 'Barber Chair'            },
    { src: './images/gallery-images/After1.png',            alt: 'After Photo 1'           },
    { src: './images/gallery-images/After2.png',            alt: 'After Photo 2'           },
    { src: './images/gallery-images/After3.png',            alt: 'After Photo 3'           }
]

let main_photo_container = document.getElementById('main-photo-container');
let main_photo_index = Number(main_photo_container.dataset.index);

let main_photo_src = gallery[main_photo_index].src;
let main_photo_alt = gallery[main_photo_index].alt;
main_photo_container.innerHTML = `<img class='main-photo' src='${main_photo_src}' alt='${main_photo_alt}' />`;

let thumbnail_container = document.getElementById('thumbnail-container');
let thumbnail_index = Number(thumbnail_container.dataset.index);

let thumbnail_src = gallery[thumbnail_index].src;
let thumbnail_alt = gallery[thumbnail_index].alt;
thumbnail_container.innerHTML = `<img class='thumbnail' src='${thumbnail_src}' alt='${thumbnail_alt}' />`;

// When the user clicks the left arrow
document.getElementById('gallery-left-arrow-button').addEventListener('click', () => {
    // we just update the indices of the main photo and the thumbnail
    // main_photo_container.dataset.index = main_photo_index - 1;
    // thumbnail_container.dataset.index = thumbnail_index - 1;

    main_photo_index -= 1;
    thumbnail_index -= 1;

    if (main_photo_index < 0) { main_photo_index = gallery.length - 1; }
    if (thumbnail_index < 0) { thumbnail_index = gallery.length - 1; }
    
    main_photo_src = gallery[main_photo_index].src;
    main_photo_alt = gallery[main_photo_index].alt;
    main_photo_container.innerHTML = `<img class='main-photo' src='${main_photo_src}' alt='${main_photo_alt}' />`;

    thumbnail_src = gallery[thumbnail_index].src;
    thumbnail_alt = gallery[thumbnail_index].alt;
    thumbnail_container.innerHTML = `<img class='thumbnail' src='${thumbnail_src}' alt='${thumbnail_alt}' />`;
});

// When the user clicks the right arrow
document.getElementById('gallery-right-arrow-button').addEventListener('click', () => {
    main_photo_index += 1;
    thumbnail_index += 1;

    if (main_photo_index > gallery.length - 1) { main_photo_index = 0; }
    if (thumbnail_index > gallery.length - 1) { thumbnail_index = 0; }
    
    main_photo_src = gallery[main_photo_index].src;
    main_photo_alt = gallery[main_photo_index].alt;
    main_photo_container.innerHTML = `<img class='main-photo' src='${main_photo_src}' alt='${main_photo_alt}' />`;

    thumbnail_src = gallery[thumbnail_index].src;
    thumbnail_alt = gallery[thumbnail_index].alt;
    thumbnail_container.innerHTML = `<img class='thumbnail' src='${thumbnail_src}' alt='${thumbnail_alt}' />`;
});


// Old way
// var mainPhoto = document.getElementById('main-photo');
// var thumbnails = document.querySelectorAll('.thumbnail');

// thumbnails.forEach(thumbnail => {
//     thumbnail.addEventListener('click', () => {
//         // create temp variable to hold old main photo
//         let tempSrc = mainPhoto.src;
//         let tempAlt = mainPhoto.alt;

//         // set new mainPhoto with thumbnail that was clicked
//         mainPhoto.src = thumbnail.src;
//         mainPhoto.alt = thumbnail.alt;

//         // replace thumbnail that was clicked with old photo
//         thumbnail.src = tempSrc;
//         thumbnail.alt = tempAlt;
//     });
// });
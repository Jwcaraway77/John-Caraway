"use strict"

//all images are my own

$(document).ready( () => {
    //create the slideshow when the document is ready
    //mode:fade fade from one image to the next
    //speed:1000 transition between images over 1 second
    //auto:true automatically moves through the slideshow
    //preloadImages: all preload all of the images
    //pause:5000 wait 5 seconds before moving to the next image automatically
    //captions:true use img title as a caption
    //adaptiveHeight:true change the height of the slideshow to match the individiual image height
    //autoControls: allow the user to start/stop the slideshow
    //keyboardEnabled: allow the user to select the slideshow controls using a keyboard
    //autoControlsCombine: only show the start control if the slideshow is stopped and only show the stop control if the slideshow is playing
    $(".bxslider").bxSlider({mode:"fade", speed:1000, auto:true, preloadImages:"all", pause:5000, captions:true, adaptiveHeight:true, autoControls:true, keyboardEnabled:true, autoControlsCombine:true});
});
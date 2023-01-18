"use strict"

//all images are my own

$(document).ready( () => {    
    //functionality for the drop down menu
    //Using the tutorial from https://www.plus2net.com/javascript_tutorial/dropdown-redirect.php
    $("#dropdownMenu").change( () => {
        //console.log($("#dropdownMenu").val())
        switch ($("#dropdownMenu").val()) {
            //move to the Instruments Overview page
            case "Instruments Overview":
                window.location.href="instrumentsOverview.html";
                break;
            //move to the Acoustic Guitar page
            case "Acoustic Guitar":
                window.location.href="acoustic.html";
                break;
            //move to the Bass Guitar page
            case "Bass Guitar":
                window.location.href="bass.html";
                break;
            //move to the Electric Guitar page
            case "Electric Guitar":
                window.location.href="electric.html";
                break;
            //move to the Home page
            default:
                window.location.href="index.html";
        }
    });
});
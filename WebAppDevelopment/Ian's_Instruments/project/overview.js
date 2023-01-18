"use strict"
//all images are my own

$(document).ready( () => {

    //get images for each instrument from my flickr page
    function getImages(){    
        $.ajax({
            type: "GET",
            url: "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=48d84e4231a7d03e067de26f0fa57852&user_id=195438999@N03&format=json&jsoncallback=?",
            beforeSend: function() {
            },
            timeout: 10000,
            error: function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
            },
            dataType: "json",
            success: function(data) {
                let photos = data['photos']['photo']
                $(photos).each((i)=>{
                    let instrument = photos[i]['title'].split("_")[0];
                    let src = "https://live.staticflickr.com/" + photos[i]['server'] + "/" + photos[i]['id'] + "_" + photos[i]['secret'] + ".jpg"
                    $("#instrumentsDiv").append(
                        "<div id='" + instrument + "Guitar' class='instrument'><p id='" + instrument + "Text' class='p'>" + instrument[0].toUpperCase() + instrument.substring(1) + " Guitar</p><img src='" + src + "' class='instrumentImage' alt='" + instrument + ".html'>"
                    );
                });
            }
        });
    }
    
    //create buttons for each image
    function makeButtons(){
        //functionality for buttons on instruments overview page
        console.log($(".instrument"))
        const buttons = $(".instrument");
        //turn each instrument div into a jquery button
        buttons.each((index)=>{
            const btn = buttons.eq(index).button();
            //handle click event
            btn.click(()=>{
                //move to the correct instrument page
                window.location.href=btn.children(".instrumentImage").attr("alt")
            });
        });
    }

    //get the images from flickr
    getImages();
    //create buttons for each image for easier navigation
    //wait 500 seconds to ensure that the images have been created before this is called
    setTimeout(function(){makeButtons();}, 1000);
    
});
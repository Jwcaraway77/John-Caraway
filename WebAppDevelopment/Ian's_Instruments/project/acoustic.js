"use strict"

$(document).ready(function() {
    //ajax call to the notes.json file stored on the webserver
    //notes.json stores the location of each note associated with an instrument
    $.ajax({
        type: "GET",
        beforeSend: function() {
        },
        url: "notes.json",
        dataType: 'json',
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        success: function(data) {
            $("#audioFiles").html("");
            //split the string of file paths into each individual file location
            const notes = data['acoustic'].split(",")
            //for each note file, create a hidden audio control that is used for the maphilight below
            $(notes).each((i)=>{
                const note = notes[i].split("/")
                $("#audioFiles").append(
                "<audio controls id='" + note[2].split(".")[0] + "Audio' class='audioNotes'><source src='." + notes[i] + "' type='audio/wav' id='" + note[2] + "' class='audioFile'></audio>"
                );
            });
        }
    });


    //create a maphilight that outlines the areas on the instrument that correspond to a note
    $('.instrumentImage').maphilight({});
    //create tabs widget for demo and controls section
    $("#tabs").tabs();
    //for each note in the map, call the corresponding audio file on click
    $(".note").click((evt)=>{
        evt.preventDefault();
        const note = '#' + evt.currentTarget.id + 'Audio'
        playNote(note);
    });
    //for each note in the map, call the corresponding audio file on press of a key input
    $(document).keyup((keyInput)=>{
        switch(keyInput.which){
            //E_Low            
            case 81:
                playNote("#1-0ELowAudio");
                break;
            case 65:
                playNote("#2-7ELowAudio");
                break;
            case 90:
                playNote("#3-12ELowAudio");
                break;
            //A
            case 87:
                playNote("#4-0AAudio");
                break;
            case 83:
                playNote("#5-7AAudio");
                break;
            case 88:
                playNote("#6-12AAudio");
                break;
            //D
            case 69:
                playNote("#7-0DAudio");
                break;
            case 68:
                playNote("#8-7DAudio");
                break;
            case 67:
                playNote("#9-12DAudio");
                break;
            //G
            case 82:
                playNote("#10-0GAudio");
                break;
            case 70:
                playNote("#11-7GAudio");
                break;
            case 86:
                playNote("#12-12GAudio");
                break;
            //B
            case 84:
                playNote("#13-0BAudio");
                break;
            case 71:
                playNote("#14-7BAudio");
                break;
            case 66:
                playNote("#15-12BAudio")
                break;
            //E_High
            case 89:
                playNote("#16-0EAudio");
                break;
            case 72:
                playNote("#17-7EAudio");
                break;
            case 79:
                playNote("#18-12EAudio");
                break;
        }
    });
    //play the audio file
    function playNote(input){
        //pause and restart the file in case the file is already being played
        $(input).get(0).pause()
        $(input).get(0).currentTime = 0;
        $(input).get(0).play();
    }
});
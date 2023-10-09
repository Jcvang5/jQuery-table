$( document ).ready(function() {
    console.log("test");
    $("th").css("font-size", "20px");
    $("th").css("font-style", "italic");

    $("td:nth-child(odd)").css("background-color", "lightblue");
    $("td:nth-child(even)").css("background-color", "tomato");

    }); 
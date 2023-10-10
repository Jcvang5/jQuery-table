$( document ).ready(function() {
    console.log("test");
    $("th").css("font-size", "20px");
    $("th").css("font-style", "italic");

    $("td:nth-child(odd)").css("background-color", "lightblue");
    checkCost();

    function checkCost(){
        for(var i = 1; i <= $("tr").length; i++){
            var item = $("tr:nth-child(" + i +") td:nth-child(2)");
            var cost = parseFloat(item.text());

            if (cost > 10){
                item.css("background-color", "tomato");
            }
        }
    }

    }); 
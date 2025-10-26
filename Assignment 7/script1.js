$(document).ready(function() {
    console.log("jQuery is ready!");
});

$(document).ready(function() {
    $("button").click(function(){
        $(".nav-row").css("background-color", "white");
    });
    $("button").dblclick(function(){
        $(".nav-row").css("background-color", "red");
    });
});

$(document).ready(function() {
     $("p").click(function(){
        let text = $("p:first").text();
    
        let newText = text.substring(1);
        
        $("p:first").text(newText);
    });
});

$(document).ready(function() {
     $("#nooo").mouseenter(function(){
        alert("BOOOOOOOOO! Did I scary you?");
    });
});
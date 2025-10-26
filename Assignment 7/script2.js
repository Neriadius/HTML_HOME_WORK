$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#toHide").click(function(){
        $("p").hide();
    });
    
    $("#toShow").click(function(){
        $("p").show();
    });

    $("#toToggle").click(function(){
        $("p").toggle();
    });

    $("#fHide").click(function(){
        $(".pumkin").fadeIn();
    });

    $("#fShow").click(function(){
        $(".pumkin").fadeOut();
    });

    $("#fToggle").click(function(){
        $(".pumkin").fadeToggle();
    });

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});


$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#moveBox").click(function(){
        $("#box").animate({
            left: '250px',
            height: '200px',
            width: '50px'
        });
    });
    
    $("#moveBox2").click(function(){
        var anim = $("#box2");
        anim.animate({left: '250px'}, "slow");
        anim.animate({up: '0px'}, "slow");
        anim.animate({width: '50px'}, "slow");
        anim.animate({height: '50px'}, "slow");
        anim.animate({left: '0px'}, "slow");
        anim.animate({up: '250px'}, "slow");
        anim.animate({width: '100px'}, "slow");
        anim.animate({height: '100px'}, "slow");
    });
    
    $("#moveBox3").click(function(){
         var div = $("#box3");
         div.animate({left: '250px'}, "slow")
         div.animate({height: '300px', opacity: '0.4'}, "slow");
         div.animate({width: '300px', opacity: '0.8'}, "slow");
         div.animate({height: '100px', opacity: '0.4'}, "slow");
         div.animate({width: '100px', opacity: '0.8'}, "slow");
         div.animate({left: '0px'}, "slow");
    });
});
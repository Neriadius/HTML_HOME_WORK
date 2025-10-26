$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#append").click(function(){
        $("ol").append("<li>Spooky, scary skeletons</li>");
    });

    $("#prepend").click(function(){
        $("ol").prepend("<li>Spooky, scary skeletons</li>");
    });

    $("#remove").click(function(){
        $("ol li:last").remove();
    });

    $("#change").click(function(){
        $("h3").text("why did you do it?")
        $("img").attr("src", "Boo.jpg");
    });

    $("#name").on("input", function() {
        let nameValue = $(this).val();
        $("#displayName").text(nameValue);
    });
    
    $("#email").on("input", function() {
      let emailValue = $(this).val(); 
      $("#displayEmail").text(emailValue);
    });
});
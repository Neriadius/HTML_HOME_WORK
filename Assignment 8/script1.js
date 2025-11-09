$(document).ready(function(){
    $("#showBar").click(function(){
        $(".nav-container").slideToggle();
         $(this).toggleClass("rotated");
    });
});

$(document).ready(function() {
    console.log("jQuery is ready!");

    $("#flip1").click(function(){
        $("#panel1").slideToggle("slow");
        $("#panel2").slideUp("slow")
        $("#panel3").slideUp("slow")
        $("#panel4").slideUp("slow")
        $("#panel5").slideUp("slow")
        $("#panel6").slideUp("slow")
        $("#panel7").slideUp("slow")
        $("#panel8").slideUp("slow")
    });
    $("#flip2").click(function(){
        $("#panel2").slideToggle("slow");
        $("#panel1").slideUp("slow")
        $("#panel3").slideUp("slow")
        $("#panel4").slideUp("slow")
        $("#panel5").slideUp("slow")
        $("#panel6").slideUp("slow")
        $("#panel7").slideUp("slow")
        $("#panel8").slideUp("slow")
    });
    $("#flip3").click(function(){
        $("#panel3").slideToggle("slow");
        $("#panel2").slideUp("slow")
        $("#panel1").slideUp("slow")
        $("#panel4").slideUp("slow")
        $("#panel5").slideUp("slow")
        $("#panel6").slideUp("slow")
        $("#panel7").slideUp("slow")
        $("#panel8").slideUp("slow")
    });
    $("#flip4").click(function(){
        $("#panel4").slideToggle("slow");
        $("#panel2").slideUp("slow")
        $("#panel3").slideUp("slow")
        $("#panel1").slideUp("slow")
        $("#panel5").slideUp("slow")
        $("#panel6").slideUp("slow")
        $("#panel7").slideUp("slow")
        $("#panel8").slideUp("slow")
    });
    $("#flip5").click(function(){
        $("#panel5").slideToggle("slow");
        $("#panel2").slideUp("slow")
        $("#panel3").slideUp("slow")
        $("#panel4").slideUp("slow")
        $("#panel1").slideUp("slow")
        $("#panel6").slideUp("slow")
        $("#panel7").slideUp("slow")
        $("#panel8").slideUp("slow")
    });
    $("#flip6").click(function(){
        $("#panel6").slideToggle("slow");
        $("#panel2").slideUp("slow")
        $("#panel3").slideUp("slow")
        $("#panel4").slideUp("slow")
        $("#panel5").slideUp("slow")
        $("#panel1").slideUp("slow")
        $("#panel7").slideUp("slow")
        $("#panel8").slideUp("slow")
    });
    $("#flip7").click(function(){
        $("#panel7").slideToggle("slow");
        $("#panel2").slideUp("slow")
        $("#panel3").slideUp("slow")
        $("#panel4").slideUp("slow")
        $("#panel5").slideUp("slow")
        $("#panel6").slideUp("slow")
        $("#panel1").slideUp("slow")
        $("#panel8").slideUp("slow")
    });
    $("#flip8").click(function(){
        $("#panel8").slideToggle("slow");
        $("#panel2").slideUp("slow")
        $("#panel3").slideUp("slow")
        $("#panel4").slideUp("slow")
        $("#panel5").slideUp("slow")
        $("#panel6").slideUp("slow")
        $("#panel7").slideUp("slow")
        $("#panel1").slideUp("slow")
    });
});

$(document).ready(function(){
    let currentIndex = 0;
    let images = $('.card .top-card img');

    images.click(function(){
        currentIndex = images.index(this);
        let src = $(this).attr('data-full') || $(this).attr('src');
        let caption = $(this).closest('.card').find('ul li:first').text();

        $('#lightbox img').attr('src', src);
        $('#lightbox .caption').text(caption);
        $('#lightbox').css('display','flex').hide().fadeIn();
    });

    $('#lightbox .close, #lightbox').click(function(e){
        if(e.target !== this && !$(e.target).hasClass('prev') && !$(e.target).hasClass('next')) return;
        $('#lightbox').fadeOut();
    });

    $('#lightbox .next').click(function(e){
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        let img = $(images[currentIndex]);
        $('#lightbox img').attr('src', img.attr('data-full') || img.attr('src'));
        $('#lightbox .caption').text(img.closest('.card').find('ul li:first').text());
    });

    $('#lightbox .prev').click(function(e){
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        let img = $(images[currentIndex]);
        $('#lightbox img').attr('src', img.attr('data-full') || img.attr('src'));
        $('#lightbox .caption').text(img.closest('.card').find('ul li:first').text());
    });
});

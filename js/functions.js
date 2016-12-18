$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  4000);

//PORTFOLIO PAGE CATEGORY OVERLAY

$('.landscapes').mouseover(function () {
    $('.portfolio-image-overlay-landscapes').show();
}).mouseout(function () {
    $('.portfolio-image-overlay-landscapes').hide();
});

$('.commercial').mouseover(function () {
    $('.portfolio-image-overlay-commercial').show();
}).mouseout(function () {
    $('.portfolio-image-overlay-commercial').hide();
});

$('.livingroom').mouseover(function () {
    $('.portfolio-image-overlay-livingroom').show();
}).mouseout(function () {
    $('.portfolio-image-overlay-livingroom').hide();
});

$('.kitchens').mouseover(function () {
    $('.portfolio-image-overlay-kitchens').show();
}).mouseout(function () {
    $('.portfolio-image-overlay-kitchens').hide();
});

$('.bathrooms').mouseover(function () {
    $('.portfolio-image-overlay-bathrooms').show();
}).mouseout(function () {
    $('.portfolio-image-overlay-bathrooms').hide();
});

$('.bedrooms').mouseover(function () {
    $('.portfolio-image-overlay-bedrooms').show();
}).mouseout(function () {
    $('.portfolio-image-overlay-bedrooms').hide();
});

// LINK APPEARS BELOW IMAGE IF JQUERY DOES NOT LOAD 
$(".link").hide();

// NAVIGATION HOVER EFFECT

$('.nav1').mouseover(function () {
    $('.nav1').css("background-color", "#d6df5a")();
}).mouseout(function () {
    $('.nav1').css("background-color", "")();
});

$('.nav2').mouseover(function () {
    $('.nav2').css("background-color", "#d6df5a")();
}).mouseout(function () {
    $('.nav2').css("background-color", "")();
});

$('.nav3').mouseover(function () {
    $('.nav3').css("background-color", "#d6df5a")();
}).mouseout(function () {
    $('.nav3').css("background-color", "")();
});

$('.nav4').mouseover(function () {
    $('.nav4').css("background-color", "#d6df5a")();
}).mouseout(function () {
    $('.nav4').css("background-color", "")();
});

$('.nav5').mouseover(function () {
    $('.nav5').css("background-color", "#d6df5a")();
}).mouseout(function () {
    $('.nav5').css("background-color", "")();
});

$('.nav6').mouseover(function () {
    $('.nav6').css("background-color", "#d6df5a")();
}).mouseout(function () {
    $('.nav6').css("background-color", "")();
});

$('.nav7').mouseover(function () {
    $('.nav7').css("background-color", "#d6df5a")();
}).mouseout(function () {
    $('.nav7').css("background-color", "")();
});

//FEATURE PAGE BUTTON - SHOWS ADDITIONAL CONTENT

$(".button").click(function () { 

   $('#page1').hide(1000);
    $('.page2').show(1000); 
    $('.button').hide();

    $("html, body").animate({ scrollTop: 0 }, 1000);
});


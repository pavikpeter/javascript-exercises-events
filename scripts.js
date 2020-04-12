let clickCount=0;
$("#clickCount").text(clickCount)
$("#btn_0").click(function(){
    $("#clickCount").text(++clickCount);
});

$("#btn_1").click(function(){
    $("#btn_0").text("<<<<>>>>");
});

$("#btn_2").click(function(){
    $(".grBtn").css("background-color", "rgb(0,0,225,0.4");
});

$("#rst").click(function(){
    clickCount=0;
    $("#clickCount").text(clickCount);
    $("#btn_0").text("Click it");
    $(".grBtn").css("background-color",""); 
});

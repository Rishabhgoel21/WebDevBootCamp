//click()
$("button").click(function(){
    alert($(this).text() + " : button clicked");
});

//keypress()
$("input").keypress(function(event){
    if(event.which === 13){               //which is like ASCII code in jquery for ENTER key
        alert("Enter Pressed!");
    }
});

//on()
$("h1").on('mouseenter',function(){
    $(this).css("color","purple");
});

$("h1").on('mouseleave',function(){
    $(this).css("color","black");
});

"use strict";

// check off specific todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "li span", function(event) {  
    $(this).parent().fadeOut("500ms", function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input:text").keypress(function (event) {
    if(event.which === 13){
        //grab new TODO from input
        let newTodo = $(this).val();
        //clear the input
        $(this).val("");
        //add to the ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newTodo + "</li>");
    };
});

$("h1 span").on("click", function(){
    $("input:text").fadeToggle();
});
"use strict";

// check off specific todos by clicking

$("li").click(function(){
    $(this).toggleClass("completed");
});

$("li span").click(function(event) {  
    $(this).parent().fadeOut("500ms", function(){
        $(this).remove();
    });
    event.stopPropagation();
});
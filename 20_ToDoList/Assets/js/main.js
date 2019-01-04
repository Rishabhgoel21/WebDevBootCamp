//line-through toDos when clicked
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//delete ToDos
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(600, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

//adding a new ToDo
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + toDoText + "</li>");
    }
});

$(".fa-plus-circle").click(function () {
    $("input").fadeToggle(600, function () {
        //transition done
    });
});
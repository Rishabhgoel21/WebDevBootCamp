var Todos = [];

var input = prompt("What do you want to do ? ");

while(input !== "quit"){
    if(input === "list"){
        listTodos();
        var input = prompt("What do you want to do ? ");
    }else if(input === "new"){
        AddTodo();
        var input = prompt("What do you want to do ? ");
    }else if(input === "delete"){
        DeleteTodo();
        var input = prompt("What do you want to do ? ");
    }
}

function listTodos() {
    console.log("***************");
    if(Todos.length === 0){
        console.log("No Todos, Add one to list!")
    }

    // **************************** todo is the item of array , and i is the index of that item..***********

    Todos.forEach(function(todo, i){
        console.log(i + " : " + todo);
    });
    console.log("***************");
}

function AddTodo(){
    var item = prompt("Enter a new Todo ");
    Todos.push(item);
    console.log("Todo Added to the list");
}

function DeleteTodo(){
    var index = prompt("Enter index of Todo to delete");

    // *************************splice is used to delete item from between the array**************************

    Todos.splice(index, 1);
    console.log("Todo Delted");
}

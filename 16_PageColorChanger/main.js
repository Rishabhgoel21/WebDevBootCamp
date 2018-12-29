var button = document.querySelector("button");
var isPurple = true;

// button.addEventListener("click",function(){
//     if(isPurple){
//         document.body.style.background = "purple";
//     }else{
//         document.body.style.background = "white";
//     }
//     isPurple = !isPurple;
// });


//ALTERNATIVE -- using classList

button.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});
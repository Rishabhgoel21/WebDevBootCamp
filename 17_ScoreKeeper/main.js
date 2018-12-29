var button1 = document.getElementsByTagName("button")[0];
var button2 = document.getElementsByTagName("button")[1];
var reset = document.getElementsByTagName("button")[2];
var winScore = 5;
var p1 = document.getElementById("p1Score");
var p2 = document.getElementById("p2Score");
// *****************below line
var numInput = document.querySelector("input");
var p = document.getElementsByTagName("p")[0];
var num1 = 0, num2 = 0;
var gameOver = false;
    
    button1.addEventListener("click",function(){
    if(!gameOver){
    num1++;
    if(num1 === winScore){
        gameOver = true;
        p1.classList.add("p1Score");
    }
    p1.textContent = num1;
    }});
    

    button2.addEventListener("click",function(){
        if(!gameOver){
        num2++;
        if(num2 === winScore){
            gameOver = true;
            p2.classList.add("p2Score");
        }
        p2.textContent = num2;
        }});

    reset.addEventListener("click",function(){
       Reset();
    });

    function Reset(){
        num1 = 0;
        num2 = 0;
        p1.textContent = num1;
        p2.textContent = num2;
        gameOver = false;
        p1.classList.remove("p1Score");
        p2.classList.remove("p2Score");
    }

    numInput.addEventListener("change",function(){
        //*************** numinput.value
        p.textContent = "Points to WIN : " + this.value;    //this = numInput
        winScore = Number(this.value);
        Reset();
    });
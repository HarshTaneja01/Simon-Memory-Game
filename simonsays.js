let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let h1 = document.querySelector("h1");
let div = document.querySelector("#Maindiv");
let blink = null;
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let arr = [];
let orgc ;
let gameclick = [];
let keypress = true;
let bcolor  = body.style.backgroundColor;
let hscore = document.querySelector("#highscore");
let cscore = document.querySelector("#curscore");
cscore.textContent = "Score : "+ 0;
let c = 0;
let h = 0;
hscore.innerText = "High Score : "+0;

body.addEventListener("keypress", function(event){
    
    if (!keypress){
        alert("You cant press a key in between the levels");
        alert("Game Over")
        h3.innerText = "Press Any key to start";
        h1.innerText = 'Simon Game';
        arr = [];
        gameclick = [];
        keypress = true;
        cscore.textContent = "Score : "+ 0;
        c=0;
        return;
    }
    
    let v = true
    h1.innerText = 'Simon Game';
    h3.textContent = "Level " + (arr.length+1);
    let m = Math.ceil(Math.random()*40);
    if(blink!== null){
        clearInterval(blink);
    }
    function blinking (element , orgcolor){
        blink = setInterval(() => {
        if (v) {
            element.style.background = "white";
            v = !v;
        }
        else{
            element.style.background = orgcolor;
          }      
    }, 200);}
    
    if(m<=10){
        orgc = div1.style.backgroundColor
        blinking(div1 , orgc);
        arr.push(1);
        console.log(arr);
        

    }
    else if(m>10 && m<=20){
        orgc = div2.style.backgroundColor
        blinking(div2 , orgc);
        arr.push(2);
        console.log(arr);
        
    }
    else if(m>20 && m<=30){
        orgc = div3.style.backgroundColor;
        blinking(div3 , orgc)
        arr.push(3)
        console.log(arr);
        
    }
    else if(m>30 && m<=40){
        orgc = div4.style.backgroundColor;
        blinking(div4 , orgc)
        arr.push(4);
        console.log(arr);
    }
    keypress = false;

})
div.addEventListener("click" , function(event){
    if(event.target.id == "div1"){
        console.log("left");
        gameclick.push(1);
        console.log(gameclick);

    }
    else if(event.target.id == "div2"){
        console.log("right");
        gameclick.push(2);
        console.log(gameclick);
    }
    else if(event.target.id == "div3"){
        console.log("bleft");
        gameclick.push(3);
        console.log(gameclick);
    }
    else if(event.target.id == "div4"){
        console.log("bright");
        gameclick.push(4);
        console.log(gameclick);
    }
    let curidx = gameclick.length-1;
    if (gameclick[curidx] != arr[curidx]){
        body.style.backgroundColor = "red";
        clearTimeout();
        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 1300);
        alert("You chose wrong element");
        alert("Game Over")
        h3.innerText = "Press Any key to start";
        arr = [];
        gameclick = [];
        keypress = true;
        c=0;
        cscore.textContent = "Score : "+ 0;
        return;
    }
    if(gameclick.length == arr.length){
        h1.innerText = "Congratulation you move to level " + (arr.length+1);
        h3.textContent = "Press a key for : Level " + (arr.length+1);
        gameclick = [];
        c = arr.length;
        keypress = true;
        cscore.textContent = "Score : "+(arr.length) ;
        if(c>h){
            h=c;
            hscore.textContent = "High "+cscore.textContent ;
        }
    }    
})

let turn = 'X';
const clickSound = new Audio("Click - Sound Effect.mp3");
let isGameOver = false ;
function changeTurn(){
     return turn === 'X'?'0' : 'X';
}

function checkWin(){
      let boxText = document.getElementsByClassName("box");
       let wins = [
            [0,1,2,6,3,0],
            [3,4,5,18,3,0],
            [6,7,8,30,3,0],
            [0,3,6,18,-9,90],
            [1,4,7,18,3,90],
            [2,5,8,18,15,90],
            [0,4,8,18,3,45],
            [2,4,6,18,3,135]
       ]

       wins.forEach((e)=>{
            if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[1]].innerHTML ===boxText[e[2]].innerHTML) && (boxText[e[0]].innerHTML !="")){
                 
                document.querySelector("#turn-win").innerText = boxText[e[0]].innerHTML + " WON";
                isGameOver = true;
                document.querySelector(".line").style.width = "30vmax"
                document.querySelector(".line").style.transform = `translateY(${e[3]}vmax) translateX(${e[4]}vmax) rotate(${e[5]}deg)`
            }
       })
}

const turnWin = document.getElementById('turn-win'); 

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element)=>{
      element.addEventListener('click',()=>{
              if(element.innerHTML === ''){
                     element.innerHTML = turn ;
                     turn = changeTurn();
                     clickSound.play();
                     checkWin();
                  if(!isGameOver){
                        turnWin.innerHTML = "Turn for " + turn ;
                  }
              }
      })
})

 const btn = document.getElementById('btn');

 btn.addEventListener('click', ()=>{
      clickSound.play();
      Array.from(boxes).forEach((element)=>{
            element.innerHTML = "";
            turnWin.innerHTML = "Turn for " + turn;
            document.querySelector(".line").style.width = "0"
      })
 })
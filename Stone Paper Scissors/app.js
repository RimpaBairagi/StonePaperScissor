const  choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara =document.querySelector("#comp-score");

let userScore =0;
let compScore =0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log("clicked",userChoice);
        playGame(userChoice);
       
        
    })
})
const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    ranIdx=Math.floor(Math.random()*3);
    cp= options[ranIdx];
    console.log(cp);
    return cp;
    
}

const drawGame=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";

}
const loose=()=>{
    msg.innerText="You loose!";
    msg.style.backgroundColor="red";
    compScore++;
    compScorePara.innerText= compScore;
}
const win=()=>{
    msg.innerText="You win";
    msg.style.backgroundColor="green";
    userScore++;
    userScorePara.innerText=userScore;
}
const playGame=(userChoice)=>{
   const compChoice =getCompChoice();
    if(userChoice===compChoice){
       drawGame();
    }
    if(userChoice==="rock" && compChoice==="paper"||userChoice==="scissors" && compChoice==="rock"||userChoice==="paper" && compChoice==="scissors"){
       loose();
    }
    if(userChoice==="paper"&& compChoice==="rock"||userChoice==="rock" && compChoice==="scissors"||userChoice==="scissors" && compChoice==="paper"){
        win();
    }
}
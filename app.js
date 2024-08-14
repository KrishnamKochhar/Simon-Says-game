let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let buttons=["red","yellow","green","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(started==false){
    console.log("game started");
    started=true;
    levelup();
}
});
function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },150);
    };
function levelup(){
    userseq=[];
level++;
h2.innerText=`Level ${level}`;
let ranIdx=Math.floor(Math.random() * 4);
let ranColor=buttons[ranIdx];
let ranBtn=document.querySelector(`.${ranColor}`);
// console.log(ranIdx);
// console.log(ranColor);
// console.log(ranBtn);
gameseq.push(ranColor);
console.log(gameseq);
btnflash(ranBtn);
};
function checkAns(idx){
if(userseq[idx] === gameseq[idx]){
    if (userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
}
else{
    h2.innerHTML=`Game Over. Your score was ${level}.<br>Press any key to start again.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){document.querySelector("body").style.backgroundColor="white"},250);
    reset();
}
};
function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let btns=document.querySelectorAll(".btn");
for(btn of btns){
    btn.addEventListener("click",btnpress);
    
};
function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;

};
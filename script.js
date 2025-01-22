let boxes=document.body.querySelectorAll(".inner");
let resetbtn=document.body.querySelector("#resetbtn");
let newgamebtn=document.body.querySelector("#newgame");
let winner=document.body.querySelector("#msg");

let turnX=true;
let msgbox=document.body.querySelector("#msgboxoutside");
let winningcon=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let count=0;

let disablebtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
newgamebtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
        winner.innerText="";
    })
    msgbox.classList.add("hide");
    newgamebtn.classList.add("hide");
    count=0;
    winner.innerText="";
    if(turnX){
        turnX=false;
    }
    else{
        turnX=true;
    }
})
const checkwinningcon=()=>{
    for(let con of winningcon){
        console.log(con);
        let posval1=boxes[con[0]].innerHTML;
        let posval2=boxes[con[1]].innerHTML;
        let posval3=boxes[con[2]].innerHTML;
        if(posval1==='X'&& posval2==='X'&&posval3==='X'){
            winner.innerText="The winner is X !!"
            disablebtns();
            msgbox.classList.add("show");
            msgbox.classList.remove("hide");
            newgamebtn.classList.add("show");
            newgamebtn.classList.remove("hide");
        }
        else if(posval1==='O'&& posval2==='O'&&posval3==='O'){
            winner.innerText="The winner is O !!"
            disablebtns();
            msgbox.classList.add("show");
            msgbox.classList.remove("hide");
            newgamebtn.classList.add("show");
            newgamebtn.classList.remove("hide");
        }
    }
}

boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
        console.log("Box was clicked");
        let id=box.getAttribute("id");
        
        if(turnX){
            box.style.color="#F3B61F";
            box.innerHTML="X";
            turnX=false;
            
        }
        else{
            box.style.color="#BBD8B3";
            box.innerHTML="O";
            turnX=true;

        }
        count++;
        console.log(count);
        box.disabled=true;  
        checkwinningcon();
        if(count===9){
    
            if(winner.innerText===""){
                
                winner.innerText="The game was draw :(";
                msgbox.classList.remove("hide");
                msgbox.classList.add("show");
                newgamebtn.classList.remove("hide");
                newgamebtn.classList.add("show");
            }
        }
    })
    
    box.onclick=(e)=>{
        console.log(e);
    }
})


  


resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled=false;
        winner.innerText="";
    })
    msgbox.classList.remove("show");
    msgbox.classList.add("hide");
    newgamebtn.classList.remove("show");
    newgamebtn.classList.add("hide");
    count=0;
    turnX=true;
    winner.innerHTML="";
    newgamebtn.classList.add("hide");
})
let btns = document.querySelectorAll(".botn1");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");


let player =true;


 
const  win=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame = ()=>{
    player=true;
    enableBtn();
    msgContainer.classList.add("hide");
    


}

btns.forEach((botn1)=>{
    botn1.addEventListener("click",()=>{
            if(player)
            {
                botn1.innerText ="O";
                player = false;
            }
            else
            {
                botn1.innerText ="X";
                player = true;
            }
            botn1.disabled = true;
            iswin();

        
    });

});

const enableBtn = ()=>{
    for(let i of btns)
        {
            i.disabled = false;
            i.innerText ="";
        }

}
const disableBtn = ()=>{
    for(let i of btns)
        {
        i.disabled = true;
        }

}

const showWinner=()=>{
        msgContainer.classList.remove("hide");
        disableBtn();
}

const iswin = ()=>{
    for(let i of win)
        {
            let val1 =btns[i[0]].innerText;
            let val2 =btns[i[1]].innerText;
            let val3 =btns[i[2]].innerText;

            if(val1 !="" && val2 !="" && val3 !="" && val1===val2 && val2===val3 )
                {
                    if(val1 === 'X')
                    alert("Yey!,Player2 won");
                    else
                    alert("Yey!, Player1 won");

                    showWinner();
                
                }
        }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

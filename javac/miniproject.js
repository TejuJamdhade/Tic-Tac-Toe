let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn = true;
let count = 0;

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(box.classList.contains('disabled')) return;

        if(turn) {
            box.innerText = "X";
            box.classList.add('neonTextX');
        }else{
            box.innerText = "O";
            box.classList.add('neonTextO');
        }
        box.classList.add('disabled');
        turn = !turn;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
    });

});
const WinPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWinner = () =>{
    for ( let logic of WinPattern){
        let pos1val = boxes[logic[0]].innerText;
        let pos2val = boxes[logic[1]].innerText;
        let pos3val = boxes[logic[2]].innerText;

        if(pos1val !="" && pos2val!="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }
        }
    }
};

const showWinner = (winner) => {

    msg.innerText=`Congratulation,The winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

const gameDraw = () =>{
    msg.innerText = `Game is Draw`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.classList.add('disabled');
    });
};

const enableBox = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove('disabled');
        box.classList.remove('neonTextX');
        box.classList.remove('neonTextO');
    });
};

const resetGame=()=>{

    turn = true;
    count = 0;
    msgContainer.classList.add('hide');
    enableBox();
}
resetbtn.addEventListener('click',resetGame);

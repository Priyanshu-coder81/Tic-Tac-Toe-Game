/* Select each boxes */
let boxes = document.querySelectorAll(".box");
/* To Select the Reset Button */
let resetbtn = document.querySelector("#reset-btn");
/* To Select the New Button */
let newbtn = document.querySelector(".new-btn");
/* To Select the Message  */
let msg = document.querySelector(".msg");
/* To Select the Message Container */
let msgContainer = document.querySelector(".msgcontainer");

let turn0 = true;
let count = 0;

/* Winning Patterns in Tic-Tac-Toe */
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]; 


/* To Restart the Game */
const resetButton = () => {
    turn0 = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

/* Making the Player to play by clicking & checking the winner at each step */
boxes.forEach(box => {
    
    box.addEventListener("click", () => {
        if (turn0) {
            turn0 = false;
            box.innerText = 'X';
        }
        else {
            turn0 = true;
            box.innerText = 'O';
        }
        box.disabled = true;
       count++; 
        let isWinner=checkWinner();

        if(count === 9 && !isWinner){
            gameDraw();
        }
        
    })
});

const gameDraw = () => {
    msg.innerHTML="Draw!! <br>Restart your Game";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

/* Enables all the Boxes after Game reset or for a new Game */
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

/* Disables all the boxes when we got the winner */
const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

/* To Show the Winner */
const showWinner = (pos1) => {
    msg.innerText = `Congratulations Winner is ${pos1}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

/* To Check the Winner  */
const checkWinner = () => {
    for (pos of winPatterns) {
        let pos1 = boxes[pos[0]].innerText;
        let pos2 = boxes[pos[1]].innerText;
        let pos3 = boxes[pos[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
};
/* Event Listener For the Reset Button */
resetbtn.addEventListener("click", resetButton);
/* Event Listener For the New Button */
newbtn.addEventListener("click", resetButton);


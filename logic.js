let buttons = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let winn = document.querySelector("#winr");
let winnmsg = document.querySelector(".winner");
let reset_button = document.querySelector("#resetButton");

let wins = [[0, 1, 2], [0, 3, 6], [6, 7, 8], [2, 5, 8], [0, 4, 8], [1, 4, 7], [2, 4, 6], [3, 4, 5]];

let turn = true;
let count = 0;

const resetGame = () => {
    turn = true;
    count = 0;
    enableBoxes();
    winnmsg.classList.add("hide");
}

let disableBoxes = () => {
    buttons.forEach(function(box) {
        box.innerText = "";
        box.disabled = true;
    });
}

let enableBoxes = () => {
    buttons.forEach(function(box) {
        box.disabled = false;
        box.innerText = "";
    });
}

buttons.forEach((box) => {
    box.addEventListener("click", function () {
        if(turn === true) {
            box.innerHTML = "X";
            turn = false;
        } else {
            box.innerHTML = "O";
            turn = true;
        }
        box.disabled = true;
        count += 1;
        if(count == 9) {
            winn.innerText = "Game is a Draw";
            winnmsg.classList.remove("hide");
            disableBoxes();
        }
        for(let ans of wins) {
            let pos1 = buttons[ans[0]].innerHTML;
            let pos2 = buttons[ans[1]].innerHTML;
            let pos3 = buttons[ans[2]].innerHTML;
            if(pos1 != "" && pos2 != "" && pos3 != "") {
                if(pos1 === pos2 && pos2 === pos3) {
                    winn.innerText = "Congratulations, winner is " + pos1;
                    winnmsg.classList.remove("hide");
                    disableBoxes();
                }
            }
        }
    })
})

function checkWinner() {
    
}
reset_button.addEventListener("click", resetGame);
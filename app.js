let boxes = document.querySelectorAll(".box");
let playerX = true;
let playerO = false;

const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerX) {
            box.innerHTML = "X";
            playerX = false;
            playerO = true;
        } else {
            box.innerHTML = "O";
            playerX = true;
            playerO = false;
        }
        box.disabled = true;
        box.style.backgroundColor = "rgb(205, 187, 50)";
        checkGameStatus();
    });
});

const checkGameStatus = () => {
    let winner = checkWinner();
    if (winner) {
        showWinner(winner);
    } else if (isBoardFull()) {
        showDraw();
    }
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            return pos1;
        }
    }
    return null;
}

const showWinner = (winner) => {
    let winnerElement = document.getElementById("winner");
    winnerElement.style.display = "block";
    winnerElement.innerHTML = winner + " Won!";
    disableButtons();
}

const showDraw = () => {
    let winnerElement = document.getElementById("winner");
    winnerElement.style.display = "block";
    winnerElement.innerHTML = "It's a Tie!";
    disableButtons();
}

const disableButtons = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.style.backgroundColor = "rgb(205, 187, 50)";
    }
}

const isBoardFull = () => {
    return [...boxes].every(box => box.innerHTML !== "");
}

// Add functionality to reset the game
document.getElementById('resetgame').addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
        box.style.backgroundColor = "";
    });
    document.getElementById('winner').style.display = "none";
    playerX = true;
    playerO = false;
});


document.getElementById('newgame').addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
        box.style.backgroundColor = "";
    });
    document.getElementById('winner').style.display = "none";
    playerX = true;
    playerO = false;
});
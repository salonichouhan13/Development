let UserScore = 0;
let ComputerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#computer-score");

const DraGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game Was Draw";
    msg.style.backgroundColor = "gray";
};

const showWinner = (UserWin) => {
    if (UserWin) {
        UserScore++;
        userScorepara.innerText = UserScore;

        console.log("You Win!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    } else {
        ComputerScore++;
        CompScorepara.innerText = ComputerScore;

        console.log("You Lose!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomId = Math.floor(Math.random() * 3);

    return options[randomId];
};

const playGame = (userchoice) => {
    console.log("user choice =", userchoice);

    // Generate computer choice
    const CompChoice = genCompChoice();
    console.log("computer choice =", CompChoice);

    if (userchoice === CompChoice) {
        // Draw
        DraGame();
    } else {
        let UserWin = true;

        if (userchoice === "rock") {
            // scissor, paper
            UserWin = CompChoice === "paper" ? false : true;

        } else if (userchoice === "paper") {
            // rock, scissor
            UserWin = CompChoice === "scissor" ? false : true;

        } else {
            // rock, paper
            UserWin = CompChoice === "rock" ? false : true;
        }

        showWinner(UserWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");

        playGame(userchoice);
    });
});
let low = 1;
let high = 10;

const correcr_ans = Math.floor(Math.random() * 10);

for (let index = 0; index < 4; index++) {
    if (index == 3) {
        alert("You lose! ");
        break;
    }
    let guess = prompt("Guess a number between 1 to 10");
    if (guess == correcr_ans) {
        alert("You Win");
        break;
    }
    else if (guess > correcr_ans) {
        alert("Correct answer is smaller!");
    }
    else alert("Correct answer is greater!");
}


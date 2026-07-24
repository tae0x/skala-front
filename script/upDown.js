function startUpDownGame() {
  const computerNum = Math.floor(Math.random() * 50) + 1;
  let isCorrect = false;
  let tryCount = 0;

  while (!isCorrect) {
    const input = prompt(
      "1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요? 메롱",
    );

    if (input === null) {
      alert("게임이 종료되었습니다.");
      return;
    }

    const userNum = Number(input);

    if (isNaN(userNum)) {
      alert("숫자를 입력해주세요.");
      continue;
    }

    tryCount++;

    if (userNum > computerNum) {
      alert("Down!");
    } else if (userNum < computerNum) {
      alert("Up!");
    } else {
      isCorrect = true;
      alert("축하합니다! " + tryCount + "번 만에 맞추셨습니다.");
    }
  }
}

const startGameButton = document.getElementById("startGameButton");
if (startGameButton) {
  startGameButton.addEventListener("click", startUpDownGame);
}

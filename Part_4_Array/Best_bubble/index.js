var bubbleScores = [60, 50, 60, 58, 54, 54,
  58, 50, 52, 54, 48, 69,
  34, 55, 51, 52, 44, 51,
  69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44];

function bubbleGrade() {
  var scoreCounter = 0;
  var arrLength = bubbleScores.length - 1;
  var bestSolution = 0;
  var bestSolutionPositions = [];
  console.log ( "Начало обработки массива bubbleScores содержащего " + bubbleScores.length + " элемента")
  while (arrLength >= scoreCounter) {
    document.write("Bubble solution #" + (scoreCounter) + " score: " + bubbleScores[scoreCounter] + "<br>");
    if (bubbleScores[scoreCounter] > bestSolution) {
        console.log("В масииве bubbleScores под индексом " + scoreCounter +" содержится число " + bubbleScores[scoreCounter] + " оно больше чем  bestSolution которое содержит " + bestSolution );
      bestSolution = bubbleScores[scoreCounter];
        console.log("Массив bestSolutionPositions перезатирается и принимает в себя значение "  + bubbleScores[scoreCounter] + " из bubbleScores[" + scoreCounter + "]");
      bestSolutionPositions = [scoreCounter];
        console.log("Теперь в массиве bestSolutionPositions " + bestSolutionPositions.length + " ячеек которые указывают на число " + bubbleScores[scoreCounter] + " из массива bubbleScores.");
    } else if (bubbleScores[scoreCounter] === bestSolution) {
      bestSolutionPositions.push(scoreCounter);
        console.log("Индекс массива bubbleGrade " + scoreCounter + " содержит число " + bubbleScores[scoreCounter] + ". Этот индекс записывается в массив bestSolutionPositions. Теперь в bestSolutionPositions содержатся индексы [" + bestSolutionPositions +"]");
    } else {
        console.log("Число в индексе " + scoreCounter + " меньше bestSolution переходим к увеличению счетчика.");
    }

    scoreCounter = scoreCounter + 1;
      console.log("Счетчик scoreCounter увеличился на единицу и переходит к индексу массива bubbleScores " + scoreCounter);
  }
    console.log ( "Обработка массива bubbleScores завершена. На страницу выводятся результаты")

  document.write("<br> Bubble tests: " + bubbleScores.length);
  document.write("<br> Highest bubble solution score: " + bestSolution);
  document.write("<br> Solution(s) with the highest score: " + bestSolutionPositions.join(', '));
}

bubbleGrade ();
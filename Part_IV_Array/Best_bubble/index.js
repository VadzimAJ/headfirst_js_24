var bubbleScores = [60, 50, 60, 60, 60, 60, 69, 60, 58, 54, 60, 54, 58, 50, 52, 54, 48, 69, 46, 31, 57, 25, 44, 18, 41, 69, 11, 53, 55, 61, 51, 44];

function bubbleGrade() {
  var scoreCounter = 0;
  var arrLength = bubbleScores.length - 1;
  var bestSolution = 0;
  var bestSolutionPositions = [];
  
  while (arrLength >= scoreCounter) {
    document.write("Bubble solution #" + (scoreCounter) + " score: " + bubbleScores[scoreCounter] + "<br>");
    if (bubbleScores[scoreCounter] > bestSolution) {
      console.log("В масииве bubbleScores под индексом " + scoreCounter +" содержится число " + bubbleScores[scoreCounter] + " оно больше чем  bestSolution которое содержит " + bestSolution );
      bestSolution = bubbleScores[scoreCounter];
      console.log("bestSolution принимает в себя значение из bubbleScores[scoreCounter] и теперь равно " + bubbleScores[scoreCounter] + ". При этом массив полностью перезатирается");
      bestSolutionPositions = [scoreCounter];
      console.log("Теперь в массиве bestSolutionPositions " + bestSolutionPositions.length + " ячеек которые содержат число " + bubbleScores[scoreCounter]);
    } else if (bubbleScores[scoreCounter] === bestSolution) {
      bestSolutionPositions.push(scoreCounter);
      console.log("Индекс массива bubbleGrade " + scoreCounter + " содержит число " + bubbleScores[scoreCounter] + " он пошится в bestSolutionPositions. Теперь в bestSolutionPositions содержатся индексы [" + bestSolutionPositions +"]");
    }

    scoreCounter = scoreCounter + 1;
    console.log("scoreCounter увеличился на единицу и переходит к индексу массива bubbleScores " + scoreCounter);
  }

  document.write("<br> Bubble test: " + bubbleScores.length);
  document.write("<br> Highest bubble solution score: " + bestSolution);
  document.write("<br> Solution(s) with the highest score: " + bestSolutionPositions.join(', '));
}

bubbleGrade ();
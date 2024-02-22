var bubbleScores = [60, 50, 60, 58, 54, 54,
  58, 50, 52, 54, 48, 69, 69,
  34, 55, 51, 52, 44, 51,
  69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18,
  41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, 
    .25, .29, .27, .22, .21, .31, .25, .25, .33, 
    .21, .25, .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25, .25, .25, 
    .27, .25, .26, .29];


var bestSolution = 0;
var bestSolutionPositions = [];
var arrLength = bubbleScores.length - 1;

function bubbleGrade(scoreArr) {
  
  for (var scoreCounter = 0; arrLength > scoreCounter; scoreCounter++) {
    document.write("Bubble solution #" + (scoreCounter) + " score: " + scoreArr[scoreCounter] + "<br>");
      if (scoreArr[scoreCounter] > bestSolution) {
        bestSolution = scoreArr[scoreCounter];
        bestSolutionPositions = [scoreCounter];
      } else if (scoreArr[scoreCounter] == bestSolution){
        bestSolutionPositions.push(scoreCounter);
      }
    }
  // while (arrLength >= scoreCounter) {
  //   document.write("Bubble solution #" + (scoreCounter) + " score: " + bubbleScores[scoreCounter] + "<br>");
  //   if (bubbleScores[scoreCounter] > bestSolution) {
  //     bestSolution = bubbleScores[scoreCounter];
  //     bestSolutionPositions = [scoreCounter];
  //   } else if (bubbleScores[scoreCounter] === bestSolution) {
  //     bestSolutionPositions.push(scoreCounter);
  //   }

  //   scoreCounter = scoreCounter + 1;
  // }

  document.write("<br> Bubble tests: " + bubbleScores.length);
  document.write("<br> Highest bubble solution score: " + bestSolution);
  document.write("<br> Solution(s) with the highest score: " + bestSolutionPositions.join(', '));
  return (bestSolutionPositions);
}

function mostCostEffective (bubbleScores, costsArr, bestArr) {
  var bestCost = costsArr[bestArr[0]];
  var bestCostPosition = bestArr[0];
  for ( var i = 0; bestArr.length > i; i++){
    console.log("costArr = " + costsArr[bestArr[i]]);
    console.log("BestCost = " + bestCost);
    if (costsArr[bestArr[i]] <bestCost) {
      bestCost = costsArr[bestArr[i]];
      bestCostPosition = bestArr[i];
    }
  }
  document.write("<br> Best cost on position : " + bestCostPosition + ". "  + " The most effective cost is " + bestCost);
}

bubbleGrade (bubbleScores);
mostCostEffective (bubbleScores, costs, bestSolutionPositions );
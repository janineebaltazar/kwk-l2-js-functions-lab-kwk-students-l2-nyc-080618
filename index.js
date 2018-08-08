// Code your solution in this file!
function distanceFromHqInBlocks(numBlocks){
  if ( numBlocks > 42){
    return numBlocks - 42;
  }
  var result = 42 - numBlocks;
  return result;
}

distanceFromHqInBlocks(10);

function distanceFromHqInFeet(numBlocks){
  return distanceFromHqInBlocks(numBlocks) * 264;
}

function distanceTravelledInFeet(num1, num2){
 return ((num2-34) * 264);
}
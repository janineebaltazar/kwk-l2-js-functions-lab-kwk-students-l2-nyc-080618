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


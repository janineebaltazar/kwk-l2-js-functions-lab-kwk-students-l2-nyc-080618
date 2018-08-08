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

function distanceTravelledInFeet(start, end){
 if (end>start){
  return (end-start) *264;
}else{
  return (start-end)*264;
}
}

function calculatesFarePrice(start,destination){
  if (distanceTravelledInFeet){
  return 
}
}

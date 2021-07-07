// Code your solution in this file!
const HQ = 42
function distanceFromHqInBlocks(blockDistance){
  difference = blockDistance - HQ;
    return Math.abs(difference)
}
    
function distanceFromHqInFeet(blockDistance){
  distanceFromHqInBlocks(blockDistance);
    return Math.abs(difference) * 264    
}

function distanceTravelledInFeet(start, destination){
  difference = start - destination;
  return Math.abs(difference) * 264
}

function distanceTravelledInFeet(start, destination){
  difference = start - destination;
  return Math.abs(difference) * 264
}

function calculatesFarePrice(start, destination){
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  }
  else if (distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400 )* .02;
  }
  else if (distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  }
    return "cannot travel that far";
}
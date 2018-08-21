function distanceFromHqInBlocks(someValue){
  return Math.abs(42-someValue);
}
function distanceFromHqInFeet(someValue){
  return 264*distanceFromHqInBlocks(someValue);
}
function distanceTravelledInFeet(start, destination){
  return Math.abs(destination-start)*264;
}
function calculatesFarePrice(start, destination){
  const feetDistance=distanceTravelledInFeet(start, destination);
  if(feetDistance<=400){
    return 0;
  }else if(feetDistance>400 && feetDistance<=2000){
    return 0.02*(feetDistance-400);
  }else if(feetDistance>2000 && feetDistance<2500){
    return 25;
  }else{
    return "cannot travel that far";
  }
}
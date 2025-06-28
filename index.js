// Code your solution in this file!
// Distance from headquarters in blocks (Hq is on 42nd Street)
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

// Convert block distance to feet (1 block = 264 feet)
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// Distance travelled in feet from start to destination
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Fare calculation based on distance
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

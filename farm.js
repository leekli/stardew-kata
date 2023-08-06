// Level 1
function cropWateringCalculator(forecast) {
  let totalRainDays = 0;

  forecast.forEach((day) => {
    if (day.weather === "rain") {
      totalRainDays++;
    }
  });

  return totalRainDays;
}

// Level 2 and 3
function cropWateringCalculatorImproved(
  forecast,
  numOfCrops,
  bySprinklesOrCans = false
) {
  const totalRainDays = cropWateringCalculator(forecast);

  const sprinklesOfWaterRequired =
    (forecast.length - totalRainDays) * numOfCrops;

  if (bySprinklesOrCans === true) {
    const cansPerFortySprinkles = Math.ceil(sprinklesOfWaterRequired / 40);

    return `There are ${totalRainDays} days that you can skip watering your crops. You will need ${cansPerFortySprinkles} cans of water.`;
  }

  return `There are ${totalRainDays} days that you can skip watering your crops. You will need ${sprinklesOfWaterRequired} sprinkles of water.`;
}

module.exports = { cropWateringCalculator, cropWateringCalculatorImproved };

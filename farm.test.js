// your code here

const { mixedForecast, noRainForecast } = require("./resources/weather");
const {
  cropWateringCalculator,
  cropWateringCalculatorImproved,
} = require("./farm");

describe("cropWateringCalculator - Level 1 Tests", () => {
  test("should return a number", () => {
    expect(typeof cropWateringCalculator([])).toBe("number");
    expect(cropWateringCalculator([])).toBe(0);
  });
  test("should return 0 when given a forecast containing no rain days", () => {
    expect(cropWateringCalculator(noRainForecast)).toBe(0);
  });
  test("should return total rainy days when given a forecast that contains rain days", () => {
    expect(cropWateringCalculator(mixedForecast)).toBe(7);
  });
});

describe("cropWateringCalculatorImproved - Level 2 Tests", () => {
  test("should return a string stating 0 days to skip watering crops, and total sprinkles of water required when given a forecast containing 0 rainy days and 1 crop", () => {
    expect(cropWateringCalculatorImproved(noRainForecast, 1)).toBe(
      "There are 0 days that you can skip watering your crops. You will need 28 sprinkles of water."
    );
  });
  test("should return a string stating 0 days to skip watering crops, and total sprinkles of water required when given a forecast containing 0 rainy days and multiple crops", () => {
    expect(cropWateringCalculatorImproved(noRainForecast, 3)).toBe(
      "There are 0 days that you can skip watering your crops. You will need 84 sprinkles of water."
    );
  });
  test("should return a string stating total days to skip watering crops, and total sprinkles of water required when given a forecast containing rainy days and 1 crop", () => {
    expect(cropWateringCalculatorImproved(mixedForecast, 1)).toBe(
      "There are 7 days that you can skip watering your crops. You will need 21 sprinkles of water."
    );
  });
  test("should return a string stating total days to skip watering crops, and total sprinkles of water required when given a forecast containing rainy days and multiple crops", () => {
    expect(cropWateringCalculatorImproved(mixedForecast, 10)).toBe(
      "There are 7 days that you can skip watering your crops. You will need 210 sprinkles of water."
    );
  });
});

describe("cropWateringCalculatorImproved - Level 3 Tests", () => {
  test("should return string stating sprinkles required by default when a third argument is not passed into the function", () => {
    expect(cropWateringCalculatorImproved(mixedForecast, 10)).toBe(
      "There are 7 days that you can skip watering your crops. You will need 210 sprinkles of water."
    );
  });
  test("should return string stating sprinkles required when passed a forecast and third argument is explicitly set to false", () => {
    expect(cropWateringCalculatorImproved(noRainForecast, 1, false)).toBe(
      "There are 0 days that you can skip watering your crops. You will need 28 sprinkles of water."
    );
    expect(cropWateringCalculatorImproved(mixedForecast, 10, false)).toBe(
      "There are 7 days that you can skip watering your crops. You will need 210 sprinkles of water."
    );
  });
  test("should return string stating number of cans required when passed a forecast and third argument is explicitly set to true", () => {
    expect(cropWateringCalculatorImproved(noRainForecast, 1, true)).toBe(
      "There are 0 days that you can skip watering your crops. You will need 1 cans of water."
    );
  });
  test("should always round the number of cans required up, to ensure enough sprinkles given", () => {
    expect(cropWateringCalculatorImproved(mixedForecast, 9, true)).toBe(
      "There are 7 days that you can skip watering your crops. You will need 5 cans of water."
    );
    expect(cropWateringCalculatorImproved(mixedForecast, 10, true)).toBe(
      "There are 7 days that you can skip watering your crops. You will need 6 cans of water."
    );
  });
});

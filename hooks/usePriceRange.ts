import { useState } from "react";

// hard code for 100 items right now
// TODO: will be changed when have an API arranged the prices
function setupPrices() {
  const arr: number[] = [];

  const MAX_PRICE = 49;

  //   Loop to generate 200 random prices
  for (let i = 0; i < 200; i++) {
    arr.push(Math.floor(Math.random() * MAX_PRICE + 1));
  }

  //   Sorted prices
  const sortedArr = arr.slice().sort((a, b) => a - b);

  return [arr, sortedArr];
}

const [data, sortedData] = setupPrices();

export function usePriceRange() {
  const range = [sortedData[0], sortedData[sortedData.length - 1]];
  const MIN_RANGE = range[0];
  const MAX_RANGE = range[1];

  //   Well, I don't know why react-compound-slider required to use readonly array, so, I have to use set type readonly array here
  const [selectedRange, setSelectedRange] = useState<readonly number[]>(range);
  const [sliderValues, setSliderValues] =
    useState<readonly (string | number)[]>(range);
  const [inputValues, setInputValues] =
    useState<readonly (string | number)[]>(range);

  const onInputChange = (val: string | number, type?: "MIN" | "MAX") => {
    const newInputValues = [...inputValues];
    const numberVal = Number(val);

    setInputValues(newInputValues);

    if (type === "MAX") {
      newInputValues[1] = val;

      // When change max value, we need to make sure new value is less than or equal maximum of range, and greather than or equal minimum of range
      if (
        numberVal &&
        numberVal <= MAX_RANGE &&
        numberVal >= (sliderValues[0] as number)
      ) {
        setSliderValues(newInputValues);
      }
    } else {
      newInputValues[0] = val;

      // When change min value, we need to make sure new value is greather than or equal minimum of range, and less than or equal maximum of range
      if (numberVal && numberVal >= MIN_RANGE && numberVal <= MAX_RANGE) {
        setSliderValues(newInputValues);
      }
    }
  };

  return {
    data,
    range,
    onInputChange,
    selected: [selectedRange, setSelectedRange] as const,
    slider: [sliderValues, setSliderValues] as const,
    input: [inputValues, setInputValues] as const,
  };
}

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
} from "chart.js";
import { ChangeEvent, Fragment } from "react";
import { Bar } from "react-chartjs-2";
import { Handles, Rail, Slider, Tracks } from "react-compound-slider";
import OutlinedInput from "~/components/OutlinedInput";
import { usePriceRange } from "~/hooks/usePriceRange";
import { useWindowSize } from "~/hooks/useWindowSize";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function BarChart({
  data,
  selected,
  range,
}: {
  data: number[];
  range: number[];
  selected: readonly number[];
}) {
  let frequency: {
    [key: number]: number;
  } = {};

  for (let i = 0; i < data.length; i++) {
    frequency[data[i]] = frequency[data[i]] + 1 || 1;
  }

  // generate data
  const barDataValues = [];
  for (let i = 0; i < range[1]; i++) {
    barDataValues.push(frequency[i] || 0);
  }

  const barData = {
    labels: barDataValues.map((val, i) => i),
    datasets: [
      {
        backgroundColor: barDataValues.map((val, i) =>
          i >= selected[0] && i < selected[1]
            ? "rgba(0, 0, 0, 1)"
            : "rgba(156, 163, 175, .2)"
        ),
        data: barDataValues,
        borderRadius: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    hover: undefined, // disabled hover action
    maintainAspectRatio: false,
    events: [],
    scales: {
      x: { display: false },
      y: { display: false },
    },
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    transitions: {
      active: {
        animation: { duration: 0 },
      },
    },
  };

  return <Bar data={barData} options={options} />;
}

// Honestly this is a mess, but it works
// I'm have no idea with this code
// I'm just trying to get it to work
// Reference: https://codesandbox.io/s/rangeslider-with-histogram-voos8?file=/src/RangeSlider.js
export default function PriceRange() {
  const { width } = useWindowSize();
  const { data, range, selected, input, slider, onInputChange } =
    usePriceRange();

  const [selectedRange, setSelectedRange] = selected;
  const [inputValues, setInputValues] = input;
  const [sliderValues, setSliderValues] = slider;

  const onComponentUpdate = (values: readonly number[]) => {
    setSelectedRange(values);
    setInputValues(values);
  };

  return (
    <div className="w-full py-8 border-t-0 md:border-t md:border-t-slate-200">
      <h2 className="mb-0 text-xl font-semibold md:text-2xl md:mb-6">
        Price range
      </h2>
      {width! < 768 && (
        <p className="text-base font-light text-gray-700">
          {/* Hard code for $70 right now */}
          The average nightly price is $70, not including fees or taxes.
        </p>
      )}
      <div className="max-w-[calc(42rem-28px)] mt-6 md:mt-0 mx-auto mb-12 max-h-40 md:max-h-20">
        <BarChart data={data} range={range} selected={selectedRange} />
        <Slider
          mode={3}
          step={1}
          domain={range}
          rootStyle={{ position: "relative", width: "100%" }}
          onUpdate={onComponentUpdate}
          onChange={setSliderValues}
          values={sliderValues as readonly number[]}
        >
          <Rail>
            {({ getRailProps }) => (
              <>
                <div
                  className="absolute w-full h-6 cursor-pointer -top-3"
                  {...getRailProps()}
                />
                <div className="bg-slate-200 w-full h-[1px] absolute pointer-events-none" />
              </>
            )}
          </Rail>

          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="">
                {handles.map((handle) => (
                  <div
                    key={handle.id}
                    role="slider"
                    aria-valuemin={range[0]}
                    aria-valuemax={range[1]}
                    aria-valuenow={handle.value}
                    className="absolute z-20 w-8 h-8 -mt-4 -ml-4 bg-white border rounded-full cursor-pointer border-slate-300 whitespace-nowrap"
                    style={{ left: `${handle.percent}%` }}
                    {...getHandleProps(handle.id)}
                  />
                ))}
              </div>
            )}
          </Handles>

          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="">
                {tracks.map(({ id, source, target }) => (
                  <Fragment key={id}>
                    <div
                      className="bg-slate-200 h-[1px] absolute z-10 pointer-events-none"
                      style={{
                        left: `${source.percent}%`,
                        width: `${target.percent - source.percent}%`,
                      }}
                    />
                    <div
                      className="h-3 -top-1.5 absolute cursor-pointer"
                      style={{
                        left: `${source.percent}%`,
                        width: `${target.percent - source.percent}%`,
                      }}
                      {...getTrackProps()}
                    />
                  </Fragment>
                ))}
              </div>
            )}
          </Tracks>
        </Slider>
      </div>

      {/* User manually input values */}
      <div className="flex items-center max-w-2xl gap-6 mx-auto">
        <div className="flex-1 min-w-0">
          <OutlinedInput
            id="price-range-min"
            prefix="$"
            label="Minimum"
            value={inputValues[0]}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              onInputChange(evt.target.value, "MIN")
            }
          />
        </div>

        <div className="shrink-0 basis-4 h-[1px] bg-gray-400" />

        <div className="flex-1 min-w-0">
          <OutlinedInput
            id="price-range-max"
            prefix="$"
            label="Maximum"
            value={inputValues[1]}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              onInputChange(evt.target.value, "MAX")
            }
          />
        </div>
      </div>
    </div>
  );
}

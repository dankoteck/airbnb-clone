import { render, screen } from "@testing-library/react";
import ListPlaces from "..";
import { mocksData } from "~/data";
import dayjs from "dayjs";

describe("ListPlaces", () => {
  it("should render the list of places", () => {
    render(<ListPlaces />);

    // Find the list of places
    const placeList = screen.getByRole("list");

    // Check if the correct number of places are rendered
    expect(placeList.children.length).toBe(mocksData.length);
  });

  it("should render the place information correctly", () => {
    render(<ListPlaces />);

    // Find the first place
    const firstPlace = screen.getByTestId("place-0");

    // Check if the place information is rendered correctly
    expect(firstPlace).toHaveTextContent(mocksData[0].location.address);
    expect(firstPlace).toHaveTextContent(mocksData[0].distanceDescribe);
    expect(firstPlace).toHaveTextContent(
      `${dayjs(mocksData[0].rentable.from, "DD/MM/YYYY").format(
        "MMM DD"
      )} - ${dayjs(mocksData[0].rentable.to, "DD/MM/YYYY").format("MMM DD")}`
    );
    expect(firstPlace).toHaveTextContent(`$${mocksData[0].price.adult}`);
    expect(firstPlace).toHaveTextContent(`${mocksData[0].rating}`);
  });
});

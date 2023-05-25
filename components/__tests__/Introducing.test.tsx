import { render, screen } from "@testing-library/react";
import Introducing from "../Introducing";

describe("Introducing", () => {
  it("should have introducing text", () => {
    render(<Introducing />);

    const introducingText = screen.getByText(
      "Introducing Airbnb Rooms and 50+ features"
    );

    expect(introducingText).toHaveTextContent(
      "Introducing Airbnb Rooms and 50+ features"
    );
  });

  it("should have two buttons", () => {
    render(<Introducing />);

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
  });
});

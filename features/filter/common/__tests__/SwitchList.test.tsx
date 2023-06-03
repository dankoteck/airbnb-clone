import { render, screen } from "@testing-library/react";
import SwitchList from "../SwitchList";

const mockData = [
  {
    label: "Option 1",
    description: "Description 1",
    moreInfoLink: {
      label: "More Info",
      href: "https://example.com",
    },
  },
  {
    label: "Option 2",
    description: "Description 2",
  },
  {
    label: "Option 3",
    description: "Description 3",
    moreInfoLink: {
      label: "More Info",
      href: "https://example.com",
    },
  },
];

describe("SwitchList", () => {
  it("should render the correct number of options", () => {
    render(<SwitchList title="Title" data={mockData} />);

    // Find the option elements
    const optionElements = screen.getAllByLabelText(/List option/i);

    // Check if the correct number of options are rendered
    expect(optionElements.length).toBe(mockData.length);
  });

  it("should render option details correctly", () => {
    render(<SwitchList title="Title" data={mockData} />);

    // Find the option detail elements
    const optionDetailElements = screen.getAllByLabelText(/Option details/i);

    // Check if the option details are rendered correctly
    expect(optionDetailElements[0]).toHaveTextContent("Option 1");
    expect(optionDetailElements[0]).toHaveTextContent("Description 1");
    expect(optionDetailElements[0]).toHaveTextContent("More Info");

    expect(optionDetailElements[1]).toHaveTextContent("Option 2");
    expect(optionDetailElements[1]).toHaveTextContent("Description 2");
    expect(optionDetailElements[1]).not.toHaveTextContent("More Info");

    expect(optionDetailElements[2]).toHaveTextContent("Option 3");
    expect(optionDetailElements[2]).toHaveTextContent("Description 3");
    expect(optionDetailElements[2]).toHaveTextContent("More Info");
  });

  it("should render the switch component for each option", () => {
    render(<SwitchList title="Title" data={mockData} />);

    // Find the switch elements
    const switchElements = screen.getAllByRole("switch");

    // Check if the correct number of switch components are rendered
    expect(switchElements.length).toBe(mockData.length);
  });
});

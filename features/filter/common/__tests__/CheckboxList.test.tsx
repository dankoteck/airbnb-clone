import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckboxList from "../CheckboxList";

const mockData = [
  {
    groupBy: "Group 1",
    label: "Label 1",
    items: [
      { label: "Item 1.1", value: "value1.1" },
      { label: "Item 1.2", value: "value1.2" },
    ],
  },
  {
    groupBy: "Group 2",
    label: "Label 2",
    items: [
      { label: "Item 2.1", value: "value2.1" },
      { label: "Item 2.2", value: "value2.2" },
    ],
  },
];

describe("CheckboxList", () => {
  it("should render the correct number of groups", () => {
    render(<CheckboxList title="Title" data={mockData} />);

    // Find the group elements
    const groupElements = screen.getAllByRole("group");

    // Check if the correct number of groups are rendered
    expect(groupElements.length).toBe(mockData.length);
  });

  it("should render group items correctly", () => {
    render(<CheckboxList title="Title" data={mockData} />);

    // Find the group items
    const groupDetailElements = screen.getAllByRole("menuitem");

    // Check if the group items are rendered correctly
    expect(groupDetailElements[0]).toHaveTextContent("Item 1.1");

    expect(groupDetailElements[1]).toHaveTextContent("Item 1.2");
  });

  it("should render the correct number of items in each group", () => {
    render(<CheckboxList title="Title" data={mockData} />);

    // Find the item elements
    const itemElements = screen.getAllByRole("checkbox");

    // Check if the correct number of items are rendered
    expect(itemElements.length).toBe(
      mockData[0].items.length + mockData[1].items.length
    );
  });

  //   it("should call the onSelectOption function when an item is selected", () => {
  //     const onSelectOption = jest.fn();

  //     render(<CheckboxList title="Title" data={mockData} />);

  //     // Find the checkbox input element
  //     const checkboxInput = screen.getByLabelText("Item 1.1");

  //     // Simulate checkbox click
  //     fireEvent.click(checkboxInput);

  //     // Check if the onSelectOption function is called
  //     expect(onSelectOption).toHaveBeenCalledTimes(1);
  //     expect(onSelectOption).toHaveBeenCalledWith("value1.1");
  //   });

  it("should toggle the show more/less state when clicked it", async () => {
    render(<CheckboxList title="Title" data={mockData} />);

    // Find the show more/less button
    const showMoreLessButton = screen.getByText("Show more");
    const groupHidden = await screen.findByRole("group", { name: "Label 2" });

    // Hidden by default
    await waitFor(() => expect(groupHidden).toHaveClass("hidden"));

    // Click the show more button
    await userEvent.click(showMoreLessButton);

    // Check the updated state
    await waitFor(() => expect(groupHidden).not.toHaveClass("hidden"));

    // Click the show less button
    await userEvent.click(showMoreLessButton);

    // Check the updated state
    await waitFor(() => expect(groupHidden).toHaveClass("hidden"));
  });
});

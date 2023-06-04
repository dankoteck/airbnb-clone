import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlaceGallery from "../PlaceGallery";

const mockData = [
  { href: "https://picsum.photos/200/300", alt: "Image 1" },
  { href: "https://picsum.photos/200/300", alt: "Image 2" },
  { href: "https://picsum.photos/200/300", alt: "Image 3" },
];

describe("Gallery", () => {
  it("should render the gallery items", () => {
    render(<PlaceGallery data={mockData} id="123" />);

    // Find the gallery items
    const galleryItems = screen.getAllByRole("figure");

    // Check if the correct number of gallery items are rendered
    expect(galleryItems.length).toBe(mockData.length);
  });

  it('should invoke "onSlideChange" callback when slide change', async () => {
    const onSlideChange = jest.fn();

    render(
      <PlaceGallery data={mockData} id="123" onSlideChange={onSlideChange} />
    );

    // Assert when clicking next arrow
    const nextArrow = screen.getByRole("button", {
      name: /Next slide/i,
    });

    await userEvent.click(nextArrow);

    await waitFor(() => expect(onSlideChange).toHaveBeenCalledTimes(1));

    // Assert when clicking prev arrow
    const prevArrow = screen.getByRole("button", {
      name: /Previous slide/i,
    });

    await userEvent.click(prevArrow);

    await waitFor(() => expect(onSlideChange).toHaveBeenCalledTimes(2)); // 1 for next arrow, 1 for prev arrow
  });
});

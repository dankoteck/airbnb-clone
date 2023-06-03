import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "../Modal";

describe("Modal", () => {
  it("should render with children text inside", () => {
    render(<Modal open>Testing Modal</Modal>);

    const element = screen.getByRole("dialog");

    expect(element).toBeInTheDocument();
  });

  it("should render with String header", () => {
    render(
      <Modal open title="Title">
        Testing Modal
      </Modal>
    );

    const element = screen.getByText(/Title/i);

    expect(element).toBeInTheDocument();
  });

  it("should render with React Element header", () => {
    render(
      <Modal open title={<span>Title</span>}>
        Testing Modal
      </Modal>
    );

    const element = screen.getByText(/Title/i);

    expect(element).toBeInTheDocument();
  });

  it("should render with default footer", () => {
    render(<Modal open>Testing Modal</Modal>);

    const element = screen.getByRole("group", {
      name: /Modal Footer/i,
    });

    expect(element).toBeInTheDocument();
  });

  it("should render without footer", () => {
    render(
      <Modal open footer={null}>
        Testing Modal
      </Modal>
    );

    const element = screen.queryByRole("group", {
      name: /Modal Footer/i,
    });

    expect(element).toBeNull();
  });

  it("should render with custom `okText` and `cancelText` props", () => {
    render(
      <Modal open okText="Confirm" cancelText="Abort">
        Testing Modal
      </Modal>
    );

    expect(
      screen.getByRole("button", {
        name: /Confirm/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Abort/i,
      })
    ).toBeInTheDocument();
  });

  it('should invoke "onOk" callback when click on "Ok" button', async () => {
    const jestFn = jest.fn();

    render(
      <Modal open onOk={jestFn}>
        Testing Modal
      </Modal>
    );

    const element = screen.getByRole("button", {
      name: /Ok/i,
    });

    await userEvent.click(element);

    await waitFor(() => expect(jestFn).toHaveBeenCalledTimes(1));
  });

  it('should invoke "onCancel" callback when click on "Cancel" button', async () => {
    const jestFn = jest.fn();

    render(
      <Modal open onCancel={jestFn}>
        Testing Modal
      </Modal>
    );

    const element = screen.getByRole("button", {
      name: /Cancel/i,
    });

    await userEvent.click(element);

    await waitFor(() => expect(jestFn).toHaveBeenCalledTimes(1));
  });
});

import { render, screen } from "@testing-library/react";
import ReduxProvider from "../ReduxProvider";
import { useAppSelector } from "~/store";
import { renderWithRedux } from "~/utils/test-utils";

function Setup() {
  const { filter } = useAppSelector((state) => state);
  return <ReduxProvider>{filter.typeOfPlace}</ReduxProvider>;
}

describe("ReduxProvider", () => {
  test("children will have access to Redux", () => {
    renderWithRedux(<Setup />);

    const element = screen.getByText(/All/i);

    expect(element).toBeInTheDocument();
  });
});

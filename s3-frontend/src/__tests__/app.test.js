import { render, screen, cleanup, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

afterEach(cleanup);

test("should render app", () => {
  render(<App />);
  const canvasElement = screen.getByTestId("app-1");
  expect(canvasElement).toBeInTheDocument();
  expect(canvasElement).toHaveTextContent("Home");
});

test("matches snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

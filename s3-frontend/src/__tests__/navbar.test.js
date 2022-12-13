import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import NavigationBar from "../components/layout/NavigationBar";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

test("should render app", () => {
    render(<Router><NavigationBar /></Router>);
    const canvasElement = screen.getByTestId("navBar");
    expect(canvasElement).toBeInTheDocument();
    expect(canvasElement).toHaveTextContent("Home");
    expect(canvasElement).toHaveTextContent("Upload");
});

test("matches snapshot", () => {
    const tree = renderer.create(<Router><NavigationBar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});

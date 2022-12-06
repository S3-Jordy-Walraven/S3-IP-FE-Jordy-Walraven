import { render, screen, cleanup, waitFor, } from "@testing-library/react";
import renderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import EffectDetailPage from "../pages/EffectPages/EffectDetailPage";

afterEach(cleanup);

test("should render without effect", () => {
    render(<Router><EffectDetailPage /></Router>);
    const effectUploadPageElement = screen.getByTestId("effectDetailPage-1");
    expect(effectUploadPageElement).toBeInTheDocument();
    expect(effectUploadPageElement).toHaveTextContent("No effect with this id");
});

test("should render effect", () => {
    render(<Router><EffectDetailPage effect={{ effectName: "TestEffect", creatorName: "Tester", effectContent: "<script>console.log('hello')</script>" }} /></Router>);

    const effectUploadPageElement = screen.getByTestId("effectDetailPage-1");
    expect(effectUploadPageElement).toBeInTheDocument();
    expect(effectUploadPageElement).toHaveTextContent("TestEffect");
    expect(effectUploadPageElement).toHaveTextContent("Tester");
    expect(effectUploadPageElement).toHaveTextContent("View code");
});


test("should view code", async() => {
    render(<Router><EffectDetailPage effect={{ effectName: "TestEffect", creatorName: "Tester", effectContent: "<script>console.log('hello')</script>" }} /></Router>);
    const viewCodeButton = screen.getByTestId("viewCodeButton-1");
    userEvent.click(viewCodeButton);
    const codeViewer = screen.getByTestId("codeViewer-1");
    await waitFor(()=>expect(codeViewer).toHaveTextContent("<script>console.log('hello')</script>"));
});

test("should run download button", async() => {
    render(<Router><EffectDetailPage effect={{ effectName: "TestEffect", creatorName: "Tester", effectContent: "<script>console.log('hello')</script>" }} /></Router>);
    const viewCodeButton = screen.getByTestId("downloadButton-1");
    userEvent.click(viewCodeButton);
});

test("should run oneClick button", async() => {
    render(<Router><EffectDetailPage effect={{ effectName: "TestEffect", creatorName: "Tester", effectContent: "<script>console.log('hello')</script>" }} /></Router>);
    const viewCodeButton = screen.getByTestId("onClick-1");
    userEvent.click(viewCodeButton);
});

test("should go back to home", async() => {
    render(<Router><EffectDetailPage effect={{ effectName: "TestEffect", creatorName: "Tester", effectContent: "<script>console.log('hello')</script>" }} /></Router>);
    const viewCodeButton = screen.getByTestId("backButton-1");
    userEvent.click(viewCodeButton);
});

test("matches snapshot", () => {
    const tree = renderer.create(<Router> <EffectDetailPage /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
});

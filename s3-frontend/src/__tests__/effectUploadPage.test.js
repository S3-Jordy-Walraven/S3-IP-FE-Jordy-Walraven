import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import EffectUploadPage from "../pages/EffectPages/EffectUploadPage"
import userEvent from "@testing-library/user-event"

afterEach(cleanup)

test("should render canvas", () => {

    render(<EffectUploadPage />);
    const effectUploadPageElement = screen.getByTestId("effectUploadPage-1");
    expect(effectUploadPageElement).toBeInTheDocument();
    expect(effectUploadPageElement).toHaveTextContent("EffectFile");
})

test("file upload", () => {
    render(
            <EffectUploadPage/>
    );

    const effectUploadPageElement = screen.getByTestId("effectUploadPage-1");
    const htmlInput = screen.getByTestId("htmlInput-1");
    userEvent.upload(htmlInput, new File(["<script>console.log('hello')</script>"], "test.html"));
    expect(effectUploadPageElement).toBeInTheDocument();
  
})

test("test on submit", () => {
    let isCalled = false;
    function ReloadEffects() {
        console.log("Reloading effects")
        isCalled = true;
    }

    render(
            <EffectUploadPage reloadCallback={ReloadEffects} />
    );

    const effectUploadPageElement = screen.getByTestId("effectUploadPage-1");
    const submitButton = screen.getByTestId("submitButton-1");
    userEvent.click(submitButton);
    expect(effectUploadPageElement).toBeInTheDocument();
    expect(isCalled).toBe(true);
})

test("matches snapshot", () => {

    const tree = renderer.create(<EffectUploadPage />).toJSON();
    expect(tree).toMatchSnapshot();
})
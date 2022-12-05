import { render, screen, cleanup, } from "@testing-library/react";
import renderer from "react-test-renderer";
import EffectUploadPage from "../pages/EffectPages/EffectUploadPage";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

test("should render canvas", () => {
  render(<Router><EffectUploadPage /></Router>);
  const effectUploadPageElement = screen.getByTestId("effectUploadPage-1");
  expect(effectUploadPageElement).toBeInTheDocument();
  expect(effectUploadPageElement).toHaveTextContent("EffectFile");
});

test("file upload", () => {
  render(<Router><EffectUploadPage /></Router>);

  const effectUploadPageElement = screen.getByTestId("effectUploadPage-1");
  const htmlInput = screen.getByTestId("htmlInput-1");
  userEvent.upload(
    htmlInput,
    new File(["<script>console.log('hello')</script>"], "test.html")
  );
  expect(effectUploadPageElement).toBeInTheDocument();
});

test("test on submit", async () => {

  render(<Router><EffectUploadPage reloadCallback={(code) => ""} /></Router>);

  const effectUploadPageElement = screen.getByTestId("effectUploadPage-1");
  const submitButton = screen.getByTestId("submitButton-1");
  userEvent.click(submitButton);
  expect(effectUploadPageElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer.create(<Router> <EffectUploadPage /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});

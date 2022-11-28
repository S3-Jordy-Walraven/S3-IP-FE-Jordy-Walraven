import { render, screen, cleanup, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Canvas from "../components/Canvas";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Html from "./files/Hyperspace.html"

afterEach(cleanup);

test("should render canvas", () => {
  render(<Canvas />);
  const canvasElement = screen.getByTestId("canvas-1");
  expect(canvasElement).toBeInTheDocument();
});

test("render effect", async () => {
  let finalString = "a";

  async function StringCallback(html) {
    finalString = html;
  }

  render(
    <Canvas
      fileInput={
        new File(["<script>console.log('hello')</script>"], "test.html")
      }
      htmlStringCallback={StringCallback}
      finalString={finalString}
    />
  );
  await waitFor(() => {
    expect(finalString).toBe("<script>console.log('hello')</script>");
  });
});

test("matches snapshot", () => {
  const tree = renderer.create(<Canvas />).toJSON();
  expect(tree).toMatchSnapshot();
});

import { render, screen, cleanup, waitFor } from "@testing-library/react";
import renderer from "react-test-renderer";
import Canvas from "../components/EffectComponents/Canvas";

afterEach(cleanup);

let dummyData = `<head>
  <title>Hyperspace</title>
  <meta description="Zoom through the stars with this lightscript. Adjust colors, particle size, and particle speed to change up how it looks." />
  <meta publisher="SignalRGB" />

          <meta property="shape" label="Star Shape" type="combobox" values="Circle,Rectangle,Star,RandomStars"
            default="Circle" />
                  <meta property="direction" label="Star move direction" type="combobox" values="Towards,Away" default="Towards" />
            <meta property="bgMode" label="Background color mode" type="combobox" values="Static,Rainbow,Lines" default="Static" />
  <meta
    property="bgColor"
    label="Background Color"
    type="color"
    min="0"
    max="360"
    default="#000000"
  />
    <meta property="rainbowBrightness" label="Rainbow Background Brightness " type="number" min="0" max="100" default="50" />
    <meta property="lineColor" label="Background Line Color" type="color" min="0" max="360" default="#00c9fc" />
  <meta
    property="bgAlpha"
    label="Background Opacity"
    type="number"
    min="10"
    max="100"
    default="10"
  />
  <meta
    property="fgColor"
    label="Foreground Color"
    type="color"
    min="0"
    max="360"
    default="#FFFFFF"
  />
  <meta
    property="color_mode"
    label="Color Mode"
    type="combobox"
    values="Single,Random,Rainbow"
    default="Single"
  />
  <meta
    property="starSpeed"
    label="Speed"
    type="number"
    min="0"
    max="100"
    default="40"
  />
  <meta
    property="starCount"
    label="Number of stars"
    type="number"
    min="1"
    max="10"
    default="3"
  />
  <meta
    property="starSize"
    label="Star size"
    type="number"
    min="1"
    max="10"
    default="5"
  />
</head>
<script>console.log('hello')</script>
`;

test("should render canvas", () => {
  render(<Canvas />);
  const canvasElement = screen.getByTestId("canvas-1");
  expect(canvasElement).toBeInTheDocument();
  expect(canvasElement).toContainHTML("<iframe");
});

test("render effect", async () => {
  let finalString = "a";

  async function StringCallback(html) {
    finalString = html;
  }

  render(
    <Canvas
      fileInput={new File([dummyData], "test.html")}
      htmlStringCallback={StringCallback}
      finalString={finalString}
    />
  );
  await waitFor(() => {
    expect(finalString).toContain(`<script>var shape =  \"Circle\"`);
  });
});

test("matches snapshot", () => {
  const tree = renderer.create(<Canvas />).toJSON();
  expect(tree).toMatchSnapshot();
});

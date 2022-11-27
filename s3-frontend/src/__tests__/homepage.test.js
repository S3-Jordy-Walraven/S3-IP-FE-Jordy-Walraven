import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Homepage from "../pages/Homepage"


const dummyEffects = { data: [] }
dummyEffects.data = [
    {
        "id": 1,
        "effectName": "Effect 1",
        "effectContent": "<script>console.log('hello')</script>",
        "creatorName": "Creator 1",
    },
    {
        "id": 2,
        "effectName": "Effect 2",
        "effectContent": "<script>console.log('hello')</script>",
        "creatorName": "Creator 2",
    },
    {
        "id": 3,
        "effectName": "Effect 3",
        "effectContent": "<script>console.log('hello')</script>",
        "creatorName": "Creator 3",
    }
]

afterEach(cleanup)

test('Should render 3 effects', () => {
    render(<Homepage allEffects={dummyEffects} />);
    const homePageElement = screen.getByTestId("homepage-1");
    expect(homePageElement).toBeInTheDocument();
    expect(homePageElement).toHaveTextContent("Signify");
    expect(homePageElement).toHaveTextContent("Effect 1");
    expect(homePageElement).toHaveTextContent("Effect 2");
    expect(homePageElement).toHaveTextContent("Creator 3");
    expect(homePageElement).toContainHTML("<script>console.log('hello')</script>");
})

test('Should render 0 effects', () => {
    render(<Homepage allEffects={{ data: [] }} />);
    const homePageElement = screen.getByTestId("homepage-1");
    expect(homePageElement).toBeInTheDocument();
    expect(homePageElement).toHaveTextContent("Signify");
    expect(homePageElement).not.toHaveTextContent("Effect 1");
    expect(homePageElement).not.toHaveTextContent("Effect 2");
    expect(homePageElement).not.toHaveTextContent("Creator 3");
    expect(homePageElement).not.toContainHTML("<script>console.log('hello')</script>");
})

test("matches snapshot", () => {
    const tree = renderer.create(<Homepage allEffects={dummyEffects} />).toJSON();
    expect(tree).toMatchSnapshot();
})
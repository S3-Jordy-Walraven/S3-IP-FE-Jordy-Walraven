import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Homepage from "../Homepage"


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



test("matches snapshot", () => {
    const tree = renderer.create(<Homepage allEffects={dummyEffects} />).toJSON();
    expect(tree).toMatchSnapshot();
})
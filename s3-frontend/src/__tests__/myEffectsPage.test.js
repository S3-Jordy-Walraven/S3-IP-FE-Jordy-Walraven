import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MyEffectPage from "../pages/EffectPages/MyEffectPage"
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup)

test('Should render MyEffectsPage correctly', () => {
    render(<Router> <MyEffectPage stateUser={{name: "Gog_P", sub: "102878806231331986190"}} /> </Router>);
    const homePageElement = screen.getByTestId("myEffectsPage-1");
    expect(homePageElement).toHaveTextContent("MY EFFECTS");
})
import { render } from "@testing-library/react";
import React from "react";
import RecipeApp from "../../exercise2/RecipeApp";

describe('RecipeApp component', () => {
    test('view full list initially', () => {
        const { getByText } = render(<RecipeApp/>);
        expect(getByText(/Spaghetti Carbonara/i)).toBeInTheDocument();
        expect(getByText(/Chicken Tikka Masala/i)).toBeInTheDocument();
        expect(getByText(/Chicken Parmesan/i)).toBeInTheDocument();
        expect(getByText(/Vegetable Stir Fry/i)).toBeInTheDocument();
    });
});
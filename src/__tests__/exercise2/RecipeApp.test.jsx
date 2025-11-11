import { fireEvent, render } from "@testing-library/react";
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

    test('render list after querying', () => {
        const {getByPlaceholderText, queryByText } = render(<RecipeApp/>);
        fireEvent.change(getByPlaceholderText(/Search recipes.../i), {target: { value: 'chicken' }});
        expect(queryByText(/Chicken Tikka Masala/i)).toBeInTheDocument();
        expect(queryByText(/Chicken Parmesan/i)).toBeInTheDocument();
        expect(queryByText(/Spaghetti Carbonara/i)).not.toBeInTheDocument();
    });
});
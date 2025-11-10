import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import ViewExercises from "../../exercise1/ViewExercises";

const mockStore = configureStore([]);

describe('ViewExercises component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            exercises: {
                exercises: [
                    { id: '1', type: 'Running', duration: '30', calories: '300' },
                    { id: '2', type: 'Cycling', duration: '45', calories: '450' },
                ],
            },
        });
    });

    test('fetches and display data from redux store', () => {
        const { getByText } = render(
            <Provider store={store}>
                <ViewExercises/>
            </Provider>
        );

        expect(getByText(/Running - 30 minutes - 300 kcal/i)).toBeInTheDocument();
        expect(getByText(/Cycling - 45 minutes - 450 kcal/i)).toBeInTheDocument();
    });
});
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';
import { Coffee } from '../models/coffee.model';

interface IState {
    items: Coffee[];
    isLoading: boolean;
    errorMessage?: string;
}

const initialState: IState = {
    items: [],
    isLoading: false
};

export const coffeeReducer = createReducer(initialState, builder => {
    builder.addCase(actions.fetchCoffee, (state) => {
        return {
            ...state,
            items: initialState.items,
            isLoading: true,
            errorMessage: initialState.errorMessage
        }
    })
    .addCase(actions.fetchCoffeeSucceeded, (state, { payload }) => {
        return {
            ...state,
            items: payload,
            isLoading: false,
            errorMessage: initialState.errorMessage
        }
    })
    .addCase(actions.fetchCoffeeFailed, (state, { payload }) => {
        return {
            ...state,
            isLoading: false,
            errorMessage: initialState.errorMessage
        }
    });
});
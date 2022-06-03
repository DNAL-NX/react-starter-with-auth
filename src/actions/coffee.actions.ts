
import { createAction } from '@reduxjs/toolkit';
import { Moment } from 'moment';
import { Coffee } from '../models/coffee.model';

export const fetchCoffee = createAction('FETCH_COFFEE');
export const fetchCoffeeSucceeded = createAction<Coffee[]>('FETCH_COFFEE_SUCCEEDED');
export const fetchCoffeeFailed = createAction<{errorMessage: string}>('FETCH_COFFEE_FAILED');
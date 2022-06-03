import { createAction } from '@reduxjs/toolkit';
import { User } from '../models/identity.model';

export const fetchUserInfo = createAction('FETCH_USER_INFO');
export const fetchUserInfoSucceeded = createAction<User>('FETCH_USER_INFO_SUCCEEDED');
export const fetchUserInfoFailed = createAction('FETCH_USER_INFO_FAILED');
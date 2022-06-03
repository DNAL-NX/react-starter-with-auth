import { createAction } from "@reduxjs/toolkit";
import { Identity } from '../models/identity.model';
import { LoginCredentials } from '../models/loginCredentials.interface';

export const fetchIdentity = createAction<LoginCredentials>('FETCH_IDENTITY');
export const fetchIdentitySucceeded = createAction<Identity>('FETCH_IDENTITY_SUCCEED');
export const fetchIdentityFailed = createAction<string | null>('FETCH_IDENTITY_FAILED');
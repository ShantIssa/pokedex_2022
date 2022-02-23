import { APIResponseWallet } from '@fansunite/chameleon-lite';

import { loginSignupSubmissionErrors } from './utils';

export type StatusTypes = 'idle' | 'loading' | 'error' | 'done';
export type ErrorKeys = keyof typeof loginSignupSubmissionErrors;

export type UserData = {
    username: string;
    email: string;
    userId: string;
    wallet: APIResponseWallet;
};

export type ResponseError = {
    error_codes: ErrorKeys[];
    errors: { [key in ErrorKeys]: any };
    message: string;
};

export type ResponseErrorWithParams = {
    params?: Record<string, any>;
} & ResponseError;

export type UserState = {
    user: UserData | null;
    loggedIn: boolean;
    submissionError: ResponseErrorWithParams | null;
    status: StatusTypes;
};

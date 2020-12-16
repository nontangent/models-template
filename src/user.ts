import { Datetime } from './datetime';

export interface Twitter {
    id: string;
    token: string;
    secret: string;
}

export const nullTwitter: Twitter = {
    id: null,
    token: null,
    secret: null
};

export const testTwitter: Twitter = {
    id: null,
    token: 'testToken',
    secret: 'testSecret'
};

export interface User {
    id: string;
    twitter: Twitter;

    createdAt: Datetime;
    updatedAt: Datetime;
}

export const nullUser: User = {
    id: null,
    twitter: null,
    createdAt: null,
    updatedAt: null
};

export const testUser: User = {
    id: 'test-user-0000',
    twitter: testTwitter,
    createdAt: null,
    updatedAt: null
};
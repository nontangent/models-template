import { Datetime } from './datetime';

export interface TwitterUser {
    id: string;
    screenName: string;
    screenNameLowerCase?: string;
    name: string;
    profileImageUrl: string;

    createdAt: Datetime;
    updatedAt: Datetime;
}

export const nullTwitterUser: TwitterUser = {
    id: null,
    screenName: null,
    name: null,
    profileImageUrl: null,

    createdAt: null,
    updatedAt: null
};
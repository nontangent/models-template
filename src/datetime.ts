import firebase from 'firebase/app';
import * as moment from 'moment';

export type Timestamp = firebase.firestore.Timestamp;
export type FieldValue = firebase.firestore.FieldValue;

export type Datetime = moment.Moment | Timestamp | FieldValue;


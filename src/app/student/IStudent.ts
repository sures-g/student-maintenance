import {IAddress} from './IAddress';

export interface IStudent {
    idNumber: String;
    firstName: String;
    middleName: String;
    lastName: String;
    studentClass: Number;
    institute: String;
    lastUpdatedDate: String;
    creationDate: String;
    address: IAddress;
}

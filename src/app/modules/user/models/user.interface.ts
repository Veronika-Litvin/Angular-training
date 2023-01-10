import { Address } from "../../shared/models/addresses.interface";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    userEmail: string;
    age: number;
    gender: boolean;
    department: string;
    company: string;
    imageUrl?: string;
    addresses: Address[];
}
import { Address } from "../../shared/models/addresses.interface";

export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    userEmail: string;
    age: number;
    gender: boolean;
    phone: string;
    department?: string;
    company?: string;
    imageUrl?: string;
    addresses: Address[];
}
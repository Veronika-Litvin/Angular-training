import { Address } from "../../shared/models/addresses.interface";

export interface UserColumn {
    fullName: string;
    email: string;
    age: number;
    addresses: Address[];
    department: string;
  }
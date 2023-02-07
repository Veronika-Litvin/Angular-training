import { ServerResponse } from "../../core/models/http-response.interface";
import { UserColumn } from "../../tables/models/user-column.interface";
import { IUser } from "../models/user.interface";

export function convertToUserList(data: ServerResponse): IUser[] {
  return data.results.map((serverUser) => {
    return {
      id: serverUser.id.value,
      firstName: serverUser.name.first,
      lastName: serverUser.name.last,
      userEmail: serverUser.email,
      age: serverUser.dob.age,
      phone: serverUser.phone,
      gender: serverUser.gender === 'female' ? true : false,
      imageUrl: serverUser.picture.large,
      company: 'ISsoft',
      department: 'Frontend',
      addresses: [
        {
          addressLine: serverUser.location.country,
          city: serverUser.location.city,
          zip: serverUser.location.postcode
        }
      ]
    } as IUser;
  })

}

export function convertToTableList(data: ServerResponse): UserColumn[] {
  return data.results.map((serverUser) => {
    return {
      fullName: `${serverUser.name.first}, ${serverUser.name.last}`,
      email: serverUser.email,
      age: serverUser.dob.age,
      department: 'Frontend',
      addresses: [
        {
          addressLine: serverUser.location.country,
          city: serverUser.location.city,
          zip: serverUser.location.postcode
        }
      ]
    } as UserColumn;
  })

}
import { IUser } from "../models/user.interface";

export const users: IUser[] = [
    {id: 1, firstName: 'Masha', lastName: 'Ivanova', age: 15, userEmail: 'masha@gmail.com', gender: true, department: 'DataNG', company: 'ISsoft', imageUrl: '../../../../assets/Masha.jpg', addresses: [{addressLine: "Gorodetskaya 11/2", city: "Minsk", zip: "220021"}, {addressLine: "Stroitelnaya 13", city: "Minsk", zip: "220312"}]},
    {id: 2, firstName: 'Vasya', lastName: 'Petrov', age: 25, userEmail: 'vasya@gmail.com', gender: false, department: 'BigData', company: 'Playtica', imageUrl: '../../../../assets/Vasya.jpg', addresses: [{addressLine: "Stroitelnaya 13", city: "Minsk", zip: "220312"}]},
    {id: 3, firstName: 'Anna', lastName: 'Kirianova', age: 13, userEmail: 'anna@gmail.com', gender: true, department: 'Analysiss', company: 'ISsoft', imageUrl: '../../../../assets/Anna.jpg',addresses: [{addressLine: "Kusmi Chornaga"}]},
    {id: 4, firstName: 'Vlad', lastName: 'Topalov', age: 36, userEmail: 'vlad@gmail.com', gender: false, department: 'Frontend', company: 'Epam', imageUrl: '../../../../assets/Vlad.jpg', addresses: [{addressLine: "Yakuba Kolasa 45"}]},
    {id: 5, firstName: 'Nikita', lastName: 'Nikitin', age: 42, userEmail: 'nikita@gmail.com', gender: false, department: 'Backend', company: 'LWO', imageUrl: '../../../../assets/Nikita.jpg', addresses: [{addressLine: "Kosmonavtov 45", city: "Moskow", zip: "112121"}]},
    {id: 6, firstName: 'Vika', lastName: 'Simonova', age: 19, userEmail: 'vika@gmail.com', gender: true, department: '.NetCore', company: 'Playtica', imageUrl: '../../../../assets/Vika.jpg', addresses: [{addressLine: "Shcolnaya 11", city: "Kirov", zip: "093212"}]},
    {id: 7, firstName: 'Petr', lastName: 'Kleban', age: 29, userEmail: 'petr@gmail.com', gender: false, department: 'JavaScript', company: 'ITransition', imageUrl: '../../../../assets/Petr.jpg', addresses: [{addressLine: "Plosa 6", city: "Warsaw", zip: "330051"}]}
  ];

export const defaultImg = '../../../../../assets/unknown.png';
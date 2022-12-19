import { IUser } from "../models/user.interface";

export const users: IUser[] = [
    {id: 1, firstName: 'Masha', lastName: 'Ivanova', age: 15, email: 'masha@mail.ru', gender: true, department: 'Java', company: 'ISsoft', imageUrl: '../../../../assets/Masha.jpg'},
    {id: 2, firstName: 'Vasya', lastName: 'Petrov', age: 25, email: 'vasya@mail.ru', gender: false, department: 'BigData', company: 'Playtica', imageUrl: '../../../../assets/Vasya.jpg'},
    {id: 3, firstName: 'Anna', lastName: 'Kirianova', age: 13, email: 'anna@mail.ru', gender: true, department: 'Business analysiss', company: 'ISsoft', imageUrl: '../../../../assets/Anna.jpg'},
    {id: 4, firstName: 'Vlad', lastName: 'Topalov', age: 36, email: 'vlad@mail.ru', gender: false, department: 'Frontend', company: 'Epam', imageUrl: '../../../../assets/Vlad.jpg'},
    {id: 5, firstName: 'Nikita', lastName: 'Nikitin', age: 42, email: 'nikita@mail.ru', gender: false, department: 'Backend', company: 'LWO', imageUrl: '../../../../assets/Nikita.jpg'},
    {id: 6, firstName: 'Vika', lastName: 'Simonova', age: 19, email: 'vika@mail.ru', gender: true, department: '.Net', company: 'Playtica', imageUrl: '../../../../assets/Vika.jpg'},
    {id: 7, firstName: 'Petr', lastName: 'Kleban', age: 29, email: 'petr@mail.ru', gender: false, department: 'Data Science', company: 'ITransition', imageUrl: '../../../../assets/Petr.jpg'}
  ];
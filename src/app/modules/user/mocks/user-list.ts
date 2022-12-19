import { IUser } from "../models/user.interface";

export const users: IUser[] = [
    {id: 1, name: 'Masha', age: 15, gender: true, department: 'Java', company: 'ISsoft', imageUrl: '../../../../assets/Masha.jpg'},
    {id: 2, name: 'Vasya', age: 25, gender: false, department: 'BigData', company: 'Playtica', imageUrl: '../../../../assets/Vasya.jpg'},
    {id: 3, name: 'Anna', age: 13, gender: true, department: 'Business analysiss', company: 'ISsoft', imageUrl: '../../../../assets/Anna.jpg'},
    {id: 4, name: 'Vlad', age: 36, gender: false, department: 'Frontend', company: 'Epam', imageUrl: '../../../../assets/Vlad.jpg'},
    {id: 5, name: 'Nikita', age: 42, gender: false, department: 'Backend', company: 'LWO', imageUrl: '../../../../assets/Nikita.jpg'},
    {id: 6, name: 'Vika', age: 19, gender: true, department: '.Net', company: 'Playtica', imageUrl: '../../../../assets/Vika.jpg'},
    {id: 7, name: 'Petr', age: 29, gender: false, department: 'Data Science', company: 'ITransition', imageUrl: '../../../../assets/Petr.jpg'}
  ];
import { Injectable } from '@angular/core';
import { FavoriteDecorator } from '../models/favorite-decorator.interface';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: FavoriteDecorator<IUser>[] = [
    {item: {id: 1, name: 'Masha', age: 15, gender: true, department: 'Java', company: 'ISsoft', imageUrl: '../../../../assets/Masha.jpg'}, isFavorite: false},
    {item: {id: 2, name: 'Vasya', age: 25, gender: false, department: 'BigData', company: 'Playtica', imageUrl: '../../../../assets/Vasya.jpg'}, isFavorite: false},
    {item: {id: 3, name: 'Anna', age: 13, gender: true, department: 'Business analysiss', company: 'ISsoft', imageUrl: '../../../../assets/Anna.jpg'}, isFavorite: false},
    {item: {id: 4, name: 'Vlad', age: 36, gender: false, department: 'Frontend', company: 'Epam', imageUrl: '../../../../assets/Vlad.jpg'}, isFavorite: false},
    {item: {id: 5, name: 'Nikita', age: 42, gender: false, department: 'Backend', company: 'LWO', imageUrl: '../../../../assets/Nikita.jpg'},isFavorite:  false},
    {item: {id: 6, name: 'Vika', age: 19, gender: true, department: '.Net', company: 'Playtica', imageUrl: '../../../../assets/Vika.jpg'}, isFavorite: false},
    {item: {id: 7, name: 'Petr', age: 29, gender: false, department: 'Data Science', company: 'ITransition', imageUrl: '../../../../assets/Petr.jpg'}, isFavorite: false}
  ];

  getUsers(): FavoriteDecorator<IUser>[] {
    return this.users;
  }
}

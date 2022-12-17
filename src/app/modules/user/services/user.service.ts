import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): Map<IUser, boolean> {
    return new Map([
      [{id: 1, name: 'Masha', age: 15, gender: true, department: 'Java', company: 'ISsoft', imageUrl: '../../../../assets/Masha.jpg'}, false],
      [{id: 2, name: 'Vasya', age: 25, gender: false, department: 'BigData', company: 'Playtica', imageUrl: '../../../../assets/Vasya.jpg'}, false],
      [{id: 3, name: 'Anna', age: 13, gender: true, department: 'Business analysiss', company: 'ISsoft', imageUrl: '../../../../assets/Anna.jpg'}, false],
      [{id: 4, name: 'Vlad', age: 36, gender: false, department: 'Frontend', company: 'Epam', imageUrl: '../../../../assets/Vlad.jpg'}, false],
      [{id: 5, name: 'Nikita', age: 42, gender: false, department: 'Backend', company: 'LWO', imageUrl: '../../../../assets/Nikita.jpg'}, false],
      [{id: 6, name: 'Vika', age: 19, gender: true, department: '.Net', company: 'Playtica', imageUrl: '../../../../assets/Vika.jpg'}, false],
      [{id: 7, name: 'Petr', age: 29, gender: false, department: 'Data Science', company: 'ITransition', imageUrl: '../../../../assets/Petr.jpg'}, false]
    ])
  }
}

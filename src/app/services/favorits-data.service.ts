import { Injectable } from '@angular/core';
import { ICar } from '../modules/car/models/car.interface';
import { IUser } from '../modules/user/models/user.interface';
@Injectable({
  providedIn: 'root'
})
export class FavoritsDataService {

    private allUsers: Map<IUser, boolean> = new Map();
    private favoriteUsers: Map<IUser, boolean> = new Map();
    private favoriteCars: ICar[] = []; 

    addFavoriteCar(car: ICar) {
        this.favoriteCars.push(car);
    }

    toggleFavoriteUser(user: IUser) {   
        if(this.favoriteUsers.has(user)) {
            this.favoriteUsers.delete(user);
            this.allUsers.set(user, false)
            return false;       
        } else {
            this.favoriteUsers.set(user, true);
            this.allUsers.set(user, true)
            return true;
        }
    }

    getFavoriteUsers() {
        return this.favoriteUsers;
    }

    setAllUsers(users: Map<IUser, boolean>) {
        this.allUsers = users;
    }
}

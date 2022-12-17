import { Injectable } from '@angular/core';
import { FavoriteDecorator } from '../modules/user/models/favorite-decorator.interface';

@Injectable({providedIn: 'root'})
export class FavoriteDataService<T> {
    private favoriteUsers: FavoriteDecorator<T>[] = [];
    private favoriteCars: FavoriteDecorator<T>[] = [];

    toggleFavoriteItems(item: FavoriteDecorator<T>, array: FavoriteDecorator<T>[]) {   
        if(array.includes(item)) {
            array.splice(array.indexOf(item), 1);
            item.isFavorite = false;
            return false;       
        } else {
            array.push(item);
            item.isFavorite = true;
            return true;
        }
    }

    toggleFavoriteUsers(item: FavoriteDecorator<T>) {
        return this.toggleFavoriteItems(item, this.favoriteUsers)
    }

    toggleFavoriteCars(item: FavoriteDecorator<T>) {
        return this.toggleFavoriteItems(item, this.favoriteCars)
    }

    getFavoriteUsers() {
        return this.favoriteUsers;
    }
    getFavoriteCars() {
        return this.favoriteCars;
    }
}

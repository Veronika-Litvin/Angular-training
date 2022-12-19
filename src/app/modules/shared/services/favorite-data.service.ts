import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../models/favorite-enum';
import { FavoriteStore } from '../models/favorite-type';

@Injectable({providedIn: 'root'})
export class FavoriteDataService {
    store: FavoriteStore = {
        [FavoriteTypes.User]: [],
        [FavoriteTypes.Car]: []
    }

    getFavorites(type: FavoriteTypes): number[] {
        return this.store[type];
    }

    updateFavoriteItems(type: FavoriteTypes, id: number) {   
        const index = this.store[type].indexOf(id);

        if (index === -1) {
            this.store[type].push(id);
        } else {
            this.store[type].splice(index, 1)
        }
        return this.store[type];
    }
  
}

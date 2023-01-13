import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { IUser } from "../../user/models/user.interface";
import { UserService } from "../../user/services/user.service";

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<IUser | undefined> {
    constructor(private userService: UserService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<IUser | undefined> | IUser | undefined {
            return this.userService.getUserById(+route.paramMap.get('id')!)
    }
}
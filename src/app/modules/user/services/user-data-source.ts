import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, take } from "rxjs";
import { IUser } from "../models/user.interface";
import { UserApiService } from "./user-api.service";

export class UserDataSource implements DataSource<IUser> {

    private usersSubject = new BehaviorSubject<IUser[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private userApi: UserApiService) {}

    connect(): Observable<IUser[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(): void {
        this.usersSubject.complete();
    }

    loadUsers(
        page: number,
        results: number,
        sort?: string,
        order?: string
    ): void {
        this.loadingSubject.next(true);
        this.userApi
            .getUsers({page: page, results: results, sort: sort, order: order})
            .pipe(
                take(1),
            )
            .subscribe((users) => {
                this.usersSubject.next(users);
                this.loadingSubject.next(false);
            });
    }
}
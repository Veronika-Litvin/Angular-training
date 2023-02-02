import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../authorization/services/auth.guard";
import { CarsPageComponent } from "./pages/cars-page/cars-page.component";

const CARS_ROUTES: Routes = [
    {
        path: '',
        component: CarsPageComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(CARS_ROUTES)],
    exports: [RouterModule]
})
export class CarRoutingModule { }
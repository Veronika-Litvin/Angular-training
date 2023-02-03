import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarsPageComponent } from "./pages/cars-page/cars-page.component";

const CARS_ROUTES: Routes = [
    {
        path: '',
        component: CarsPageComponent
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(CARS_ROUTES)],
    exports: [RouterModule]
})
export class CarRoutingModule { }
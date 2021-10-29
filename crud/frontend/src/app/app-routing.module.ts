import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CepCrudComponent } from './views/cep-crud/cep-crud.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },{
        path: "ceps",
        component: CepCrudComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
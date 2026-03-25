import { Routes } from "@angular/router";
import { DetailViewComponent } from "./detail-view/detail-view.component";
import { CustomizeViewComponent } from "./customize-view/customize-view.component";

export enum PRODUCT_ROUTES_TOKENS {
    DETAIL = 'detail',
    CUSTOMIZE = 'customize',
};

export const PRODUCT_ROUTES: Routes = [
    {
        path: PRODUCT_ROUTES_TOKENS.DETAIL,
        component: DetailViewComponent,
    },
    {
        path: PRODUCT_ROUTES_TOKENS.CUSTOMIZE,
        component: CustomizeViewComponent
    }
]
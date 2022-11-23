import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormLayoutComponent } from './_shared/primeng/components/formlayout/formlayout.component';
import { MediaComponent } from './_shared/primeng/components/media/media.component';
import { ChartsComponent } from './_shared/primeng/components/charts/charts.component';
import { DocumentationComponent } from './_shared/primeng/components/documentation/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AccessComponent } from './_shared/primeng/components/access/access.component';
import { DashboardComponent } from './_shared/primeng/components/dashboard/dashboard.component';
import { InputComponent } from './_shared/primeng/components/input/input.component';
import { FloatLabelComponent } from './_shared/primeng/components/floatlabel/floatlabel.component';
import { InvalidStateComponent } from './_shared/primeng/components/invalidstate/invalidstate.component';
import { ButtonComponent } from './_shared/primeng/components/button/button.component';
import { TableComponent } from './_shared/primeng/components/table/table.component';
import { ListComponent } from './_shared/primeng/components/list/list.component';
import { TreeComponent } from './_shared/primeng/components/tree/tree.component';
import { PanelsComponent } from './_shared/primeng/components/panels/panels.component';
import { OverlaysComponent } from './_shared/primeng/components/overlays/overlays.component';
import { MessagesComponent } from './_shared/primeng/components/messages/messages.component';
import { MiscComponent } from './_shared/primeng/components/misc/misc.component';
import { FileComponent } from './_shared/primeng/components/file/file.component';
import { CrudComponent } from './_shared/primeng/components/crud/crud.component';
import { TimelineComponent } from './_shared/primeng/components/timeline/timeline.component';
import { EmptyComponent } from './_shared/primeng/components/empty/empty.component';
import { IconsComponent } from './_shared/primeng/components/icons/icons.component';
import { BlocksComponent } from './_shared/primeng/components/blocks/blocks.component';
import { LandingComponent } from './_shared/primeng/components/landing/landing.component';
import { LoginComponent } from './_shared/primeng/components/login/login.component';
import { ErrorComponent } from './_shared/primeng/components/error/error.component';
import { NotFoundError } from 'rxjs';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppMainComponent,
                children: [
                    {path: '', loadChildren: () => import('./_modules/tableau-de-bord/tableau-de-bord.module').then(mod => mod.TableauDeBordModule),pathMatch: 'full'                },
                    {path: 'patient', loadChildren: () => import('./_modules/patient/patient.module').then(mod => mod.PatientModule)},
                    {path: 'uikit/formlayout', component: FormLayoutComponent},
                    {path: 'uikit/input', component: InputComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateComponent},
                    {path: 'uikit/button', component: ButtonComponent},
                    {path: 'uikit/table', component: TableComponent},
                    {path: 'uikit/list', component: ListComponent},
                    {path: 'uikit/tree', component: TreeComponent},
                    {path: 'uikit/panel', component: PanelsComponent},
                    {path: 'uikit/overlay', component: OverlaysComponent},
                    {path: 'uikit/media', component: MediaComponent},
                    {path: 'uikit/navbar', loadChildren: () => import('./_shared/primeng/components/menus/menus.module').then(m => m.MenusModule)},
                    {path: 'uikit/message', component: MessagesComponent},
                    {path: 'uikit/misc', component: MiscComponent},
                    {path: 'uikit/charts', component: ChartsComponent},
                    {path: 'uikit/file', component: FileComponent},
                    {path: 'pages/crud', component: CrudComponent},
                    {path: 'pages/timeline', component: TimelineComponent},
                    {path: 'pages/empty', component: EmptyComponent},
                    {path: 'icons', component: IconsComponent},
                    {path: 'blocks', component: BlocksComponent},
                    {path: 'documentation', component: DocumentationComponent},
                    {path: '**', redirectTo: ''},

                ],
            },
            {path:'pages/landing', component: LandingComponent},
            {path:'pages/login', component: LoginComponent},
            {path:'pages/error', component: ErrorComponent},
            {path:'pages/notfound', component: NotFoundError},
            {path:'pages/access', component: AccessComponent},
            {path: '**', redirectTo: 'pages/notfound'},
        ], {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

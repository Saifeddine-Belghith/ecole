import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { SharedModule } from './shared/shared.module';

import { MatRadioModule } from '@angular/material/radio';
import { AjoutereleveComponent } from './components/eleves/ajoutereleve/ajoutereleve.component';
import { EditeleveComponent } from './components/eleves/listeeleve/editeleve.component';
import { AjouteremployeComponent } from './components/employes/ajouteremploye/ajouteremploye.component';
import { EditemployeComponent } from './components/employes/listeemploye/editemploye.component';
import { AjoutercategorieComponent } from './components/categories/ajoutercategorie/ajoutercategorie.component';
import { MatTableModule } from '@angular/material/table';
import { AjouterroleComponent } from './components/role/ajouterrole/ajouterrole.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { EdituserComponent } from './components/users/edituser/edituser.component';
import {  MatTabsModule } from '@angular/material/tabs';
import { AjouterpermissionComponent } from './components/permission/ajouterpermission/ajouterpermission.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListecategoriesComponent } from './components/categories/listecategories/listecategories.component';
import { ListeroleComponent } from './components/role/listerole/listerole.component';
import { AjouterspecialiteComponent } from './components/specialites/ajouterspecialite/ajouterspecialite.component';
import { EditspecialiteComponent } from './components/specialites/editspecialite/editspecialite.component';
import { AjouterniveauComponent } from './components/niveaux/ajouterniveau/ajouterniveau.component';
import { EditniveauComponent } from './components/niveaux/listeniveau/editniveau.component';
import { AjouterclasseComponent } from './components/classes/ajouterclasse/ajouterclasse.component';
import { EditclasseComponent } from './components/classes/listeclasse/editclasse.component';
import { AccueilComponent } from './components/accueil/accueil.component';



const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        AdduserComponent,
        EdituserComponent,
        AjoutereleveComponent,
        EditeleveComponent,
        AjouteremployeComponent,
        EditemployeComponent,
        AjoutercategorieComponent,
        AjouterroleComponent,
        AjouterpermissionComponent,
        ListecategoriesComponent,
        ListeroleComponent,
        AjouterspecialiteComponent,
        EditspecialiteComponent,
        AjouterniveauComponent,
        EditniveauComponent,
        AjouterclasseComponent,
        EditclasseComponent,
        AccueilComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatMomentDateModule,
        MatSelectModule,
        FuseHighlightModule,
        SharedModule,
        MatRadioModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatCheckboxModule,
        
        
        
        
       
        
        
        
        
        
       
        
        
        

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({})
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}

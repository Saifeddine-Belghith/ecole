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
import { AvatarModule } from 'ngx-avatar';
import { AddcoursComponent } from './components/cours/ajoutercours/addcours.component';
import { AddexerciceComponent } from './components/exercices/addexercice/addexercice.component';
import { ModifiereleveComponent } from './components/eleves/modifiereleve/modifiereleve.component';
import { ParentsComponent } from './components/parents/parents.component';
import { AjouterparentComponent } from './components/parents/ajouterparent/ajouterparent.component';
import { ListeparentComponent } from './components/parents/listeparent/listeparent.component';
import { ModifierparentComponent } from './components/parents/modifierparent/modifierparent.component';
import { AjouterenseignantComponent } from './components/enseignants/ajouterenseignant/ajouterenseignant.component';
import { ListeenseignantComponent } from './components/enseignants/listeenseignant/listeenseignant.component';
import { ModifierenseignantComponent } from './components/enseignants/modifierenseignant/modifierenseignant.component';
import { ModifieremployesComponent } from './components/employes/modifieremployes/modifieremployes.component';
import { ModifierspecialiteComponent } from './components/specialites/modifierspecialite/modifierspecialite.component';
import { ModifierniveauComponent } from './components/niveaux/modifierniveau/modifierniveau.component';
import { ModifierclasseComponent } from './components/classes/modifierclasse/modifierclasse.component';

import { AjoutermatiereComponent } from './components/matieres/ajoutermatiere/ajoutermatiere.component';
import { ListematieresComponent } from './components/matieres/listematieres/listematieres.component';
import { ModifiermatiereComponent } from './components/matieres/modifiermatiere/modifiermatiere.component';
import { ModifierroleComponent } from './components/role/modifierrole/modifierrole.component';
import { ContacterComponent } from './components/contacter/contacter.component';
import { EditexerciceComponent } from './components/exercices/listeexercice/editexercice.component';
import { ModifierexerciceComponent } from './components/exercices/modifierexercice/modifierexercice.component';
import { EditcoursComponent } from './components/cours/listecours/editcours.component';
import { ModifiercoursComponent } from './components/cours/modifiercours/modifiercours.component';
import { AjouterReclamationComponent } from './components/reclamation/ajouter-reclamation/ajouter-reclamation.component';
import { ListReclamationComponent } from './components/reclamation/list-reclamation/list-reclamation.component';
import { ModifierReclamationComponent } from './components/reclamation/modifier-reclamation/modifier-reclamation.component';
import { AjoutersalleComponent } from './components/salle/ajoutersalle/ajoutersalle.component';
import { ModifiersalleComponent } from './components/salle/modifiersalle/modifiersalle.component';
import { ListsalleComponent } from './components/salle/listsalle/listsalle.component';
import { AjouterchargeComponent } from './components/charge/ajoutercharge/ajoutercharge.component';
import { ModifierchargeComponent } from './components/charge/modifiercharge/modifiercharge.component';
import { ListechargeComponent } from './components/charge/listecharge/listecharge.component';
import { AjouterinscriptionComponent } from './components/inscription/ajouterinscription/ajouterinscription.component';
import { ListeinscriptionComponent } from './components/inscription/listeinscription/listeinscription.component';
import { AjouteremploiComponent } from './components/emploi/ajouteremploi/ajouteremploi.component';
import { ModifieremploiComponent } from './components/emploi/modifieremploi/modifieremploi.component';
import { ListeemploiComponent } from './components/emploi/listeemploi/listeemploi.component';
import { NoteComponent } from './components/note/note.component';
import { AjouternoteComponent } from './components/note/ajouternote/ajouternote.component';
import { ModifiernoteComponent } from './components/note/modifiernote/modifiernote.component';
import { ListenoteComponent } from './components/note/listenote/listenote.component';
import { AjoutercontactComponent } from './components/contact/ajoutercontact/ajoutercontact.component';
import { ListecontactComponent } from './components/contact/listecontact/listecontact.component';
import { ModifiercontactComponent } from './components/contact/modifiercontact/modifiercontact.component';
import { AjouterredoublantsComponent } from './components/redoublants/ajouterredoublants/ajouterredoublants.component';
import { ModifierredoublantsComponent } from './components/redoublants/modifierredoublants/modifierredoublants.component';
import { ListeredoublantsComponent } from './components/redoublants/listeredoublants/listeredoublants.component';
import { AjoutermaterielsComponent } from './components/materiels/ajoutermateriels/ajoutermateriels.component';
import { ModifiermaterielsComponent } from './components/materiels/modifiermateriels/modifiermateriels.component';
import { ListematerielsComponent } from './components/materiels/listemateriels/listemateriels.component';
import { AjoutercontratComponent } from './components/contrat/ajoutercontrat/ajoutercontrat.component';
import { ModifiercontratComponent } from './components/contrat/modifiercontrat/modifiercontrat.component';
import { ListecontratComponent } from './components/contrat/listecontrat/listecontrat.component';
import { AjouterfmedicalComponent } from './components/fmedical/ajouterfmedical/ajouterfmedical.component';
import { ModifierfmedicalComponent } from './components/fmedical/modifierfmedical/modifierfmedical.component';
import { ListefmedicalComponent } from './components/fmedical/listefmedical/listefmedical.component';
import { AjouterformationscandidatsComponent } from './components/formationscandidats/ajouterformationscandidats/ajouterformationscandidats.component';
import { ModifierformationscandidatsComponent } from './components/formationscandidats/modifierformationscandidats/modifierformationscandidats.component';
import { ListeformationscandidatsComponent } from './components/formationscandidats/listeformationscandidats/listeformationscandidats.component';
import { AjouterformationsprofesseurComponent } from './components/formationsprofesseur/ajouterformationsprofesseur/ajouterformationsprofesseur.component';
import { ModifierformationsprofesseurComponent } from './components/formationsprofesseur/modifierformationsprofesseur/modifierformationsprofesseur.component';
import { ListeformationsprofesseurComponent } from './components/formationsprofesseur/listeformationsprofesseur/listeformationsprofesseur.component';
import { AjoutergarderieComponent } from './components/garderie/ajoutergarderie/ajoutergarderie.component';
import { ModifiergarderieComponent } from './components/garderie/modifiergarderie/modifiergarderie.component';
import { ListegarderieComponent } from './components/garderie/listegarderie/listegarderie.component';
import { AjouterjoursferiesvacancesComponent } from './components/joursferiesvacances/ajouterjoursferiesvacances/ajouterjoursferiesvacances.component';
import { ModifierjoursferiesvacancesComponent } from './components/joursferiesvacances/modifierjoursferiesvacances/modifierjoursferiesvacances.component';
import { ListjoursferiesvacancesComponent } from './components/joursferiesvacances/listjoursferiesvacances/listjoursferiesvacances.component';
import { AjouterpresencesprofesseursComponent } from './components/presencesprofesseurs/ajouterpresencesprofesseurs/ajouterpresencesprofesseurs.component';
import { ModifierpresencesprofesseursComponent } from './components/presencesprofesseurs/modifierpresencesprofesseurs/modifierpresencesprofesseurs.component';
import { ListpresencesprofesseursComponent } from './components/presencesprofesseurs/listpresencesprofesseurs/listpresencesprofesseurs.component';
import { AjouterpresenceselevesComponent } from './components/presenceseleves/ajouterpresenceseleves/ajouterpresenceseleves.component';
import { ModifierpresenceselevesComponent } from './components/presenceseleves/modifierpresenceseleves/modifierpresenceseleves.component';
import { ListpresenceselevesComponent } from './components/presenceseleves/listpresenceseleves/listpresenceseleves.component';
import { AjouterrendezvousComponent } from './components/rendezvous/ajouterrendezvous/ajouterrendezvous.component';
import { ModifierrendezvousComponent } from './components/rendezvous/modifierrendezvous/modifierrendezvous.component';
import { ListrendezvousComponent } from './components/rendezvous/listrendezvous/listrendezvous.component';
import { AjouterplanningComponent } from './components/planning/ajouterplanning/ajouterplanning.component';
import { ModifierplanningComponent } from './components/planning/modifierplanning/modifierplanning.component';
import { ListplanningComponent } from './components/planning/listplanning/listplanning.component';
import { AjouterformateursexterneComponent } from './components/formateursexterne/ajouterformateursexterne/ajouterformateursexterne.component';
import { ModifierformateursexterneComponent } from './components/formateursexterne/modifierformateursexterne/modifierformateursexterne.component';
import { ListformateursexterneComponent } from './components/formateursexterne/listformateursexterne/listformateursexterne.component';
import { AjouterpaiementComponent } from './components/paiement/ajouterpaiement/ajouterpaiement.component';
import { ModifierpaiementComponent } from './components/paiement/modifierpaiement/modifierpaiement.component';
import { ListpaiementComponent } from './components/paiement/listpaiement/listpaiement.component';
import { AjouterSatisfactionComponent } from './components/Satisfaction/ajouter-satisfaction/ajouter-satisfaction.component';
import { ModifierSatisfactionComponent } from './components/Satisfaction/modifier-satisfaction/modifier-satisfaction.component';
import { ListSatisfactionComponent } from './components/Satisfaction/list-satisfaction/list-satisfaction.component';
import { AjouterinfirmerieComponent } from './components/infirmerie/ajouterinfirmerie/ajouterinfirmerie.component';
import { ModifierinfirmerieComponent } from './components/infirmerie/modifierinfirmerie/modifierinfirmerie.component';
import { ListinfirmerieComponent } from './components/infirmerie/listinfirmerie/listinfirmerie.component';
import { FormsModule } from '@angular/forms';
import { AjouterpointageComponent } from './components/pointage/ajouterpointage/ajouterpointage.component';
import { ModifierpointageComponent } from './components/pointage/modifierpointage/modifierpointage.component';
import { ListepointageComponent } from './components/pointage/listepointage/listepointage.component';
import { AjouteravertissementComponent } from './components/avertissement/ajouteravertissement/ajouteravertissement.component';
import { ModifieravertissementComponent } from './components/avertissement/modifieravertissement/modifieravertissement.component';
import { ListeavertissementComponent } from './components/avertissement/listeavertissement/listeavertissement.component';
import { AjouterLivretComponent } from './components/Livret/ajouter-livret/ajouter-livret.component';
import { ModifierLivretComponent } from './components/Livret/modifier-livret/modifier-livret.component';
import { ListeLivretComponent } from './components/Livret/liste-livret/liste-livret.component';
import { AjouterfournitureComponent } from './components/fourniture/ajouterfourniture/ajouterfourniture.component';
import { ModifierfournitureComponent } from './components/fourniture/modifierfourniture/modifierfourniture.component';
import { ListefournitureComponent } from './components/fourniture/listefourniture/listefourniture.component';
import { AjouteruserComponent } from './components/user/ajouteruser/ajouteruser.component';
import { ModifieruserComponent } from './components/user/modifieruser/modifieruser.component';
import { ListeuserComponent } from './components/user/listeuser/listeuser.component';




const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
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
        AccueilComponent,
        AddcoursComponent,
        AddexerciceComponent,
        ModifiereleveComponent,
        ParentsComponent,
        AjouterparentComponent,
        ListeparentComponent,
        ModifierparentComponent,
        AjouterenseignantComponent,
        ListeenseignantComponent,
        ModifierenseignantComponent,
        ModifieremployesComponent,
        ModifierspecialiteComponent,
        ModifierniveauComponent,
        ModifierclasseComponent,
        AjoutermatiereComponent,
        ListematieresComponent,
        ModifiermatiereComponent,
        ModifierroleComponent,
        ContacterComponent,
        EditexerciceComponent,
        ModifierexerciceComponent,
        EditcoursComponent,
        ModifiercoursComponent,
        AjouterReclamationComponent,
        ListReclamationComponent,
        ModifierReclamationComponent,
        AjoutersalleComponent,
        ModifiersalleComponent,
        ListsalleComponent,
        AjouterchargeComponent,
        ModifierchargeComponent,
        ListechargeComponent,
        AjouterinscriptionComponent,
        ListeinscriptionComponent,
        AjouteremploiComponent,
        ModifieremploiComponent,
        ListeemploiComponent,
        NoteComponent,
        AjouternoteComponent,
        ModifiernoteComponent,
        ListenoteComponent,
        AjoutercontactComponent,
        ListecontactComponent,
        ModifiercontactComponent,
        AjouterredoublantsComponent,
        ModifierredoublantsComponent,
        ListeredoublantsComponent,
        AjoutermaterielsComponent,
        ModifiermaterielsComponent,
        ListematerielsComponent,
        AjoutercontratComponent,
        ModifiercontratComponent,
        ListecontratComponent,
        AjouterfmedicalComponent,
        ModifierfmedicalComponent,
        ListefmedicalComponent,
        AjouterformationscandidatsComponent,
        ModifierformationscandidatsComponent,
        ListeformationscandidatsComponent,
        AjouterformationsprofesseurComponent,
        ModifierformationsprofesseurComponent,
        ListeformationsprofesseurComponent,
        AjoutergarderieComponent,
        ModifiergarderieComponent,
        ListegarderieComponent,
        AjouterjoursferiesvacancesComponent,
        ModifierjoursferiesvacancesComponent,
        ListjoursferiesvacancesComponent,
        AjouterpresencesprofesseursComponent,
        ModifierpresencesprofesseursComponent,
        ListpresencesprofesseursComponent,
        AjouterpresenceselevesComponent,
        ModifierpresenceselevesComponent,
        ListpresenceselevesComponent,
        AjouterrendezvousComponent,
        ModifierrendezvousComponent,
        ListrendezvousComponent,
        AjouterplanningComponent,
        ModifierplanningComponent,
        ListplanningComponent,
        AjouterformateursexterneComponent,
        ModifierformateursexterneComponent,
        ListformateursexterneComponent,
        AjouterpaiementComponent,
        ModifierpaiementComponent,
        ListpaiementComponent,
        AjouterSatisfactionComponent,
        ModifierSatisfactionComponent,
        ListSatisfactionComponent,
        AjouterinfirmerieComponent,
        ModifierinfirmerieComponent,
        ListinfirmerieComponent,
        AjouterpointageComponent,
        ModifierpointageComponent,
        ListepointageComponent,
        AjouteravertissementComponent,
        ModifieravertissementComponent,
        ListeavertissementComponent,
        AjouterLivretComponent,
        ModifierLivretComponent,
        ListeLivretComponent,
        AjouterfournitureComponent,
        ModifierfournitureComponent,
        ListefournitureComponent,
        AjouteruserComponent,
        ModifieruserComponent,
        ListeuserComponent,
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
        AvatarModule,
        FormsModule,
        
        
        
        
       
        
        
        
        
        
       
        
        
        

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

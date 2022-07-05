import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

import { AjouterniveauComponent } from './components/niveaux/ajouterniveau/ajouterniveau.component';
import { EditniveauComponent } from './components/niveaux/listeniveau/editniveau.component';
import { AjouterspecialiteComponent } from './components/specialites/ajouterspecialite/ajouterspecialite.component';
import { EditspecialiteComponent } from './components/specialites/editspecialite/editspecialite.component';
import { AjouterclasseComponent } from './components/classes/ajouterclasse/ajouterclasse.component';
import { EditclasseComponent } from './components/classes/listeclasse/editclasse.component';
import { AddcoursComponent } from './components/cours/ajoutercours/addcours.component';
import { EditcoursComponent } from './components/cours/listecours/editcours.component';
import { AddexerciceComponent } from './components/exercices/addexercice/addexercice.component';
import { EditexerciceComponent } from './components/exercices/listeexercice/editexercice.component';
import { AjoutereleveComponent } from './components/eleves/ajoutereleve/ajoutereleve.component';
import { EditeleveComponent } from './components/eleves/listeeleve/editeleve.component';
import { AjouteremployeComponent } from './components/employes/ajouteremploye/ajouteremploye.component';
import { EditemployeComponent } from './components/employes/listeemploye/editemploye.component';
import { AdddevoirComponent } from './components/devoirs/ajouterdevoir/adddevoir.component';
import { AjouterpermissionComponent } from './components/permission/ajouterpermission/ajouterpermission.component';

import { AjouterroleComponent } from './components/role/ajouterrole/ajouterrole.component';
import { ListeroleComponent } from './components/role/listerole/listerole.component';
import { AjoutercategorieComponent } from './components/categories/ajoutercategorie/ajoutercategorie.component';
import { ListecategoriesComponent } from './components/categories/listecategories/listecategories.component';
import { ModifiereleveComponent } from './components/eleves/modifiereleve/modifiereleve.component';
import { AjouterparentComponent } from './components/parents/ajouterparent/ajouterparent.component';
import { ModifierparentComponent } from './components/parents/modifierparent/modifierparent.component';
import { ListeparentComponent } from './components/parents/listeparent/listeparent.component';
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
import { ModifierexerciceComponent } from './components/exercices/modifierexercice/modifierexercice.component';
import { ModifiercoursComponent } from './components/cours/modifiercours/modifiercours.component';
import { AjouterReclamationComponent } from './components/reclamation/ajouter-reclamation/ajouter-reclamation.component';
import { ModifierReclamationComponent } from './components/reclamation/modifier-reclamation/modifier-reclamation.component';
import { ListReclamationComponent } from './components/reclamation/list-reclamation/list-reclamation.component';
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
import { AjouternoteComponent } from './components/note/ajouternote/ajouternote.component';
import { ModifiernoteComponent } from './components/note/modifiernote/modifiernote.component';
import { ListenoteComponent } from './components/note/listenote/listenote.component';
import { AjoutercontactComponent } from './components/contact/ajoutercontact/ajoutercontact.component';
import { ModifiercontactComponent } from './components/contact/modifiercontact/modifiercontact.component';
import { ListecontactComponent } from './components/contact/listecontact/listecontact.component';
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
import { AjouterformateursexterneComponent } from './components/formateursexterne/ajouterformateursexterne/ajouterformateursexterne.component';
import { ModifierformateursexterneComponent } from './components/formateursexterne/modifierformateursexterne/modifierformateursexterne.component';
import { ListformateursexterneComponent } from './components/formateursexterne/listformateursexterne/listformateursexterne.component';
import { AjouterplanningComponent } from './components/planning/ajouterplanning/ajouterplanning.component';
import { ModifierplanningComponent } from './components/planning/modifierplanning/modifierplanning.component';
import { ListplanningComponent } from './components/planning/listplanning/listplanning.component';
import { AjouterSatisfactionComponent } from './components/Satisfaction/ajouter-satisfaction/ajouter-satisfaction.component';
import { ModifierSatisfactionComponent } from './components/Satisfaction/modifier-satisfaction/modifier-satisfaction.component';
import { ListSatisfactionComponent } from './components/Satisfaction/list-satisfaction/list-satisfaction.component';
import { AjouterinfirmerieComponent } from './components/infirmerie/ajouterinfirmerie/ajouterinfirmerie.component';
import { ModifierinfirmerieComponent } from './components/infirmerie/modifierinfirmerie/modifierinfirmerie.component';
import { ListinfirmerieComponent } from './components/infirmerie/listinfirmerie/listinfirmerie.component';
import { AjouterpaiementComponent } from './components/paiement/ajouterpaiement/ajouterpaiement.component';
import { ModifierpaiementComponent } from './components/paiement/modifierpaiement/modifierpaiement.component';
import { ListpaiementComponent } from './components/paiement/listpaiement/listpaiement.component';
import { EditdevoirComponent } from './components/devoirs/listedevoir/editdevoir.component';
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
// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    {path: '', pathMatch : 'full', redirectTo: 'dashboards/project'},

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'dashboards/project'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [

            // Dashboards
            {path: 'dashboards', children: [
                {path: 'project', loadChildren: () => import('app/modules/admin/dashboards/project/project.module').then(m => m.ProjectModule)},
                {path: 'analytics', loadChildren: () => import('app/modules/admin/dashboards/analytics/analytics.module').then(m => m.AnalyticsModule)},
                {path: 'finance', loadChildren: () => import('app/modules/admin/dashboards/finance/finance.module').then(m => m.FinanceModule)},
                {path: 'crypto', loadChildren: () => import('app/modules/admin/dashboards/crypto/crypto.module').then(m => m.CryptoModule)},
                { path: 'Ajouteruser', component:AjouteruserComponent },
                { path: 'modifieruser', component:ModifieruserComponent },
                { path: 'listeuser', component:ListeuserComponent },
                { path: 'addniveau', component:AjouterniveauComponent },
                { path: 'editniveau', component:EditniveauComponent},
                { path: 'addspecialite', component:AjouterspecialiteComponent },
                { path: 'editspecialite', component:EditspecialiteComponent},
                { path: 'addclasse', component:AjouterclasseComponent },
                { path: 'editclasse', component:EditclasseComponent},
                { path: 'addcours', component:AddcoursComponent },
                { path: 'editcours', component:EditcoursComponent},
                { path: 'addexercice', component:AddexerciceComponent },
                { path: 'editexercice', component:EditexerciceComponent},
                { path: 'addeleve', component:AjoutereleveComponent },
                { path: 'editeleve', component:EditeleveComponent},
                { path: 'listeeleve', component:ModifiereleveComponent},
                { path: 'addemployes', component:AjouteremployeComponent },
                { path: 'editemployes', component:EditemployeComponent},
                { path: 'listeemployes', component:ModifieremployesComponent},
                { path: 'adddevoir', component:AdddevoirComponent },
                { path: 'editdevoir', component:EditdevoirComponent },
                { path: 'addpermission', component:AjouterpermissionComponent },
                { path: 'addrole', component:AjouterroleComponent },
                { path: 'listerole', component:ListeroleComponent },
                { path: 'addcategories', component:AjoutercategorieComponent },
                { path: 'listecategories', component:ListecategoriesComponent },
                { path: 'modifiereleve', component:ModifiereleveComponent },
                { path: 'ajouterparent', component:AjouterparentComponent },
                { path: 'modifierparent', component:ModifierparentComponent },
                { path: 'listeparent', component:ListeparentComponent },
                { path: 'ajouterenseignant', component:AjouterenseignantComponent },
                { path: 'listeenseignant', component:ListeenseignantComponent },
                { path: 'modifierenseignant', component:ModifierenseignantComponent },
                { path: 'modifieremployes', component:ModifieremployesComponent },
                { path: 'modifierspecialite', component:ModifierspecialiteComponent },
                { path: 'modifierniveau', component:ModifierniveauComponent },
                { path: 'modifierclasse', component:ModifierclasseComponent },
                { path: 'ajoutermatiere', component:AjoutermatiereComponent },
                { path: 'listematieres', component:ListematieresComponent },
                { path: 'modifiermatiere', component:ModifiermatiereComponent },
                { path: 'modifierrole', component:ModifierroleComponent },
                { path: 'contact', component:ContacterComponent },
                { path: 'modifierexercice', component:ModifierexerciceComponent },
                { path: 'Modifiercours', component:ModifiercoursComponent },
                { path: 'ajouterreclamation', component:AjouterReclamationComponent },
                { path: 'listreclamation', component:ListReclamationComponent },
                { path: 'modifierreclamation', component:ModifierReclamationComponent},
                { path: 'ajoutersalle', component:AjoutersalleComponent},
                { path: 'modifiersalle', component:ModifiersalleComponent},
                { path: 'listesalle', component: ListsalleComponent},
                { path: 'ajoutercharge', component: AjouterchargeComponent},
                { path: 'modifiercharege', component: ModifierchargeComponent},
                { path: 'listecharege', component: ListechargeComponent},
                { path: 'ajouterinscription', component: AjouterinscriptionComponent},
                { path: 'listeinscription', component: ListeinscriptionComponent},
                { path: 'ajouteremploi', component: AjouteremploiComponent},
                { path: 'modifieremploi', component: ModifieremploiComponent},
                { path: 'listeemploi', component: ListeemploiComponent},
                { path: 'ajouternote', component: AjouternoteComponent},
                { path: 'modifiernote', component: ModifiernoteComponent},
                { path: 'listenote', component: ListenoteComponent},
                { path: 'ajoutercontact', component: AjoutercontactComponent},
                { path: 'modifiercontact', component: ModifiercontactComponent},
                { path: 'listecontact', component: ListecontactComponent},
                { path: 'ajouterredoublants', component: AjouterredoublantsComponent},
                { path: 'modifierredoublants', component: ModifierredoublantsComponent},
                { path: 'listeredoublants', component: ListeredoublantsComponent},
                { path: 'ajoutermateriels', component: AjoutermaterielsComponent},
                { path: 'modifiermateriels', component: ModifiermaterielsComponent},
                { path: 'listemateriels', component: ListematerielsComponent},
                { path: 'ajoutercontrat', component: AjoutercontratComponent},
                { path: 'modifiercontrat', component: ModifiercontratComponent},
                { path: 'listecontrat', component: ListecontratComponent},
                { path: 'ajouterfmedical', component: AjouterfmedicalComponent},
                { path: 'modifierfmedical', component: ModifierfmedicalComponent},
                { path: 'listefmedical', component: ListefmedicalComponent},
                { path: 'ajouterenseignant', component: AjouterenseignantComponent},
                { path: 'modifierenseignant', component: ModifierenseignantComponent},
                { path: 'listeenseignant', component: ListeenseignantComponent},
                { path: 'ajouterformationscandidats', component: AjouterformationscandidatsComponent},
                { path: 'modifierformationscandidats', component: ModifierformationscandidatsComponent},
                { path: 'listeformationscandidats', component: ListeformationscandidatsComponent},
                { path: 'ajouterformationsprofesseur', component: AjouterformationsprofesseurComponent},
                { path: 'modifierformationsprofesseur', component: ModifierformationsprofesseurComponent},
                { path: 'listeformationsprofesseur', component: ListeformationsprofesseurComponent},
                { path: 'ajoutergarderie', component: AjoutergarderieComponent},
                { path: 'modifiergarderie', component: ModifiergarderieComponent},
                { path: 'listegarderie', component: ListegarderieComponent},
                { path: 'ajouterjoursferiesvacances', component: AjouterjoursferiesvacancesComponent},
                { path: 'modifierjoursferiesvacances', component: ModifierjoursferiesvacancesComponent},
                { path: 'listjoursferiesvacances', component: ListjoursferiesvacancesComponent},
                { path: 'ajouterpresencesprofesseurs', component: AjouterpresencesprofesseursComponent},
                { path: 'modifierpresencesprofesseurs', component: ModifierpresencesprofesseursComponent},
                { path: 'listpresencesprofesseurs', component: ListpresencesprofesseursComponent},
                { path: 'ajouterpresenceseleves', component: AjouterpresenceselevesComponent},
                { path: 'modifierpresenceseleves', component: ModifierpresenceselevesComponent},
                { path: 'listpresenceseleves', component: ListpresenceselevesComponent},
                { path: 'ajouterrendezvous', component: AjouterrendezvousComponent},
                { path: 'modifierrendezvous', component: ModifierrendezvousComponent},
                { path: 'listrendezvous', component: ListrendezvousComponent},
                { path: 'ajouterformateursexterne', component: AjouterformateursexterneComponent},
                { path: 'modifierformateursexterne', component: ModifierformateursexterneComponent},
                { path: 'listformateursexterne', component: ListformateursexterneComponent},
                { path: 'ajouterplanning', component: AjouterplanningComponent},
                { path: 'modifierplanning', component: ModifierplanningComponent},
                { path: 'listplanning', component: ListplanningComponent},
                { path: 'ajouter-satisfaction', component: AjouterSatisfactionComponent},
                { path: 'modifier-satisfaction', component: ModifierSatisfactionComponent},
                { path: 'list-satisfaction', component: ListSatisfactionComponent},
                { path: 'ajouterinfirmerie', component: AjouterinfirmerieComponent},
                { path: 'modifierinfirmerie', component: ModifierinfirmerieComponent},
                { path: 'listinfirmerie', component: ListinfirmerieComponent},
                { path: 'ajouterpaiement', component: AjouterpaiementComponent},
                { path: 'modifierpaiement', component: ModifierpaiementComponent},
                { path: 'listpaiement', component: ListpaiementComponent},
                { path: 'ajouterpointage', component: AjouterpointageComponent},
                { path: 'modifierpointage', component:ModifierpointageComponent},
                { path: 'listepointage', component:ListepointageComponent},
                { path: 'ajouteravertissement', component:AjouteravertissementComponent},
                { path: 'modifieravertissement', component:ModifieravertissementComponent},
                { path: 'listeavertissement', component:ListeavertissementComponent},
                { path: 'ajouterLivret', component:AjouterLivretComponent},
                { path: 'modifierLivret', component:ModifierLivretComponent},
                { path: 'listeLivret', component:ListeLivretComponent},
                { path: 'ajouterfourniture', component:AjouterfournitureComponent},
                { path: 'modifierfourniture', component:ModifierfournitureComponent},
                { path: 'listefourniture', component:ListefournitureComponent},
                
                





































































































                
            ]},

            // Apps
            {path: 'apps', children: [

                
          
               


                {path: 'academy', loadChildren: () => import('app/modules/admin/apps/academy/academy.module').then(m => m.AcademyModule)},
 
                {path: 'contacts', loadChildren: () => import('app/modules/admin/apps/contacts/contacts.module').then(m => m.ContactsModule)},
                {path: 'ecommerce', loadChildren: () => import('app/modules/admin/apps/ecommerce/ecommerce.module').then(m => m.ECommerceModule)},
                {path: 'file-manager', loadChildren: () => import('app/modules/admin/apps/file-manager/file-manager.module').then(m => m.FileManagerModule)},
                {path: 'help-center', loadChildren: () => import('app/modules/admin/apps/help-center/help-center.module').then(m => m.HelpCenterModule)},
                {path: 'mailbox', loadChildren: () => import('app/modules/admin/apps/mailbox/mailbox.module').then(m => m.MailboxModule)},
                {path: 'notes', loadChildren: () => import('app/modules/admin/apps/notes/notes.module').then(m => m.NotesModule)},
                {path: 'scrumboard', loadChildren: () => import('app/modules/admin/apps/scrumboard/scrumboard.module').then(m => m.ScrumboardModule)},
                {path: 'tasks', loadChildren: () => import('app/modules/admin/apps/tasks/tasks.module').then(m => m.TasksModule)},
            ]},

            // Pages
            {path: 'pages', children: [

                // Activities
                {path: 'activities', loadChildren: () => import('app/modules/admin/pages/activities/activities.module').then(m => m.ActivitiesModule)},

                // Authentication
                {path: 'authentication', loadChildren: () => import('app/modules/admin/pages/authentication/authentication.module').then(m => m.AuthenticationModule)},

                // Coming Soon
                {path: 'coming-soon', loadChildren: () => import('app/modules/admin/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)},

                // Error
                {path: 'error', children: [
                    {path: '404', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
                    {path: '500', loadChildren: () => import('app/modules/admin/pages/error/error-500/error-500.module').then(m => m.Error500Module)}
                ]},

                // Invoice
                {path: 'invoice', children: [
                    {path: 'printable', children: [
                        {path: 'compact', loadChildren: () => import('app/modules/admin/pages/invoice/printable/compact/compact.module').then(m => m.CompactModule)},
                        {path: 'modern', loadChildren: () => import('app/modules/admin/pages/invoice/printable/modern/modern.module').then(m => m.ModernModule)}
                    ]}
                ]},

                // Maintenance
                {path: 'maintenance', loadChildren: () => import('app/modules/admin/pages/maintenance/maintenance.module').then(m => m.MaintenanceModule)},

                // Pricing
                {path: 'pricing', children: [
                    {path: 'modern', loadChildren: () => import('app/modules/admin/pages/pricing/modern/modern.module').then(m => m.PricingModernModule)},
                    {path: 'simple', loadChildren: () => import('app/modules/admin/pages/pricing/simple/simple.module').then(m => m.PricingSimpleModule)},
                    {path: 'single', loadChildren: () => import('app/modules/admin/pages/pricing/single/single.module').then(m => m.PricingSingleModule)},
                    {path: 'table', loadChildren: () => import('app/modules/admin/pages/pricing/table/table.module').then(m => m.PricingTableModule)}
                ]},

                // Profile
                {path: 'profile', loadChildren: () => import('app/modules/admin/pages/profile/profile.module').then(m => m.ProfileModule)},

                // Settings
                {path: 'settings', loadChildren: () => import('app/modules/admin/pages/settings/settings.module').then(m => m.SettingsModule)},
            ]},

            // User Interface
            {path: 'ui', children: [

                // Material Components
                {path: 'material-components', loadChildren: () => import('app/modules/admin/ui/material-components/material-components.module').then(m => m.MaterialComponentsModule)},

                // Fuse Components
                {path: 'fuse-components', loadChildren: () => import('app/modules/admin/ui/fuse-components/fuse-components.module').then(m => m.FuseComponentsModule)},

                // Other Components
                {path: 'other-components', loadChildren: () => import('app/modules/admin/ui/other-components/other-components.module').then(m => m.OtherComponentsModule)},

                // TailwindCSS
                {path: 'tailwindcss', loadChildren: () => import('app/modules/admin/ui/tailwindcss/tailwindcss.module').then(m => m.TailwindCSSModule)},

                // Advanced Search
                {path: 'advanced-search', loadChildren: () => import('app/modules/admin/ui/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule)},

                // Animations
                {path: 'animations', loadChildren: () => import('app/modules/admin/ui/animations/animations.module').then(m => m.AnimationsModule)},

                 // Cards
                {path: 'cards', loadChildren: () => import('app/modules/admin/ui/cards/cards.module').then(m => m.CardsModule)},

                // Colors
                {path: 'colors', loadChildren: () => import('app/modules/admin/ui/colors/colors.module').then(m => m.ColorsModule)},

                // Confirmation Dialog
                {path: 'confirmation-dialog', loadChildren: () => import('app/modules/admin/ui/confirmation-dialog/confirmation-dialog.module').then(m => m.ConfirmationDialogModule)},

                // Datatable
                {path: 'datatable', loadChildren: () => import('app/modules/admin/ui/datatable/datatable.module').then(m => m.DatatableModule)},

                // Forms
                {path: 'forms', children: [
                    {path: 'fields', loadChildren: () => import('app/modules/admin/ui/forms/fields/fields.module').then(m => m.FormsFieldsModule)},
                    {path: 'layouts', loadChildren: () => import('app/modules/admin/ui/forms/layouts/layouts.module').then(m => m.FormsLayoutsModule)},
                    {path: 'wizards', loadChildren: () => import('app/modules/admin/ui/forms/wizards/wizards.module').then(m => m.FormsWizardsModule)}
                ]},

                // Icons
                {path: 'icons', loadChildren: () => import('app/modules/admin/ui/icons/icons.module').then(m => m.IconsModule)},

                // Page Layouts
                {path: 'page-layouts', loadChildren: () => import('app/modules/admin/ui/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)},

                // Typography
                {path: 'typography', loadChildren: () => import('app/modules/admin/ui/typography/typography.module').then(m => m.TypographyModule)}
            ]},

            // Documentation
            {path: 'docs', children: [

                // Changelog
                {path: 'changelog', loadChildren: () => import('app/modules/admin/docs/changelog/changelog.module').then(m => m.ChangelogModule)},

                // Guides
                {path: 'guides', loadChildren: () => import('app/modules/admin/docs/guides/guides.module').then(m => m.GuidesModule)}
            ]},

            // 404 & Catch all
            {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module)},
            {path: '**', redirectTo: '404-not-found'}
        ]
    }
];

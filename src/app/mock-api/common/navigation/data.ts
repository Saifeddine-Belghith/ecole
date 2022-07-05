/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
   //utilisateur
    {
        id      : 'dashboards',
        title   : 'Utilisateurs',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-circle',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter utilisateurs',
                type : 'basic',
                link : '/dashboards/Ajouteruser'
            },
            {
                id      : 'dashboards',
                title: 'Modifier utilisateurs',
                type : 'basic',
                link : '/dashboards/modifieruser'
            },
            
            
            {
                id      : 'dashboards',
                title: 'Liste utilisateurs',
                type : 'basic',
                link : '/dashboards/listeuser'
            }
        ]
    },
    //eleves
    {
        id      : 'dashboards',
        title   : 'Eleves',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-group',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Eleve', 
                type : 'basic',
                link : '/dashboards/addeleve'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Eleve',
                type : 'basic',
                link : '/dashboards/listeeleve'
            },
            {
                id      : 'dashboards',
                title: 'Liste Eleve',
                type : 'basic',
                link : '/dashboards/editeleve'
            }
        ]
    },

    //Notes
    {
        id      : 'dashboards',
        title   : 'Notes',
        type    : 'collapsable',
        icon    : 'heroicons_outline:pencil',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Notes',
                type : 'basic',
                link : '/dashboards/ajouternote'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Notes',
                type : 'basic',
                link : '/dashboards/modifiernote'
            },
            {
                id      : 'dashboards',
                title: 'liste Notes',
                type : 'basic',
                link : '/dashboards/listenote'
            }
        ]
    },
     //Livret
     {
        id      : 'dashboards',
        title   : 'Livret',
        type    : 'collapsable',
        icon    : 'heroicons_outline:pencil',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Livret',
                type : 'basic',
                link : '/dashboards/ajouterLivret'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Livret',
                type : 'basic',
                link : '/dashboards/modifierLivret'
            },
            {
                id      : 'dashboards',
                title: 'liste Livret',
                type : 'basic',
                link : '/dashboards/listeLivret'
            }
        ]
    },
    
   //Redoublants

   {
    id      : 'dashboards',
    title   : 'Redoublants',
    type    : 'collapsable',
    icon    : 'heroicons_outline:reply',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Redoublants',
            type : 'basic',
            link : '/dashboards/ajouterredoublants'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Redoublants',
            type : 'basic',
            link : '/dashboards/modifierredoublants'
        },
        {
            id      : 'dashboards',
            title: 'Liste Redoublants',
            type : 'basic',
            link : '/dashboards/listeredoublants'
        }
    ]
},
//employes
    {
        id      : 'dashboards',
        title   : 'Employes',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-group',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Employe',
                type : 'basic',
                link : '/dashboards/addemployes'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Employe',
                type : 'basic',
                link : '/dashboards/listeemployes'
            },
            {
                id      : 'dashboards',
                title: 'Liste Employe',
                type : 'basic',
                link : '/dashboards/editemployes'
            }
        ]
    },
    
    {
        id      : 'dashboards',
        title   : 'Enseignant',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-group',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Enseignant',
                type : 'basic',
                link : '/dashboards/ajouterenseignant'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Enseignant',
                type : 'basic',
                link : '/dashboards/modifierenseignant'
            },
            {
                id      : 'dashboards',
                title: 'Liste Enseignant',
                type : 'basic',
                link : '/dashboards/listeenseignant'
            }
        ]
    },

    //Pointage
{
    id      : 'dashboards',
    title   : 'Pointage',
    type    : 'collapsable',
    icon    : 'heroicons_outline:currency-dollar',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Pointage',
            type : 'basic',
            link : '/dashboards/ajouterpointage'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Pointage',
            type : 'basic',
            link : '/dashboards/modifierpointage'
        },
        {
            id      : 'dashboards',
            title: 'Liste Pointage',
            type : 'basic',
            link : '/dashboards/listepointage'
        }
    ]
},

//présences professeurs
{
    id      : 'dashboards',
    title   : 'présences professeurs',
    type    : 'collapsable',
    icon    : 'heroicons_outline:user-add',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter présences professeurs',
            type : 'basic',
            link : '/dashboards/ajouterpresencesprofesseurs'
        },
        {
            id      : 'dashboards',
            title: 'Modifier présences professeurs',
            type : 'basic',
            link : '/dashboards/modifierpresencesprofesseurs'
        },
        {
            id      : 'dashboards',
            title: 'Liste présences professeurs',
            type : 'basic',
            link : '/dashboards/listpresencesprofesseurs'
        }
    ]
},

//présences eleves
{
    id      : 'dashboards',
    title   : 'présences eleves',
    type    : 'collapsable',
    icon    : 'heroicons_outline:user-add',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter présences eleves',
            type : 'basic',
            link : '/dashboards/ajouterpresenceseleves'
        },
        {
            id      : 'dashboards',
            title: 'Modifier présences eleves',
            type : 'basic',
            link : '/dashboards/modifierpresenceseleves'
        },
        {
            id      : 'dashboards',
            title: 'Liste présences eleves',
            type : 'basic',
            link : '/dashboards/listpresenceseleves'
        }
    ]
},
//specialite

    {
        id      : 'dashboards',
        title   : 'Specialité',
        type    : 'collapsable',
        icon    : 'heroicons_outline:academic-cap',
        children: [
            {
                id      : 'dashboards',
                title: 'Specialité',
                type : 'collapsable',
                children:[
                    {
                        id      : 'dashboards',
                    title: 'Ajouter Specialité',
                    type : 'basic',
                    link : '/dashboards/addspecialite'

                     }, {
                        id      : 'dashboards',
                    title: 'Modifier Specialité',
                    type : 'basic',
                    link : '/dashboards/modifierspecialite'

                     },
                     {
                        id      : 'dashboards',
                        title: 'Liste Specialité',
                        type : 'basic',
                        link : '/dashboards/editspecialite'
    
                         } ]
            },
            {
                id      : 'dashboards',
                title: 'Niveau',
                type : 'collapsable',
                children:[
                    {
                        id      : 'dashboards',
                      title: 'Ajouter Niveau',
                      type : 'basic',
                      link : '/dashboards/addniveau'
  
                       },
                       {
                        id      : 'dashboards',
                      title: 'Modifier Niveau',
                      type : 'basic',
                      link : '/dashboards/modifierniveau'
  
                       },
                       {
                        id      : 'dashboards',
                          title: 'Liste Niveau',
                          type : 'basic',
                          link : '/dashboards/editniveau'
      
                           }
                ]
            },
            {
                id      : 'dashboards',
                title: 'Classe',
                type : 'collapsable',
                children:[
                    {
                        id      : 'dashboards',
                      title: 'Ajouter Classe',
                      type : 'basic',
                      link : '/dashboards/addclasse'
  
                       },
                       {
                        id      : 'dashboards',
                      title: 'Modifier Classe',
                      type : 'basic',
                      link : '/dashboards/modifierclasse'
  
                       },
                       {
                        id      : 'dashboards',
                          title: 'Liste  Classe',
                          type : 'basic',
                          link : '/dashboards/editclasse'
      
                           }
                ]
            }
        ]
    },

//matiere

    {
        id      : 'dashboards',
        title   : 'Matiere',
        type    : 'collapsable',
        icon    : 'heroicons_outline:annotation',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Matiere',
                type : 'basic',
                link : '/dashboards/ajoutermatiere'
            },
            {
                id      : 'dashboards',
                title: 'Liste Matiere',
                type : 'basic',
                link : '/dashboards/listematieres'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Matiere',
                type : 'basic',
                link : '/dashboards/modifiermatiere'
            }
        ]
    },
    //cours 
    {
        id      : 'dashboards',
        title   : 'Cours',
        type    : 'collapsable',
        icon    : 'heroicons_outline:book-open',
        children: [
            {
                id      : 'dashboards',
                title: 'Cours',
                type : 'collapsable',
                children:[
                    {id      : 'dashboards',
                          title: 'Ajouter Cours',
                          type : 'basic',
                          link : '/dashboards/addcours'

                    },
                    {id      : 'dashboards',
                    title: 'Modifier Cours',
                    type : 'basic',
                    link : '/dashboards/Modifiercours'

              },
                     {id      : 'dashboards',
                    title: 'Liste Cours',
                    type : 'basic',
                    link : '/dashboards/editcours'
                }
                ]
                
            },
            {
                id      : 'dashboards',
                title: 'Exercice',
                type : 'collapsable',
                children:[
                    {id      : 'dashboards',
                          title: 'Ajouter Exercices',
                          type : 'basic',
                          link : '/dashboards/addexercice'

                    },
                    {id      : 'dashboards',
                          title: 'Modifier Exercices',
                          type : 'basic',
                          link : '/dashboards/modifierexercice'

                    },
                     {id      : 'dashboards',
                    title: 'Liste Exercices',
                    type : 'basic',
                    link : '/dashboards/editexercice'
                }
                ]
                
            }
        ]
    },
    //devoirs 
    {
        id      : 'dashboards',
        title   : 'Devoirs',
        type    : 'collapsable',
        icon    : 'heroicons_outline:adjustments',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Devoirs',
                type : 'basic',
                link : '/dashboards/adddevoir'
            },
            {
                id      : 'dashboards',
                title: 'Liste Devoirs',
                type : 'basic',
                link : '/dashboards/editdevoir'
            }
        ]
    },


   
    //Role
    {
        id      : 'dashboards',
        title   : 'Role',
        type    : 'collapsable',
        icon    : 'heroicons_outline:adjustments',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Role',
                type : 'basic',
                link : '/dashboards/addrole'
            },
            {
                id      : 'dashboards',
                title: 'Liste Role',
                type : 'basic',
                link : '/dashboards/listerole'
            }
        ]
    },
    //permission
    {
        id      : 'dashboards',
        title   : 'Permission',
        type    : 'collapsable',
        icon    : 'heroicons_outline:bookmark-alt',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Permission',
                type : 'basic',
                link : '/dashboards/addpermission'
            }
        ]
    },
    {
        id      : 'dashboards',
        title   : 'Catégories',
        type    : 'collapsable',
        icon    : 'heroicons_outline:view-list',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Catégories',
                type : 'basic',
                link : '/dashboards/addcategories'
            },
            {
                id      : 'dashboards',
                title: 'Liste Catégories',
                type : 'basic',
                link : '/dashboards/listecategories'
            }
        ]
    },
    //reclamation
    {
        id      : 'dashboards',
        title   : 'Reclamation',
        type    : 'collapsable',
        icon    : 'heroicons_outline:annotation',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Reclamation',
                type : 'basic',
                link : '/dashboards/ajouterreclamation'
            },
            {
                id      : 'dashboards',
                title: 'Liste Reclamation',
                type : 'basic',
                link : '/dashboards/listreclamation'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Reclamation',
                type : 'basic',
                link : '/dashboards/modifierreclamation'
            }
        ]
    },
    { 
        id      : 'dashboards',
        title   : 'Salle',
        type    : 'collapsable',
        icon    : 'heroicons_outline:home',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Salle',
                type : 'basic',
                link : '/dashboards/ajoutersalle'
            },
            {
                id      : 'dashboards',
                title: 'Modifier salle',
                type : 'basic',
                link : '/dashboards/modifiersalle'
            },
            {
                id      : 'dashboards',
                title: 'Liste salle',
                type : 'basic',
                link : '/dashboards/listesalle'
            },
        ]
    },
    //charge
    {
        id      : 'dashboards',
        title   : 'Charge',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-circle',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter charge',
                type : 'basic',
                link : '/dashboards/ajoutercharge'
            },
            {
                id      : 'dashboards',
                title: 'Modifier charge',
                type : 'basic',
                link : '/dashboards/modifiercharege'
            },
            {
                id      : 'dashboards',
                title: 'liste charge',
                type : 'basic',
                link : '/dashboards/listecharege'
            }
        ]
    },

//emploi
    {
        id      : 'dashboards',
        title   : 'Emploi de temps',
        type    : 'collapsable',
        icon    : 'heroicons_outline:table',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Emploi',
                type : 'basic',
                link : '/dashboards/ajouteremploi'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Emploi',
                type : 'basic',
                link : '/dashboards/modifieremploi'
            },
            {
                id      : 'dashboards',
                title: 'liste Emploi',
                type : 'basic',
                link : '/dashboards/listeemploi'
            }
        ]
    },
    

//Contact

    {
        id      : 'dashboards',
        title   : 'Contact',
        type    : 'collapsable',
        icon    : 'heroicons_outline:chat-alt-2',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter contact',
                type : 'basic',
                link : '/dashboards/ajoutercontact'
            },
            {
                id      : 'dashboards',
                title: 'Modifier contact',
                type : 'basic',
                link : '/dashboards/modifiercontact'
            },
            {
                id      : 'dashboards',
                title: 'Liste contact',
                type : 'basic',
                link : '/dashboards/listecontact'
            }
        ]
    },



//materiels
    {
        id      : 'dashboards',
        title   : 'Materiels',
        type    : 'collapsable',
        icon    : 'heroicons_outline:template',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Materiels',
                type : 'basic',
                link : '/dashboards/ajoutermateriels'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Materiels',
                type : 'basic',
                link : '/dashboards/modifiermateriels'
            },
            {
                id      : 'dashboards',
                title: 'Liste Materiels',
                type : 'basic',
                link : '/dashboards/listemateriels'
            }
        ]
    },

//contrat

    {
        id      : 'dashboards',
        title   : 'Contrat',
        type    : 'collapsable',
        icon    : 'heroicons_outline:document-text',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Contrat',
                type : 'basic',
                link : '/dashboards/ajoutercontrat'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Contrat',
                type : 'basic',
                link : '/dashboards/modifiercontrat'
            },
            {
                id      : 'dashboards',
                title: 'Liste Contrat',
                type : 'basic',
                link : '/dashboards/listecontrat'
            }
        ]
    },



//Fiche médical

    {
        id      : 'dashboards',
        title   : 'Fiche médical',
        type    : 'collapsable',
        icon    : 'heroicons_outline:identification',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Fiche médical',
                type : 'basic',
                link : '/dashboards/ajouterfmedical'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Fiche médical',
                type : 'basic',
                link : '/dashboards/modifierfmedical'
            },
            {
                id      : 'dashboards',
                title: 'Liste Fiche médical',
                type : 'basic',
                link : '/dashboards/listefmedical'
            }
        ]
    },

//formationscandidats


    {
        id      : 'dashboards',
        title   : 'Formations Candidats',
        type    : 'collapsable',
        icon    : 'heroicons_outline:clipboard',
        children: [
            {
                id      : 'dashboards',
                title: 'Ajouter Formations Candidats',
                type : 'basic',
                link : '/dashboards/ajouterformationscandidats'
            },
            {
                id      : 'dashboards',
                title: 'Modifier Formations Candidats',
                type : 'basic',
                link : '/dashboards/modifierformationscandidats'
            },
            {
                id      : 'dashboards',
                title: 'Liste Formations Candidats',
                type : 'basic',
                link : '/dashboards/listeformationscandidats'
            }
        ]
    },




//formationsprofesseur

{
    id      : 'dashboards',
    title   : 'Formations Professeur',
    type    : 'collapsable',
    icon    : 'heroicons_outline:clipboard',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Formations Professeur',
            type : 'basic',
            link : '/dashboards/ajouterformationsprofesseur'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Formations Professeurl',
            type : 'basic',
            link : '/dashboards/modifierformationsprofesseur'
        },
        {
            id      : 'dashboards',
            title: 'Liste Formations Professeur',
            type : 'basic',
            link : '/dashboards/listeformationsprofesseur'
        }
    ]
},

//garderie

{
    id      : 'dashboards',
    title   : 'Garderie',
    type    : 'collapsable',
    icon    : 'heroicons_outline:office-building',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Garderie',
            type : 'basic',
            link : '/dashboards/ajoutergarderie'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Garderie',
            type : 'basic',
            link : '/dashboards/modifiergarderie'
        },
        {
            id      : 'dashboards',
            title: 'Liste Garderie',
            type : 'basic',
            link : '/dashboards/listegarderie'
        }
    ]
},
//jours feries et vacances
{
    id      : 'dashboards',
    title   : 'jours féries et vacances',
    type    : 'collapsable',
    icon    : 'heroicons_outline:calendar',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter jours féries et vacances',
            type : 'basic',
            link : '/dashboards/ajouterjoursferiesvacances'
        },
        {
            id      : 'dashboards',
            title: 'Modifier jours féries et vacances',
            type : 'basic',
            link : '/dashboards/modifierjoursferiesvacances'
        },
        {
            id      : 'dashboards',
            title: 'Liste jours féries et vacances',
            type : 'basic',
            link : '/dashboards/listjoursferiesvacances'
        }
    ]
},



//rendez-vous
{
    id      : 'dashboards',
    title   : 'Rendez-vous',
    type    : 'collapsable',
    icon    : 'heroicons_outline:clock',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Rendez-vous',
            type : 'basic',
            link : '/dashboards/ajouterrendezvous'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Rendez-vous',
            type : 'basic',
            link : '/dashboards/modifierrendezvous'
        },
        {
            id      : 'dashboards',
            title: 'Liste Rendez-vous',
            type : 'basic',
            link : '/dashboards/listrendezvous'
        }
    ]
},




//mode paiement
{
    id      : 'dashboards',
    title   : 'Méthode de paiement',
    type    : 'collapsable',
    icon    : 'heroicons_outline:currency-dollar',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Méthode de paiement',
            type : 'basic',
            link : '/dashboards/ajouterpaiement'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Méthode de paiement',
            type : 'basic',
            link : '/dashboards/modifierpaiement'
        },
        {
            id      : 'dashboards',
            title: 'Liste Méthode de paiement',
            type : 'basic',
            link : '/dashboards/listpaiement'
        }
    ]
},
//Fourniture
{
    id      : 'dashboards',
    title   : 'Fourniture',
    type    : 'collapsable',
    icon    : 'heroicons_outline:currency-dollar',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Fourniture',
            type : 'basic',
            link : '/dashboards/ajouterfourniture'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Fourniture',
            type : 'basic',
            link : '/dashboards/modifierfourniture'
        },
        {
            id      : 'dashboards',
            title: 'Liste Fourniture',
            type : 'basic',
            link : '/dashboards/listefourniture'
        }
    ]
},


//planning
{
    id      : 'dashboards',
    title   : 'Planning',
    type    : 'collapsable',
    icon    : 'heroicons_outline:clipboard-list',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Planning',
            type : 'basic',
            link : '/dashboards/ajouterplanning'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Planning',
            type : 'basic',
            link : '/dashboards/modifierplanning'
        },
        {
            id      : 'dashboards',
            title: 'Liste Planning',
            type : 'basic',
            link : '/dashboards/listplanning'
        }
    ]
},


             
//Satisfaction
{
    id      : 'dashboards',
    title   : 'Satisfaction',
    type    : 'collapsable',
    icon    : 'heroicons_outline:clipboard-list',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Satisfaction',
            type : 'basic',
            link : '/dashboards/ajouter-satisfaction'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Satisfaction',
            type : 'basic',
            link : '/dashboards/modifier-satisfaction'
        },
        {
            id      : 'dashboards',
            title: 'Liste Satisfaction',
            type : 'basic',
            link : '/dashboards/list-satisfaction'
        }
    ]
},

//Infirmerie
{
    id      : 'dashboards',
    title   : 'Infirmerie',
    type    : 'collapsable',
    icon    : 'heroicons_outline:clipboard-list',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Infirmerie',
            type : 'basic',
            link : '/dashboards/ajouterinfirmerie'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Infirmerie',
            type : 'basic',
            link : '/dashboards/modifierinfirmerie'
        },
        {
            id      : 'dashboards',
            title: 'Liste Infirmerie',
            type : 'basic',
            link : '/dashboards/listinfirmerie'
        }
    ]
},

//Avertissement
{
    id      : 'dashboards',
    title   : 'Avertissement',
    type    : 'collapsable',
    icon    : 'heroicons_outline:clipboard-list',
    children: [
        {
            id      : 'dashboards',
            title: 'Ajouter Avertissement',
            type : 'basic',
            link : '/dashboards/ajouteravertissement'
        },
        {
            id      : 'dashboards',
            title: 'Modifier Avertissement',
            type : 'basic',
            link : '/dashboards/modifieravertissement'
        },
        {
            id      : 'dashboards',
            title: 'Liste Avertissement',
            type : 'basic',
            link : '/dashboards/listeavertissement'
        }
    ]
},

































































    






































































































];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        tooltip : 'Dashboards',
        type    : 'aside',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        tooltip : 'Apps',
        type    : 'aside',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        tooltip : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        tooltip : 'UI',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation',
        tooltip : 'Navigation',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'DASHBOARDS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'APPS',
        type    : 'group',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id   : 'others',
        title: 'OTHERS',
        type : 'group'
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'aside',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'User Interface',
        type    : 'aside',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Navigation Features',
        type    : 'aside',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id      : 'dashboards',
        title   : 'Dashboards',
        type    : 'group',
        icon    : 'heroicons_outline:home',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'apps',
        title   : 'Apps',
        type    : 'group',
        icon    : 'heroicons_outline:qrcode',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'pages',
        title   : 'Pages',
        type    : 'group',
        icon    : 'heroicons_outline:document-duplicate',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'user-interface',
        title   : 'UI',
        type    : 'group',
        icon    : 'heroicons_outline:collection',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
    {
        id      : 'navigation-features',
        title   : 'Misc',
        type    : 'group',
        icon    : 'heroicons_outline:menu',
        children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    }
];
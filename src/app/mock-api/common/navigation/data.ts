/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        
        title   : 'Utilisateurs',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-circle',
        children: [
            {
                
                title: 'Ajouter utilisateurs',
                type : 'basic',
                link : '/dashboards/adduser'
            },
            {
                
                title: 'Liste utilisateurs',
                type : 'basic',
                link : '/dashboards/edituser'
            }
        ]
    },
    {
        
        title   : 'Eleves',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-group',
        children: [
            {
               
                title: 'Ajouter Eleve',
                type : 'basic',
                link : '/dashboards/addeleve'
            },
            {
               
                title: 'Liste Eleves',
                type : 'basic',
                link : '/dashboards/editeleve'
            }
        ]
    },
    {
       id:'Dashboards',
        title   : 'Enseignants',
        type    : 'collapsable',
        icon    : 'heroicons_outline:user-group',
        children: [
            {
               
                title: 'Ajouter Enseignant',
                type : 'basic',
                link : '/dashboards/addemployes'
            },
            {
               
                title: 'Liste Enseignants',
                type : 'basic',
                link : '/dashboards/editemployes'
            }
        ]
    },
    
    {
       
        title   : 'Specialité',
        type    : 'collapsable',
        icon    : 'heroicons_outline:academic-cap',
        children: [
            {
               
                title: 'Specialité',
                type : 'collapsable',
                children:[
                    {
                       
                    title: 'Ajouter Specialité',
                    type : 'basic',
                    link : '/dashboards/addspecialite'

                     },
                     {
                       
                        title: 'Liste Specialité',
                        type : 'basic',
                        link : '/dashboards/editspecialite'
    
                         } ]
            },
            {
               
                title: 'Niveau',
                type : 'collapsable',
                children:[
                    {
                       
                      title: 'Ajouter Niveau',
                      type : 'basic',
                      link : '/dashboards/addniveau'
  
                       },
                       {
                       
                          title: 'Liste Niveaux',
                          type : 'basic',
                          link : '/dashboards/editniveau'
      
                           }
                ]
            },
            {
               
                title: 'Classe',
                type : 'collapsable',
                children:[
                    {
                       
                      title: 'Ajouter Classe',
                      type : 'basic',
                      link : '/dashboards/addclasse'
  
                       },
                       {
                       
                          title: 'Liste Classes',
                          type : 'basic',
                          link : '/dashboards/editclasse'
      
                           }
                ]
            }
        ]
    },
    {
       
        title   : 'Cours',
        type    : 'collapsable',
        icon    : 'heroicons_outline:book-open',
        children: [
            {
               
                title: 'Cours',
                type : 'collapsable',
                children:[
                    {id      : 'dashboards',
                          title: 'Ajouter Cours',
                          type : 'basic',
                          link : '/dashboards/addcours'

                    },
                     {id      : 'dashboards',
                    title: 'Liste Cours',
                    type : 'basic',
                    link : '/dashboards/editcours'
                }
                ]
                
            },
            {
               
                title: 'Exercices',
                type : 'collapsable',
                children:[
                    {id      : 'dashboards',
                          title: 'Ajouter Exercice',
                          type : 'basic',
                          link : '/dashboards/addexercice'

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
    {
       
        title   : 'Devoirs',
        type    : 'basic',
        icon    : 'heroicons_outline:clipboard-list',
        link : '/dashboards/adddevoir'
    },

    {
       
        title   : 'Permission',
        type    : 'collapsable',
        icon    : 'heroicons_outline:bookmark-alt',
        children: [
            {
               
                title: 'Ajouter Permission',
                type : 'basic',
                link : '/dashboards/addpermission'
            }
        ]
    },
    {
       
        title   : 'Role',
        type    : 'collapsable',
        icon    : 'heroicons_outline:adjustments',
        children: [
            {
               
                title: 'Ajouter Role',
                type : 'basic',
                link : '/dashboards/addrole'
            },
            {
               
                title: 'Liste Role',
                type : 'basic',
                link : '/dashboards/listerole'
            }
        ]
    },
    {
       
        title   : 'Catégories',
        type    : 'collapsable',
        icon    : 'heroicons_outline:view-list',
        children: [
            {
               
                title: 'Ajouter Catégories',
                type : 'basic',
                link : '/dashboards/addcategories'
            },
            {
               
                title: 'Liste Catégories',
                type : 'basic',
                link : '/dashboards/listecategories'
            }
        ]
    },







































    
];
export const compactNavigation: FuseNavigationItem[] = [
    {
       
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

import { Component, OnInit } from '@angular/core';
import { permission, role_permision } from '../data';

@Component({
  selector: 'app-listepermission',
  templateUrl: './listepermission.component.html',
  styleUrls: ['./listepermission.component.scss']
})
export class ListepermissionComponent implements OnInit {

  
  displayedColumns2: string[] = ['Admin', 'Utilisateurs', 'Employes', 'Eleves'];
  displayedColumns: string[] = ['Ajouter', 'Modifier', 'Afficher', 'Supprimer'];

  constructor() { }

  ngOnInit(): void {
  }

}

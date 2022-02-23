import { Data } from "@angular/router";

export interface eleves {
    id:number;
    nom: string;
    prenom: number;
    date_naissance: Data;
    email: string;
    numero: number;
    cin: number;
    specialite: string;
    niveau: string;
    classe: string;
  }
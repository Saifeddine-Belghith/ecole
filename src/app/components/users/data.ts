import { role } from "../role/data";

export interface utilisateur {
    id: number;
    nom: string;
    prenom: string;
    role: string;
    password: string;
  }
export interface cours {
    id:number;
    type:type_examen;
    date: Date;
    examen: File;
    
  }
  export interface type_examen {
    id:number;
    type: string;
   
  }
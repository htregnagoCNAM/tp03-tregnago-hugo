import { Component } from '@angular/core';

@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.scss']
})
export class MoteurRechercheComponent {
  id?: number;
  nom?: string;
  prix?: number;
  categorie?: string;

  constructor() {}
}

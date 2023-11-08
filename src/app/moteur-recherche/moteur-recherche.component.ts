import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.scss']
})
export class MoteurRechercheComponent {

  formRecherche: FormGroup;

  constructor(private formBuilder: FormBuilder, private produitService: ProduitService) {
    this.formRecherche = this.formBuilder.group({
      id: [''],
      nom: [''],
      prix: [''],
      categorie: ['']
    });
  }

  submit() {
    console.log(this.formRecherche.value);
    this.produitService.searchProduits(this.formRecherche.value);
  }
}

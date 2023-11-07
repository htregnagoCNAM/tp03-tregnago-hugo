import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moteur-recherche',
  templateUrl: './moteur-recherche.component.html',
  styleUrls: ['./moteur-recherche.component.scss']
})
export class MoteurRechercheComponent {

  formRecherche: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formRecherche = this.formBuilder.group({
      id: [''],
      nom: [''],
      prix: [''],
      categorie: ['']
    });
  }
  submit(){
    console.log(this.formRecherche.value);
  }
}

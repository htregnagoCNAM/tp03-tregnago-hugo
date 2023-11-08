import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { Produit } from '../produit.interface';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private productService: ProduitService) {}

  ngOnInit(): void {
    const criteria = {
      id: '',
      nom: '',
      prix: '',
      categorie: ''
    };
    this.productService.getProduits(criteria).subscribe(produits => {
      this.produits = produits;
    });
  }
}
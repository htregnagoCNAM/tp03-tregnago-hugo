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
    this.productService.getProducts().subscribe(produits => {
      this.produits = produits;
    });
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Produit } from './produit.interface';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produitUrl = 'assets/produits.json';
  private produits: Produit[] = [];

  constructor(private http: HttpClient) {}

  getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitUrl);
  }

  searchProduits(criteria: any): void {
    console.log(criteria.id);
    console.log(criteria.nom);
    console.log(criteria.prix);
    console.log(criteria.categorie);
  }
}
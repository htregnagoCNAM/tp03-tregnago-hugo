import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './produit.interface';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produitUrl = 'assets/produits.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitUrl);
  }
}
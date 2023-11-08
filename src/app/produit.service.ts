import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Produit } from './produit.interface';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private produitUrl = 'assets/produits.json';

  constructor(private http: HttpClient) {}

  getProduits(criteria: any): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.produitUrl).pipe(
      map((data: Produit[]) => {
        return data.filter(produit => {
          if (
            (criteria.id === '' || (criteria.id !== '' && !isNaN(criteria.id) && produit.id === +criteria.id)) &&
            (criteria.nom === '' || (criteria.nom !== '' && produit.nom.includes(criteria.nom))) &&
            (criteria.prix === '' || (criteria.prix !== '' && !isNaN(criteria.prix) && produit.prix === +criteria.prix)) &&
            (criteria.categorie === '' || (criteria.categorie !== '' && produit.categorie === criteria.categorie))
          ) {
            return true;
          }
          return false;
        });
      })
    );
  }

  searchProduits(criteria: any): void {
    if (criteria.id !== '' && !isNaN(criteria.id)) {
      console.log('ID:', criteria.id);
    }
    if (criteria.nom !== '') {
      console.log('Nom du produit:', criteria.nom);
    }
    if (criteria.prix !== '' && !isNaN(criteria.prix)) {
      console.log('Prix:', criteria.prix);
    }
    if (criteria.categorie !== '') {
      console.log('Catégorie:', criteria.categorie);
    }
    
    const produits: Produit[] = [
      { "id": 1, "nom": "Crayon HB", "prix": 0.99, "categorie": "Écriture" },
      { "id": 2, "nom": "Cahier ligné A4", "prix": 2.49, "categorie": "Papeterie" },
      { "id": 3, "nom": "Stylo à bille bleu", "prix": 1.49, "categorie": "Écriture" },
      { "id": 4, "nom": "Marqueurs de couleurs", "prix": 4.99, "categorie": "Arts" },
      { "id": 5, "nom": "Ciseaux scolaires", "prix": 1.99, "categorie": "Artisanat" },
      { "id": 6, "nom": "Calculatrice scientifique", "prix": 9.99, "categorie": "Fournitures mathématiques" },
      { "id": 7, "nom": "Gomme blanche", "prix": 0.49, "categorie": "Papeterie" },
      { "id": 8, "nom": "Règle en plastique", "prix": 0.99, "categorie": "Papeterie" },
      { "id": 9, "nom": "Cahier de dessin", "prix": 3.99, "categorie": "Arts" },
      { "id": 10, "nom": "Trousse d'écolier", "prix": 5.49, "categorie": "Accessoires scolaires" },
      { "id": 11, "nom": "Feuilles de papier blanc", "prix": 3.49, "categorie": "Papeterie" },
      { "id": 12, "nom": "Crayons de couleur", "prix": 2.99, "categorie": "Arts" },
      { "id": 13, "nom": "Stylo à encre noire", "prix": 1.49, "categorie": "Écriture" },
      { "id": 14, "nom": "Taille-crayon", "prix": 0.79, "categorie": "Accessoires scolaires" },
      { "id": 15, "nom": "Chemises à rabats", "prix": 4.99, "categorie": "Papeterie" },
      { "id": 16, "nom": "Cahier de mathématiques", "prix": 2.99, "categorie": "Fournitures mathématiques" },
      { "id": 17, "nom": "Agrafeuse de bureau", "prix": 7.99, "categorie": "Accessoires scolaires" },
      { "id": 18, "nom": "Peinture acrylique", "prix": 6.99, "categorie": "Arts" },
      { "id": 19, "nom": "Rapporteur d'angle", "prix": 1.29, "categorie": "Fournitures mathématiques" },
      { "id": 20, "nom": "Crayon de couleur aquarellable", "prix": 3.49, "categorie": "Arts" },
      { "id": 21, "nom": "Trombone en métal", "prix": 0.99, "categorie": "Accessoires scolaires" },
      { "id": 22, "nom": "Papier adhésif", "prix": 2.29, "categorie": "Papeterie" },
      { "id": 23, "nom": "Compas de dessin", "prix": 2.99, "categorie": "Arts" },
      { "id": 24, "nom": "Boîte de rangement pour crayons", "prix": 4.49, "categorie": "Accessoires scolaires" },
      { "id": 25, "nom": "Feutres effaçables", "prix": 3.99, "categorie": "Arts" },
      { "id": 26, "nom": "Taille-crayon électrique", "prix": 6.99, "categorie": "Accessoires scolaires" },
      { "id": 27, "nom": "Papier cartonné coloré", "prix": 2.79, "categorie": "Arts" },
      { "id": 28, "nom": "Règle en métal", "prix": 1.49, "categorie": "Papeterie" },
      { "id": 29, "nom": "Tapis de découpe", "prix": 7.49, "categorie": "Artisanat" },
      { "id": 30, "nom": "Crayon mécanique", "prix": 1.99, "categorie": "Écriture" },
      { "id": 31, "nom": "Stylo-feutre", "prix": 2.99, "categorie": "Arts" },
      { "id": 32, "nom": "Cahier de musique", "prix": 4.49, "categorie": "Arts" },
      { "id": 33, "nom": "Classeur à anneaux", "prix": 5.99, "categorie": "Papeterie" },
      { "id": 34, "nom": "Gomme à effacer blanche", "prix": 0.69, "categorie": "Papeterie" },
      { "id": 35, "nom": "Chemise de classement", "prix": 3.29, "categorie": "Papeterie" },
      { "id": 36, "nom": "Stylo plume", "prix": 4.99, "categorie": "Écriture" },
      { "id": 37, "nom": "Rouleau de ruban adhésif", "prix": 1.99, "categorie": "Papeterie" },
      { "id": 38, "nom": "Taille-crayon manuel", "prix": 0.49, "categorie": "Accessoires scolaires" },
      { "id": 39, "nom": "Colle en bâton", "prix": 1.29, "categorie": "Artisanat" },
      { "id": 40, "nom": "Stylo surligneur", "prix": 1.49, "categorie": "Écriture" }
    ];

    const produitsFiltres = produits.filter((produit) => {
      if (
        (criteria.id === '' || (criteria.id !== '' && !isNaN(criteria.id) && produit.id === +criteria.id)) &&
        (criteria.nom === '' || (criteria.nom !== '' && produit.nom.includes(criteria.nom))) &&
        (criteria.prix === '' || (criteria.prix !== '' && !isNaN(criteria.prix) && produit.prix === +criteria.prix)) &&
        (criteria.categorie === '' || (criteria.categorie !== '' && produit.categorie === criteria.categorie))
      ) {
        return true;
      }
      return false;
    });
  
    console.log('Produits filtrés :', produitsFiltres);

  }

}
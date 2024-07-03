import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { BehaviorSubject, Subject } from 'rxjs';
import { NewProducts, Products } from './products.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Injeções de dependências
  private _httpClient = inject(HttpClient);
  private _unsubscribe = new Subject<void>();


  // Behaviors
  private _createProductBehaviorSubject = new Subject<NewProducts>();
  public readonly createProduct$ = this._createProductBehaviorSubject.asObservable();
  
  private _updateProductBehaviorSubject = new Subject<NewProducts>();
  public readonly updateProduct$ = this._updateProductBehaviorSubject.asObservable();

  private _getAllProductsBehaviorSubject = new BehaviorSubject<Products[]>([]);
  public readonly getAllProducts$ = this._getAllProductsBehaviorSubject.asObservable();


  // Funções
  public getAllProducts(): void{
    this._httpClient.get<Products[]>(`${environment.urlApi}`)
  }



}

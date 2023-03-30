import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private htt: HttpClient, private _snack: MatSnackBar) {}

   findAll():Observable<Categoria[]> {
      const url =  `${this.baseUrl}/categorias`
      return this.htt.get<Categoria[]>(url)
   }

   create(categoria:Categoria):Observable<Categoria>{
      const url =  `${this.baseUrl}/categorias`
      return this.htt.post<Categoria>(url, categoria);
   }

   mensagem(str:String): void{
      this._snack.open(`${str}`,`OK`,{
         horizontalPosition: 'end',
         verticalPosition: 'top',
         duration: 4000
      })
   }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SubscribableOrPromise } from 'rxjs'
import { BusquedaInt} from '../interfaces/busqueda-int'

@Injectable({
  providedIn: 'root'
})


export class BusquedaService {
  cachedValues: Array< { [query: string] : BusquedaInt }> = []
  constructor(private http: HttpClient) {
    this.http = http;
   }

   busqueda = (query: string): Promise<BusquedaInt> => {
     let promise = new Promise<BusquedaInt>((resolve, reject) => {
       if (this.cachedValues[query as any]) {
        //  resolve(this.cachedValues[query] as BusquedaInt)
       } else {
         this.http.get('https://api.github.com/search/commits?q=' + query)
         .toPromise()
         .then( (response) => {
           resolve(response as BusquedaInt)
         }, (error) => {
           reject(error);
         } )
       }
     }) 
     return promise; 
   }

}

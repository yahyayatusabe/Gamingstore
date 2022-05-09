import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor(private _http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    withCredentials: true
};

  public loginClienteFromRemote(Cliente:Cliente):Observable<any>{
    return this._http.post<any>('http://localhost:8082/session/',Cliente,this.httpOptions)
    }

    public verclientesesionFromRemote():Observable<any>{
      return this._http.get<any>('http://localhost:8082/session/',this.httpOptions)
      }
    public registerClienteFromRemote(Cliente:Cliente):Observable<any>{
      return this._http.post<any>('http://localhost:8082/cliente/',Cliente,this.httpOptions)
      }
      public crudClienteFromRemote():Observable<any>{
        return this._http.get<any>('http://localhost:8082/cliente/all',this.httpOptions)
        }
        public deleteClienteFromRemote(id:number):Observable<any>{
          return this._http.delete<any>('http://localhost:8082/cliente/'+id,this.httpOptions)
          } 
          
          public Logout():Observable<any>{
            return this._http.delete<any>('http://localhost:8082/session/',this.httpOptions)
            }

            public editarCliente(id:number,Cliente:Cliente):Observable<any>{
              return this._http.put<any>('http://localhost:8082/cliente/'+id,Cliente,this.httpOptions)
              }

              public vercliente(id:number):Observable<any>{
                return this._http.get<any>('http://localhost:8082/cliente/'+id,this.httpOptions)
                }
}

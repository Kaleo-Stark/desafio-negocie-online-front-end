import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CEPService } from './../services/cep.service';

@Injectable({
  providedIn: 'root'
})

export class ServiceApiCepService {

  constructor(private http: HttpClient) { }

  getCEP = async (CEP) => {
    try {
      return await this.http.get(environment.linkAPIcep(CEP)).toPromise();
    } catch (err) {
      console.log(err)
      alert("Houve algum erro ao consultar o CEP pelo ViaCep \nVerifique o CEP e tente novamente!");

      return new CEPService();
    }
  }
}

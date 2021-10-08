import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CEPService } from '../services/cep.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiCepInternalService {

  constructor(private http: HttpClient) { }

  getCEP = async (CEP) => {
    try {
      return await this.http.get(environment.linkAPIcepInternal(CEP)).toPromise();
    } catch (err) {
      if(err.status == 404){
        alert("CEP não existe no banco de dados!");
      }else{
        alert("Houve algum erro!\nVerique os dados e tente novamente!");
      }

      return new CEPService();
    }
  }

  setCEP = async (dataCEP) => {
    try {
      return await this.http.post(environment.linkAPIcepInternalPost, dataCEP).toPromise();
    } catch (err) {
      console.log(err)
      if(err.status == 409){
        alert("CEP já cadastrado no banco de dados!");
      }else{
        alert("Houve algum erro!\nVerique os dados e tente novamente!");
      }

      return new CEPService();
    }
  }
}


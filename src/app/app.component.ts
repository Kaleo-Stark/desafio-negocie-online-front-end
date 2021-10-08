import { Component } from '@angular/core';
import { ServiceApiCepService } from '../app/services/service-api-cep.service';
import { ServiceApiCepInternalService } from '../app/services/service-api-cep-internal.service';
import { CEPService } from './services/cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public CEP: String = "";
  public dataCEP: CEPService;
  public origin: string = "";

  constructor(private apiExternal: ServiceApiCepService, private apiInternal: ServiceApiCepInternalService) {
    this.dataCEP = new CEPService();
  }

  consultCEPApiExternal() {
    if(this.IsCEP(this.CEP)){
      this.apiExternal.getCEP(this.CEP).then((response: CEPService) => {
        
        if (response.cep) {
          this.origin = "API viacep";
          
          this.dataCEP = response;
          
          this.CEP = response.cep;
        } else { 
          this.origin = "" ;

          alert("Houve algum erro!\nVerifique o CEP e tente novamente!");
        }
      });
    }else{
      this.dataCEP = new CEPService();
  
      this.origin = "";

      alert("CEP incorreto!\nVerifique o CEP e tente novamente!");
    }
  }

  consultCEPApiInternal() {
    if(this.IsCEP(this.CEP)){
      this.apiInternal.getCEP(this.CEP).then((response: CEPService) => {
        this.dataCEP = response;
  
        this.origin = "Banco de dados";
      });
    }else{
      this.dataCEP = new CEPService();
  
      this.origin = "";

      alert("CEP incorreto!\nVerifique o CEP e tente novamente!");
    }
  }

  saveCEPApiInternal() {
    if(this.dataCEP.cep){
      this.apiInternal.setCEP(this.dataCEP).then((response: any) => {
        if(response.cep){
          alert("CEP salvo com sucesso!");
        }

        this.origin = "Banco de dados";
      });
    }else{
      alert("CEP vazio!\nVerifique e tente novamente!");
    }
  }

  trim = strTexto => strTexto.replace(/^s+|s+$/g, '') ;

  IsCEP(strCEP) {
    var objER = /^[0-9]{2}[0-9]{3}-[0-9]{3}$/;

    strCEP = this.trim(strCEP);
  
    if(strCEP.length > 0){
      return (objER.test(strCEP))? true : false; 
    }else{ return false }
  }
}

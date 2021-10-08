import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CEPService {

  public cep: string = "";
  public logradouro: string = "";
  public complemento: string = "";
  public bairro: string = "";
  public localidade: string = "";
  public uf: string = "";
  public ibge: string = "";
  public gia: string = "";
  public ddd: string = "";
  public siafi: string = "";

}

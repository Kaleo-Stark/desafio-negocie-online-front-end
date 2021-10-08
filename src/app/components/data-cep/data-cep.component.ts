import { Component, Input, OnInit } from '@angular/core';
import { CEPService } from '../../services/cep.service';

@Component({
  selector: 'app-data-cep',
  templateUrl: './data-cep.component.html',
  styleUrls: ['./data-cep.component.css']
})

export class DataCepComponent implements OnInit {

  public fields: Array<String> = [ 
    "cep", "logradouro", "complemento",
    "bairro", "localidade", "uf",
    "ibge", "gia", "ddd", "siafi",
  ];

  @Input() data: CEPService;

  @Input() origin: string = "";

  constructor() {
    
  }

  ngOnInit(): void {
  }

}

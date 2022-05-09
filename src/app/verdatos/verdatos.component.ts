import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-verdatos',
  templateUrl: './verdatos.component.html',
  styleUrls: ['./verdatos.component.css']
})

export class VerdatosComponent implements OnInit {
idcrud!:number;
nombreclie!:String;
direccionclie!:String;
ciudadclie!:String;
cpclie!:String;
telefonoclie!:number;
emailclie!:String;
fechanacclie!:Date;
usuarioclie!:String;
numtarjclie!:number;

constructor(private service:RegistrationService,private router:Router,private activerouter:ActivatedRoute) {  

this.idcrud=activerouter.snapshot.params.id;



  }

  ngOnInit(): void {
console.log(this.idcrud);

this.service.vercliente(this.idcrud).subscribe(
    
  data => {
  this.idcrud=data.id,
  this.nombreclie=data.nombreclie,
  this.direccionclie=data.direccionclie,
  this.ciudadclie=data.ciudadclie,
  this.cpclie=data.cpclie,
  this.telefonoclie=data.telefonoclie,
  this.emailclie=data.emailclie,
  this.fechanacclie=data.fechanacclie,
  this.usuarioclie=data.usuarioclie,
  this.numtarjclie=data.numtarjclie
  
  }
  
  
    )
  }

editarcliente(idcrud:number){

  
}


}

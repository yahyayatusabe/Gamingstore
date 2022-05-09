import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.component.html',
  styleUrls: ['./editarperfil.component.css']
})
export class EditarperfilComponent implements OnInit {
cliente=new Cliente();
idcrud!:number;
msg="";
formnombre!: string;
  formdireccion: any;
  formciudad: any;
  formcp: any;
  formtelefono: any;
  formemail: any;
  formfecha: any;
  formusuario: any;
  formpassword: any;
  formnumtarj: any;

  constructor( private service:RegistrationService,private router:Router,private activedrouter:ActivatedRoute) {
this.idcrud=activedrouter.snapshot.params.id;

   }

  ngOnInit(): void {

this.service.vercliente(this.idcrud).subscribe(

data =>{
console.log(this.idcrud);

this.service.vercliente(this.idcrud).subscribe(
  data =>{
    this.formnombre=data.nombreclie
    this.formdireccion=data.direccionclie
    this.formciudad=data.ciudadclie
    this.formcp=data.cpclie
    this.formtelefono=data.telefonoclie
    this.formemail=data.emailclie
    this.formfecha=data.fechanacclie
    this.formusuario=data.usuarioclie
    this.formnumtarj=data.numtarjclie

  }


)


}

)

  }

editarcliente(){
this.service.editarCliente(this.idcrud,this.cliente).subscribe(
data =>{
  console.log(this.cliente)
  this.router.navigate(['/verdatos/'+this.idcrud])
console.log(data)
},
error=>(console.log(error))


)


}
}
//volver(){
//  this.router.navigate(['/crud/'])}
//}






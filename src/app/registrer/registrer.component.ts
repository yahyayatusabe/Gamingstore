import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
  
cliente=new Cliente();
msg="";
  constructor(private service:RegistrationService,private router : Router) { }
  ngOnInit(): void {
  }

  registerCliente(){
    console.log(this.cliente.passwordclie);
    this.service.registerClienteFromRemote(this.cliente).subscribe(
      data =>{console.log("User created");
      this.router.navigate(['/session']);
    console.log(data.passwordclie)
    },
      error=>{console.log("Exception occured, user not created"),
      console.log(error);
      this.msg='Ha ocurrido un error, porfavor intentelo de nuevo.';
    }
    )}
}

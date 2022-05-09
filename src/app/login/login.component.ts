import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
cliente = new Cliente();
msg2 = "";

  constructor(private service : RegistrationService,private router : Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginClienteFromRemote(this.cliente).subscribe(
      data =>{
        sessionStorage.setItem("currentclie",JSON.stringify(this.cliente));
        console.log(this.cliente);

        console.log("Response recived");
        this.router.navigate(['/home'])
      },
  
      error=>{console.log("Exception occured");
      this.msg2='Datos incorrectos, introduzca datos validos'}
    )
    }
}

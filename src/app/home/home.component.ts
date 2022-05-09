import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:RegistrationService,private router:Router) { }
id!:number
  ngOnInit(): void {
    this.service.verclientesesionFromRemote().subscribe(
      data=>{
        this.id=data.id
      }
    )
  }


  Logout(){
    this.service.Logout().subscribe(
      data => {
        sessionStorage.clear();
        this.router.navigate(['/session'])
      },
      error => {
        console.log("Exception occured");
      }
    )
  }

  Login(){

    this.router.navigate(['/session'])
  }
  crud(){
    this.router.navigate(['/crud'])
  }

  verperfil(){
    this.router.navigate(['/verdatos/'+this.id])
  }
}

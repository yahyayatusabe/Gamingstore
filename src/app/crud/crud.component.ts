import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
pageActual:number=1;
listaclientes!:any[];
msg2="";

  constructor(private service:RegistrationService,private router:Router) { }
  
  ngOnInit(): void {

this.service.crudClienteFromRemote().subscribe(
data=>{
  this.listaclientes=data,
  console.log(this.listaclientes)
},error=>{
  console.log("Ha ocurrido un error inesperado");
}

)

}

eliminarCliente(idtabla: number,i:number) {

  const confirmacion=confirm("¿Estas seguro?");
  if(confirmacion){

    this.service.deleteClienteFromRemote(idtabla).subscribe(
      data => {
       this.listaclientes.splice(i, 1)
          console.log("Bien");


        }
      )

  }
}

  editarCliente(idtabla:number){
  
this.router.navigate(['/verdatos/'+idtabla]);

  }

  Paginacion(){

    this.router.navigate(['/paginado'])
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

}

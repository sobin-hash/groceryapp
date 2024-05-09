import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private api:ApiService,private router:Router){}


  loginData:any={
    email:'',
    password:''
  }

  onSubmit(){
    console.log(this.loginData)
    this.api.userLogin(this.loginData).subscribe({
      next:(res:any)=>{
        console.log(res,"login res")
        localStorage.setItem('token',(res.token))

        this.router.navigateByUrl('/home')
      },error:(err:any)=>{
        console.log(err)
      }
    })
  }

}

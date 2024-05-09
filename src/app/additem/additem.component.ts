import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  itemId:any;
  myObj:any;


  constructor(private api:ApiService,private aroute:ActivatedRoute,private router:Router,private toastr:ToastrService){

    this.aroute.params.subscribe({
      next:(res:any)=>{

        this.itemId=res.id
        console.log(this.itemId)

      }
    })
  }

  ngOnInit() {

    this.getSpecificItem()


    
  }


  getSpecificItem(){
    this.api.getSpecificItem(this.itemId).subscribe({
      next:(res:any)=>{
        console.log(res,"spec")
        this.myObj=res
        console.log(this.myObj," myobj")

      },error:(err:any)=>{
        console.log(err)
      }
    })
  }




  formData = {
    item:'',
    quantity:'',
    price:''

  }

  onSubmit(){
    console.log(this.formData,"formdata")
    this.api.addItem(this.formData).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/home')
        this.toastr.success("added successfully")
      },error:(err:any)=>{
        console.log(err)
      }
    })

  }

  onEdit(){

    this.api.editItem(this.myObj,this.itemId).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.toastr.success("edit success")
        this.router.navigateByUrl('/home')
        
      },error:(err:any)=>{
        console.log(err)
      }
    })

  }



}

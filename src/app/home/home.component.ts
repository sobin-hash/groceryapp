import { Component, Output } from '@angular/core';
import { ApiService } from '../api.service';
import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  @Output() searchEventEmitter = new EventEmitter ()

  searchKey:any;
  itemArray:any=[]

  constructor(private api:ApiService,private toastr:ToastrService){}

  ngOnInit() {

    this.getItems()

    
  }

  onSearchText(event:any){
    this.searchKey = event


  }


  getItems(){
    this.api.getAllItems().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.itemArray=res
      },error:(err)=>{
        console.log(err)
      }
    })
    
  }


  onDelete(id:any){
    this.api.deleteItem(id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.getItems()
        this.toastr.error("Item Deleted")

      },error:(err:any)=>{
        console.log(err)
      }
    })

  }





}

import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() searchEventEmitter = new EventEmitter ()


  searchText:any;

  onSearch(){
    this.searchEventEmitter.emit(this.searchText)

  }


}

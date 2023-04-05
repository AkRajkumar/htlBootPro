import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

row = [
  {
    id : '',
    name: '',
    email: ''
  },
 
];

addTable() {
  const obj = {
    id: '',
    name: '',
    email: ''
  }
  this.row.push(obj)
}

deleteRow(x: number){
//   var delBtn = confirm(" Do you want to delete ?");
//   if ( delBtn == true ) {
    this.row.splice(x, 1 );
  }   
} 
     



   
// }

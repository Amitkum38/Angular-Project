import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-table-value',
  templateUrl: './array-table-value.component.html',
  styleUrls: ['./array-table-value.component.css']
})
export class ArrayTableValueComponent implements OnInit {

  PersonDetails:any=[
    {name:"ramkumar", email:"ram.kumar@gmail.com", number:"9876543210", age:25, marritual_status:'yes'},
    {name:"shyam babu", email:"shyambabu14@gmail.com", number:"8826227542", age:15, marritual_status:'no'},
    {name:"Deepak", email:"Deepak.kumar@gmail.com", number:"9213928415", age:45, marritual_status:'yes'},
    {name:"ganesh", email:"ganesh.kumar@gmail.com", number:"9891394622", age:10, marritual_status:'no'},
    {name:"kamlesh", email:"kamlesh.kumar@gmail.com", number:"9456543210", age:22, marritual_status:'yes'},
    {name:"shailseh", email:"shailseh.kumar@gmail.com", number:"9776543211", age:12, marritual_status:'no'},
    {name:"Amit", email:"amit.kumar@gmail.com", number:"9876543110", age:25, marritual_status:'yes'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UserserviceService } from '../../service/userservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-student',
  imports: [NavbarComponent,RouterLink],
  templateUrl: './view-student.component.html',
  styleUrl: './view-student.component.css'
})
export class ViewStudentComponent implements OnInit{
onDelete(id:any) {

  this.us.delete(id).subscribe({
    next:()=>{
      alert('deleted')
      this.ngOnInit();

    },
    error:()=>
    {
      alert('error');
    }
  })
    
}
  // students:any = [
  //   { name: 'Ajai', regNo: '12345', dob: '2002-09-11', tamil: 90, english: 85, maths: 95, science: 88, social: 80 },
  //   { name: 'Rahul', regNo: '12346', dob: '2002-06-15', tamil: 78, english: 82, maths: 88, science: 92, social: 84 }
  // ];
  students:any;
onEdit: any;
  constructor(private us:UserserviceService){}
  ngOnInit(): void {
    this.us.get_data_admin().subscribe({
      next:(data)=>{
     this.students=data;
      },
      error:()=>{

      }
    })
  }

}

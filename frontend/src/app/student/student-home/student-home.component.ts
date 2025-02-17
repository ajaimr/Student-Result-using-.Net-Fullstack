import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../../service/userservice.service';

@Component({
  selector: 'app-student-home',
  imports: [],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css'
})
export class StudentHomeComponent implements OnInit{
  constructor(private ar:ActivatedRoute,private us:UserserviceService){}
  result:any;
 ngOnInit(): void {
   let id=this.ar.snapshot.paramMap.get('id');
   console.log(id)
   if(id){
    this.us.getById(id).subscribe({
      next:(data)=>{
        this.result=data;
        // alert(JSON.stringify(data));
      },
      error:(err)=>{
        alert('err')
      },
      complete:()=>{}
    })
  }
 }
}

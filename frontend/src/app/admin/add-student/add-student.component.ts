import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [NavbarComponent,ReactiveFormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent implements OnInit{
 fg:FormGroup=new FormGroup({});
  
  onSubmit(){
    let id=this.ar.snapshot.paramMap.get('id');
    if(id){
      
      this.us.update(this.fg.value,id).subscribe({
        next:(data)=>{
          alert('updated successfully..');
          this.route.navigate(['/view']);
        },
        error:(err)=>{
          alert('error');
        },
        complete:()=>{}
      })
    }
    else{
    this.us.add_data(this.fg.value).subscribe({
      next:()=>{
        alert('added successfully');
      },
      error:(err)=>{
        alert('error');
      },
    })
  }
  }
 constructor(private fb:FormBuilder,private route:Router,private us:UserserviceService,private ar:ActivatedRoute){

 }
ngOnInit(): void {
  this.fg=this.fb.group({
   name:[],
   reg:[],
   dob:[],
   tamil:[],
   english:[],
   maths:[],
   science:[],
   social:[],
   total:[]
  })
  let id=this.ar.snapshot.paramMap.get('id');
  if(id){
    this.us.getById(id).subscribe({
      next:(data)=>{
        this.fg.patchValue(data);
        // alert("patched");
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{}
    })
  }
}
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service';

@Component({
  selector: 'app-student-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent implements OnInit{
  fg:FormGroup=new FormGroup({});
  data: any;
 
 intval:any;
  constructor(private ser:UserserviceService,private fb:FormBuilder,private route:Router){

  }
  ngOnInit(): void {
    this.fg=this.fb.group({
      reg:[],
      dob:[]
    })
    this.ser.getAll2().subscribe({
      next:(value)=> {
        this.data=value;
        // console.log(value)

      },
      error:()=> {
        alert('error');
      } 
    })
  }
onSubmit() {
  // alert(JSON.stringify(this.data))
 console.log(this.data)
  for(var val of this.data){
    console.log(val)
    if((val.reg==this.fg.value.reg)&&(val.dob==this.fg.value.dob))
  {
    this.intval=1;
    this.route.navigate(['/studenthome',val.id])

  }
  }
  if(this.intval==1){
    this.intval=0;
    console.log(val.id);
  }
  else{
    alert('invalid credentials')
    
  }
}

}

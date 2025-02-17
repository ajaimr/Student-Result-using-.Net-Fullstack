import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserserviceService } from '../../service/userservice.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent implements OnInit{
fg:FormGroup=new FormGroup({});
 data:any;
  intval: any;
  constructor(private ser:UserserviceService,private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.fg=this.fb.group({
      userName:[],
      password:[]
    })
    // this.ser.create2(this.fg.value).subscribe({
    //   next:(value)=> {
    //     alert('added')
    //   },
    //   error:(err)=> {
    //     alert(JSON.stringify(err));
    //   }
    // })
    
    this.ser.getAll().subscribe({
      next:(value)=> {
        this.data=value;
        // alert('got')
      },
      error:(err)=> {
        alert(JSON.stringify(err));
      } 
    })
  }
onSubmit() {

intval:Number;


for(var val of this.data){
  if((val.userName==this.fg.value.userName)&&(val.password==this.fg.value.password))
{
  this.intval=1;
}
}
if(this.intval==1){
  alert('locin')
  this.intval=0;
}
else{
  alert('invalid credentials')
  
}
}
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NumberSymbol } from '@angular/common';
import { UserserviceService } from '../../service/userservice.service';

@Component({
  selector: 'app-admin-login',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit {
  fg:FormGroup=new FormGroup({});
 data:any;
  intval: any;
  constructor(private ser:UserserviceService,private fb:FormBuilder,private route:Router){

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
  console.log(val)
  if((val.userName==this.fg.value.userName)&&(val.password==this.fg.value.password))
{
  this.intval=1;
  this.route.navigate(['view']);
}
}
if(this.intval==1){
  // alert('login')
  this.intval=0;
}
else{
  alert('invalid credentials')
  
}

}
}

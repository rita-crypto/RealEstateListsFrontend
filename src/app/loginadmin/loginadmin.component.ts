import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.scss']
})
export class LoginadminComponent implements OnInit {
  
  //@ts-ignore
  loginadminForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router){
      
    }

  ngOnInit(): void {
    this.loginadminForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
     })
    
  }
  loginadmin(): void{
    const user = this.loginadminForm.value;
    this.userService.loginadmin(user).subscribe((message: string)=>{
      if(message === 'admin'){
        this.router.navigate(['list'])
      }
      else{
        alert(message);
      }
    })
  }

}

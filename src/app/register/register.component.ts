import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  //@ts-ignore
  registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router){

    }

    ngOnInit():void{
      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength]]
      })

    }

    register():void{
      const user = this.registerForm.value;
      this.userService.register(user).subscribe((result: string)=>{
        if(result === 'success'){
          this.router.navigate([''])
        }
        else{
          alert('User registration failed')
        }
      })
    }

}

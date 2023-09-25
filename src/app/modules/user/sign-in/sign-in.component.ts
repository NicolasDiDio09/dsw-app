import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  name = new FormControl('', Validators.required);
  lastname = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  tel = new FormControl('', [
    Validators.pattern('[0-9]*'),
    Validators.required,
  ]);
  email = new FormControl('', [Validators.email, Validators.required]);
  password = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);
  passwordConfirm = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // armo el form group con todos los form controls
    this.signInForm = new FormGroup({
      name: this.name,
      lastname: this.lastname,
      address: this.address,
      tel: this.tel,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const user: User = {
        name: this.signInForm.value.name,
        lastname: this.signInForm.value.lastname,
        address: this.signInForm.value.address,
        tel: parseInt(this.signInForm.value.tel),
        email: this.signInForm.value.email,
        password: this.signInForm.value.password,
      };

      this.userService.saveUser(user).subscribe((res) => {
        console.log(res);
      });
    } else {
      alert('Verifique que los datos ingresados sean válidos');
    }
  }
}

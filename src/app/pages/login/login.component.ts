import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'os-login',
  standalone: true,
  imports: [SharedImports, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      const { username, password } = this.form.value;
      console.log('Login', { username, password });
      // aqui poderia redirecionar com: this.router.navigate(['/home']);
      this.router.navigate(['/dashboard']);
    }
  }
  
}

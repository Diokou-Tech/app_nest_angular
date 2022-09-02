import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-headerback',
  templateUrl: './headerback.component.html',
  styleUrls: ['./headerback.component.scss']
})
export class HeaderbackComponent implements OnInit {

  constructor(
    private readonly router:Router,
    private readonly authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService._isLogin.next(false);
    localStorage.setItem('user','');
    localStorage.setItem('token','');
    this.router.navigate(['/frontoffice/login']);
  }

}

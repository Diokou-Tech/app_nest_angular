import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerback',
  templateUrl: './headerback.component.html',
  styleUrls: ['./headerback.component.scss']
})
export class HeaderbackComponent implements OnInit {

  constructor(
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.setItem('isLogin','false');
    localStorage.setItem('user','');
    localStorage.setItem('token','');
    this.router.navigate(['/frontoffice/login']);
  }

}

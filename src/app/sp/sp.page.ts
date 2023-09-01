import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp',
  templateUrl: './sp.page.html',
  styleUrls: ['./sp.page.scss'],
})
export class SpPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigateByUrl('/home');
    },2000);

  }

}

import { AdditionService } from './../../services/addition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [
    {
      provide: AdditionService, 
      useClass: AdditionService
    }
  ]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

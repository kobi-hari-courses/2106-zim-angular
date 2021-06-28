import { Observable } from 'rxjs';
import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  isAValid$!: Observable<boolean>;
  isBValid$!: Observable<boolean>;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.isAValid$ = this.stateService.isAValid();
    this.isBValid$ = this.stateService.isBValid();
  }

  setA(value: number) {
    this.stateService.setA(value);
  }

  setB(value: number) {
    this.stateService.setB(value);
  }

}

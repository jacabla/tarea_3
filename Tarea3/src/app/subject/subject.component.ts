import { Component, OnInit } from '@angular/core';
import { subject, Subject } from 'src/main';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  Subject = subject;

  element = false;

  imagen(){
    this.element = false;
  }

  imagenM(){
    this.element = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

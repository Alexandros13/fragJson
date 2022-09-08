import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  @Input() Object1:any
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.Object1.name)
  }

}

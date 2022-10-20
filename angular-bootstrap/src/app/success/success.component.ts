import { Component, OnInit, Input  } from '@angular/core';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Input() formulario?:FormGroup;
  @Input() user:any

  constructor() {

   }

  ngOnInit(): void {
  }

}

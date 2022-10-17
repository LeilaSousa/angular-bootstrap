import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  onSubmit(form:any){
    console.log(form)
  }

  constructor() {
  }

  ngOnInit(): void {


    }

    verificaValidTouched(campo:any){
      return !campo.valid && campo.touched;
    }

    aplicaCssErro(campo: any){
    return{
      'is-invalid': this.verificaValidTouched(campo),
      'invalid-feedback': this.verificaValidTouched(campo)

    }
  }
 }



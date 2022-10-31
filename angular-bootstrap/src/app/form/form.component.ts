import { Component, OnInit, ElementRef,Output, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {


 formulario:FormGroup;


  constructor(
    private formBuilder:FormBuilder,
    private router: Router ){

      this.formulario = this.formBuilder.group({
      nome: [null, [ Validators.required ]],
      email: [null, [ Validators.required, Validators.email ]],
      tel: [null, [Validators.required]],
      servico: [null,[Validators.required]],
      data:[null, [Validators.required]],
      hora:[null, [Validators.required]],

    });
    }




  ngOnInit(): void {

   }





  onSubmit(){
      console.log(this.formulario.value);
      this.router.navigate(['/success']);




    }

  verificaValidTouched(campo:string){
      return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched;
    }

  aplicaCssErro(campo: string){
    return{
      'is-invalid': this.verificaValidTouched(campo),
      'invalid-feedback': this.verificaValidTouched(campo)
    }
  }
  verificaEmailValido(){
      let campoEmail = this.formulario.get('email');
      if (campoEmail?.errors){
        return campoEmail.errors['email']
      }
    }

  }


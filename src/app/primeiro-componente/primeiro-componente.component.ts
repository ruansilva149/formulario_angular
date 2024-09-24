import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { Console } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {

 //Objeto de formulario
 formulario = new FormGroup({
  nome: new FormControl('', [Validators.required,Validators.minLength(3)]),
  idade : new FormControl(null, [Validators.required,Validators.min(0), Validators.max(120)]),
  cidade : new FormControl('',[Validators.required,Validators.minLength(3)])

 });

 //Visibilidade dos botões
 btnCadastrar:boolean = true;

 //Vetor do modelo Pessoa
 vetor:Pessoa[] = [];

 //Função de Cadastro no vetor
 cadastrar(){
  this.vetor.push(this.formulario.value as Pessoa);

  this.formulario.reset();

  //console.table(this.vetor);

 }

 //Armazenar valor no indice
 indice:number = -1;

 //Função Selecionar
 selecionar(indice:number){
  
  //Selecionar o indice da pessoa
  this.indice = indice;
  
  //Atribuir os dados da pessoa no formulário
  this.formulario.setValue({
    nome: this.vetor[indice].nome,
    idade: this.vetor[indice].idade,
    cidade: this.vetor[indice].cidade
  });

  this.btnCadastrar = false;

 }

 alterar(){
  this.vetor[this.indice] = this.formulario.value as Pessoa;

  //Limpar os inputs
  this.formulario.reset();

  this.btnCadastrar = true;
 }

}

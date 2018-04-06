import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

class Cliente {
  nome: String;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cliente = new Cliente();

  profissoes = ['Programador', 'Empresário', 'Outra'];
  profissao = 'Outra';

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;


    console.log(form);
    // console.log(this.cliente);

    // this.cliente = new Cliente();

    // Usa parâmetros para setar os valores nos campos do formulario
    form.resetForm({ profissao: ''});
  }

}

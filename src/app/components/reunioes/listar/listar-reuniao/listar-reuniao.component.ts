import { Component } from '@angular/core';
import { Reuniao } from '../../reuniao';
import { ReuniaoService } from '../../reuniao.service';

@Component({
  selector: 'app-listar-reuniao',
  templateUrl: './listar-reuniao.component.html',
  styleUrls: ['./listar-reuniao.component.css']
})
export class ListarReuniaoComponent {

  reunioes: Reuniao[] = [];

  ngOnInit(){
    this.service.listar().subscribe((reunioes => {
      this.reunioes = reunioes;
    }))
  }

  constructor (
    private service: ReuniaoService
  ){ }
}

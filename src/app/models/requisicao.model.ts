import {Departamento } from './departamento.model';
import {Funcionario} from './funcionario.model';
import {Model} from '../core/model';
import { AnyTxtRecord } from 'dns';


export class Requisicao extends Model{

    solicitante: Funcionario;
    dataAbertura: any;
    ultimaAtualizacao: any;
    descricao: string;
    status: string;
    destino: Departamento;
    movimentacoes: Movimentacao[];
}
export class Movimentacao extends Model{
    funcionario: Funcionario;
    dataHora: Date;
    status: string;
    descricao: string;
}
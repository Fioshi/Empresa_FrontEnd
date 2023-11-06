export interface Funcionario {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  email: string;
  reuniao?: String;
  departamento?: number;
  status: boolean;
}

export interface Funcionario {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  email: string;
  departamento?: number;
  status: boolean
}

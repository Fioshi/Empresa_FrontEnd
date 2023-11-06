import { Funcionario } from "../funcionarios/funcionario";

export interface Reuniao{
  id?: number;
  funcionarios?: Funcionario[]
  horario: Date;
  tipo: string;
  status: Boolean;
}

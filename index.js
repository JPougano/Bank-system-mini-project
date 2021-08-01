import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Funcionario } from "./Funcionarios/Funcionario.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

var cliente = new Cliente("Lais",14382084725,"252525");
var diretor = new Diretor("Guilherme", 10000, 12345678925);
var gerente = new Gerente("Robson",50000,78945612311);

diretor.cadastraSenha("123");
gerente.cadastraSenha("456");

var diretorEstaLogado = SistemaDeAutenticacao.login(diretor,"123");
var gerenteEstaLogado = SistemaDeAutenticacao.login(gerente,"456");
var clienteEstaLogado = SistemaDeAutenticacao.login(cliente,"252525");


console.log(clienteEstaLogado);
console.log(gerenteEstaLogado);
console.log(diretorEstaLogado); 
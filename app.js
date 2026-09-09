const prompt = require("prompt-sync")();

const alunos = [];
let proximoId = 1;

function cadastrarAluno() {
    console.log("\n=== CADASTRAR ALUNO ===");

    const nome = prompt("Nome: ");
    const email = prompt("E-mail: ");
    const matricula = prompt("Matrícula: ");

    const aluno = {
        id: proximoId++,
        nome,
        email,
        matricula
    };

    alunos.push(aluno);

    console.log("\nAluno cadastrado com sucesso!");
}

function listarAlunos() {
    console.log("\n=== ALUNOS CADASTRADOS ===");

    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.");
        return;
    }

    alunos.forEach((aluno) => {
        console.log(`
ID: ${aluno.id}
Nome: ${aluno.nome}
E-mail: ${aluno.email}
Matrícula: ${aluno.matricula}
-------------------------`);
    });
}

function editarAluno() {
    console.log("\n=== EDITAR ALUNO ===");

    const id = Number(prompt("Digite o ID do aluno: "));

    const aluno = alunos.find((aluno) => aluno.id === id);

    if (!aluno) {
        console.log("Aluno não encontrado.");
        return;
    }

    const nome = prompt(`Nome (${aluno.nome}): `);
    const email = prompt(`E-mail (${aluno.email}): `);
    const matricula = prompt(`Matrícula (${aluno.matricula}): `);

    aluno.nome = nome || aluno.nome;
    aluno.email = email || aluno.email;
    aluno.matricula = matricula || aluno.matricula;

    console.log("\nAluno atualizado com sucesso!");
}

function excluirAluno() {
    console.log("\n=== EXCLUIR ALUNO ===");

    const id = Number(prompt("Digite o ID do aluno: "));

    const indice = alunos.findIndex((aluno) => aluno.id === id);

    if (indice === -1) {
        console.log("Aluno não encontrado.");
        return;
    }

    alunos.splice(indice, 1);

    console.log("\nAluno excluído com sucesso!");
}

let opcao;

do {
    console.log(`
=== GERENCIAMENTO DE ALUNOS ===

1 - Cadastrar aluno
2 - Listar alunos
3 - Editar aluno
4 - Excluir aluno
0 - Sair
`);

    opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            cadastrarAluno();
            break;

        case "2":
            listarAlunos();
            break;

        case "3":
            editarAluno();
            break;

        case "4":
            excluirAluno();
            break;

        case "0":
            console.log("\nEncerrando aplicação...");
            break;

        default:
            console.log("\nOpção inválida.");
    }

} while (opcao !== "0");
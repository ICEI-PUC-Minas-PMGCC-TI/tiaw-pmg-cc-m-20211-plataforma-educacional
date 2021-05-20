// declara um conjunto inicial de contatos
var db_popularidade_inicial = {
    "data": [
        {
            "Rank": 1,
            "Professor": "Felipe",
            "Curso": "Aeds",
            "Porcentagem": "98%",
            "Email": "felipe@email.com",
            "Horario_Aula": "8:40 as 10:30",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 2,
            "Professor": "Jõao Bosco",
            "Curso": "Cálculo",
            "Porcentagem": "90%",
            "Email": "joaob@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 3,
            "Professor": "Rommel",
            "Curso": "Tiaw",
            "Porcentagem": "89%",
            "Email": "rommel@email.com",
            "Horario_Aula": "10:40 as 12:20",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 4,
            "Professor": "Fátima",
            "Curso": "IC",
            "Porcentagem": "80%",
            "Email": "fátima@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 5,
            "Professor": "Carlos",
            "Curso": "IC",
            "Porcentagem": "75%",
            "Email": "carlos@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 6,
            "Professor": "Luis",
            "Curso": "Aeds",
            "Porcentagem": "69%",
            "Email": "luis@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 7,
            "Professor": "Larissa",
            "Curso": "devweb",
            "Porcentagem": "60%",
            "Email": "larissa@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 8,
            "Professor": "Nicolas",
            "Curso": "Banco de Dados",
            "Porcentagem": "59%",
            "Email": "nicolas@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 9,
            "Professor": "Roberto",
            "Curso": "Banco de Dados II",
            "Porcentagem": "55%",
            "Email": "roberto@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        },
        {
            "Rank": 10,
            "Professor": "cláudio",
            "Curso": "IC",
            "Porcentagem": "50%",
            "Email": "claudio@email.com",
            "Horario_Aula": "7:00 as 9:40",
            "Aulas_Gravadas": "link repositorio"
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_popularidade'));
if (!db) {
    db = db_popularidade_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertPopularidade(popularidade) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = db.data[db.data.length - 1].id + 1;
    let novoPopularidade = {
        "id": novoId,
        "nome": popularidade.nome,
        "email" : popularidade.email,
        "telefone": popularidade.telefone,
        "cidade" : popularidade.cidade,
        "categoria": popularidade.categoria,
        "website": popularidade.website
    };

    // Insere o novo objeto no array
    db.data.push(novoPopularidade);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Popularidade', JSON.stringify(db));
}

function updatePopularidade(id, popularidade) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = popularidade.nome,
    db.data[index].email = popularidade.email,
    db.data[index].telefone = popularidade.telefone,
    db.data[index].cidade = popularidade.cidade,
    db.data[index].categoria = popularidade.categoria,
    db.data[index].website = popularidade.website

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_Popularidade', JSON.stringify(db));
}

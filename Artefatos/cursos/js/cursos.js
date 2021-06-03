fetch('https://60b9452d80400f00177b655e.mockapi.io/langs/Cursos')
    .then((response) => {
        return response.json();
}).then((cursos) => {
    let el_cursos = document.getElementById("cursos");

    cursos.forEach(function(curso){
        let titulo_curso = document.createElement("h2");
        titulo_curso.innerText = curso.nome;
        el_cursos.appendChild(titulo_curso);

        let img_curso = document.createElement("img");
        img_curso.src = curso.img;
        el_cursos.appendChild(img_curso);

        let texto_curso = document.createElement("p");
        texto_curso.innerText = curso.texto;
        el_cursos.appendChild(texto_curso);
    });
});
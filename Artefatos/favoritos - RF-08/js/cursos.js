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

        let botao_curso = document.createElement("button");
        botao_curso.innerText = "Favoritar";
        botao_curso.value = curso.id;
        el_cursos.appendChild(botao_curso);

        let fav = localStorage.getItem("curso_fav");
        if(fav){
            if(fav.includes(curso.id)){
                botao_curso.disabled = true;
            }
        }
        
        botao_curso.addEventListener("click", function(e){
            let curso_fav = localStorage.getItem("curso_fav");
            
            if(curso_fav){
                curso_fav = JSON.parse(curso_fav);

                if(!curso_fav.includes(e.target.value)){
                    curso_fav.push(e.target.value);
                    localStorage.setItem("curso_fav", JSON.stringify(curso_fav));
                }
            }else{
                localStorage.setItem("curso_fav", JSON.stringify([e.target.value]));
            }
            e.target.disabled = true;
        });
    });
});
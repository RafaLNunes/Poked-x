// Tradição: console.log("hello Word!!");

//Exemplo: console.log(dados[2].Descricao);

let result_Search = "";


function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;// não pode ter um V, deve ser v

    let cont = 1;
    for (let Group_info of dados) {
        console.log(Group_info.Nome.toLowerCase().includes(campoPesquisa.toLowerCase()));
        console.log(campoPesquisa, ":::", Group_info.Nome, ":*:", cont, "()", result_Search);

        if (Group_info.Nome.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            result_Search = "";
            result_Search +=
                `
            <div class="item-resultado">
                <h2>
                    <a>${Group_info.Nome}</a>
                </h2>
                <div class="descricao-result">
                    <img class="imagem-pequena" src="${Group_info.Image}" alt="${Group_info.Descri_Image}">
                    <div>
                        <p class="descricao-meta">${Group_info.Descricao}</p>
                    </div>
                </div>
                <a href="${Group_info.Link}" target="_blank">Mais Informações</a>
            </div>
            `;
        }
        
        if (campoPesquisa == "") {
            section.innerHTML = "<p>Infelizmente você não pesquisou por nada</p>"
            return
        }




        //MEU JEITO
        // else if (!Group_info.Nome.toLowerCase().includes(campoPesquisa.toLowerCase()) && cont >= 10) {
        //     section.innerHTML = "<p>Infelizmente esse pokemon não existe</p>"
        //     return
        // }


        // if (!Group_info.Nome.toLowerCase().includes(campoPesquisa.toLowerCase())) {
        //     cont++;
        // }
    }

    //JEITO DOS PROFS

    if(!result_Search){
        section.innerHTML = "<p>Infelizmente esse pokemon não existe</p>"
        return
    }

    let ConfirmMenssage = window.confirm("achando, logo aparecerá na tela!!");

    if (ConfirmMenssage) {
        setTimeout(() => {
            section.innerHTML = result_Search;
        }, 1000);
    } else {
        alert("Você negou a aprarição");
    }
}

function mostrar() {
    let section = document.getElementById("resultados-pesquisa");


    /* colocamos ` para identificar um texto de varias linhas */
    /* e colocamos "" para identificar apenas uma linha*/
    for (let Group_info of dados) {
        result_Search +=
            `
        <div class="item-resultado">
            <h2>
                <a>${Group_info.Nome}</a>
            </h2>
            <div class="descricao-result">
                <img class="imagem-pequena" src="${Group_info.Image}" alt="${Group_info.Descri_Image}">
                <div>
                    <p class="descricao-meta">${Group_info.Descricao}</p>
                </div>
            </div>
            <a href="${Group_info.Link}" target="_blank">Mais Informações</a>
        </div>
        `
    }
    section.innerHTML = result_Search;
}

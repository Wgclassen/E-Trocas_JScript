import { produtos, contas } from "./objetos.js";

const gridProdutos = document.querySelector("#gridProdutos");

produtos.forEach(produto => {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 my-2';

    col.innerHTML = `
        <div class="card">
            <img src="${produto.banner}" class="card-img-top" alt="${produto.nome}">
            <div class="card-body text-center">
                <h5 class="card-title">${produto.nome}</h5>
                <p>Descrição: ${produto.descricao}</p>
                <p>Trocar por: ${produto.trocar}</p>
                <a href="#" class="btn btn-primary w-100">Mais informações</a>
            </div>
        </div>
    `;

    gridProdutos.appendChild(col);
})

const tipoConta = document.querySelector("#tipoConta");

contas.forEach(conta => {
    tipoConta.innerHTML += `
    <option value="${conta}">${conta}</option>
    `;
})

document.querySelector('#dadosConta').addEventListener('submit', function(event){
    event.preventDefault();

    const tbody = document.querySelector('tbody');
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    const tr = document.createElement('tr');

    campos.forEach(campo => {
        const td = document.createElement('td');

        if(campo.type === 'date'){
            const dataString = campo.value;
            const data = new Date(dataString + 'T12:00:00');
            td.textContent = data.toLocaleDateString('pt-br');
        } else {
            td.textContent = campo.value;
        }
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    this.reset();
})
function limparFormulario() {
    document.getElementById("carForm").reset();
}



function adicionarCarro() {
    var nome = document.getElementById('nome').value;
    var valor = document.getElementById('valor').value;
    var imagem = document.getElementById('imagem').value;

    var card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${imagem}" class="img-fluid rounded-start" alt="${nome}" style="max-width: 100%; height: auto;">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${nome}</h5>
                    <p class="card-text">Valor: R$ ${valor}</p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('carros').appendChild(card);

    document.getElementById('carForm').reset();
}


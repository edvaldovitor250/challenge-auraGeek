document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var precoOriginal = document.getElementById('preco_original').value;
    var precoPromocional = document.getElementById('preco_promocional').value;
    var categoria = document.getElementById('categoria').value;
    var imagem = document.getElementById('imagem').value;
    var anoLancamento = document.getElementById('ano_lancamento').value; 

    var card = document.createElement('div');
    card.className = 'mx-auto';
    
    var output = `
    <div class="card text-white bg-dark mb-3 border-primary rounded">
        <div class="card-header text-center font-weight-bold">Detalhes do Carro</div>
        <div class="card-body" style="padding: 1rem;">
            <div class="car-info">
                <p class="card-text mb-1"><span class="text-info">Nome:</span> ${nome}</p>
                <p class="card-text mb-1"><span class="text-info">Preço Original:</span> R$ ${precoOriginal}</p>
                <p class="card-text mb-1"><span class="text-info">Preço Promocional:</span> R$ ${precoPromocional}</p>
                <p class="card-text mb-1"><span class="text-info">Ano de Lançamento:</span> ${anoLancamento}</p> <!-- Adicione o ano de lançamento -->
                <p class="card-text mb-1"><span class="text-info">Categoria:</span> ${categoria}</p>
            </div>
            <div class="car-image text-center">
                <img src="${imagem}" alt="Imagem do Carro" class="img-fluid rounded mx-auto d-block" style="max-width: 300px; margin-top: 10px;">
            </div>
        </div>
    </div>
`;

    card.innerHTML = output;
    document.getElementById('output').appendChild(card); 

    document.getElementById('carForm').reset(); 
});

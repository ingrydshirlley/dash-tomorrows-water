function createProduct(product) {
    const url = 'nossa_api';
    const options = {
        method: 'POST',
        body: JSON.product
    };

    fetch(url, options)
}

const product = {
    "nome": "produtoTeste",
    "descricao": "produtoTesteprodutoTesteprodutoTeste",
    "cor": "Azul",
    "preco": 13.12,
    "imagem": "data:image/jpeg;base64,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",
    "altura": "30cm",
    "largura": "10cm",
    "comprimento": "20cm",
    "tamanho_sigla": "",
    "peso": "5g",
    "categoria": "utensilio",
    "id_ong": 1
};

createProduct(product);
const botaoDeOrdenar = document.getElementById("btnOrdenarPorPreco");

botaoDeOrdenar.addEventListener("click", ordenarLivrosPreco);

function ordenarLivrosPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}

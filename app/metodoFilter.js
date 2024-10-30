const botoesDeFiltro = document.querySelectorAll(".btn");

botoesDeFiltro.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria); //lógica do professor

    // let livrosFiltrados = livros.filter((livro) => livro.categoria == this.value);
    // console.table(livrosFiltrados); => Minha lógica inicial

    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalDeLivros(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter((livro) => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal) {
    elementoComValorDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
}

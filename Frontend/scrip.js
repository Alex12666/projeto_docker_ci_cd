const form = document.getElementById("formProduto");
const lista = document.getElementById("listaProdutos");

let produtos = [];

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;
  const quantidade = document.getElementById("quantidade").value;

  const produto = {
    nome,
    preco,
    quantidade
  };

  produtos.push(produto);
  atualizarLista();

  form.reset();
});

function atualizarLista() {
  lista.innerHTML = "";

  produtos.forEach((produto, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${produto.nome}</strong><br>
      R$ ${produto.preco} | Qtd: ${produto.quantidade}
    `;
    lista.appendChild(li);
  });
}

let produtos = JSON.parse(localStorage.getItem('produtos')) || [
  { id: 1, nome: "X-Salada", preco: 18, categoria: "Tradicional" },
  { id: 2, nome: "X-Bacon", preco: 22, categoria: "Tradicional" },
];
let carrinho = [];
let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

const lista = document.getElementById("lista-produtos");
const resumo = document.getElementById("resumo-carrinho");
const listaAdmin = document.getElementById("lista-admin");
const listaPedidos = document.getElementById("lista-pedidos");

function salvarProdutos() {
  localStorage.setItem('produtos', JSON.stringify(produtos));
}
function salvarPedidos() {
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function renderProdutos() {
  lista.innerHTML = "";
  ["Tradicional", "Especial"].forEach(categoria => {
    const categoriaDiv = document.createElement("div");
    categoriaDiv.className = "col-span-full text-lg font-bold mt-4";
    categoriaDiv.textContent = categoria;
    lista.appendChild(categoriaDiv);
    produtos.filter(p => p.categoria === categoria).forEach(produto => {
      const div = document.createElement("div");
      div.className = "bg-white rounded-lg p-4 shadow text-center";
      div.innerHTML = \`
        <h3 class="font-semibold text-lg mb-2">\${produto.nome}</h3>
        <p class="text-gray-600 mb-2">R$ \${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarCarrinho(\${produto.id})" class="bg-red-500 text-white px-3 py-1 rounded">Adicionar</button>
      \`;
      lista.appendChild(div);
    });
  });
}

function adicionarCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  if (carrinho.length === 0) {
    resumo.innerText = "Nenhum item no carrinho.";
    return;
  }
  let texto = \`\${carrinho.length} item(s): \`;
  let total = 0;
  carrinho.forEach(item => {
    texto += \`\${item.nome}, \`;
    total += item.preco;
  });
  texto += \`Total: R$ \${total.toFixed(2)}\`;
  resumo.innerText = texto;
}

function finalizarPedido() {
  if (carrinho.length === 0) {
    alert("Adicione itens ao carrinho antes de finalizar.");
    return;
  }
  const pedido = {
    id: Date.now(),
    itens: carrinho,
    total: carrinho.reduce((acc, item) => acc + item.preco, 0),
    data: new Date().toLocaleString()
  };
  pedidos.push(pedido);
  salvarPedidos();
  carrinho = [];
  atualizarCarrinho();
  alert("Pedido registrado com sucesso!");
  atualizarListaPedidos();
}

function entrarPainel() {
  const senha = document.getElementById("senha-admin").value;
  if (senha === "admin123") {
    document.getElementById("login-admin").classList.add("hidden");
    document.getElementById("painel-admin").classList.remove("hidden");
    atualizarListaAdmin();
    atualizarListaPedidos();
  } else {
    alert("Senha incorreta");
  }
}

function sairPainel() {
  document.getElementById("painel-admin").classList.add("hidden");
}

document.getElementById("form-produto").addEventListener("submit", function(e) {
  e.preventDefault();
  const nome = document.getElementById("nome-produto").value;
  const preco = parseFloat(document.getElementById("preco-produto").value);
  const categoria = document.getElementById("categoria-produto").value;
  const id = Date.now();
  produtos.push({ id, nome, preco, categoria });
  salvarProdutos();
  renderProdutos();
  atualizarListaAdmin();
  e.target.reset();
});

function atualizarListaAdmin() {
  listaAdmin.innerHTML = "";
  produtos.forEach(produto => {
    const li = document.createElement("li");
    li.className = "border p-2 flex justify-between items-center";
    li.innerHTML = \`
      <span>\${produto.nome} - R$ \${produto.preco.toFixed(2)} (\${produto.categoria})</span>
      <button onclick="removerProduto(\${produto.id})" class="text-red-600">Remover</button>
    \`;
    listaAdmin.appendChild(li);
  });
}

function removerProduto(id) {
  produtos = produtos.filter(p => p.id !== id);
  salvarProdutos();
  renderProdutos();
  atualizarListaAdmin();
}

function atualizarListaPedidos() {
  listaPedidos.innerHTML = "";
  pedidos.slice().reverse().forEach(pedido => {
    const li = document.createElement("li");
    li.className = "border p-2";
    const itens = pedido.itens.map(i => i.nome).join(", ");
    li.innerHTML = \`
      <strong>\${pedido.data}</strong><br>
      Itens: \${itens}<br>
      Total: R$ \${pedido.total.toFixed(2)}
    \`;
    listaPedidos.appendChild(li);
  });
}

renderProdutos();

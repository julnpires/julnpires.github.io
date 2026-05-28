var searchInput = document.getElementById('buscar-search');
var walkerItems = document.querySelectorAll('#lista-walkers li');

searchInput.addEventListener('input', function() {
  var q = this.value.toLowerCase().trim();
  walkerItems.forEach(function(item) {
    var nome = item.querySelector('.walker-name').textContent.toLowerCase();
    item.hidden = q.length > 0 && !nome.includes(q);
  });
});

document.querySelectorAll('[data-sort]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('[data-sort]').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    ordenar(btn.dataset.sort);
  });
});

function ordenar(criterio) {
  var lista = document.getElementById('lista-walkers');
  var itens = Array.from(lista.querySelectorAll('li'));
  itens.sort(function(a, b) {
    var va = parseFloat(a.dataset[criterio]);
    var vb = parseFloat(b.dataset[criterio]);
    return criterio === 'preco' ? va - vb : vb - va;
  });
  itens.forEach(function(item) { lista.appendChild(item); });
}

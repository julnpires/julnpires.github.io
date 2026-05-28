document.addEventListener('DOMContentLoaded', function () {
  var campos = {
    nome:          document.getElementById('pet-nome'),
    raca:          document.getElementById('pet-raca'),
    idade:         document.getElementById('pet-idade'),
    cor:           document.getElementById('pet-cor'),
    porte:         document.getElementById('pet-porte'),
    comportamento: document.getElementById('pet-comportamento')
  };

  var prev = {
    nome: document.getElementById('prev-nome'),
    info: document.getElementById('prev-info'),
    sub:  document.getElementById('prev-sub')
  };

  /* aborta se algum elemento essencial não existir na página */
  var todosExistem = Object.values(campos).every(Boolean) && Object.values(prev).every(Boolean);
  if (!todosExistem) return;

  function atualizar() {
    var nome  = campos.nome.value.trim()  || 'Sem nome';
    var raca  = campos.raca.value.trim();
    var idade = campos.idade.value.trim();
    var porte = campos.porte.value;
    var cor   = campos.cor.value.trim();

    prev.nome.textContent = nome;
    prev.info.textContent = [idade, porte].filter(Boolean).join(' · ');
    prev.sub.textContent  = [raca, cor].filter(Boolean).join(' · ') || '—';
  }

  campos.nome.addEventListener('input', atualizar);
  campos.raca.addEventListener('input', atualizar);
  campos.idade.addEventListener('input', atualizar);
  campos.cor.addEventListener('input', atualizar);
  campos.porte.addEventListener('change', atualizar);
  campos.comportamento.addEventListener('change', atualizar);

  /* validação ao salvar */
  var btnSalvar = document.getElementById('btn-salvar');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', function (e) {
      var nome = campos.nome.value.trim();
      if (!nome) {
        e.preventDefault();
        campos.nome.focus();
        campos.nome.classList.add('input-erro');
        setTimeout(function () { campos.nome.classList.remove('input-erro'); }, 2000);
      }
    });
  }
});

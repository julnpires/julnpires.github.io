document.addEventListener('DOMContentLoaded', function () {
  var campos = {
    nome:          document.getElementById('pet-nome'),
    especie:       document.getElementById('pet-especie'),
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

  var camposEssenciais = ['nome', 'raca', 'idade', 'cor', 'porte', 'comportamento'];
  if (!camposEssenciais.every(function (k) { return campos[k]; })) return;
  if (!Object.values(prev).every(Boolean)) return;

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

  var btnSalvar = document.getElementById('btn-salvar');
  if (btnSalvar) {
    btnSalvar.addEventListener('click', function (e) {
      e.preventDefault();
      var nome = campos.nome.value.trim();
      if (!nome) {
        campos.nome.focus();
        campos.nome.classList.add('input-erro');
        setTimeout(function () { campos.nome.classList.remove('input-erro'); }, 2000);
        return;
      }

      var pet = {
        nome:          nome,
        especie:       campos.especie ? campos.especie.value : 'Cachorro',
        raca:          campos.raca.value.trim(),
        porte:         campos.porte.value,
        idade:         campos.idade.value.trim(),
        cor:           campos.cor.value.trim(),
        comportamento: campos.comportamento.value
      };

      var lista = JSON.parse(localStorage.getItem('petwalk_pets') || '[]');
      lista.push(pet);
      localStorage.setItem('petwalk_pets', JSON.stringify(lista));

      window.location.href = 'perfil-pets.html';
    });
  }
});

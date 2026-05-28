function atualizarPreview() {
  var nome = document.getElementById('pet-nome').value.trim() || 'Sem nome';
  var raca = document.getElementById('pet-raca').value.trim();
  var idade = document.getElementById('pet-idade').value.trim();
  var porte = document.getElementById('pet-porte').value;
  var cor = document.getElementById('pet-cor').value.trim();

  document.getElementById('prev-nome').textContent = nome;

  var info = [idade, porte].filter(Boolean).join(' · ');
  document.getElementById('prev-info').textContent = info;

  var sub = [raca, cor].filter(Boolean).join(' · ');
  document.getElementById('prev-sub').textContent = sub || '—';
}

['pet-nome', 'pet-raca', 'pet-idade', 'pet-cor'].forEach(function(id) {
  document.getElementById(id).addEventListener('input', atualizarPreview);
});
document.getElementById('pet-porte').addEventListener('change', atualizarPreview);
document.getElementById('pet-comportamento').addEventListener('change', atualizarPreview);

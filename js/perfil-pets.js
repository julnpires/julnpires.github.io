document.addEventListener('DOMContentLoaded', function () {
  var lista = document.getElementById('lista-pets');
  if (!lista) return;

  var pets = JSON.parse(localStorage.getItem('petwalk_pets') || '[]');
  var avatares = ['img/avatar1.svg', 'img/avatar2.svg', 'img/avatar3.svg'];

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  pets.forEach(function (pet, i) {
    var meta = [pet.especie, pet.raca].filter(Boolean).join(' · ');
    var avatar = avatares[i % avatares.length];

    var li = document.createElement('li');
    li.innerHTML =
      '<a class="card-link" href="perfil-pet.html">' +
        '<div class="walker-card">' +
          '<div class="walker-left">' +
            '<div class="avatar-wrap">' +
              '<img class="avatar" src="' + avatar + '" alt="' + esc(pet.nome) + '">' +
            '</div>' +
            '<div class="walker-info">' +
              '<div class="walker-name">' + esc(pet.nome) + '</div>' +
              '<div class="walker-meta">' + esc(meta) + '</div>' +
            '</div>' +
          '</div>' +
          '<span class="row-arrow">›</span>' +
        '</div>' +
      '</a>';
    lista.appendChild(li);
  });
});

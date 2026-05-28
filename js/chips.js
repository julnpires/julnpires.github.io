document.querySelectorAll('.chips .chip').forEach(function(chip) {
  chip.addEventListener('click', function() {
    document.querySelectorAll('.chips .chip').forEach(function(c) {
      c.classList.remove('active');
      c.setAttribute('aria-pressed', 'false');
    });
    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');
  });
});

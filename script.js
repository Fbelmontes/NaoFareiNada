  // Obtendo referências para os elementos DOM
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openModalBtn");
  var span = document.getElementsByClassName("close")[0];

  // Quando o usuário clicar no botão, abrir o modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // Quando o usuário clicar em <span> (x), fechar o modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Quando o usuário clicar em qualquer lugar fora do modal, fechar o modal
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
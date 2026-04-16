document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const grids = document.querySelectorAll(".catalogo_grid");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const alvo = tab.dataset.tab;

      tabs.forEach(botao => botao.classList.remove("ativo"));
      tab.classList.add("ativo");

      grids.forEach(grid => grid.classList.add("escondido"));

      const gridAtivo = document.getElementById(alvo);
      if (gridAtivo) {
        gridAtivo.classList.remove("escondido");
      }
    });
  });
});

// PARTE DA FAQ

document.addEventListener("DOMContentLoaded", () => {

  const faqPerguntas = document.querySelectorAll(".faq_pergunta");

  faqPerguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
      const itemAtual = pergunta.parentElement;

      document.querySelectorAll(".faq_item").forEach(item => {
        if (item !== itemAtual) {
          item.classList.remove("ativo");
        }
      });

      itemAtual.classList.toggle("ativo");
    });
  });

});
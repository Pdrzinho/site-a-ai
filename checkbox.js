const mostrarSelecaoBtn = document.getElementById('mostrar-selecao');
const resultadoDiv = document.getElementById('resultado');

mostrarSelecaoBtn.addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const escolha = document.querySelector('input[name="escolha"]:checked');

    let ingredientesSelecionados = Array.from(checkboxes).map(cb => cb.value).join(', ');
    let tipoSelecionado = escolha ? escolha.value : '';

    let textoResultado = `Ingredientes selecionados: ${ingredientesSelecionados}. Tipo selecionado: ${tipoSelecionado}.`;

    resultadoDiv.textContent = textoResultado;
});
// Elemento do visor
const visor = document.querySelector('#resultado');

/**
 * Insere o número ou operador no visor.
 * @param {string} valor 
 */
function insert(valor) {
  visor.innerHTML += valor;
}

/**
 * Limpa o visor.
 */
function clean() {
  visor.innerHTML = '';
}

/**
 * Apaga o último caractere do visor.
 */
function back() {
  visor.innerHTML = visor.innerHTML.slice(0, -1);
}

/**
 * Calcula a expressão e atualiza o visor.
 */
function calcular() {
  try {
    // Avalia a expressão
    const resultado = eval(visor.innerHTML);
    
    // Verifica se é um número válido
    if (isNaN(resultado) || !isFinite(resultado)) {
      visor.innerHTML = 'Erro';
    } else {
      visor.innerHTML = resultado;
    }
  } catch (e) {
    visor.innerHTML = 'Erro';
  }
}

/**
 * Suporte para teclado físico.
 */
document.addEventListener('keydown', (e) => {
  const tecla = e.key;

  if (/\d/.test(tecla) || ['+', '-', '*', '/', '.'].includes(tecla)) {
    insert(tecla);
  } else if (tecla === 'Enter' || tecla === '=') {
    e.preventDefault();
    calcular();
  } else if (tecla === 'Backspace') {
    back();
  } else if (tecla === 'Escape') {
    clean();
  }
});

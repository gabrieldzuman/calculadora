function insert(num) {
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado + num;
}

function clean() {
  document.getElementById('resultado').innerHTML = '';
}

function back() {
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.slice(0, -1);
}

function calcular() {
  let resultado = document.getElementById('resultado').innerHTML;
  if (resultado) {
    try {
      document.getElementById('resultado').innerHTML = eval(resultado);
    } catch {
      document.getElementById('resultado').innerHTML = 'Erro';
    }
  }
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
}

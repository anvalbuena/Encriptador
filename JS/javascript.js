// Función para encriptar el texto
function encriptar(texto) {
    return texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  }
  
  // Función para desencriptar el texto
  function desencriptar(texto) {
    return texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  }
  
  // Función para mostrar el resultado en el contenedor derecho
  function mostrarResultado(texto) {
    const rightContainer = document.getElementById('right-container');
    rightContainer.innerHTML = `
      <textarea id="resultado" readonly>${texto}</textarea>
      <button id="copiar" class="button">Copiar</button>
    `;
  
    // Añadir evento al botón de copiar
    document.getElementById('copiar').addEventListener('click', async function() {
      try {
        const resultado = document.getElementById('resultado');
        await navigator.clipboard.writeText(resultado.value);
        alert('Texto copiado al portapapeles');
      } catch (err) {
        alert('Error al copiar el texto: ' + err.message);
      }
    });
  }
  
  // Función para reiniciar el contenido
  function reiniciar() {
    document.getElementById('texto').value = ''; // Limpiar el textarea de entrada
    document.getElementById('right-container').innerHTML = `
      <img src="/Img/imagen.png" alt="Imagen" id="imagen">
      <p class="parrafo" id="uno">Ningún mensaje fue encontrado</p>
      <p class="parrafo">Ingrese el texto que desea encriptar o desencriptar</p>
    `;
  }
  
  // Añadir eventos a los botones
  document.getElementById('encriptar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    if (texto.trim()) {
      const textoEncriptado = encriptar(texto);
      mostrarResultado(textoEncriptado);
    } else {
      alert('Por favor, ingrese un texto para encriptar.');
    }
  });
  
  document.getElementById('desencriptar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    if (texto.trim()) {
      const textoDesencriptado = desencriptar(texto);
      mostrarResultado(textoDesencriptado);
    } else {
      alert('Por favor, ingrese un texto para desencriptar.');
    }
  });
  
  document.getElementById('reiniciar').addEventListener('click', function() {
    reiniciar();
  });
  
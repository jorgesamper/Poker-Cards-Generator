/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/**
 * 1. Generar carta random
 * 2. Conseguir los elementos que queremos modificar
 *  2.1 Usamos el getElementsByClassName para conseguir todos los elementos que contienen los palos (HTML)
 * 3. Recorrer todos los elementos y modificar el contenido usando el paloAleatorio the carta random -> generarCarta
 * 4. Conseguir los elementos del dom que tienen la clase card-text (HTML)
 * 5. Modificar el contenido de htmlNumber con el valorAleatorio
 */

window.onload = function() { // se ejecuta cuando carga completamente la página
  generateDOMCard(); // llamamos a cargar la página para generar la primera carta

  const generateNewCardButton = document.getElementById("push-to-generate"); // obtenemos la referencia al boton con el id"push-to-generate" en el DOM
  const interval = setTimeout(() => { // creamos un temporizador que ejecute la funcion generateDOMCard() cada 10 segundos (10000 milisegundos)
    generateDOMCard(); 
  }, 10000);
  

  generateNewCardButton.addEventListener("click", () => {  // agregamos un EventListener al boton "push-to-generate". Cuando se hace clic en el botón, se ejecuta la función de callback proporcionada.
    generateDOMCard();
    clearTimeout(interval); // cancelamos el temporizador creado anteriormente, deteniendo la generación automática de nuevas cartas cuando se hace clic en el botón.
  });
};

function generarCarta() { // generamos aleatoriamente una carta aleatoria, con dos arreglos
  var palos = ["♠", "♥", "♣", "♦"]; // indices del palo de la carta
  palos de la baraja
  var valores = [ // indices del valor de la carta
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const aleatorio = Math.floor(Math.random() * palos.length); // generamos un número aleatorio entre 0 (incluido) y la longitud del arreglo palos (excluido) 
  console.log(palos, palos[2], aleatorio); // Para verificar los valores durante la ejecución y depuración del código. imprimimos en la consola los valores de palos completo, el elemento en la posición 2 del arreglo palos y el número aleatorio generado en el paso anterior. 
  var paloAleatorio = palos[aleatorio]; // selecciona aleatoriamente un palo de la baraja.
  var valorAleatorio = valores[Math.floor(Math.random() * valores.length)]; // ", redondeamos hacia abajo utilizando Math.floor() para obtener un índice válido dentro del arreglo palos.

  return { paloAleatorio, valorAleatorio }; // devuelve un objeto con las propiedades paloAleatorio y valorAleatorio, contienen los valores seleccionados aleatoriamente
}

function generateDOMCard() { // llamamos a generateDOMCard() para generar una nueva carta y actualizarla en el DOM.
  const newCardValues = generarCarta(); // obtenemos un objeto con el palo y el valor de una nueva carta. Este objeto se almacena en la variable newCardValues.
  console.log(newCardValues); // imprimimos para verificar los valores de palo y valor generados para la nueva carta.
  const htmlSymbols = document.getElementsByClassName("card-title"); // Selecciona todos los elementos en el DOM que tienen la clase "card-title" y los almacena en la variable htmlSymbols.
  
  const htmlText = document.querySelector(".card-text"); // Selecciona el primer elemento en el DOM que tiene la clase "card-text" y lo almacena en la variable htmlText

  for (const element of htmlSymbols) { //  
    if ( // Comprueba si el palo aleatorio (newCardValues.paloAleatorio) es igual a "♥" o "♦" utilizando una condición if.
      newCardValues.paloAleatorio === "♥" ||
      newCardValues.paloAleatorio === "♦"
    ) { //agrega la clase "red-palo" al elemento (element) y al elemento htmlText utilizando los métodos classList.add()
      element.classList.add("red-palo"); 
      htmlText.classList.add("red-palo");
    } else { // En este caso, se elimina la clase "red-palo" del elemento (element) y del elemento htmlText utilizando los métodos classList.remove(). Restaura el estilo predeterminado del palo y del valor de la carta.
      element.classList.remove("red-palo"); 
      htmlText.classList.remove("red-palo");
    }
  }

  // Sabemos que siempre nos dará un array, pero nosotros solo queremos el primero
  const htmlNumberCollection = document.getElementsByClassName("card-text"); //  Selecciona todos los elementos en el DOM que tienen la clase "card-text" y los almacena en la variable htmlNumberCollection.
  // Utilizamos getElementsByClassName() para obtener una colección de elementos y poder acceder al primer elemento posteriormente.
  const htmlNumber = htmlNumberCollection.item(0); // se selecciona el primer elemento y se almacena en la variable htmlNumber. Esto es necesario porque getElementsByClassName() devuelve una colección, y necesitamos acceder al elemento específico para mostrar el valor de la carta.
  htmlNumber.innerHTML = newCardValues.valorAleatorio; // Actualiza el contenido del elemento htmlNumber con el valor aleatorio de la carta (newCardValues.valorAleatorio). Esto mostrará el valor de la carta en el DOM
}

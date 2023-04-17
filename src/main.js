import { filtrar } from "./data.js";
import { ordenado } from "./data.js";

import data from "./data/pokemon/pokemon.js";

const pokemonesArray = data.pokemon;
console.log("todos los pokemons", pokemonesArray);

const pintarData = (data) => {
  const root = document.getElementById("root");
  data.forEach((cadaPokemon) => {
    const listaPokemones = `
<article> 
<span>${cadaPokemon.num}</span>
<h2>${cadaPokemon.name}</h2>
<h3>${cadaPokemon.stats["max-cp"]}</h3>
<img src=${cadaPokemon.img} /> 
</article>
`;
    root.innerHTML += listaPokemones;
  });
};

pintarData(pokemonesArray);

const selectElement = document.querySelector(".opciones");

selectElement.addEventListener("change", (event) => {
  console.log(event.target.value);
  const option = event.target.value;
  const resultFilter = filtrar(option, pokemonesArray);
  document.getElementById("root").innerHTML = "";
  pintarData(resultFilter);
});

const selectOrdenado = document.querySelector(".ordenPokemon");

selectOrdenado.addEventListener("change", (event) => {
  const secuencia = event.target.value;
  const solucion = ordenado(secuencia, pokemonesArray);
  document.getElementById("root").innerHTML = "";
  pintarData(solucion);
});

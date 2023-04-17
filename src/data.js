export const filtrar = (tipo, dataArray) => {
  const arrayFiltrado = dataArray.filter(
    (pokemon) => pokemon.type.indexOf(tipo) !== -1
  );
  return arrayFiltrado;
};

export const ordenado = (orden, dataArray) => {
  const arrayOrdenado = dataArray.sort((pokemonA, pokemonB) => {
    const a = parseInt(pokemonA.stats["max-cp"]);
    const b = parseInt(pokemonB.stats["max-cp"]);

    if (orden === "ascendente") {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    } else if (orden === "descendente") {
      if (a < b) return 1;
      if (a > b) return -1;
      return 0;
    }
  });

  return arrayOrdenado;
};

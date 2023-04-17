import { filtrar } from "../src/data.js";
import { ordenado } from "../src/data.js";
import { mockData } from "./mockData.js";

//filtrar//

describe("coleccion de los test sobre filtrar", () => {
  it("Es una function", () => {
    expect(typeof filtrar).toBe("function");
  });

  it("Confirma los tipos de pokemones", () => {
    expect(filtrar("poison", mockData.pokemon)).toHaveLength(1);
  });

  it("Confirma los tipos de pokemones", () => {
    expect(filtrar("grass", mockData.pokemon)).toHaveLength(2);
  });
});

describe("ordena por ascedente", () => {
  it("Es una función", () => {
    expect(typeof ordenado).toBe("function");
  });
  it("ordenar de forma ascendente", () => {
    const resultado = [
      {
        num: "001",
        name: "bulbasaur",
        generation: { num: "generation i", name: "kanto" },
        "pokemon-rarity": "normal",
        type: ["grass", "poison"],
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113",
        },
      },
      {
        name: "venusaur",
        type: "grass",
        stats: {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "2720",
          "max-hp": "113",
        },
      },
    ];

    expect(ordenado("ascendente", mockData.pokemon)).toEqual(resultado);
  });
});

describe ("orden por descendente", () => {

  const alReves =  [
    {
      name: "venusaur",
      type: "grass",
      stats: {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "2720",
        "max-hp": "113",
      },
    },
    {
      num: "001",
      name: "bulbasaur",
      generation: {
        num: "generation i",
        name: "kanto",
      },
      "pokemon-rarity": "normal",
      type: ["grass", "poison"],
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      },
    },
  ];

  it("ordenar de forma desendente", () => {
    expect(ordenado("descendente", mockData.pokemon)).toEqual(alReves)
  });
})

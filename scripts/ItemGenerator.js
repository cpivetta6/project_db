const items = [
  "Maglione in lana",
  "Abbigliamento Uomo",
  "Camicia a quadri",
  "Abbigliamento Uomo",
  "Pantaloni eleganti",
  "Abbigliamento Uomo",
  "Giacca di pelle",
  "Abbigliamento Uomo",
  "Abito da sera",
  "Abbigliamento Uomo",
  "Vestito floreale",
  "Abbigliamento Donna",
  "Gonna plissettata",
  "Abbigliamento Donna",
  "Maglia oversize",
  "Abbigliamento Donna",
  "Cappotto invernale",
  "Abbigliamento Donna",
  "Scarpe da ginnastica",
  "Calzature",
  "Stivali in pelle",
  "Calzature",
  "Sandali estivi",
  "Calzature",
  "Sneakers trendy",
  "Calzature",
  "Scarpe da corsa",
  "Calzature",
  "Cintura in pelle",
  "Accessori",
  "Borsa a tracolla",
  "Accessori",
  "Occhiali da sole alla moda",
  "Accessori",
  "Berretto invernale",
  "Accessori",
  "Orologio elegante",
  "Accessori",
  "T-shirt a righe",
  "Abbigliamento Bambini",
  "Tutina comoda",
  "Abbigliamento Bambini",
  "Vestitino con fiocco",
  "Abbigliamento Bambini",
  "Maglietta con supereroi",
  "Abbigliamento Bambini",
  "Scarpe da ginnastica per bambini",
  "Abbigliamento Bambini",
  "Piumino leggero",
  "Liquidazione o Vendita",
  "Pantaloni estivi",
  "Liquidazione o Vendita",
  "Cappello da baseball",
  "Liquidazione o Vendita",
  "Abito a pois",
  "Liquidazione o Vendita",
  "Giacca in denim",
  "Liquidazione o Vendita",
  "Scarpe da skate",
  "Liquidazione o Vendita",
];

const itemList = [];

export function itemGenerator() {
  for (let i = 0; i < items.length; i += 2) {
    const itemObj = {
      item_name: items[i],
      id_category: getCategory(items[i + 1]),
      item_price: getRandomPrice(),
    };

    itemList.push(itemObj);
  }

  //console.log(itemList);

  return itemList;
}

function getCategory(category_name) {
  const category = category_name.toLowerCase();

  switch (category) {
    case "abbigliamento uomo":
      return 1;
    case "abbigliamento donna":
      return 2;
    case "abbigliamento bambini":
      return 3;
    case "calzature":
      return 4;
    case "accessori":
      return 5;
    case "liquidazione o vendita":
      return 6;
  }
}

function getRandomPrice() {
  return parseFloat((Math.random() * (160.0 - 5.0) + 5.0).toFixed(2));
}

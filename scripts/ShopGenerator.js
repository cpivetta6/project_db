const shopList = [];

export function ShopGenerator() {
  for (let id = 1; id <= 10; id++) {
    const id_province = 1;
    const shop = { id, name: "Z-GLAM-S" + id, id_province };
    shopList.push(shop);
  }

  for (let id = 11; id <= 50; id++) {
    const id_province = Math.floor(Math.random() * 8) + 1;
    const shop = { id, name: "Z-GLAM-S" + id, id_province };
    shopList.push(shop);
  }

  return shopList;
}

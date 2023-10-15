import { ShopGenerator } from "../ShopGenerator.js";

export class ShopData {
  constructor() {
    this.createTable();
  }

  createTable() {
    // Create the 'shopData' table with a foreign key reference to 'region'
    alasql(
      "CREATE TABLE shop (id INT PRIMARY KEY, shopData_name VARCHAR(50), id_province INT, FOREIGN KEY (id_province) REFERENCES province(id))"
    );
  }

  insertData(id, name, id_province) {
    alasql("INSERT INTO shop VALUES (?, ?, ?)", [id, name, id_province]);
  }

  insertshopData(shopList) {
    for (const shop of shopList) {
      this.insertData(shop.id, shop.name, shop.id_province);
    }
  }
}

const ShopDataObj = new ShopData();

//50 punti vendita nelle 6 provincie.

const shopList = ShopGenerator();

ShopDataObj.insertshopData(shopList);

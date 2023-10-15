import { itemGenerator } from "../ItemGenerator.js";

export class ItemData {
  constructor() {
    this.createTable();
  }

  createTable() {
    // Create the 'province' table with a foreign key reference to 'region'
    alasql(
      "CREATE TABLE item (id INT AUTO_INCREMENT PRIMARY KEY, id_category INT, item_name VARCHAR(255), item_price DECIMAL(10,2), FOREIGN KEY (id_category) REFERENCES category(id))"
    );
  }

  insertData(id_category, item_name, item_price) {
    alasql(
      "INSERT INTO item (id_category, item_name, item_price) VALUES (?, ?, ?)",
      [id_category, item_name, item_price]
    );
  }

  insertItems(items) {
    for (const item of items) {
      this.insertData(item.id_category, item.item_name, item.item_price);
    }
  }
}

const itemObj = new ItemData();

const items = itemGenerator();

itemObj.insertItems(items);

import { SalesOrderGenerator } from "../SalesOrdersGenerator.js";

export class SalesOrdersData {
  constructor() {
    this.createTable();
  }

  createTable() {
    alasql(`
      CREATE TABLE sales_orders (
        id INT PRIMARY KEY,
        bill_number INT,
        id_shop INT,
        retail_ecommerce_flag SMALLINT,
        id_client INT,
        id_item INT,
        amount INT,
        loyalt_card_flag SMALLINT,
        discount_code_flag SMALLINT,
        total_price DECIMAL(10,2),
        FOREIGN KEY (id_client) REFERENCES client(id),
        FOREIGN KEY (id_item) REFERENCES item(id),
        FOREIGN KEY (id_shop) REFERENCES shop(id)
      )
    `);
  }

  insertData(
    id,
    bill_number,
    id_shop,
    retail_eccomerce_flag,
    id_client,
    id_item,
    amount,
    loyalt_card_flag,
    discount_code_flag,
    total_price
  ) {
    alasql("INSERT INTO sales_orders VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
      id,
      bill_number,
      id_shop,
      retail_eccomerce_flag,
      id_client,
      id_item,
      amount,
      loyalt_card_flag,
      discount_code_flag,
      total_price,
    ]);
  }

  insertsalesOrders(salesOrders) {
    for (const salesOrder of salesOrders) {
      this.insertData(
        salesOrder.id,
        salesOrder.bill_number,
        salesOrder.id_shop,
        salesOrder.retail_eccomerce_flag,
        salesOrder.id_client,
        salesOrder.id_item,
        salesOrder.amount,
        salesOrder.loyalt_card_flag,
        salesOrder.discount_code_flag,
        salesOrder.total_price
      );
    }
  }
}

const salesOrderObj = new SalesOrdersData();

const salesOrders = SalesOrderGenerator();

/*
const salesOrders = [
  {
    id: 1,
    bill_number: 1,
    id_shop: 1,
    retail_eccomerce_flag: 1,
    id_client: 1,
    id_item: 1,
    amount: 1,
    loyalt_card_flag: 1,
    discount_code_flag: 1,
    total_price: 55.12,
  },
];*/

salesOrderObj.insertsalesOrders(salesOrders);

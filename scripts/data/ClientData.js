import { ClientGenerator } from "../ClientGenerator.js";

export class ClientData {
  constructor() {
    this.createTable();
  }

  createTable() {
    // Create the 'province' table with a foreign key reference to 'region'
    alasql(
      "CREATE TABLE client (id INT PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), loyalt_card_flag SMALLINT,  id_province INT, FOREIGN KEY (id_province) REFERENCES province(id))"
    );
  }

  insertData(id, first_name, last_name, loyalt_card_flag, id_province) {
    alasql("INSERT INTO client VALUES (?, ?, ?, ?, ?)", [
      id,
      first_name,
      last_name,
      loyalt_card_flag,
      id_province,
    ]);
  }

  insertclients(clients) {
    for (const client of clients) {
      this.insertData(
        client.id,
        client.first_name,
        client.last_name,
        client.loyalt_card_flag,
        client.id_province
      );
    }
  }
}

const ClientObj = new ClientData();

const clients = ClientGenerator();
//console.log(clients);

ClientObj.insertclients(clients);

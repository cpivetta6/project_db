export class ProvinceData {
  constructor() {
    this.createTable();
  }

  createTable() {
    // Create the 'province' table with a foreign key reference to 'region'
    alasql(
      "CREATE TABLE province (id INT PRIMARY KEY, province_name VARCHAR(50), id_region INT, FOREIGN KEY (id_region) REFERENCES region(id))"
    );
  }

  insertData(id, province_name, id_region) {
    alasql("INSERT INTO province VALUES (?, ?, ?)", [
      id,
      province_name,
      id_region,
    ]);
  }

  insertProvinces(provinces) {
    for (const province of provinces) {
      this.insertData(province.id, province.name, province.id_region);
    }
  }
}

const provinceData = new ProvinceData();

const provinces = [
  { id: 1, name: "Milan", id_region: 1 },
  { id: 2, name: "Lodi", id_region: 1 },
  { id: 3, name: "Padova", id_region: 2 },
  { id: 4, name: "Venezia", id_region: 2 },
  { id: 5, name: "Genova", id_region: 3 },
  { id: 6, name: "Bologna", id_region: 4 },
  { id: 7, name: "Roma", id_region: 5 },
  { id: 8, name: "Napoli", id_region: 6 },
];

//console.log(provinces);

provinceData.insertProvinces(provinces);

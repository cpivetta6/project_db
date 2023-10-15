export class RegionData {
  constructor() {
    this.createTable();
  }

  createTable() {
    // Create the 'region' table
    alasql("CREATE TABLE region (id INT PRIMARY KEY, region_name VARCHAR(50))");
  }

  insertRegion(id, name) {
    alasql("INSERT INTO region VALUES (?, ?)", [id, name]);
  }

  insertRegions(regions) {
    for (const region of regions) {
      this.insertRegion(region.id, region.name);
    }
  }
}

const regionData = new RegionData();

const regions = [
  { id: 1, name: "Lombardia" },
  { id: 2, name: "Veneto" },
  { id: 3, name: "Liguria" },
  { id: 4, name: "Emilia-Romagna" },
  { id: 5, name: "Lazio" },
  { id: 6, name: "Campania" },
];

regionData.insertRegions(regions);

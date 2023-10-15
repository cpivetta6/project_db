export class CategoryData {
  constructor() {
    this.createTable();
  }

  createTable() {
    // Create the 'province' table with a foreign key reference to 'region'
    alasql(
      "CREATE TABLE category (id INT PRIMARY KEY, category_name VARCHAR(50))"
    );
  }

  insertData(id, category_name) {
    alasql("INSERT INTO category VALUES (?, ?)", [id, category_name]);
  }

  insertCategories(categories) {
    for (const category of categories) {
      this.insertData(category.id, category.category_name);
    }
  }
}

const categoryObj = new CategoryData();

const categories = [
  { id: 1, category_name: "abbigliamento uomo" },
  { id: 2, category_name: "abbigliamento donna" },
  { id: 3, category_name: "abbigliamento bambini" },
  { id: 4, category_name: "calzature" },
  { id: 5, category_name: "accesori" },
  { id: 6, category_name: "Liquidazione o vendita" },
];
/*
alasql("INSERT INTO category VALUES (1,'abbigliamento uomo')");
alasql("INSERT INTO category VALUES (2,'abbigliamento donna')");
alasql("INSERT INTO category VALUES (3,'abbigliamento bambini')");
alasql("INSERT INTO category VALUES (4,'calzature')");
alasql("INSERT INTO category VALUES (5,'accesori')");
alasql("INSERT INTO category VALUES (6,'Liquidazione o vendita')");
*/
categoryObj.insertCategories(categories);

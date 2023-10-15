import { RegionData } from "./data/RegionData.js";
import { ProvinceData } from "./data/ProvinceData.js";
import { ShopData } from "./data/ShopData.js";
import { ClientData } from "./data/ClientData.js";
import { CategoryData } from "./data/CategoryData.js";
import { ItemData } from "./data/ItemData.js";
import { SalesOrdersData } from "./data/SalesOrdersData.js";

//console.table(alasql("SELECT * FROM sales_orders"));
//console.table(alasql("SELECT * FROM region"));
//console.table(alasql("SELECT * FROM province"));
//console.table(alasql("SELECT * FROM shop"));
//console.table(alasql("SELECT * FROM category"));
//console.table(alasql("SELECT * FROM item"));
//console.table(alasql("SELECT * FROM client"));

function populateTable() {
  const dataBody = document.getElementById("data-body");
  dataBody.innerHTML = "";

  const result = alasql("SELECT * FROM sales_orders");

  //console.log(result);

  for (let i = 0; i < result.length; i++) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${result[i].id}</td><td>${result[i].bill_number}</td><td>${result[i].id_shop}</td><td>${result[i].retail_ecommerce_flag}</td><td>${result[i].id_client}</td><td>${result[i].id_item}</td><td>${result[i].amount}</td><td>${result[i].loyalt_card_flag}</td><td>${result[i].discount_code_flag}</td><td>${result[i].total_price}</td>`;
    dataBody.appendChild(newRow);
  }
}

populateTable();

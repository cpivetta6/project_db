const orderList = [];

export function SalesOrderGenerator() {
  for (let id = 1; id <= 1000; id++) {
    var bill_number = id;
    var id_shop = getRandomNumberId(50);
    var retail_eccomerce_flag = getRandomFalseFlag();
    var id_client = getRandomNumberId(400);
    var id_item = getRandomNumberId(30);
    var amount = getRandomNumberId(10);
    var loyalt_card_flag = 0;
    var discount_code_flag = getRandomFalseFlag();
    var total_price = 0.0;

    const client = alasql("SELECT * FROM client where id = ?", [id_client]);
    const item = alasql("SELECT * FROM item where id = ?", [id_item]);

    loyalt_card_flag = client[0].loyalt_card_flag;

    //Discounts 30% discount code, 20% 100$+, 10% 50$+
    total_price = amount * item[0].item_price;

    if (discount_code_flag === 1) {
      total_price = total_price * 0.7;
    } else if (client.loyalt_card_flag === 1) {
      if (total_price > 100) {
        total_price = total_price * 0.8;
      } else if (total_price > 50) {
        total_price = total_price * 0.9;
      }
    }

    total_price = total_price.toFixed(2);

    const order = {
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
    };

    orderList.push(order);
  }

  return orderList;
}

function getRandomNumberId(max) {
  return Math.floor(Math.random() * max) + 1;
}

function getRandomFalseFlag() {
  const mean = 0.2;
  const standardDeviation = 0.3; // Adjust of the standard deviation

  // Box-Muller transform to generate random numbers with a normal distribution
  let u, v;
  let num;
  do {
    u = Math.random() * 2 - 1;
    v = Math.random() * 2 - 1;
    num = u * u + v * v;
  } while (num >= 1 || num === 0);

  const z = u * Math.sqrt((-2 * Math.log(num)) / num);
  const skewedRandom = Math.round(mean + z * standardDeviation);

  return Math.max(0, Math.min(1, skewedRandom));
}

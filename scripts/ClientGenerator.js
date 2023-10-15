const first_name = [
  "Alessandro",
  "Sofia",
  "Leonardo",
  "Giulia",
  "Lorenzo",
  "Martina",
  "Francesco",
  "Chiara",
  "Matteo",
  "Aurora",
  "Marco",
  "Valentina",
  "Giuseppe",
  "Ginevra",
  "Andrea",
  "Alessia",
  "Emanuele",
  "Camilla",
  "Davide",
  "Beatrice",
];

const last_name = [
  "Rossi",
  "Bianchi",
  "Russo",
  "Ferrari",
  "Esposito",
  "Ricci",
  "Conte",
  "Moretti",
  "De Luca",
  "Marino",
  "Greco",
  "Lombardi",
  "Santoro",
  "Rizzo",
  "Barbieri",
  "Serra",
  "Pellegrini",
  "Farina",
  "Costa",
  "Mancini",
];

const clientList = [];

export function ClientGenerator() {
  var id = 1;

  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      const client = {
        id: id,
        first_name: first_name[i],
        last_name: last_name[j],
        loyalt_card_flag: getRandomInt(0, 1),
        id_province: getRandomInt(1, 8),
      };
      clientList.push(client);
      id++;
    }
  }

  return clientList;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

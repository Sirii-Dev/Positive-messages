//Array de mensajes
const messages = [
    "Hoy sera un gran día",
    "Tu brillas más que el sol",
    "Eres especial",
    "Estas haciendolo muy bien",
    "Eres fuerte y valiente",
    "Me encanta tu sonrisa",
    "Se fuerte",
    "Todo valdra la pena"
];

//funcion arrojadora de mensaje aleatorio positivo
const randomMsg = () => {
    const message = messages[Math.floor (Math.random() * messages.length)];
    console.log(message);
}

//exportando a la funcion :)
module.exports = { randomMsg }
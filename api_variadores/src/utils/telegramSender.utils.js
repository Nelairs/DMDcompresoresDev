import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv'
import * as dbMethods from '../db/db.methods.js'

dotenv.config()
// replace the value below with the Telegram token you receive from @BotFather
const   token   =  process.env.TELEGRAM_TOKEN

let chatId_group  =   null;
// Create a bot that uses 'polling' to fetch new updates


const bot = new TelegramBot(token, {polling:    true});


bot.onText(/\/start/, function (msg) {
    // if (config.bot.users.indexOf(msg.from.id) == -1) return;
    let chatId = msg.chat.id;
    chatId_group    =   msg.chat.id
    let reply = 'Hi ' + msg.chat.first_name + ' 🙌, I\'m your 🤖\nI\'ve been created to give you all the informations regarding the status of your torrents 😊. Start with /help to get a list of all available commands';
    // bot.sendMessage(chatId, reply, engine.listOfCommandsKeyboard);
    bot.sendMessage(chatId, reply);
    console.log(chatId);
});

bot.onText(/\/variadores/, function (msg) {
    // if (config.bot.users.indexOf(msg.from.id) == -1) return;
    let chatId = msg.chat.id;

    
    dbMethods
    .getAll()
    .then(function (v) {
        let reply   =   []
     v.forEach(element => {
        reply.push(`Cliente: ${element.nombre_cliente}
        \n Nro. Cliente: ${element.numero_equipo}
        \n Estado: ${stateTransform(element.estado_equipo)}
        ➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖\n\r`)
      });

    console.log(reply.toLocaleString());

    bot.sendMessage(chatId, reply.toLocaleString());
      
    })
    .catch(function (err) {
    //   console.log("error:" + err);
      
    });
 
});

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
  
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
  
//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
//   });
  
//   // Listen for any kind of message. There are different kinds of
//   // messages.
//   bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
  
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
    
//   });

/* -------------------------------------------------------------------------- */
/*                                  FUNCIONES                                 */
/* -------------------------------------------------------------------------- */


const stateTransform =  (state) =>  {

    switch (state) {
        case 1:
            return  'Haciendo 🟩'
            // break;
        case    2:
            return  'Bloqueado 🟥'
            // break;
        case    3:
            return  'Terminado 🟦'
            // break;
        default:
            return  'Por hacer 🟨'
            // break;
    }
}

export const sendTgramNoti =   (msgData)  =>  {
    console.log('TELEGRAM MSG');
    let chatId  =   chatId_group
    bot.sendMessage(chatId,   msgData)
}
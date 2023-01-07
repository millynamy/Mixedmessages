const message = {
    basketOne: ["They", "We" ],
    basketTwo: ["are", "arent"],
    basketThree: ["avaliable", "able to assist you now", "out of office"],
};

function randomMessage(array) {
 return Math.floor(Math.random() * array.length);
}

let messageOne = message.basketOne[randomMessage(message.basketOne)];
let messageTwo= message.basketTwo[randomMessage(message.basketTwo)];
let messageThree = message.basketThree[randomMessage(message.basketThree)];

let finalMessage = (messageOne +" "+ messageTwo  +" "+ messageThree);

console.log(finalMessage);
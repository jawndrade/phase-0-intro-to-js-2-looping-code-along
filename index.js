// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
};

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event){
    //this is just satisfying the first step of creating a new, empty array to hold the messages
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
      messages.push(message);
    }
      return messages;
    }
    console.log(writeCards(['Benji', 'Mae', 'Milena'], 'baby shower'));

    function countDown(){
    let countDown = 10;
    while (countDown >= 0){
      countDown--;
    console.log(countDown); //print 0;
    }
}
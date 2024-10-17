const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

let funds = prompt(`How many doubloons are in your pouch, ${username}? `);
if (funds < 10){
    console.log(`Wow, only ${funds} doubloons? Better go do a side quest for more.`)
    const sideQuest = prompt('The quickest way for you to earn more doubloons would be to help the shop keeper. Would you rather search for more store supplies or clean the shop? Choose "search" or "clean". ')
        if (sideQuest === 'search'){
            console.log('You have chosen to search! Off to the meadows with you; the shop keeper needs more nuts and mushrooms.')
        } else {
            console.log('Well then it is time to get down and dirty. Fetch the mop and don`t talk to me until this shop is spotless.')
        }

} else if (funds >= 10 && funds <=50){
    console.log(`${funds} doubloons? I suppose that's enough to go to the shop. Let's go...\nOk here we are at the shop. You only have enough for the damaged sheild here, or you could get the small dagger. `)
    const brokeChoice = prompt('Which one will it be? Choose "Damaged sheild" or the "Small dagger". ')
        if (brokeChoice === 'Damaged sheild'){
            console.log('Good choice, that will add points to your defense total.')
        } else {
            console.log('Good choice, that will add points to your attack.')
        }
} else {
    console.log(`${funds} doubloons?? You're rich! Well then I must show you to the *higher end* market. We'll find only the finest of wares there...\nAlright here we are at the fine goods market. Alas, all is sold out but the Mithril Sword, the Reanimation Potion, and the Fairy's Orb.`)
    const richChoice = prompt(`Which one will it be? Choose "Mithril sword", "Reanimation potion", or "Fairy's orb". `)
        if (richChoice === 'Mithril sword'){
            console.log('Good choice, that will increase your attack by A LOT!');
        } else if (richChoice === 'Reanimation potion'){
            console.log('Good choice, this will bring you back from DEATH! ITSELF!');
        } else {
            console.log('Good choice, this will allow you to see into the future...');
        }
    }

